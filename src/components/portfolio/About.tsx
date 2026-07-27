import { motion } from "motion/react";
import { Section } from "./Section";
import { TECH_BADGES } from "@/lib/portfolio-data";

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
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            I'm Husnain, a software engineer with 2+ years of full stack experience building
            production web applications on the MERN and MEAN stacks — from schema design and REST
            APIs to polished React and Angular interfaces.
          </p>
          <p>
            Today I freelance full-time on AI/ML work: healthcare prediction systems, fraud
            detection pipelines and NLP-based phishing detection. Before that I built backend
            services in Laravel and Node.js at Programmers Force, and shipped 3D gameplay as a Unity
            developer at Sabasoft.
          </p>
          <p>
            I hold a BS in Computer Science from Government College University Lahore with a 3.6
            CGPA, where my final year project paired BLIP and ViT models into an image caption
            generator and tutor for blind individuals.
          </p>
        </div>

        <div className="flex flex-wrap content-start gap-2.5">
          {TECH_BADGES.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -3 }}
              className="glass rounded-full px-4 py-2 font-mono text-xs text-foreground/90"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </Section>
  );
}
