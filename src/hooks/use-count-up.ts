import { useEffect, useRef, useState } from "react";

/**
 * Counts from 0 -> `to` using a single requestAnimationFrame loop.
 * Only runs once, and only after `active` flips true (drive it from whileInView).
 * Respects prefers-reduced-motion by jumping straight to the value.
 */
export function useCountUp(to: number, active: boolean, decimals = 0, duration = 1100) {
  const [value, setValue] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    if (!active || done.current) return;
    done.current = true;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setValue(to);
      return;
    }

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Number((to * eased).toFixed(decimals)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, to, decimals, duration]);

  return value.toFixed(decimals);
}
