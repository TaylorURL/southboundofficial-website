// The giveaway that is open right now. An empty value is how a detail that is
// not settled yet is held: the hero shows the countdown and the prize only once
// both are filled in, and until then it points people at Instagram, where every
// giveaway is announced first. Never put a plausible date or prize here to fill
// the space, because it will be read as a real one.
export const GIVEAWAY = {
  number: '',
  prize: '',
  // ISO 8601 with an offset, e.g. '2026-10-31T21:00:00-05:00'
  endsAt: '',
};
