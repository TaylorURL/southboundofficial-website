// A detail that is not settled yet shows as a marked gap, never as a guess.
export function Fill({ value, missing }) {
  if (value) return value;
  return (
    <mark className="rounded bg-signal-500/20 px-1.5 py-0.5 font-mono text-[0.85em] text-signal-400">
      {missing}
    </mark>
  );
}

export function Clause({ title, children }) {
  return (
    <section className="border-t border-bone-50/10 py-8">
      <h2 className="slant text-3xl sm:text-4xl">{title}</h2>
      <div className="mt-4 space-y-4 leading-relaxed text-bone-100">{children}</div>
    </section>
  );
}

// The frame every legal page shares: an eyebrow, the title and the date the
// text last changed.
export function LegalPage({ title, updated, children }) {
  return (
    <article className="px-5 pb-24 pt-14 sm:pt-20">
      <div className="mx-auto max-w-3xl">
        <p className="label text-bone-300">SouthBound</p>
        <h1 className="slant mt-4 text-6xl sm:text-7xl">{title}</h1>
        <p className="label mt-6 text-bone-500">
          Last Updated <time dateTime={updated}>{formatDate(updated)}</time>
        </p>
        <div className="mt-10">{children}</div>
      </div>
    </article>
  );
}

function formatDate(iso) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', { dateStyle: 'long' });
}
