import { motion } from "motion/react";
import { GraduationCap, BadgeCheck, Briefcase, Award } from "lucide-react";
import { Section } from "./Section";
import { EDUCATION, CERTIFICATIONS, SERVICES } from "@/lib/portfolio-data";

const serviceIcons = { Briefcase, Award } as const;

export function Credentials() {
  return (
    <Section
      id="credentials"
      eyebrow="Credentials"
      title={
        <>
          Education &amp; <span className="gradient-text">what I offer</span>.
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="glass gradient-border rounded-2xl p-6"
        >
          <h3 className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-primary uppercase">
            <GraduationCap className="size-4" /> Education
          </h3>
          <ul className="mt-5 space-y-5">
            {EDUCATION.map((e) => (
              <li key={e.degree}>
                <p className="text-sm font-semibold">{e.degree}</p>
                <p className="text-sm text-muted-foreground">{e.institution}</p>
                <p className="mt-1 font-mono text-xs text-primary/80">
                  {e.period}
                  {e.detail ? ` · ${e.detail}` : ""}
                </p>
              </li>
            ))}
          </ul>

          <h3 className="mt-8 flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-primary uppercase">
            <BadgeCheck className="size-4" /> Certifications
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {CERTIFICATIONS.map((c) => (
              <li
                key={c}
                className="rounded-full border border-border/70 bg-secondary/40 px-3 py-1.5 text-xs text-foreground/85 transition-colors hover:border-primary/60"
              >
                {c}
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {SERVICES.map((s, i) => {
            const Icon = serviceIcons[s.icon];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08 }}
                className="glass group rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="grid size-10 place-items-center rounded-xl border border-primary/30 text-primary transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "color-mix(in oklab, var(--primary) 12%, transparent)" }}
                  >
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-base font-semibold">{s.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
