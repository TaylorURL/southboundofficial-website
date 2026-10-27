import { Link, useParams } from 'react-router-dom';
import { CATEGORIES, DROP } from '@constants/shop.js';
import Page from '@components/layout/Page.jsx';
import Plate from '@components/ui/Plate.jsx';
import NotFound from '@views/NotFound.jsx';
import { usePageTitle } from '@app/hooks/usePageTitle.js';

function Product({ item, plate }) {
  return (
    <li className="flex flex-col">
      <div className="sheen relative grid aspect-[4/5] place-items-center overflow-hidden rounded-2xl bg-ink-800">
        <Plate name={plate} className="w-3/5 max-w-[12rem]" />
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <h2 className="font-semibold leading-snug">{item.name}</h2>
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

// One corner of the store on a page of its own, with the other corners a tap
// away underneath.
export default function Category() {
  const { category: id } = useParams();
  const category = CATEGORIES.find((entry) => entry.id === id);
  usePageTitle(`${category ? category.label : 'Not Found'} | SouthBound Truck Merch`);

  if (!category) return <NotFound />;
  const items = DROP.filter((item) => item.category === category.id);

  return (
    <Page
      wide
      title={category.label}
      lead={
        <p className="max-w-md text-xs leading-relaxed text-bone-300">
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
      }
      eyebrow={
        <Link
          to="/shop"
          className="tap label inline-flex min-h-11 items-center gap-2 text-bone-300 hover:text-bone-50 cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500"
        >
          <span aria-hidden="true">←</span>
          Shop the Drop
        </Link>
      }
    >
      {items.length ? (
        <ul className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {items.map((item) => (
            <Product key={item.id} item={item} plate={category.plate} />
          ))}
        </ul>
      ) : (
        <p className="text-lg text-bone-300">Nothing here yet. It drops soon.</p>
      )}

      <nav aria-label="More from the drop" className="mt-16 border-t border-bone-50/10 pt-10">
        <p className="label text-bone-500">More from the drop</p>
        <ul className="mt-4 flex flex-wrap gap-3">
          {CATEGORIES.filter((entry) => entry.id !== category.id).map((entry) => (
            <li key={entry.id}>
              <Link
                to={`/shop/${entry.id}`}
                className="btn-line h-12 px-5 text-sm cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500 hover:opacity-90"
              >
                {entry.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Page>
  );
}
