import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * Scroll progress bar + back-to-top button.
 * One passive scroll listener, rAF-throttled, writes only transform/opacity.
 */
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
      setShowTop(window.scrollY > 700);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div aria-hidden className="fixed inset-x-0 top-0 z-50 h-0.5">
        <div
          ref={barRef}
          className="h-full origin-left"
          style={{ background: "var(--gradient-accent)", transform: "scaleX(0)" }}
        />
      </div>
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`btn-ai fixed bottom-6 left-6 z-40 grid size-11 place-items-center rounded-full border border-primary/40 text-primary backdrop-blur transition-all duration-300 hover:bg-primary/10 ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
        style={{ background: "color-mix(in oklab, var(--card) 70%, transparent)" }}
      >
        <ArrowUp className="size-4" />
      </button>
    </>
  );
}
