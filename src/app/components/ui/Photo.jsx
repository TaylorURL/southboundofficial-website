import { useEffect, useState } from 'react';
import Plate from '@components/ui/Plate.jsx';

// A product photo out of /public/shop, and what happens when one of them does
// not arrive.
//
// These are the only photographs the storefront fetches, and until the week's
// cache rule went on /shop they were also the only images on the home page a
// returning reader re-requested over the network on every single view: the
// brand marks are cached for a week and come off disk, while a static file with
// no matching rule is served must-revalidate. That made the decal on the Decals
// tile the one image below the first screen still opening a fresh connection
// late in the page's life, so it was the only one a reader who scrolled down
// and left could cancel, and the only one a moment of bad signal on a repeat
// visit could lose. A cancelled image load fires the same error event as a
// broken file, which is how a photo that serves perfectly came in as a broken
// one.
//
// The cache rule is why it was this path and no other. This is what the tile
// does when a photo genuinely does not come: one more try, because a cancelled
// or dropped request usually succeeds on the second ask, and then the
// category's drawn plate, which is inline line art and cannot fail. A tile that
// kept its label and lost its picture left a hole that read as a gap in the
// drop rather than as a missing file, and nobody looking at the page could tell
// it had happened.
//
// The page is prerendered, so the photo's request is made and can fail before
// any of this has mounted - an `onError` handler alone hears nothing, because
// the failure is already over by the time React attaches to the element it was
// served with. So the element is also asked on mount whether it is a finished
// load with no pixels in it, which is what a failure looks like after the fact.
//
// Nothing here is hidden from the reporter. A failure is reported by the page's
// own capture-phase handler before this component ever hears about it, so a
// photo that really is missing is still something the owner is told about.
export default function Photo({ image, plate, className = '', plateClassName = '' }) {
  const [state, setState] = useState('first');
  const [shown, setShown] = useState(image.src);

  // A new photo in the same slot starts over, worked out while rendering rather
  // than in an effect: an effect that resets also runs on the first mount, and
  // on a prerendered page the failure is already known by then, so it would
  // undo the one it was meant to recover from.
  if (shown !== image.src) {
    setShown(image.src);
    setState('first');
  }

  const failed = () => setState((current) => (current === 'retry' ? 'failed' : 'waiting'));

  useEffect(() => {
    if (state !== 'waiting') return undefined;
    const timer = setTimeout(() => setState('retry'), 500);
    return () => clearTimeout(timer);
  }, [state]);

  if (state === 'failed') return <Plate name={plate} className={plateClassName} />;

  return (
    <img
      key={state === 'retry' ? 'retry' : 'first'}
      ref={(node) => {
        if (node && node.complete && node.naturalWidth === 0) failed();
      }}
      src={image.src}
      alt=""
      width={image.width}
      height={image.height}
      loading="lazy"
      decoding="async"
      className={className}
      onError={failed}
    />
  );
}
