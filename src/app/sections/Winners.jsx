import { BRAND } from '@constants/brand.js';
import InstagramIcon from '@components/ui/InstagramIcon.jsx';

export default function Winners() {
  return (
    <section id="winners" className="below-fold bg-bone-50 px-5 py-20 text-ink-900 sm:py-24">
      <div className="mx-auto grid max-w-shell gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div>
          <h2 className="slant text-5xl sm:text-6xl">Winners</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-700">
            Every winner gets posted here with the prize they took home.
          </p>
          <a
            href={BRAND.instagram.url}
            target="_blank"
            rel="noreferrer"
            className="btn mt-6 bg-ink-900 text-bone-50 hover:bg-ink-700 focus-visible:outline-signal-500 cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <InstagramIcon />
            See Them on Instagram
          </a>
        </div>
        <div className="grid aspect-[4/3] place-items-center border-2 border-dashed border-ink-900/25">
          <p className="slant text-3xl text-ink-900/40">Your Name Here</p>
        </div>
      </div>
    </section>
  );
}
