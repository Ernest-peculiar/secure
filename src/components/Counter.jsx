import { useEffect, useState } from 'react';
import useInView, { prefersReducedMotion } from '../hooks/useInView.js';

/** Counts from 0 up to `to` once it scrolls into view. */
export default function Counter({ to, duration = 1800, suffix = '+' }) {
  const [ref, seen] = useInView();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!seen) return undefined;
    if (prefersReducedMotion()) {
      setN(to);
      return undefined;
    }
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / duration);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to, duration]);

  return (
    <span ref={ref} className="counter">
      <span aria-hidden="true">{n.toLocaleString('en-US')}</span>
      <span className="sr-only">{to.toLocaleString('en-US')}</span>
      {suffix}
    </span>
  );
}
