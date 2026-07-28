import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
  useScroll,
  useReducedMotion,
} from "motion/react";
import {
  ArrowRight,
  MessageSquare,
  MapPin,
  Code2,
  Layers,
  BrainCircuit,
  GraduationCap,
  Sparkles,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";
import { PROFILE } from "@/lib/portfolio-data";
import { useIsMobile } from "@/hooks/use-mobile";
import portrait from "@/assets/husnain-cutout.png.asset.json";


export function Hero({ onOpenChat }: { onOpenChat: () => void }) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % PROFILE.roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  // Mobile devices choke on parallax + 3D tilt + big blurs; keep it light there.
  const lite = !!reduceMotion || isMobile;

  // Scroll parallax: photo drifts slightly slower than the page.
  const photoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: photoRef,
    offset: ["start end", "end start"],
  });
  const parallaxRaw = useTransform(scrollYProgress, [0, 1], [36, -36]);
  const parallaxY = useSpring(parallaxRaw, { stiffness: 90, damping: 24, mass: 0.4 });

  // Pointer tilt
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const springCfg = { stiffness: 160, damping: 18, mass: 0.5 };
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [8, -8]), springCfg);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-10, 10]), springCfg);
  const shineX = useTransform(px, [-0.5, 0.5], ["20%", "80%"]);
  const shineY = useTransform(py, [-0.5, 0.5], ["15%", "85%"]);
  const shine = useMotionTemplate`radial-gradient(45% 45% at ${shineX} ${shineY}, color-mix(in oklab, var(--primary) 30%, transparent), transparent 70%)`;

  const handlePointer = (e: React.PointerEvent<HTMLDivElement>) => {
    if (lite) return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const resetPointer = () => {
    px.set(0);
    py.set(0);
  };



  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-20"
    >
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="grid-bg absolute inset-0 -z-10" />

      {!lite && (
        <motion.div
          aria-hidden
          animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute top-1/4 right-[-10%] -z-10 size-[32rem] rounded-full blur-3xl"
          style={{ background: "var(--gradient-accent)", opacity: 0.25 }}
        />
      )}

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 font-mono text-sm tracking-widest text-primary uppercase"
          >
            <MapPin className="size-4" />
            {PROFILE.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="mt-5 text-6xl leading-[0.95] font-bold tracking-tight sm:text-7xl"
          >
            {PROFILE.name}
            <span className="gradient-text">.</span>
          </motion.h1>

          <div className="mt-6 h-10 overflow-hidden sm:h-12">
            <motion.div
              animate={{ y: `-${roleIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            >
              {PROFILE.roles.map((role) => (
                <div
                  key={role}
                  className="flex h-10 items-center text-2xl font-medium sm:h-12 sm:text-3xl"
                >
                  <span className="gradient-text">{role}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            {PROFILE.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <motion.a
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground"
              style={{ background: "var(--gradient-accent)", boxShadow: "var(--shadow-glow)" }}
            >
              View Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.button
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenChat}
              className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-colors hover:border-primary/60"
            >
              <MessageSquare className="size-4 text-primary" />
              Chat with my AI Assistant
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-14 flex flex-wrap gap-x-10 gap-y-3 font-mono text-xs text-muted-foreground"
          >
            <span className="inline-flex items-center gap-2">
              <Code2 className="size-3.5 text-primary" />
              2+ yrs full stack
            </span>
            <span className="inline-flex items-center gap-2">
              <Layers className="size-3.5 text-primary" />
              MERN / MEAN
            </span>
            <span className="inline-flex items-center gap-2">
              <BrainCircuit className="size-3.5 text-primary" />
              AI &amp; ML delivery
            </span>
            <span className="inline-flex items-center gap-2">
              <GraduationCap className="size-3.5 text-primary" />
              BSCS — GCU Lahore, 3.6 CGPA
            </span>
          </motion.div>
        </div>

        <motion.div
          ref={photoRef}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 90, damping: 18 }}

          style={{ y: reduceMotion ? 0 : parallaxY, perspective: 1000 }}
          onPointerMove={handlePointer}
          onPointerLeave={resetPointer}
          className="group relative mx-auto w-full max-w-sm"
        >
          <motion.div
            aria-hidden
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 rounded-[2.5rem] opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-90"
            style={{ background: "var(--gradient-accent)" }}
          />
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.03 }}
            className="glass relative overflow-hidden rounded-[2rem] p-2"
            style={{
              boxShadow: "var(--shadow-glow)",
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
          >
            <div
              aria-hidden
              className="absolute inset-2 rounded-[1.6rem]"
              style={{
                background:
                  "radial-gradient(70% 70% at 50% 30%, color-mix(in oklab, var(--violet) 35%, transparent), color-mix(in oklab, var(--surface-2) 90%, transparent))",
              }}
            />
            <motion.img
              src={portrait.url}
              alt="Husnain — Software Engineer specializing in full stack and AI/ML"
              className="relative aspect-square w-full rounded-[1.6rem] object-contain"
              loading="eager"
              style={{ scale: 1.02, translateZ: 30 }}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            />
            <div
              className="pointer-events-none absolute inset-2 rounded-[1.6rem]"
              style={{
                background:
                  "linear-gradient(to top, color-mix(in oklab, var(--background) 65%, transparent), transparent 45%)",
              }}
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-2 rounded-[1.6rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: shine, mixBlendMode: "screen" }}
            />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="glass absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full px-3.5 py-2 font-mono text-[11px]"
            >
              <span className="size-2 animate-pulse rounded-full bg-primary" />
              Available for work
            </motion.div>
          </motion.div>

          <motion.span
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -top-4 -left-4 inline-flex items-center gap-2 rounded-full px-3.5 py-2 font-mono text-[11px] text-foreground/90"
          >
            <Sparkles className="size-3.5 text-primary" />
            AI / ML
          </motion.span>
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -right-3 bottom-16 inline-flex items-center gap-2 rounded-full px-3.5 py-2 font-mono text-[11px] text-foreground/90"
          >
            <Code2 className="size-3.5 text-primary" />
            Full Stack
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
