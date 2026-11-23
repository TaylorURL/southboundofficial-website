import { useEffect, useRef, useState } from 'react';
import Plate from '@components/ui/Plate.jsx';

// A product photo out of /public/shop, and what happens when one of them does
// not arrive.
//
// The decal on the Decals tile is the only photograph the home page carries:
// everything else on it is a brand mark, and the marks are small, cached for a
// week and mostly above the fold. The photo sits at the bottom of the page and
// is lazy, so it is the last request a visit to the home page makes, and it is
// asked for at the exact moment a reader who has reached the bottom is most
// likely to leave. A request cancelled by that departure fires the same error
// event as a file that is not there, which is how a photo serving 200 with
// 42884 bytes keeps arriving as a broken one.
//
// So this is what the tile does when a photo does not come: one more try,
// because a cancelled or dropped request almost always succeeds on the second
// ask, and then the category's drawn plate, which is inline line art and cannot
// fail. A tile that kept its label and lost its picture left a hole that read
// as a gap in the drop rather than as a missing file.
//
// The page is prerendered, so the photo's request is made and can fail before
// any of this has mounted - an `onError` handler alone hears nothing, because
// the failure is already over by the time React attaches to the element it was
// served with. So the element is also asked on mount whether it is a finished
// load with no pixels in it, which is what a failure looks like after the fact.
//
// And because the second ask is what tells a departure from a missing file, it
// is also what decides whether the owner is told. The img carries
// `data-recovers`, which holds the page's own report of that first failure
// instead of sending it, and this component then says how it ended: `recovered`
// when the photo arrives, `failed` when it has run out of tries. Nothing is
// muted - a photo that genuinely is not there is reported about a second after
// the first attempt, and the held report is sent anyway if this component never
// answers for it, which is what a page whose bundle never ran looks like.
export default function Photo({ image, plate, className = '', plateClassName = '' }) {
  const [state, setState] = useState('first');
  const [shown, setShown] = useState(image.src);
  // The absolute URL the browser actually asked for, which is the key the
  // page's held report is filed under. Read off the element rather than built
  // here, so the two cannot drift.
  const asked = useRef(image.src);

  // A new photo in the same slot starts over, worked out while rendering rather
  // than in an effect: an effect that resets also runs on the first mount, and
  // on a prerendered page the failure is already known by then, so it would
  // undo the one it was meant to recover from.
  if (shown !== image.src) {
    setShown(image.src);
    setState('first');
  }

  const failed = (node) => {
    if (node && node.src) asked.current = node.src;
    setState((current) => (current === 'retry' ? 'failed' : 'waiting'));
  };

  const arrived = (node) => {
    if (node && node.src) asked.current = node.src;
    tell('recovered', asked.current);
  };

  useEffect(() => {
    if (state !== 'waiting') return undefined;
    const timer = setTimeout(() => setState('retry'), 500);
    return () => clearTimeout(timer);
  }, [state]);

  useEffect(() => {
    if (state !== 'failed') return;
    tell('failed', asked.current);
  }, [state]);

  if (state === 'failed') return <Plate name={plate} className={plateClassName} />;

  return (
    <img
      key={state === 'retry' ? 'retry' : 'first'}
      ref={(node) => {
        if (!node) return;
        if (node.complete && node.naturalWidth === 0) failed(node);
        else if (node.complete) arrived(node);
      }}
      src={image.src}
      alt=""
      width={image.width}
      height={image.height}
      loading="lazy"
      decoding="async"
      data-recovers=""
      className={className}
      onLoad={(event) => arrived(event.currentTarget)}
      onError={(event) => failed(event.currentTarget)}
    />
  );
}

// The page's reporter is an inline script in the document head, so it is there
// before any of this is, on every page and in every build. It is still spoken to
// defensively: this component renders on the server too, where there is no
// window at all.
function tell(outcome, url) {
  if (typeof window === 'undefined') return;
  const reporter = window.__reporter;
  if (reporter && typeof reporter[outcome] === 'function') reporter[outcome](url);
}
