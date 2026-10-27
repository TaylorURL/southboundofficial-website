import { Link } from 'react-router-dom';
import Page from '@components/layout/Page.jsx';
import { usePageTitle } from '@app/hooks/usePageTitle.js';

const STEPS = [
  {
    n: '01',
    title: 'Shop',
    body: 'Grab a shirt, a hoodie, a cap or a decal.',
  },
  {
    n: '02',
    title: 'Get Entered',
    body: 'Your order adds entries to the giveaway that is running when you check out.',
  },
  {
    n: '03',
    title: 'Win',
    body: 'When the clock hits zero a name gets drawn, and the winner is posted on the Winners page and on Instagram.',
  },
];

export default function HowItWorks() {
  usePageTitle('How It Works | SouthBound Giveaways');

  return (
    <Page wide eyebrow="The Giveaway" title="How It Works">
      <ol className="grid gap-px bg-bone-50/10 md:grid-cols-3">
        {STEPS.map((step) => (
          <li key={step.n} className="bg-ink-900 p-7 sm:p-9">
            <span className="slant text-7xl text-bone-50/20">{step.n}</span>
            <h2 className="slant mt-4 block text-3xl">{step.title}</h2>
            <p className="mt-4 max-w-xs leading-relaxed text-bone-300">{step.body}</p>
          </li>
        ))}
      </ol>

      <p className="mt-10 max-w-xl leading-relaxed text-bone-300">
        No purchase is necessary. You can also enter free by mail, and a free entry has the same
        chance of winning. The{' '}
        <Link
          to="/rules"
          className="tap underline underline-offset-2 hover:text-bone-50 cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500"
        >
          Official Rules
        </Link>{' '}
        say how.
      </p>

      <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-xl sm:flex-row">
        <Link
          to="/shop"
          className="btn-signal h-14 flex-1 text-sm cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500 hover:opacity-90"
        >
          Shop to Enter
        </Link>
        <Link
          to="/giveaway"
          className="btn-line h-14 flex-1 text-sm cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500 hover:opacity-90"
        >
          Current Giveaway
        </Link>
      </div>
    </Page>
  );
}
