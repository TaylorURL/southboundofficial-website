import Hero from '@sections/Hero.jsx';
import Shop from '@sections/Shop.jsx';

// The giveaway, then the tiles. The page ends on the tiles, and each one opens
// its own page rather than scrolling further down this one.
export default function Home() {
  return (
    <>
      <Hero />
      <Shop />
    </>
  );
}
