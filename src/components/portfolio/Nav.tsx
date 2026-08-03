import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { PROFILE, RESUME } from "@/lib/portfolio-data";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section indicator — IntersectionObserver, no scroll math.
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => !!el);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-mono text-sm font-semibold tracking-widest uppercase">
          {PROFILE.name}
          <span className="text-primary">.dev</span>
        </a>
        <div className="flex items-center gap-7">
          <div className="hidden gap-7 text-sm text-muted-foreground sm:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-active={active === l.href}
                className="nav-link transition-colors hover:text-primary data-[active=true]:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href={RESUME.url}
            download={RESUME.fileName}
            className="btn-ai gradient-border inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-xs font-semibold text-primary hover:bg-primary/10"
          >
            <Download className="size-3.5" />
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
