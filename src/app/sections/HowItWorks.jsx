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
    body: 'When the clock hits zero a name gets drawn, and the winner is posted here and on Instagram.',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="below-fold border-y border-bone-50/10 bg-ink-950 px-5 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-shell">
        <h2 className="slant text-5xl sm:text-6xl">How It Works</h2>
        <ol className="mt-12 grid gap-px bg-bone-50/10 md:grid-cols-3">
          {STEPS.map((step) => (
            <li key={step.n} className="bg-ink-950 p-7 sm:p-9">
              <span className="slant text-7xl text-bone-50/20">{step.n}</span>
              <h3 className="slant mt-4 block text-3xl">{step.title}</h3>
              <p className="mt-4 max-w-xs leading-relaxed text-bone-300">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
