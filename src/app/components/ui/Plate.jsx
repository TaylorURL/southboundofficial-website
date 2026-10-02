import { useState } from 'react';

// A drawing of the thing a block is about, from the set under /public/art. Every
// plate shares one 160 grid and one handful of inks, and carries no ground of
// its own, so it sits on whatever card or tile draws it.
//
// A plate is not deferred. Every section that draws one sits below the first
// screen and carries content-visibility, which already holds its contents back
// until the reader is near them, so loading="lazy" on top of that is a second
// gate on the same work: WebKit opens the plate requests as the section comes
// into relevance and cancels them again as it leaves, and a cancelled image
// load arrives as a failed one. A plate is a kilobyte of line art, so fetching
// it with its section costs less than holding it back twice.
//
// A plate that does not arrive leaves nothing behind. The tile and the card
// both centre whatever they are given and keep their own shape, so an absent
// drawing reads as a plain ground under its label rather than as a hole.
export default function Plate({ name, className = '' }) {
  const [missing, setMissing] = useState(false);
  if (missing) return null;
  return (
    <img
      src={`/art/${name}.svg`}
      alt=""
      width="160"
      height="160"
      decoding="async"
      onError={() => setMissing(true)}
      className={`h-auto object-contain ${className}`}
    />
  );
}
