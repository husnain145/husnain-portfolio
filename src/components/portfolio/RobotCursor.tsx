import { useEffect, useRef, useState } from "react";

/**
 * Small futuristic AI companion that trails the cursor.
 * - single rAF loop, only transform/opacity are animated
 * - pointer-events: none so it never blocks the UI
 * - disabled on touch devices and for prefers-reduced-motion
 */
export function RobotCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let tilt = 0;
    let visible = false;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!visible) {
        visible = true;
        el.style.opacity = "1";
      }
    };
    const onLeave = () => {
      visible = false;
      el.style.opacity = "0";
    };

    const loop = () => {
      // trail slightly behind the cursor with easing
      const dx = targetX - 28 - x;
      const dy = targetY + 26 - y;
      x += dx * 0.12;
      y += dy * 0.12;
      // gently rotate toward movement direction
      tilt += (Math.max(-14, Math.min(14, dx * 0.35)) - tilt) * 0.1;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${tilt.toFixed(2)}deg)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="robot-cursor pointer-events-none fixed top-0 left-0 z-[60] opacity-0"
    >
      <div className="robot-cursor-float">
        <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
          <defs>
            <linearGradient id="rc-body" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--primary)" />
              <stop offset="100%" stopColor="var(--violet)" />
            </linearGradient>
          </defs>
          {/* antenna */}
          <line x1="20" y1="6" x2="20" y2="11" stroke="url(#rc-body)" strokeWidth="1.6" />
          <circle cx="20" cy="4.6" r="2.1" fill="var(--primary)" className="robot-cursor-blip" />
          {/* head */}
          <rect
            x="7.5"
            y="11"
            width="25"
            height="19"
            rx="7"
            fill="color-mix(in oklab, var(--surface-2) 92%, transparent)"
            stroke="url(#rc-body)"
            strokeWidth="1.4"
          />
          {/* eyes */}
          <g className="robot-cursor-eyes">
            <circle cx="15.5" cy="20.5" r="2.5" fill="var(--primary)" />
            <circle cx="24.5" cy="20.5" r="2.5" fill="var(--primary)" />
          </g>
          {/* ears */}
          <rect x="4.4" y="17" width="2.6" height="7" rx="1.3" fill="var(--violet)" />
          <rect x="33" y="17" width="2.6" height="7" rx="1.3" fill="var(--violet)" />
          {/* smile */}
          <path
            d="M16 26.2q4 2.2 8 0"
            stroke="color-mix(in oklab, var(--primary) 60%, transparent)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
