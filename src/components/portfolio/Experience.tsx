import { motion } from "motion/react";
import { Brain, Gamepad2, Server } from "lucide-react";
import { Section } from "./Section";
import { EXPERIENCE } from "@/lib/portfolio-data";

const icons = { brain: Brain, server: Server, gamepad: Gamepad2 };

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={
        <>
          Where I've <span className="gradient-text">shipped</span>.
        </>
      }
    >
      <div className="relative pl-8 sm:pl-12">
        <div
          className="absolute top-2 bottom-2 left-3 w-px sm:left-5"
          style={{ background: "var(--gradient-accent)", opacity: 0.5 }}
        />
        <div className="space-y-10">
          {EXPERIENCE.map((job, i) => {
            const Icon = icons[job.icon];
            return (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <span className="glass absolute top-1 -left-8 flex size-6 items-center justify-center rounded-full sm:-left-12 sm:size-10">
                  <Icon className="size-3 text-primary sm:size-4" />
                </span>
                <div className="glass rounded-2xl p-6 transition-colors hover:border-primary/50">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-semibold">{job.role}</h3>
                    <span className="font-mono text-xs text-primary">{job.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-accent">{job.company}</p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
