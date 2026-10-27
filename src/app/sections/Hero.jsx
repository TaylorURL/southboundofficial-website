import { HEADLINE } from '@constants/giveaway.js';
import {
  EntrySteps,
  GiveawayActions,
  GiveawayCountdown,
  PrizePhoto,
} from '@components/ui/Giveaway.jsx';
import { Wordmark } from '@components/ui/Marks.jsx';

export default function Hero() {
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

        <p className="slant glow mt-8 text-5xl text-signal-500 sm:text-7xl">{HEADLINE}</p>

        <PrizePhoto />
        <EntrySteps />
        <GiveawayCountdown />
        <GiveawayActions />
      </div>
    </section>
  );
}
