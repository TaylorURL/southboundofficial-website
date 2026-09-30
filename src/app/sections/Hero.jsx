import { Link } from 'react-router-dom';
import { BRAND } from '@constants/brand.js';
import { GIVEAWAY, ENTRY_STEPS } from '@constants/giveaway.js';
import Countdown from '@components/ui/Countdown.jsx';
import InstagramIcon from '@components/ui/InstagramIcon.jsx';
import { Wordmark } from '@components/ui/Marks.jsx';

function Steps() {
  return (
    <ol className="mt-8 grid w-full max-w-2xl grid-cols-3">
      {ENTRY_STEPS.map((step, i) => (
        <li key={step} className="relative flex flex-col items-center pt-5">
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-signal-500" />
          <span
            aria-hidden="true"
            className="absolute -top-1.5 left-1/2 h-4 w-1 -translate-x-1/2 bg-signal-500"
          />
          <span className="font-mono text-[11px] font-bold uppercase tracking-label text-bone-50 sm:text-xs">
            Step {i + 1}
          </span>
          <span className="slant glow mt-1 text-2xl text-signal-500 sm:text-3xl">{step}</span>
        </li>
      ))}
    </ol>
  );
}

export default function Hero() {
  const live = Boolean(GIVEAWAY.prize && !Number.isNaN(Date.parse(GIVEAWAY.endsAt)));

  return (
    <section
      id="giveaway"
      className="relative isolate overflow-hidden bg-ink-950 px-5 pb-20 pt-10 sm:pb-24 sm:pt-14"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_50%_38%,rgb(var(--signal-500)/0.38),transparent_62%)]"
      />
      <p
        aria-hidden="true"
        className="slant fade-type pointer-events-none absolute inset-x-0 top-6 -z-10 select-none whitespace-nowrap text-center text-[27vw] sm:top-2 md:text-[23vw]"
      >
        Win This
      </p>

      <div className="mx-auto flex max-w-shell flex-col items-center text-center">
        <h1 className="mt-[12vw] w-full max-w-[720px] md:mt-[9vw]">
          <Wordmark eager className="w-full drop-shadow-[0_24px_60px_rgb(var(--ink-950)/0.85)]" />
        </h1>

        {live ? (
          <p className="slant glow mt-8 text-5xl text-signal-500 sm:text-7xl">{GIVEAWAY.prize}</p>
        ) : (
          <p className="slant glow mt-8 text-5xl text-signal-500 sm:text-7xl">
            {GIVEAWAY.number ? `Giveaway No. ${GIVEAWAY.number}` : 'Prize Reveal Soon'}
          </p>
        )}

        {live && GIVEAWAY.image ? (
          <img
            src={GIVEAWAY.image}
            alt={GIVEAWAY.prize}
            width="1200"
            height="800"
            className="mt-8 aspect-[3/2] w-full max-w-3xl rounded-2xl object-cover shadow-[0_30px_80px_rgb(var(--ink-950)/0.7)]"
          />
        ) : null}

        <Steps />

        {live ? (
          <div className="mt-8 flex flex-col items-center">
            <p className="slant text-3xl sm:text-4xl">Giveaway Ends In</p>
            <div className="mt-5">
              <Countdown endsAt={GIVEAWAY.endsAt} />
            </div>
          </div>
        ) : null}

        <div className="mt-8 flex w-full max-w-md flex-col gap-3">
          <a
            href="#shop"
            className="btn-signal h-14 text-sm cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500 hover:opacity-90"
          >
            Shop to Enter
          </a>
          <Link
            to="/rules"
            className="btn-signal-line h-14 text-sm cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500 hover:opacity-90"
          >
            Official Rules
          </Link>
          {live ? null : (
            <a
              href={BRAND.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="btn-line h-14 text-sm cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500 hover:opacity-90"
            >
              <InstagramIcon />@{BRAND.instagram.handle}
            </a>
          )}
        </div>

        <p className="mt-8 max-w-md text-xs leading-relaxed text-bone-300">
          No purchase necessary. A purchase does not improve your chances. Void where prohibited.
          See the{' '}
          <Link
            to="/rules"
            className="tap underline underline-offset-2 hover:text-bone-50 cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500"
          >
            Official Rules
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
