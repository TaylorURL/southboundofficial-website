import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Not Found | SouthBound';
  }, []);

  return (
    <section className="grid min-h-[60vh] place-items-center px-5 py-24 text-center">
      <div>
        <p className="label text-bone-300">404</p>
        <h1 className="slant mt-4 text-6xl sm:text-7xl">Wrong Turn</h1>
        <p className="mt-4 text-bone-300">That page is not here.</p>
        <Link to="/" className="btn-solid mt-8">
          Back to the Shop
        </Link>
      </div>
    </section>
  );
}
