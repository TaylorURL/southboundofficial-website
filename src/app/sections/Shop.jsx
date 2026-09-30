import { CATEGORIES, DROP } from '@constants/shop.js';
import { Monogram, Wordmark } from '@components/ui/Marks.jsx';

function Mark({ mark, className = '' }) {
  return mark === 'wordmark' ? (
    <Wordmark alt="" className={`w-4/5 -rotate-6 ${className}`} />
  ) : (
    <Monogram alt="" className={`w-1/2 ${className}`} />
  );
}

// One tile per corner of the store, the way the drop is browsed on a phone:
// tap a tile, land on that section.
function Tile({ href, label, ground, wide = false, labelClass = '', children }) {
  return (
    <li className={wide ? 'col-span-2 lg:col-span-1' : undefined}>
      <a
        href={href}
        data-wide={wide ? '' : undefined}
        className="tap group relative grid aspect-square place-items-center overflow-hidden rounded-3xl hover:ring-2 hover:ring-signal-500 data-[wide]:aspect-[2/1] lg:data-[wide]:aspect-square cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500"
      >
        <div aria-hidden="true" className={`absolute inset-0 ${ground}`} />
        <div className="absolute inset-0 grid place-items-center opacity-60 transition-transform duration-nav group-hover:scale-105">
          {children}
        </div>
        <span
          className={`slant relative px-3 text-center text-4xl sm:text-5xl ${labelClass || 'drop-shadow-[0_4px_14px_rgb(var(--ink-950)/0.9)]'}`}
        >
          {label}
        </span>
      </a>
    </li>
  );
}

function CategoryArt({ category }) {
  return category.image ? (
    <img
      src={category.image}
      alt=""
      width="600"
      height="600"
      loading="lazy"
      decoding="async"
      className="h-full w-full object-cover"
    />
  ) : (
    <Mark mark={category.mark} />
  );
}

function Product({ item }) {
  return (
    <li className="flex flex-col">
      <div className="sheen relative grid aspect-[4/5] place-items-center overflow-hidden rounded-2xl bg-ink-800">
        <Mark mark={item.mark} />
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <h4 className="font-semibold leading-snug">{item.name}</h4>
        {item.price ? <p className="font-mono text-sm">{item.price}</p> : null}
      </div>
      <p className="label mt-4 inline-flex w-fit bg-signal-500 px-2 py-1 font-bold text-on-signal">
        Earns Entries
      </p>
      <button
        type="button"
        disabled={!item.price}
        className="btn-line mt-4 w-full disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500 hover:opacity-90"
      >
        {item.price ? 'Add to Cart' : 'Drops Soon'}
      </button>
    </li>
  );
}

export default function Shop() {
  return (
    <section id="shop" className="below-fold px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-shell">
        <div>
          <h2 className="slant text-5xl sm:text-6xl">Shop the Drop</h2>

          <ul className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-5">
            <Tile
              href="#giveaway"
              label="Giveaway"
              wide
              labelClass="text-on-signal"
              ground="bg-[radial-gradient(circle_at_50%_40%,rgb(var(--signal-400)),rgb(var(--signal-600))_55%,rgb(var(--signal-900)))]"
            >
              <Wordmark alt="" className="w-3/5 -rotate-6 lg:w-4/5" />
            </Tile>
            {CATEGORIES.map((category) => (
              <Tile
                key={category.id}
                href={`#shop-${category.id}`}
                label={category.label}
                ground="sheen bg-ink-800"
              >
                <CategoryArt category={category} />
              </Tile>
            ))}
          </ul>
        </div>

        {CATEGORIES.map((category) => {
          const items = DROP.filter((item) => item.category === category.id);
          if (!items.length) return null;
          return (
            <div
              key={category.id}
              id={`shop-${category.id}`}
              className="mt-16 border-t border-bone-50/10 pt-10"
            >
              <h3 className="slant block text-4xl sm:text-5xl">{category.label}</h3>
              <ul className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                {items.map((item) => (
                  <Product key={item.id} item={item} />
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
