// The giveaway that is open right now. An empty value is how a detail that is
// not settled yet is held: the hero shows the countdown and the prize only once
// both are filled in, and until then it points people at Instagram, where every
// giveaway is announced first. Never put a plausible date or prize here to fill
// the space, because it will be read as a real one. The Official Rules page
// reads the same values, so the rules and the hero can never disagree.
export const GIVEAWAY = {
  number: '',
  prize: '',
  // Approximate retail value in whole dollars with no symbol, as the rules state it
  prizeValue: '',
  // A photo of the prize under /public, e.g. '/giveaway/prize.webp'
  image: '',
  // ISO 8601 with an offset, e.g. '2026-10-01T09:00:00-05:00'
  startsAt: '',
  endsAt: '',
  // Entries one order earns, and the entries one free mail-in entry earns.
  entriesPerOrder: '',
  entriesPerFreeEntry: '',
};

export const ENTRY_STEPS = ['Shop', 'Check Out', 'Entered'];

// Open once there is both a prize and an end time to count down to.
export const LIVE = Boolean(GIVEAWAY.prize && !Number.isNaN(Date.parse(GIVEAWAY.endsAt)));

export const HEADLINE = LIVE
  ? GIVEAWAY.prize
  : GIVEAWAY.number
    ? `Giveaway No. ${GIVEAWAY.number}`
    : 'Prize Reveal Soon';
