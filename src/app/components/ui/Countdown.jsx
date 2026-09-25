import { useEffect, useState } from 'react';

const UNITS = [
  ['Days', 86400000],
  ['Hours', 3600000],
  ['Min', 60000],
  ['Sec', 1000],
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
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (Number.isNaN(end)) return null;
  const parts = split(end - now);

  return (
    <div className="flex items-stretch gap-2 sm:gap-3" role="timer" aria-live="off">
      {parts.map(([label, value]) => (
        <div
          key={label}
          className="flex w-[4.25rem] flex-col items-center border border-bone-50/20 bg-ink-950/60 py-3 sm:w-20"
        >
          <span className="font-display text-4xl font-black tabular-nums sm:text-5xl">{value}</span>
          <span className="label mt-1 text-bone-300">{label}</span>
        </div>
      ))}
    </div>
  );
}
