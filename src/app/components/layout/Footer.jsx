// footer: ft5-statement. One closing line, then the brand, the legal links and
// the rail in small type beneath it.
import { Link } from 'react-router-dom';
import SplitRail from '@taylorurl/split-rail';
import { BRAND, LEGAL } from '@constants/brand.js';
import InstagramIcon from '@components/ui/InstagramIcon.jsx';
import { Monogram } from '@components/ui/Marks.jsx';

export default function Footer() {
  return (
    <footer className="border-t border-bone-50/10 bg-ink-950 pb-[calc(var(--thumb-bar-h)+1px+env(safe-area-inset-bottom))] text-bone-300 md:pb-0">
      <div className="mx-auto grid max-w-shell gap-10 px-5 pb-10 pt-16">
        <p className="slant max-w-[18ch] text-5xl text-bone-50 sm:text-7xl">
          Rep the merch. <span className="text-signal-500">Get entered.</span>
        </p>

        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-bone-50/10 pt-6">
          <div className="flex items-center gap-5">
            <Monogram className="w-14" />
            <a
              href={BRAND.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="tap inline-flex min-h-11 items-center gap-2 text-sm transition-colors hover:text-bone-50 cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500"
            >
              <InstagramIcon />@{BRAND.instagram.handle}
            </a>
          </div>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {LEGAL.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="tap inline-flex min-h-11 items-center transition-colors hover:text-bone-50 cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="max-w-2xl text-xs leading-relaxed text-bone-500">
          This site counts visits to see which pages get read, using a random ID stored in your
          browser rather than a cookie. The{' '}
          <Link
            to="/privacy"
            className="tap underline underline-offset-2 hover:text-bone-50 cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500"
          >
            Privacy page
          </Link>{' '}
          says what is kept.
        </p>
      </div>
      <div className="text-bone-50">
        <SplitRail version={__BUILD_VERSION__} />
      </div>
    </footer>
  );
}
