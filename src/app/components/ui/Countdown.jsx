import { useEffect, useState } from 'react';

const UNITS = [
  ['Days', 86400000],
  ['Hours', 3600000],
  ['Minutes', 60000],
  ['Seconds', 1000],
];

function split(ms) {
  let rest = Math.max(0, ms);
  return UNITS.map(([label, size]) => {
    const value = Math.floor(rest / size);
    rest -= value * size;
    return [label, String(value).padStart(2, '0')];
  });
}

export default function Countdown({ endsAt }) {
  const end = Date.parse(endsAt);
  // No clock until the page is live in a browser: the build writes this markup
  // ahead of time, and a time read then would disagree with the one read here.
  const [now, setNow] = useState(null);

  useEffect(() => {
    setNow(Date.now());
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (Number.isNaN(end)) return null;
  const parts = now === null ? UNITS.map(([label]) => [label, '--']) : split(end - now);

  return (
    <div className="grid grid-cols-4 gap-4 sm:gap-8" role="timer" aria-live="off">
      {parts.map(([label, value]) => (
        <div key={label} className="flex flex-col items-center">
          <span className="glow font-display text-5xl font-black tabular-nums text-signal-500 sm:text-7xl">
            {value}
          </span>
          <span className="label mt-1 text-bone-100">{label}</span>
        </div>
      ))}
    </div>
  );
}
