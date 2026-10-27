import { BRAND } from '@constants/brand.js';
import Page from '@components/layout/Page.jsx';
import { usePageTitle } from '@app/hooks/usePageTitle.js';

const QUESTIONS = [
  {
    q: 'How do I get entries?',
    a: 'Buy merch. Each order adds entries to the giveaway that is open when you check out.',
  },
  {
    q: 'Do I have to buy something to enter?',
    a: 'No. You can enter for free by mail, and a free entry has the same chance of winning. The Official Rules say how.',
  },
  {
    q: 'How is the winner picked?',
    a: 'A random draw when the countdown ends. The winner is posted on the Winners page and on Instagram.',
  },
  {
    q: 'Where do giveaways get announced?',
    a: `Instagram, first. Follow @${BRAND.instagram.handle} to catch the prize reveal and the start of each countdown.`,
  },
];

export default function Faq() {
  usePageTitle('FAQ | SouthBound Giveaways');

  return (
    <Page eyebrow="Help" title="FAQ">
      <div className="divide-y divide-bone-50/10 border-y border-bone-50/10">
        {QUESTIONS.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className="tap flex min-h-11 cursor-pointer hover:text-signal-500 list-none items-center justify-between gap-6 text-lg font-semibold active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500">
              {item.q}
              <span
                aria-hidden="true"
                className="font-mono text-2xl text-bone-300 transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 max-w-2xl leading-relaxed text-bone-300">{item.a}</p>
          </details>
        ))}
      </div>
    </Page>
  );
}
