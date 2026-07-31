import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useCountUp } from "@/hooks/use-count-up";
import {
  Atom,
  Triangle,
  Shield,
  Hexagon,
  Route,
  Flame,
  Zap,
  Leaf,
  Database,
  Code2,
  BrainCircuit,
  FileCode,
  Wind,
  Box,
  Cpu,
  GraduationCap,
  Rocket,
  Sparkles,
} from "lucide-react";
import { Section } from "./Section";
import { TECH_BADGES } from "@/lib/portfolio-data";

const techIcons = {
  atom: Atom,
  triangle: Triangle,
  shield: Shield,
  hexagon: Hexagon,
  route: Route,
  flame: Flame,
  zap: Zap,
  leaf: Leaf,
  database: Database,
  code2: Code2,
  brainCircuit: BrainCircuit,
  fileCode: FileCode,
  wind: Wind,
  box: Box,
};

const STORY = [
  {
    icon: Code2,
    text: "I'm Husnain, a software engineer with 2+ years of full stack experience building production web applications on the MERN and MEAN stacks — from schema design and REST APIs to polished React and Angular interfaces.",
  },
  {
    icon: BrainCircuit,
    text: "Today I freelance full-time on AI/ML work: healthcare prediction systems, fraud detection pipelines and NLP-based phishing detection. Before that I built backend services in Laravel and Node.js at Programmers Force, and shipped 3D gameplay as a Unity developer at Sabasoft.",
  },
  {
    icon: GraduationCap,
    text: "I hold a BS in Computer Science from Government College University Lahore with a 3.6 CGPA, where my final year project paired BLIP and ViT models into an image caption generator and tutor for blind individuals.",
  },
];

const STATS = [
  { icon: Rocket, to: 2, decimals: 0, suffix: "+", label: "Years shipping" },
  { icon: Cpu, to: 7, decimals: 0, suffix: "+", label: "Flagship projects" },
  { icon: Sparkles, to: 3.6, decimals: 1, suffix: "", label: "CGPA — BSCS" },
];

function StatCard({ stat, index }: { stat: (typeof STATS)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const value = useCountUp(stat.to, inView, stat.decimals);
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 + index * 0.1 }}
      whileHover={{ y: -4 }}
      className="glass rounded-2xl px-4 py-4 text-center"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <Icon className="mx-auto size-4 text-primary" />
      <p className="mt-2 text-2xl font-bold tracking-tight">
        <span className="gradient-text">
          {value}
          {stat.suffix}
        </span>
      </p>
      <p className="mt-1 font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
        {stat.label}
      </p>
    </motion.div>
  );
}

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={
        <>
          Engineer across the <span className="gradient-text">full stack</span> and the model layer.
        </>
      }
    >
      <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4">
          {STORY.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                whileHover={{ y: -3 }}
                className="glass group relative overflow-hidden rounded-2xl p-5 pl-16 transition-colors hover:border-primary/50"
              >
                <span
                  className="absolute top-0 bottom-0 left-0 w-1 opacity-70 transition-opacity group-hover:opacity-100"
                  style={{ background: "var(--gradient-accent)" }}
                />
                <span className="glass absolute top-5 left-5 grid size-8 place-items-center rounded-xl">
                  <Icon className="size-4 text-primary" />
                </span>
                <p className="text-base leading-relaxed text-muted-foreground">{item.text}</p>
              </motion.div>
            );
          })}

          <div className="grid grid-cols-3 gap-3 pt-2">
            {STATS.map((s, i) => (
              <StatCard key={s.label} stat={s} index={i} />
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 font-mono text-xs tracking-[0.25em] text-primary uppercase">
            Toolbox
          </p>
          <div className="flex flex-wrap content-start gap-2.5">
            {TECH_BADGES.map((tech, i) => {
              const Icon = techIcons[tech.icon];
              return (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ y: -4, scale: 1.06 }}
                  className="glass group inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs text-foreground/90 transition-colors hover:border-primary/60"
                >
                  <Icon className="size-3.5 text-primary transition-transform group-hover:rotate-12" />
                  {tech.name}
                </motion.span>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
