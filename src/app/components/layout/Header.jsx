// nav: n11-mega-menu. panel: mm4-full-bleed-canvas. Each trigger in the bar
// opens one full-width panel of grouped destinations with a line on each and a
// promo card beside them; the panel stays mounted and crossfades between
// triggers. An announcement strip rides above the bar, slides away on the way
// down and back on the way up, and can be dismissed. On a phone the Menu button
// opens the same destinations as one sheet.
import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BRAND, NAV } from '@constants/brand.js';
import InstagramIcon from '@components/ui/InstagramIcon.jsx';

const THEMES = [
  ['dark', 'Dark'],
  ['light', 'Light'],
  ['gray', 'Gray'],
];

function readStore(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}

function writeStore(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Private mode: the choice holds for this page only.
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

function Chevron({ open }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 12"
      className={`h-3 w-3 transition-transform duration-nav ease-nav ${open ? 'rotate-180' : ''}`}
      fill="none"
    >
      <path d="M2 4.5l4 3 4-3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function Destination({ item, onPick, size = 'wide' }) {
  const external = item.href.startsWith('http');
  const Tag = external ? 'a' : Link;
  const target = external
    ? { href: item.href, target: '_blank', rel: 'noreferrer' }
    : { to: item.href };
  return (
    <Tag
      {...target}
      onClick={onPick}
      className={`tap touch-manipulation group flex min-h-11 flex-col justify-center border-l-2 border-transparent py-2 pl-4 transition-colors duration-nav ease-nav hover:border-signal-500 focus-visible:border-signal-500 cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500`}
    >
      <span
        className={`font-display font-black uppercase text-bone-50 ${
          size === 'wide' ? 'text-3xl' : 'text-2xl'
        }`}
      >
        {item.label}
      </span>
      <span className="mt-0.5 text-sm text-bone-300 group-hover:text-bone-100">{item.note}</span>
    </Tag>
  );
}

function Feature({ feature, onPick }) {
  const external = Boolean(feature.external);
  const Tag = external ? 'a' : Link;
  const target = external
    ? { href: feature.href, target: '_blank', rel: 'noreferrer' }
    : { to: feature.href };
  return (
    <div className="flex flex-col justify-between gap-6 bg-signal-500 p-6 text-on-signal">
      <div>
        <p className="slant text-3xl">{feature.title}</p>
        <p className="mt-3 max-w-[32ch] text-sm leading-relaxed">{feature.body}</p>
      </div>
      <Tag
        {...target}
        onClick={onPick}
        className={`tap touch-manipulation label inline-flex min-h-11 items-center gap-2 self-start border-b-2 border-current font-bold hover:opacity-80 cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500`}
      >
        {external && <InstagramIcon />}
        {feature.cta}
        <span aria-hidden="true">→</span>
      </Tag>
    </div>
  );
}

function ThemePicker() {
  const [theme, setTheme] = useState(() => readStore('theme', 'dark'));
  const pick = (event) => {
    const { value } = event.currentTarget.dataset;
    setTheme(value);
    document.documentElement.dataset.theme = value;
    writeStore('theme', value);
  };
  return (
    <fieldset className="flex flex-wrap items-center gap-2">
      <legend className="label mb-2 text-bone-500">Theme</legend>
      {THEMES.map(([value, label]) => (
        <button
          key={value}
          type="button"
          aria-pressed={theme === value}
          data-value={value}
          onClick={pick}
          className="tap label min-h-11 border border-bone-50/25 px-4 text-bone-300 hover:border-bone-50 aria-pressed:border-signal-500 aria-pressed:bg-signal-500 aria-pressed:text-on-signal cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500"
        >
          {label}
        </button>
      ))}
    </fieldset>
  );
}

// The wide-screen panel. One element for every trigger: moving from one
// trigger to the next swaps what is inside it rather than closing and opening
// again, and the three bodies share one grid cell so its height never jumps.
function WidePanel({ active, onPick, onEnter, onLeave }) {
  return (
    <div
      id="nav-panel"
      data-state={active ? 'open' : 'closed'}
      onPointerEnter={onEnter}
      onPointerLeave={onLeave}
      className="nav-panel absolute inset-x-0 top-full hidden border-b border-bone-50/10 bg-ink-900 md:block"
    >
      <div className="mx-auto grid max-w-shell px-5 py-10">
        {NAV.map((section) => {
          const on = active === section.id;
          return (
            <div
              key={section.id}
              id={`nav-panel-${section.id}`}
              role="region"
              aria-label={section.label}
              inert={on ? undefined : true}
              className={`nav-panel__body grid grid-cols-[1fr_1fr_minmax(16rem,22rem)] gap-x-10 gap-y-2 [grid-area:1/1] ${
                on ? 'is-active' : ''
              }`}
            >
              <p className="label col-span-2 mb-2 text-bone-500">{section.heading}</p>
              <div className="col-span-2 row-start-2 grid grid-cols-2 gap-x-10 gap-y-4">
                {section.items.map((item) => (
                  <Destination key={item.href} item={item} onPick={onPick} />
                ))}
              </div>
              {section.id === 'help' && (
                <div className="col-span-2 row-start-3 mt-6">
                  <ThemePicker />
                </div>
              )}
              <div className="col-start-3 row-span-3 row-start-1">
                <Feature feature={section.feature} onPick={onPick} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PhoneMenu({ open, height, onPick }) {
  return (
    <div
      id="site-menu"
      role="dialog"
      aria-label="Menu"
      data-state={open ? 'open' : 'closed'}
      hidden={!open}
      style={{ height }}
      className="absolute inset-x-0 top-full overflow-y-auto overscroll-contain border-t border-bone-50/10 bg-ink-900 md:hidden"
    >
      <nav aria-label="Menu" className="px-5 pb-[calc(var(--thumb-bar-h)+2rem)] pt-6">
        {NAV.map((section) => (
          <section key={section.id} className="border-b border-bone-50/10 pb-6 pt-2">
            <h2 className="label mb-2 text-bone-500">{section.heading}</h2>
            <ul>
              {section.items.map((item) => (
                <li key={item.href}>
                  <Destination item={item} onPick={onPick} size="narrow" />
                </li>
              ))}
            </ul>
          </section>
        ))}
        <div className="mt-8 flex flex-col gap-6">
          <a
            href={BRAND.instagram.url}
            target="_blank"
            rel="noreferrer"
            className={`tap inline-flex min-h-11 items-center gap-2 text-sm hover:text-bone-50 cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500`}
          >
            <InstagramIcon />@{BRAND.instagram.handle}
          </a>
          <ThemePicker />
        </div>
      </nav>
    </div>
  );
}

export default function Header() {
  const [active, setActive] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [raised, setRaised] = useState(false);
  const [banner, setBanner] = useState(true);
  const [menuHeight, setMenuHeight] = useState(0);
  const shell = useRef(null);
  const sentinel = useRef(null);
  const openRef = useRef(false);
  const closeTimer = useRef(0);
  const hoveredAt = useRef(0);
  const { pathname, hash } = useLocation();

  // A dismissed banner stays dismissed; read after mount so the prerendered
  // markup and the first client render agree.
  useEffect(() => {
    if (readStore('banner', '') === 'dismissed') setBanner(false);
  }, []);

  // The bar gains its rule once the page has moved under it, read from an
  // observer on a pixel at the top rather than from every scroll event.
  useEffect(() => {
    const target = sentinel.current;
    if (!target) return undefined;
    const observer = new IntersectionObserver(([entry]) => setRaised(!entry.isIntersecting));
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  // Down past 48px hides the banner, the first upward scroll brings it back,
  // and near the top it always shows. Direction is the one thing no observer
  // reports, so this listens - passively, once a frame, and straight onto the
  // element's attribute rather than through React. Nothing moves while a
  // panel is open.
  useEffect(() => {
    let last = window.scrollY;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const y = window.scrollY;
        const el = shell.current;
        if (el && !openRef.current) {
          if (y < 48 || y < last - 4) el.toggleAttribute('data-compact', false);
          else if (y > last + 4) el.toggleAttribute('data-compact', true);
        }
        last = y;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const closeAll = useCallback(() => {
    clearTimeout(closeTimer.current);
    setActive(null);
    setMenuOpen(false);
  }, []);

  useEffect(closeAll, [pathname, hash, closeAll]);

  useEffect(() => {
    if (!active && !menuOpen) return undefined;
    const onKey = (event) => {
      if (event.key !== 'Escape') return;
      const trigger = active
        ? document.getElementById(`nav-trigger-${active}`)
        : document.getElementById('menu-trigger');
      closeAll();
      trigger?.focus();
    };
    const onDown = (event) => {
      if (shell.current && !shell.current.contains(event.target)) closeAll();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    if (menuOpen) document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onDown);
      document.body.style.overflow = '';
    };
  }, [active, menuOpen, closeAll]);

  const hold = () => clearTimeout(closeTimer.current);
  const release = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActive(null), 220);
  };
  const hover = (id) => (event) => {
    if (event.pointerType !== 'mouse') return;
    hold();
    if (active !== id) hoveredAt.current = event.timeStamp;
    setActive(id);
  };

  // A click that lands just after the hover opened the panel is the same
  // intent, not a request to close it.
  const clickTrigger = (event) => {
    const { id } = event.currentTarget.dataset;
    if (active === id && event.timeStamp - hoveredAt.current < 400) return;
    setActive(active === id ? null : id);
  };

  const toggleMenu = () => {
    if (!menuOpen && shell.current) {
      setMenuHeight(window.innerHeight - shell.current.getBoundingClientRect().bottom);
    }
    setActive(null);
    setMenuOpen((value) => !value);
  };

  const dismiss = () => {
    setBanner(false);
    writeStore('banner', 'dismissed');
  };

  const open = Boolean(active) || menuOpen;
  openRef.current = open;
  // An open panel brings the banner back so the panel hangs where it was opened.
  useEffect(() => {
    if (open) shell.current?.removeAttribute('data-compact');
  }, [open]);

  return (
    <>
      <div ref={sentinel} aria-hidden="true" className="absolute top-0 h-2 w-px" />
      <div
        ref={shell}
        data-banner={banner ? '' : undefined}
        className="nav-shell sticky top-0 z-header bg-ink-900"
      >
        {banner && (
          <div className="announcement-bar relative flex h-banner items-center justify-center bg-signal-500 px-12 text-on-signal">
            <p className="label flex items-center gap-4 whitespace-nowrap font-bold">
              <span className="hidden sm:inline">Every Order Is an Entry</span>
              <Link
                to="/rules"
                className="tap underline underline-offset-2 hover:opacity-80 cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-signal"
              >
                No Purchase Necessary
              </Link>
            </p>
            <div className="absolute inset-y-0 right-2 flex items-center">
              <a
                href={BRAND.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="tap label hidden h-banner items-center gap-2 px-3 font-bold hover:opacity-70 md:inline-flex cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-on-signal"
              >
                <InstagramIcon className="h-3.5 w-3.5" />@{BRAND.instagram.handle}
              </a>
              <button
                type="button"
                onClick={dismiss}
                aria-label="Dismiss the banner"
                className="tap grid h-banner w-11 place-items-center hover:opacity-70 cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-on-signal"
              >
                <svg aria-hidden="true" viewBox="0 0 12 12" className="h-3 w-3" fill="none">
                  <path d="M2 2l8 8M10 2L2 10" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </button>
            </div>
          </div>
        )}

        <header
          data-raised={raised || open ? '' : undefined}
          onPointerLeave={release}
          onPointerEnter={hold}
          className="relative border-b border-transparent bg-ink-900 transition-[border-color] duration-nav ease-nav data-[raised]:border-bone-50/10"
        >
          <div className="mx-auto flex h-header max-w-shell items-center justify-between gap-6 px-5">
            <Link
              to="/"
              aria-label="SouthBound home"
              className={`tap flex h-11 items-center hover:opacity-80 cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500`}
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
              <ul className="flex items-center gap-2">
                {NAV.map((section) => {
                  const on = active === section.id;
                  return (
                    <li key={section.id}>
                      <button
                        id={`nav-trigger-${section.id}`}
                        type="button"
                        aria-expanded={on}
                        aria-controls={`nav-panel-${section.id}`}
                        data-state={on ? 'open' : 'closed'}
                        onPointerEnter={hover(section.id)}
                        data-id={section.id}
                        onClick={clickTrigger}
                        className="tap label inline-flex h-11 items-center gap-2 px-4 font-bold text-bone-300 transition-colors duration-nav ease-nav hover:text-bone-50 aria-expanded:text-bone-50 cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500"
                      >
                        {section.label}
                        <Chevron open={on} />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="/#shop"
                className={`btn-signal hidden h-11 px-5 hover:opacity-90 md:inline-flex cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500`}
              >
                Shop to Enter
              </a>
              <button
                id="menu-trigger"
                type="button"
                aria-expanded={menuOpen}
                aria-controls="site-menu"
                aria-haspopup="dialog"
                data-state={menuOpen ? 'open' : 'closed'}
                onClick={toggleMenu}
                className={`btn-line h-11 px-4 hover:opacity-90 md:hidden cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500`}
              >
                <MenuIcon open={menuOpen} />
                {menuOpen ? 'Close' : 'Menu'}
              </button>
            </div>
          </div>

          <WidePanel active={active} onPick={closeAll} onEnter={hold} onLeave={release} />
          <PhoneMenu open={menuOpen} height={menuHeight} onPick={closeAll} />
        </header>
      </div>

      {/* The page dims under an open panel. */}
      <div
        aria-hidden="true"
        data-state={open ? 'open' : 'closed'}
        className="nav-scrim fixed inset-0 z-scrim bg-ink-950/70"
      />

      {/* On a phone the two things a visitor came for stay under the thumb. */}
      <div className="fixed inset-x-0 bottom-0 z-thumb border-t border-bone-50/10 bg-ink-950 px-4 pb-[env(safe-area-inset-bottom)] md:hidden">
        <div className="flex h-thumb items-center gap-3">
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={toggleMenu}
            className={`btn-line h-12 flex-1 px-3 hover:opacity-90 cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500`}
          >
            <MenuIcon open={menuOpen} />
            {menuOpen ? 'Close' : 'Menu'}
          </button>
          <a
            href="/#shop"
            className={`btn-signal h-12 flex-[2] px-3 hover:opacity-90 cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500`}
          >
            Shop to Enter
          </a>
        </div>
      </div>
    </>
  );
}
