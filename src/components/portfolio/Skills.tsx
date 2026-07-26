import { motion } from "motion/react";
import { Section } from "./Section";
import { SKILLS, SOFT_SKILLS } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={
        <>
          The <span className="gradient-text">toolkit</span>.
        </>
      }
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {SKILLS.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: gi * 0.06 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
              {group.category}
            </h3>
            <div className="mt-5 space-y-4">
              {group.items.map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between text-sm">
                    <span>{item.name}</span>
                    <span className="font-mono text-xs text-muted-foreground">{item.level}%</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: "var(--gradient-accent)" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2.5">
        {SOFT_SKILLS.map((s) => (
          <span key={s} className="glass rounded-full px-4 py-2 text-xs text-foreground/85">
            {s}
          </span>
        ))}
      </div>
    </Section>
  );
}
