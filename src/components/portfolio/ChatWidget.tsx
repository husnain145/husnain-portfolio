import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { motion, AnimatePresence } from "motion/react";
import { Bot, X, ArrowUp, MessageSquare } from "lucide-react";
import { ASSISTANT_NAME, SUGGESTED_QUESTIONS } from "@/lib/chatbot-config";

export function ChatWidget({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const busy = status === "submitted" || status === "streaming";

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open, status]);

  function send(text: string) {
    const value = text.trim();
    if (!value || busy) return;
    void sendMessage({ text: value });
    setInput("");
  }

  return (
    <>
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open Husnain's AI Assistant"
        className="glow-ring fixed right-5 bottom-5 z-50 flex size-14 items-center justify-center rounded-full text-primary-foreground"
        style={{ background: "var(--gradient-accent)" }}
      >
        {open ? <X className="size-6" /> : <MessageSquare className="size-6" />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="glass fixed right-4 bottom-24 z-50 flex h-[min(560px,72vh)] w-[min(400px,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl shadow-2xl"
          >
            <header className="flex items-center gap-3 border-b border-border px-5 py-4">
              <span
                className="flex size-9 items-center justify-center rounded-full text-primary-foreground"
                style={{ background: "var(--gradient-accent)" }}
              >
                <Bot className="size-4" />
              </span>
              <div>
                <p className="text-sm font-semibold">{ASSISTANT_NAME}</p>
                <p className="font-mono text-[11px] text-primary">online · answers recruiter Qs</p>
              </div>
            </header>

            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
              {messages.length === 0 && (
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Hi — I'm Husnain's AI assistant. Ask me about his experience, projects, skills
                    or availability.
                  </p>
                  <div className="flex flex-col gap-2">
                    {SUGGESTED_QUESTIONS.map((q) => (
                      <button
                        key={q}
                        onClick={() => send(q)}
                        className="rounded-xl border border-border px-3.5 py-2.5 text-left text-xs text-foreground/85 transition-colors hover:border-primary/60 hover:text-primary"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((m) => {
                const text = m.parts
                  .map((p) => (p.type === "text" ? p.text : ""))
                  .join("")
                  .trim();
                if (!text) return null;
                return m.role === "user" ? (
                  <div key={m.id} className="flex justify-end">
                    <p className="max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-sm whitespace-pre-wrap text-primary-foreground">
                      {text}
                    </p>
                  </div>
                ) : (
                  <p
                    key={m.id}
                    className="max-w-[92%] text-sm leading-relaxed whitespace-pre-wrap text-foreground/90"
                  >
                    {text}
                  </p>
                );
              })}

              {status === "submitted" && (
                <div className="flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      animate={{ opacity: [0.25, 1, 0.25] }}
                      transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.18 }}
                      className="size-1.5 rounded-full bg-primary"
                    />
                  ))}
                </div>
              )}

              {error && (
                <p className="text-xs text-destructive">
                  The assistant is unavailable right now. Please email husnainbscs@gmail.com.
                </p>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="border-t border-border p-3"
            >
              <div className="flex items-end gap-2 rounded-2xl border border-input bg-background/50 px-3 py-2">
                <textarea
                  ref={inputRef}
                  rows={1}
                  value={input}
                  placeholder="Ask about Husnain's experience…"
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      send(input);
                    }
                  }}
                  className="max-h-28 flex-1 resize-none bg-transparent py-1.5 text-sm outline-none"
                />
                <button
                  type="submit"
                  disabled={busy || !input.trim()}
                  aria-label="Send message"
                  className="flex size-8 shrink-0 items-center justify-center rounded-full text-primary-foreground disabled:opacity-40"
                  style={{ background: "var(--gradient-accent)" }}
                >
                  <ArrowUp className="size-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
