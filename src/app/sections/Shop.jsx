import { Link } from 'react-router-dom';
import { CATEGORIES } from '@constants/shop.js';
import { Wordmark } from '@components/ui/Marks.jsx';
import Plate from '@components/ui/Plate.jsx';

// One tile per corner of the store, the way the drop is browsed on a phone:
// tap a tile and that corner opens as a page of its own.
function Tile({ to, label, ground, wide = false, labelClass = '', children }) {
  return (
    <li className={wide ? 'col-span-2 lg:col-span-1' : undefined}>
      <Link
        to={to}
        data-wide={wide ? '' : undefined}
        className="tap group relative grid aspect-square place-items-center overflow-hidden rounded-3xl hover:ring-2 hover:ring-signal-500 data-[wide]:aspect-[2/1] lg:data-[wide]:aspect-square cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500"
      >
        <div aria-hidden="true" className={`absolute inset-0 ${ground}`} />
        <div className="absolute inset-x-0 bottom-16 top-0 grid place-items-center px-4 pt-4 transition-transform duration-nav group-hover:scale-105 sm:bottom-20">
          {children}
        </div>
        <span
          className={`slant absolute inset-x-0 bottom-4 px-3 text-center text-3xl sm:bottom-5 sm:text-4xl ${labelClass}`}
        >
          {label}
        </span>
      </Link>
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
    <Plate name={category.plate} className="h-full w-auto max-w-full" />
  );
}

// The home page ends on these tiles, and the Shop page is these tiles. On the
// Shop page the heading is the page's own.
export default function Shop({ page = false }) {
  const Heading = page ? 'h1' : 'h2';
  return (
    <section
      id="shop"
      className={`px-5 ${page ? 'pb-24 pt-14 sm:pt-20' : 'below-fold py-20 sm:py-24'}`}
    >
      <div className="mx-auto max-w-shell">
        <header>
          <Heading className={`slant ${page ? 'text-6xl sm:text-7xl' : 'text-5xl sm:text-6xl'}`}>
            Shop the Drop
          </Heading>
          <p className="mt-4 max-w-md text-xs leading-relaxed text-bone-300">
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
        </header>

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-5">
          <Tile
            to="/giveaway"
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
              to={`/shop/${category.id}`}
              label={category.label}
              ground="sheen bg-ink-800"
            >
              <CategoryArt category={category} />
            </Tile>
          ))}
        </ul>
      </div>
    </section>
  );
}
