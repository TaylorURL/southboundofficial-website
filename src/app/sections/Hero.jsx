import { BRAND } from '@constants/brand.js';
import { GIVEAWAY } from '@constants/giveaway.js';
import Countdown from '@components/ui/Countdown.jsx';
import InstagramIcon from '@components/ui/InstagramIcon.jsx';
import { Wordmark } from '@components/ui/Marks.jsx';

export default function Hero() {
  const live = Boolean(GIVEAWAY.prize && !Number.isNaN(Date.parse(GIVEAWAY.endsAt)));

  return (
    <section
      id="giveaway"
      className="grain relative isolate overflow-hidden bg-ink-900 px-5 pb-20 pt-14 sm:pb-28 sm:pt-20"
    >
      <p
        aria-hidden="true"
        className="slant outline-type pointer-events-none absolute inset-x-0 top-10 -z-10 select-none whitespace-nowrap text-center text-[24vw] sm:top-2 md:text-[26vw]"
      >
        Win This
      </p>

      <div className="mx-auto flex max-w-shell flex-col items-center text-center">
        <p className="label text-bone-300">
          {GIVEAWAY.number ? `Giveaway No. ${GIVEAWAY.number}` : 'SouthBound Giveaways'}
        </p>
        <h1 className="mt-8 w-full max-w-[720px]">
          <Wordmark eager className="w-full drop-shadow-[0_24px_60px_rgba(0,0,0,0.85)]" />
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-bone-100 sm:text-xl">
          Rep the merch and get entered to win. Every order counts toward the giveaway that is open
          when you check out.
        </p>

        <div className="mt-10 w-full max-w-xl border border-bone-50/15 bg-ink-950/70 p-6 sm:p-8">
          {live ? (
            <>
              <p className="label text-bone-300">Up for Grabs</p>
              <p className="slant mt-3 text-4xl sm:text-5xl">{GIVEAWAY.prize}</p>
              <div className="mt-6 flex justify-center">
                <Countdown endsAt={GIVEAWAY.endsAt} />
              </div>
            </>
          ) : (
            <>
              <p className="label text-bone-300">Next Giveaway</p>
              <p className="slant mt-3 text-4xl sm:text-5xl">Prize Reveal Soon</p>
              <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-bone-300">
                The prize and the countdown go up on Instagram first. Follow along so you catch the
                start.
              </p>
              <a
                href={BRAND.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="btn-line mt-6"
              >
                <InstagramIcon />@{BRAND.instagram.handle}
              </a>
            </>
          )}
        </div>

        <div className="mt-10 flex w-full max-w-sm flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row">
          <a href="#shop" className="btn-solid">
            Shop the Drop
          </a>
          <a href="#how" className="btn-line">
            How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
