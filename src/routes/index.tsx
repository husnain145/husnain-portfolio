import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { ChatWidget } from "@/components/portfolio/ChatWidget";
import { AiBackground } from "@/components/portfolio/AiBackground";
import { RobotCursor } from "@/components/portfolio/RobotCursor";
import { PROFILE } from "@/lib/portfolio-data";

const title = "Husnain — Full Stack (MERN/MEAN) & AI/ML Engineer";
const description =
  "Portfolio of Husnain, a software engineer building scalable MERN/MEAN web applications and AI/ML solutions from concept to deployment.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://husnain-dev.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://husnain-dev.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          url: "https://husnain-dev.lovable.app/",
          mainEntity: {
            "@type": "Person",
            name: "Husnain Ali",
            jobTitle: "Full Stack & AI/ML Engineer",
            description,
            url: "https://husnain-dev.lovable.app/",
            knowsAbout: [
              "MERN Stack",
              "MEAN Stack",
              "React",
              "Node.js",
              "Machine Learning",
              "LLM Integration",
            ],
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <AiBackground />
      <RobotCursor />
      <Nav />
      <main>
        <Hero onOpenChat={() => setChatOpen(true)} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-border px-6 py-10 text-center font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} {PROFILE.name} · Built with React, TanStack Start & Lovable AI
      </footer>
      <ChatWidget open={chatOpen} setOpen={setChatOpen} />
    </div>
  );
}
