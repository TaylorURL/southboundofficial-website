import { CATEGORIES, DROP } from '@constants/shop.js';
import { Monogram, Wordmark } from '@components/ui/Marks.jsx';

function Art({ mark }) {
  return (
    <div className="grain relative grid aspect-[4/5] place-items-center overflow-hidden bg-ink-800">
      {mark === 'wordmark' ? (
        <Wordmark alt="" className="w-4/5 -rotate-6" />
      ) : (
        <Monogram alt="" className="w-1/2" />
      )}
    </div>
  );
}

export default function Shop() {
  return (
    <section id="shop" className="px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="slant text-5xl sm:text-6xl">The First Drop</h2>
          <ul className="flex flex-wrap gap-2" aria-label="Categories">
            {CATEGORIES.map((c) => (
              <li key={c.id} className="label border border-bone-50/20 px-3 py-2 text-bone-300">
                {c.label}
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {DROP.map((item) => (
            <li key={item.id} className="group flex flex-col">
              <Art mark={item.mark} />
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <p className="label text-bone-500">{item.category}</p>
                  <h3 className="mt-1 font-semibold leading-snug">{item.name}</h3>
                </div>
                {item.price ? <p className="font-mono text-sm">{item.price}</p> : null}
              </div>
              <p className="label mt-3 inline-flex w-fit bg-bone-50 px-2 py-1 font-bold text-ink-900">
                Earns Entries
              </p>
              <button
                type="button"
                disabled={!item.price}
                className="btn-line mt-4 w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {item.price ? 'Add to Cart' : 'Drops Soon'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
