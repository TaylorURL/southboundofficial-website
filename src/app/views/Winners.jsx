import { BRAND } from '@constants/brand.js';
import Page from '@components/layout/Page.jsx';
import InstagramIcon from '@components/ui/InstagramIcon.jsx';
import { usePageTitle } from '@app/hooks/usePageTitle.js';

export default function Winners() {
  usePageTitle('Winners | SouthBound Giveaways');

  return (
    <Page wide eyebrow="The Giveaway" title="Winners">
      <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div>
          <p className="max-w-md text-lg leading-relaxed text-bone-100">
            Every winner gets posted here with the prize they took home.
          </p>
          <a
            href={BRAND.instagram.url}
            target="_blank"
            rel="noreferrer"
            className="btn-signal mt-6 h-14 text-sm cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500 hover:opacity-90"
          >
            <InstagramIcon />
            See Them on Instagram
          </a>
        </div>
        <div className="grid aspect-[4/3] place-items-center border-2 border-dashed border-bone-50/25">
          <p className="slant text-3xl text-bone-50/40">Your Name Here</p>
        </div>
      </div>
    </Page>
  );
}
