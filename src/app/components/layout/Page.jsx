// The frame every page a tile or the menu opens shares: a line naming where the
// page sits, its title, a line under the title when it needs one, and what it
// holds beneath.
export default function Page({ eyebrow, title, lead, wide = false, children }) {
  return (
    <article className="px-5 pb-24 pt-14 sm:pt-20">
      <div className={`mx-auto ${wide ? 'max-w-shell' : 'max-w-3xl'}`}>
        {typeof eyebrow === 'string' ? (
          <p className="label text-bone-300">{eyebrow}</p>
        ) : (
          <div>{eyebrow}</div>
        )}
        <h1 className="slant mt-4 block text-6xl sm:text-7xl">{title}</h1>
        {lead ? <div className="mt-4">{lead}</div> : null}
        <div className="mt-10">{children}</div>
      </div>
    </article>
  );
}
