import { BRAND } from '@constants/brand.js';
import { SPONSOR } from '@constants/rules.js';
import InstagramIcon from '@components/ui/InstagramIcon.jsx';
import { Fill, LegalPage } from '@components/ui/Legal.jsx';
import { usePageTitle } from '@app/hooks/usePageTitle.js';

export default function Contact() {
  usePageTitle('Contact | SouthBound Truck Merch');

  return (
    <LegalPage title="Contact" updated="2026-09-30">
      <p className="max-w-xl text-lg leading-relaxed text-bone-100">
        The fastest way to reach SouthBound is a direct message on Instagram.
      </p>
      <a
        href={BRAND.instagram.url}
        target="_blank"
        rel="noreferrer"
        className="btn-signal mt-8 h-14 text-sm cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500 hover:opacity-90"
      >
        <InstagramIcon />
        Message @{BRAND.instagram.handle}
      </a>
      <p className="mt-10 leading-relaxed text-bone-300">
        Email: <Fill value={SPONSOR.email} missing="Contact email" />
      </p>
    </LegalPage>
  );
}
