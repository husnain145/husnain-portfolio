import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Section } from "./Section";
import { SKILLS, SOFT_SKILLS } from "@/lib/portfolio-data";
import { useCountUp } from "@/hooks/use-count-up";

function SkillBar({ name, level }: { name: string; level: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const shown = useCountUp(level, inView);

  return (
    <div ref={ref}>
      <div className="flex justify-between text-sm">
        <span>{name}</span>
        <span className="font-mono text-xs text-muted-foreground">{shown}%</span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
        <motion.div
          initial={{ transform: "scaleX(0)" }}
          animate={inView ? { transform: "scaleX(1)" } : undefined}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative h-full origin-left rounded-full"
          style={{ width: `${level}%`, background: "var(--gradient-accent)" }}
        >
          <span
            className="absolute top-1/2 right-0 size-2 -translate-y-1/2 rounded-full"
            style={{
              background: "var(--primary)",
              boxShadow: "0 0 8px color-mix(in oklab, var(--primary) 80%, transparent)",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

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
                <SkillBar key={item.name} name={item.name} level={item.level} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2.5">
        {SOFT_SKILLS.map((s) => (
          <motion.span
            key={s}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
            className="glass rounded-full px-4 py-2 text-xs text-foreground/85 transition-colors hover:border-primary/60"
          >
            {s}
          </motion.span>
        ))}
      </div>
    </Section>
  );
}
