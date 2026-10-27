import { HEADLINE } from '@constants/giveaway.js';
import {
  EntrySteps,
  GiveawayActions,
  GiveawayCountdown,
  PrizePhoto,
} from '@components/ui/Giveaway.jsx';
import { usePageTitle } from '@app/hooks/usePageTitle.js';

export default function Giveaway() {
  usePageTitle('Current Giveaway | SouthBound Giveaways');

  return (
    <section className="relative isolate overflow-hidden bg-ink-950 px-5 pb-24 pt-14 sm:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_30%,rgb(var(--signal-500)/0.3),transparent_62%)]"
      />
      <div className="mx-auto flex max-w-shell flex-col items-center text-center">
        <p className="label text-bone-300">Current Giveaway</p>
        <h1 className="slant glow mt-4 text-6xl text-signal-500 sm:text-7xl">{HEADLINE}</h1>
        <PrizePhoto />
        <EntrySteps />
        <GiveawayCountdown />
        <GiveawayActions />
      </div>
    </section>
  );
}
