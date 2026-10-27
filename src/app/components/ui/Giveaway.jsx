// What the home page's first screen and the Giveaway page both say about the
// giveaway that is open: its headline, the three steps to an entry, the
// countdown once there is one, and where to go next.
import { Link } from 'react-router-dom';
import { BRAND } from '@constants/brand.js';
import { GIVEAWAY, ENTRY_STEPS, LIVE } from '@constants/giveaway.js';
import Countdown from '@components/ui/Countdown.jsx';
import InstagramIcon from '@components/ui/InstagramIcon.jsx';

export function PrizePhoto() {
  if (!LIVE || !GIVEAWAY.image) return null;
  return (
    <img
      src={GIVEAWAY.image}
      alt={GIVEAWAY.prize}
      width="1200"
      height="800"
      className="mt-8 aspect-[3/2] w-full max-w-3xl rounded-2xl object-cover shadow-[0_30px_80px_rgb(var(--ink-950)/0.7)]"
    />
  );
}

export function EntrySteps() {
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

export function GiveawayCountdown() {
  if (!LIVE) return null;
  return (
    <div className="mt-8">
      <Countdown endsAt={GIVEAWAY.endsAt} />
    </div>
  );
}

export function GiveawayActions() {
  return (
    <div className="mt-8 flex w-full max-w-md flex-col gap-3">
      <Link
        to="/shop"
        className="btn-signal h-14 text-sm cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500 hover:opacity-90"
      >
        Shop to Enter
      </Link>
      <Link
        to="/rules"
        className="btn-signal-line h-14 text-sm cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500 hover:opacity-90"
      >
        Official Rules
      </Link>
      {LIVE ? null : (
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
  );
}
