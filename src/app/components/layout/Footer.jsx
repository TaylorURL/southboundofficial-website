import SplitRail from '@taylorurl/split-rail';
import { BRAND, NAV } from '@constants/brand.js';
import InstagramIcon from '@components/ui/InstagramIcon.jsx';
import { Monogram } from '@components/ui/Marks.jsx';

export default function Footer() {
  return (
    <footer className="border-t border-bone-50/10 bg-ink-950 text-bone-300">
      <div className="mx-auto grid max-w-shell gap-10 px-5 py-14 md:grid-cols-[1fr_auto_auto] md:items-start">
        <div>
          <Monogram className="w-24" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Merch for the truck crowd. Every order puts your name in the next giveaway.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="label text-bone-500">Site</p>
          <ul className="mt-4 space-y-3 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-bone-50">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="label text-bone-500">Follow</p>
          <a
            href={BRAND.instagram.url}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm transition-colors hover:text-bone-50"
          >
            <InstagramIcon />@{BRAND.instagram.handle}
          </a>
        </div>
      </div>
      <SplitRail version={__BUILD_VERSION__} />
    </footer>
  );
}
