import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { PROFILE, RESUME } from "@/lib/portfolio-data";


const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        scrolled ? "glass" : "border-b border-transparent"
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
              <a key={l.href} href={l.href} className="transition-colors hover:text-primary">
                {l.label}
              </a>
            ))}
          </div>
          <a
            href={RESUME.url}
            download={RESUME.fileName}
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary/10"
          >
            <Download className="size-3.5" />
            Resume
          </a>
        </div>
      </nav>

    </header>
  );
}
