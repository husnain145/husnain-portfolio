import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react";
import { z } from "zod";
import { Section } from "./Section";
import { PROFILE } from "@/lib/portfolio-data";

// Paste your Formspree form endpoint here (e.g. https://formspree.io/f/xxxxxxx).
// While it is empty, the form opens a pre-filled email in the visitor's mail client.
export const FORMSPREE_ENDPOINT = "";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Please enter a message").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<{ type: "error" | "success"; text: string } | null>(null);
  const [sending, setSending] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      setStatus({ type: "error", text: parsed.error.issues[0].message });
      return;
    }
    const data = parsed.data;

    if (!FORMSPREE_ENDPOINT) {
      const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`);
      window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
        `Portfolio enquiry from ${data.name}`,
      )}&body=${body}`;
      setStatus({ type: "success", text: "Opening your email client…" });
      return;
    }

    setSending(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus({ type: "success", text: "Message sent — I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus({ type: "error", text: "Could not send. Please email me directly." });
    } finally {
      setSending(false);
    }
  }

  const links = [
    { icon: Mail, label: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { icon: Phone, label: PROFILE.phones.join(" / "), href: `tel:${PROFILE.phones[1].replace(/\s/g, "")}` },
    { icon: Linkedin, label: "linkedin.com/in/husnain-ali", href: PROFILE.linkedin },
    { icon: Github, label: "github.com/husnain145", href: PROFILE.github },
  ];

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={
        <>
          Let's build <span className="gradient-text">something</span>.
        </>
      }
    >
      <div className="grid gap-10 md:grid-cols-2">
        <form onSubmit={onSubmit} className="glass space-y-4 rounded-2xl p-6">
          <div>
            <label className="font-mono text-xs text-muted-foreground" htmlFor="name">
              NAME
            </label>
            <input
              id="name"
              value={form.name}
              maxLength={100}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-1.5 w-full rounded-xl border border-input bg-background/40 px-4 py-3 text-sm outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="font-mono text-xs text-muted-foreground" htmlFor="email">
              EMAIL
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              maxLength={255}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-1.5 w-full rounded-xl border border-input bg-background/40 px-4 py-3 text-sm outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="font-mono text-xs text-muted-foreground" htmlFor="message">
              MESSAGE
            </label>
            <textarea
              id="message"
              rows={5}
              maxLength={1000}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-1.5 w-full resize-none rounded-xl border border-input bg-background/40 px-4 py-3 text-sm outline-none focus:border-primary"
            />
          </div>
          {status && (
            <p
              className={`text-xs ${status.type === "error" ? "text-destructive" : "text-primary"}`}
            >
              {status.text}
            </p>
          )}
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            style={{ background: "var(--gradient-accent)" }}
          >
            <Send className="size-4" />
            {sending ? "Sending…" : "Send message"}
          </button>
        </form>

        <div className="space-y-3">
          <p className="flex items-center gap-3 text-sm text-muted-foreground">
            <MapPin className="size-4 text-primary" />
            {PROFILE.location}
          </p>
          {links.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="glass group flex items-center gap-4 rounded-xl px-5 py-4 transition-colors hover:border-primary/60"
            >
              <Icon className="size-4 text-primary" />
              <span className="text-sm break-all group-hover:text-primary">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
