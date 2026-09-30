// Writes every route into a document of its own, so the first screen arrives in
// the HTML rather than after the bundle has downloaded and run. Each document
// carries its own title, description and canonical, the two faces the first
// screen sets type in, and the stylesheet inline.
import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const DIST = 'dist';
const SSR = 'node_modules/.southbound-ssr';
const shell = readFileSync(join(DIST, 'index.html'), 'utf8');
const { render, META, ORIGIN } = await import(
  pathToFileURL(join(process.cwd(), SSR, 'entry-server.js')).href
);

const assets = readdirSync(join(DIST, 'assets'));
const preloadFonts = ['big-shoulders-display-var', 'archivo-var']
  .map((stem) => assets.find((f) => f.startsWith(stem) && f.endsWith('.woff2')))
  .filter(Boolean)
  .map((f) => `<link rel="preload" as="font" type="font/woff2" href="/assets/${f}" crossorigin />`)
  .join('\n    ');

// React emits an image preload for each eager <img srcSet> into the body, where
// the parser meets it no sooner than the image itself. Lifted into the head it
// is found first, and given the largest source as its href for browsers that do
// not read imagesrcset on a link.
const PRELOAD = /<link\s[^>]*rel="preload"[^>]*as="image"[^>]*\/?>/gi;
const lift = (body) => {
  const tags = (body.match(PRELOAD) || []).map((tag) => {
    if (/\bhref=/i.test(tag)) return tag;
    const set = tag.match(/imageSrcSet="([^"]+)"/i);
    if (!set) return tag;
    const sources = set[1].split(',').map((s) => s.trim().split(/\s+/)[0]);
    return tag.replace(/\/?>$/, ` href="${sources[sources.length - 1]}" />`);
  });
  return { body: body.replace(PRELOAD, ''), preloads: tags.join('\n    ') };
};

const sheetFile = assets.find((f) => f.endsWith('.css'));
const sheet = sheetFile ? readFileSync(join(DIST, 'assets', sheetFile), 'utf8') : '';
const inlineSheet = (html) =>
  sheet
    ? html.replace(
        /<link rel="stylesheet"[^>]*href="\/assets\/[^"]+\.css"[^>]*>/,
        () => `<style>${sheet}</style>`,
      )
    : html;

const swap = (html, pattern, value) => (pattern.test(html) ? html.replace(pattern, value) : html);
const ROOT = /<div id="root"><\/div>/;

function page(route, meta, at = route) {
  const { body, preloads } = lift(render(at));
  let out = shell.replace(
    ROOT,
    `<div id="root"${route ? ` data-prerendered="${route}"` : ''}>${body}</div>`,
  );
  out = out.replace(
    '</title>',
    `</title>\n    ${[preloadFonts, preloads].filter(Boolean).join('\n    ')}`,
  );
  out = swap(out, /<title>[\s\S]*?<\/title>/, `<title>${meta.title}</title>`);
  out = swap(
    out,
    /<meta\s+name="description"[\s\S]*?\/>/,
    `<meta name="description" content="${meta.description}" />`,
  );
  if (meta.href) {
    out = swap(
      out,
      /<link rel="canonical"[^>]*\/>/,
      `<link rel="canonical" href="${meta.href}" />`,
    );
    out = swap(
      out,
      /<meta property="og:title"[\s\S]*?\/>/,
      `<meta property="og:title" content="${meta.title}" />`,
    );
    out = swap(
      out,
      /<meta\s+property="og:description"[\s\S]*?\/>/,
      `<meta property="og:description" content="${meta.description}" />`,
    );
    out = swap(
      out,
      /<meta property="og:url"[^>]*\/>/,
      `<meta property="og:url" content="${meta.href}" />`,
    );
  }
  // React writes these attributes camel-cased; HTML reads them either way, and
  // tools that scan the document expect the lower-case spelling.
  out = out
    .replace(/\bfetchPriority=/g, 'fetchpriority=')
    .replace(/\bimageSrcSet=/g, 'imagesrcset=')
    .replace(/\bimageSizes=/g, 'imagesizes=')
    .replace(/\bsrcSet=/g, 'srcset=');
  return inlineSheet(out);
}

for (const [route, meta] of Object.entries(META)) {
  const out = page(route, { ...meta, href: `${ORIGIN}${route === '/' ? '/' : route}` });
  const file = route === '/' ? join(DIST, 'index.html') : join(DIST, route, 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, out);
  const words = out
    .replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  console.log(
    `${route.padEnd(10)} -> ${file.padEnd(26)} ${(out.length / 1024).toFixed(1)} KB, ${words} words`,
  );
}

// Vercel answers anything it cannot match with dist/404.html, so a missing page
// is a real 404 rather than the home page with a 200.
{
  let out = page(
    null,
    { title: 'Not Found | SouthBound Truck Merch', description: 'That page is not here.' },
    '/__missing__',
  );
  out = out.replace('</title>', '</title>\n    <meta name="robots" content="noindex" />');
  writeFileSync(join(DIST, '404.html'), out);
}

rmSync(SSR, { recursive: true, force: true });
