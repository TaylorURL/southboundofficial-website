// nav: n12-banner-retract. panel: mm4-full-bleed-canvas. The red banner rides above the bar and scrolls away
// with the page, leaving the bar docked alone; the bar opens a menu panel.
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BRAND, MENU, NAV } from '@constants/brand.js';
import InstagramIcon from '@components/ui/InstagramIcon.jsx';

const THEMES = [
  ['dark', 'Dark'],
  ['light', 'Light'],
  ['gray', 'Gray'],
];

function readTheme() {
  try {
    return localStorage.getItem('theme') || 'dark';
  } catch {
    return 'dark';
  }
}

function MenuIcon({ open }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" />
      )}
    </svg>
  );
}

function MenuPanel({ open, top, onClose }) {
  const [theme, setTheme] = useState(readTheme);

  const pick = (value) => {
    setTheme(value);
    document.documentElement.dataset.theme = value;
    try {
      localStorage.setItem('theme', value);
    } catch {
      // Private mode: the choice holds for this page only.
    }
  };

  return (
    <>
      {/* The scrim: dims the page under the open panel. */}
      <div
        aria-hidden="true"
        data-scrim=""
        hidden={!open}
        style={{ top, zIndex: 'var(--z-menu)' }}
        className="fixed inset-x-0 bottom-0 bg-ink-950/80"
      />
      <div
        id="site-menu"
        role="dialog"
        aria-label="Menu"
        data-state={open ? 'open' : 'closed'}
        hidden={!open}
        style={{ top }}
        className="fixed inset-x-0 bottom-0 z-menu overflow-y-auto overscroll-contain border-t border-bone-50/10 bg-ink-950"
      >
        <nav
          aria-label="Menu"
          className="mx-auto max-w-shell px-5 pb-[calc(var(--thumb-bar-h)+2rem)] pt-6"
        >
          <ul className="divide-y divide-bone-50/10">
            {MENU.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  onClick={onClose}
                  className="tap flex min-h-14 items-center justify-between py-3 font-display text-3xl font-black uppercase hover:text-signal-500 focus-visible:text-signal-500 cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500"
                >
                  {item.label}
                  <span aria-hidden="true" className="font-mono text-base text-signal-500">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
            <a
              href={BRAND.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="tap inline-flex min-h-11 items-center gap-2 text-sm hover:text-signal-500 cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500"
            >
              <InstagramIcon />@{BRAND.instagram.handle}
            </a>
            <fieldset className="flex items-center gap-2">
              <legend className="label mb-2 text-bone-500">Theme</legend>
              {THEMES.map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={theme === value}
                  onClick={() => pick(value)}
                  className={
                    'tap label min-h-11 border px-4 hover:border-bone-50 cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500 ' +
                    (theme === value
                      ? 'border-signal-500 bg-signal-500 text-on-signal'
                      : 'border-bone-50/25 text-bone-300')
                  }
                >
                  {label}
                </button>
              ))}
            </fieldset>
          </div>
        </nav>
      </div>
    </>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const sentinel = useRef(null);
  const bar = useRef(null);
  const [top, setTop] = useState(0);
  const { pathname, hash } = useLocation();

  // The bar gains its rule once the banner has gone past, read from an
  // observer rather than from every scroll event.
  useEffect(() => {
    const target = sentinel.current;
    if (!target) return undefined;
    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => setOpen(false), [pathname, hash]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  // The panel hangs from wherever the bar is sitting, banner or no banner.
  const toggle = () => {
    if (!open && bar.current) setTop(bar.current.getBoundingClientRect().bottom);
    setOpen((value) => !value);
  };

  return (
    <>
      <div className="bg-signal-500 py-2 text-center text-on-signal">
        <p className="label flex flex-wrap justify-center gap-x-4 gap-y-1 px-4 font-bold">
          <span>Every Order Is an Entry</span>
          <Link
            to="/rules"
            className="tap underline underline-offset-2 hover:opacity-80 cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500"
          >
            No Purchase Necessary
          </Link>
        </p>
      </div>
      <div ref={sentinel} aria-hidden="true" className="h-px" />
      <header
        ref={bar}
        className={`sticky top-0 z-header bg-ink-900 ${
          scrolled || open ? 'border-b border-bone-50/10' : 'border-b border-transparent'
        }`}
      >
        <div className="mx-auto flex h-header max-w-shell items-center justify-between gap-4 px-5">
          <Link
            to="/"
            aria-label="SouthBound home"
            className="tap flex h-11 items-center hover:opacity-80 cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500"
          >
            <img
              src="/brand/sb-mark-160.webp"
              srcSet="/brand/sb-mark-160.webp 160w, /brand/sb-mark-320.webp 320w"
              sizes="48px"
              width="160"
              height="122"
              alt=""
              className="h-9 w-auto object-contain"
            />
          </Link>
          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="tap label inline-flex h-11 items-center text-bone-300 transition-colors hover:text-bone-50 cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={BRAND.instagram.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`@${BRAND.instagram.handle} on Instagram`}
              className="tap grid h-11 w-11 place-items-center border border-bone-50/20 text-bone-50 transition-colors hover:border-bone-50 cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500"
            >
              <InstagramIcon />
            </a>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="site-menu"
              aria-haspopup="dialog"
              data-state={open ? 'open' : 'closed'}
              onClick={toggle}
              className="btn-line h-11 px-4 cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500 hover:opacity-90"
            >
              <MenuIcon open={open} />
              <span className="hidden sm:inline">{open ? 'Close' : 'Menu'}</span>
            </button>
          </div>
        </div>
      </header>

      <MenuPanel open={open} top={top} onClose={() => setOpen(false)} />

      {/* On a phone the two things a visitor came for stay under the thumb. */}
      <div className="fixed inset-x-0 bottom-0 z-thumb border-t border-bone-50/10 bg-ink-950 px-4 pb-[env(safe-area-inset-bottom)] md:hidden">
        <div className="flex h-thumb items-center gap-3">
          <button
            type="button"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={toggle}
            className="btn-line h-12 flex-1 px-3 cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500 hover:opacity-90"
          >
            <MenuIcon open={open} />
            {open ? 'Close' : 'Menu'}
          </button>
          <a
            href="/#shop"
            className="btn-signal h-12 flex-[2] px-3 cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500 hover:opacity-90"
          >
            Shop to Enter
          </a>
        </div>
      </div>
    </>
  );
}
