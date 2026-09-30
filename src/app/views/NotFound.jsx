import { usePageTitle } from '@app/hooks/usePageTitle.js';
import { Link } from 'react-router-dom';

export default function NotFound() {
  usePageTitle('Not Found | SouthBound Truck Merch');

  return (
    <section className="grid min-h-[60dvh] place-items-center px-5 py-24 text-center">
      <div>
        <p className="label text-bone-300">404</p>
        <h1 className="slant mt-4 text-6xl sm:text-7xl">Wrong Turn</h1>
        <p className="mt-4 text-bone-300">That page is not here.</p>
        <Link
          to="/"
          className="btn-signal mt-8 cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500 hover:opacity-90"
        >
          Back to the Shop
        </Link>
      </div>
    </section>
  );
}
