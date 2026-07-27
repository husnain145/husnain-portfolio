import { motion } from "motion/react";
import {
  ArrowRight,
  MessageSquare,
  MapPin,
  Code2,
  Layers,
  BrainCircuit,
  GraduationCap,
} from "lucide-react";

import { useEffect, useState } from "react";
import { PROFILE } from "@/lib/portfolio-data";

export function Hero({ onOpenChat }: { onOpenChat: () => void }) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % PROFILE.roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-20"
    >
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="grid-bg absolute inset-0 -z-10" />

      <div className="mx-auto w-full max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-sm tracking-widest text-primary uppercase"
        >
          {PROFILE.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="mt-5 text-6xl leading-[0.95] font-bold tracking-tight sm:text-7xl md:text-8xl"
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
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--gradient-accent)", boxShadow: "var(--shadow-glow)" }}
          >
            View Projects
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <button
            onClick={onOpenChat}
            className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-colors hover:border-primary/60"
          >
            <MessageSquare className="size-4 text-primary" />
            Chat with my AI Assistant
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex flex-wrap gap-x-10 gap-y-3 font-mono text-xs text-muted-foreground"
        >
          <span>2+ yrs full stack</span>
          <span>MERN / MEAN</span>
          <span>AI & ML delivery</span>
          <span>BSCS — GCU Lahore, 3.6 CGPA</span>
        </motion.div>
      </div>
    </section>
  );
}
