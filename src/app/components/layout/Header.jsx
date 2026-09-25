import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BRAND, NAV } from '@constants/brand.js';
import InstagramIcon from '@components/ui/InstagramIcon.jsx';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="bg-bone-50 py-2 text-center text-ink-900">
        <p className="label font-bold">Every Order Is an Entry</p>
      </div>
      <header
        className={`sticky top-0 z-40 transition-colors ${
          scrolled ? 'border-b border-bone-50/10 bg-ink-900/85 backdrop-blur' : 'bg-ink-900'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-shell items-center justify-between px-5">
          <Link to="/" aria-label="SouthBound home" className="flex items-center">
            <img
              src="/brand/sb-mark-160.webp"
              width="160"
              height="122"
              alt=""
              className="h-9 w-auto"
            />
          </Link>
          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="label text-bone-300 transition-colors hover:text-bone-50"
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
              className="grid h-10 w-10 place-items-center border border-bone-50/20 text-bone-50 transition-colors hover:border-bone-50"
            >
              <InstagramIcon />
            </a>
            <a href="/#shop" className="btn-solid h-10 px-5">
              Shop
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
