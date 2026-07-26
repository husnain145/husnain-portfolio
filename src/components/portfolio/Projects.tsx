import { motion } from "motion/react";
import { Github, ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { PROJECTS, PROFILE } from "@/lib/portfolio-data";

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
        {PROJECTS.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: (i % 2) * 0.08 }}
            whileHover={{ y: -6 }}
            className="glass group flex flex-col overflow-hidden rounded-2xl transition-colors hover:border-primary/60"
          >
            <div
              className={`relative h-32 bg-gradient-to-br ${project.accent} opacity-80 transition-opacity group-hover:opacity-100`}
            >
              <div className="grid-bg absolute inset-0" />
              <span className="absolute bottom-3 left-5 font-mono text-xs tracking-widest text-background/80 uppercase">
                0{i + 1}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-semibold">{project.title}</h3>
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
        ))}
      </div>
    </Section>
  );
}
