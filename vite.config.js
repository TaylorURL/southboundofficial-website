import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { readFileSync } from 'node:fs';

const { version } = JSON.parse(readFileSync('./package.json', 'utf8'));

export default defineConfig({
  plugins: [react()],
  build: {
    // A module script is loaded by every engine from Chrome 61 and Safari 11
    // onward, and optional chaining arrives in both a good deal later. An
    // engine in that gap fetches the bundle, fails to parse it on the first
    // `?.` and runs none of it, so the whole site goes inert behind a
    // SyntaxError no handler can catch. Lowering the output below ES2020 costs
    // under a kilobyte across both chunks and removes the gap entirely.
    target: 'es2019',
    modulePreload: { polyfill: false },
    // React and the router change far less often than the site does, so they
    // ship in a file of their own that a returning visitor keeps between deploys.
    rollupOptions: {
      output: {
        manualChunks: (id) =>
          id.includes('node_modules/react') || id.includes('node_modules/scheduler')
            ? 'vendor'
            : undefined,
      },
    },
  },
  define: { __BUILD_VERSION__: JSON.stringify(version) },
  // Mirrors the production headers in vercel.json so a local measurement sees
  // the same caching a visitor gets.
  preview: {
    headers: { 'Cache-Control': 'public, max-age=31536000, immutable' },
  },
  resolve: {
    alias: {
      '@app': fileURLToPath(new URL('./src/app', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/app/components', import.meta.url)),
      '@sections': fileURLToPath(new URL('./src/app/sections', import.meta.url)),
      '@views': fileURLToPath(new URL('./src/app/views', import.meta.url)),
      '@constants': fileURLToPath(new URL('./src/app/constants', import.meta.url)),
    },
  },
});
