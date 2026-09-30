import { useEffect } from 'react';

// One hairline ring opens from the point of a press and is gone inside half a
// second. It draws on a fixed layer of its own that takes no pointer events,
// so it never clips and never stands between a finger and a control. Left
// button only, and nothing at all under reduced motion.
export function useClickEffect() {
  useEffect(() => {
    const still = window.matchMedia('(prefers-reduced-motion: reduce)');
    const layer = document.createElement('div');
    layer.className = 'click-layer';
    layer.setAttribute('aria-hidden', 'true');
    document.body.appendChild(layer);

    const draw = (event) => {
      if (still.matches || event.button !== 0) return;
      const ripple = document.createElement('span');
      ripple.className = 'click-ripple';
      ripple.style.left = `${event.clientX}px`;
      ripple.style.top = `${event.clientY}px`;
      layer.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
    };

    document.addEventListener('pointerdown', draw);
    return () => {
      document.removeEventListener('pointerdown', draw);
      layer.remove();
    };
  }, []);
}
