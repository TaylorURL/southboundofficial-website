// A drawing of the thing a block is about, from the set under /public/art. Every
// plate shares one 160 grid and one handful of inks, and carries no ground of
// its own, so it sits on whatever card or tile draws it.
export default function Plate({ name, className = '' }) {
  return (
    <img
      src={`/art/${name}.svg`}
      alt=""
      width="160"
      height="160"
      loading="lazy"
      decoding="async"
      className={`h-auto object-contain ${className}`}
    />
  );
}
