import { motion } from "motion/react";
import {
  Github,
  ArrowUpRight,
  GraduationCap,
  Tv,
  Gavel,
  Eye,
  HeartPulse,
  ShieldAlert,
  Fish,
} from "lucide-react";
import { Section } from "./Section";
import { PROJECTS, PROFILE } from "@/lib/portfolio-data";

const projectIcons = {
  graduationCap: GraduationCap,
  tv: Tv,
  gavel: Gavel,
  eye: Eye,
  heartPulse: HeartPulse,
  shieldAlert: ShieldAlert,
  fish: Fish,
};

export function Projects() {

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={
        <>
          Selected <span className="gradient-text">work</span>.
        </>
      }
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {PROJECTS.map((project, i) => {
          const Icon = projectIcons[project.icon];
          return (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: (i % 2) * 0.08 }}
            whileHover={{ y: -6 }}
            className="glass group relative flex flex-col overflow-hidden rounded-2xl p-6 transition-colors hover:border-primary/60"
          >
            <div
              className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${project.accent} opacity-70`}
            />
            <div
              className={`pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-gradient-to-br ${project.accent} opacity-10 blur-2xl transition-opacity duration-300 group-hover:opacity-25`}
            />

            <div className="flex items-center justify-between">
              <span
                className={`flex size-12 items-center justify-center rounded-xl bg-gradient-to-br ${project.accent} shadow-lg`}
              >
                <Icon className="size-5 text-background" />
              </span>
              <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                0{i + 1}
              </span>
            </div>

            <div className="flex flex-1 flex-col">
              <h3 className="mt-5 text-lg leading-snug font-semibold">{project.title}</h3>

              <p className="mt-2 flex-1 text-sm text-muted-foreground">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-foreground/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-accent"
              >
                <Github className="size-4" />
                View on GitHub
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </motion.article>
          );
        })}

      </div>
    </Section>
  );
}
