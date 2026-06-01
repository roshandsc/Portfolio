"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sparkles, Bot, FileText, Sliders, Globe, Command } from "lucide-react";
import { aiResponses } from "@/lib/portfolio-data";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const SPOTLIGHT_SUGGESTIONS = [
  { id: "who", label: "Who is Roshan?", query: "Who is Roshan Shetty?" },
  { id: "projects", label: "What projects has he built?", query: "What projects has he built?" },
  { id: "skills", label: "What are his AI/ML skills?", query: "What are his AI/ML skills?" },
  { id: "hire", label: "Why should I hire him?", query: "Why should I hire him?" },
];

function getAIResponse(query: string): string {
  const q = query.toLowerCase();
  if (q.includes("who") || q.includes("roshan") || q.includes("about")) return aiResponses.who;
  if (q.includes("project") || q.includes("built") || q.includes("work")) return aiResponses.projects;
  if (q.includes("ai") || q.includes("ml") || q.includes("machine learning") || q.includes("skill")) return aiResponses.ai;
  if (q.includes("hire") || q.includes("why") || q.includes("candidate")) return aiResponses.hire;
  if (q.includes("research") || q.includes("paper") || q.includes("ieee") || q.includes("publication")) return aiResponses.research;
  if (q.includes("tech") || q.includes("stack") || q.includes("language") || q.includes("tool") || q.includes("framework")) return aiResponses.tech;
  if (q.includes("achievement") || q.includes("award") || q.includes("hackathon") || q.includes("accomplish")) return aiResponses.achievements;
  return aiResponses.default;
}

function TypewriterText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, 8);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className="whitespace-pre-wrap font-sans text-xs sm:text-sm leading-relaxed text-[var(--text-primary)]">
      {displayed}
      {!done && (
        <span
          className="inline-block w-1.5 h-3.5 ml-0.5 animate-pulse bg-purple-500"
          style={{ verticalAlign: "middle" }}
          aria-hidden="true"
        />
      )}
    </span>
  );
}

export default function AskRoshanAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Trigger Spotlight Search via Keyboard shortcut Cmd+K or Ctrl+K or Esc to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Listener for custom trigger event (Menu Bar Search icon)
  useEffect(() => {
    const handleToggle = () => {
      setIsOpen((prev) => !prev);
    };
    window.addEventListener("toggle-spotlight", handleToggle);
    return () => window.removeEventListener("toggle-spotlight", handleToggle);
  }, []);

  // Autofocus input when Spotlight opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      setInput("");
      setResponse(null);
    }
  }, [isOpen]);

  const handleSearchSubmit = (text: string) => {
    if (!text.trim()) return;
    setIsTyping(true);
    setResponse(null);

    setTimeout(() => {
      const reply = getAIResponse(text);
      setResponse(reply);
      setIsTyping(false);
    }, 600);
  };

  const handleSectionJump = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Spotlight Modal Overlay ── */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[120] flex items-start justify-center pt-24 px-4 select-none">
            {/* Dark blur backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-[5px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Spotlight Search Panel Wrapper */}
            <motion.div
              className="w-full max-w-[600px] rounded-xl overflow-hidden shadow-2xl border border-white/10 text-white z-10 flex flex-col mac-glass"
              initial={{ opacity: 0, scale: 0.96, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* Search Bar Input */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/5 relative">
                <Search size={18} className="text-neutral-400 shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    if (!e.target.value.trim()) setResponse(null);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearchSubmit(input);
                    }
                  }}
                  placeholder="Spotlight Search: Ask anything about Roshan..."
                  className="flex-1 bg-transparent border-none text-sm outline-none text-white p-0 placeholder-neutral-500 font-sans cursor-text"
                />
                
                {input.trim() && (
                  <button
                    onClick={() => { setInput(""); setResponse(null); }}
                    className="absolute right-4 text-[10px] bg-white/10 hover:bg-white/20 border-none text-neutral-400 hover:text-white px-2 py-0.5 rounded cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Spotlight Content Results Pane */}
              <div className="max-h-[380px] overflow-y-auto p-4 select-text">
                <AnimatePresence mode="wait">
                  {/* Spotlight Results List */}
                  {response ? (
                    <motion.div
                      key="spotlight-response"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4"
                    >
                      <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest flex items-center gap-1.5 select-none">
                        <Bot size={11} className="text-purple-400" />
                        <span>Spotlight AI Answer</span>
                      </div>
                      
                      <div className="bg-white/5 border border-white/5 rounded-xl p-4 min-h-[80px]">
                        <TypewriterText text={response} />
                      </div>
                    </motion.div>
                  ) : isTyping ? (
                    <div className="flex items-center justify-center py-10 gap-2 select-none">
                      <Sparkles size={16} className="text-purple-400 animate-spin" />
                      <span className="text-xs text-neutral-400 font-mono">Spotlight is indexing...</span>
                    </div>
                  ) : (
                    <motion.div
                      key="spotlight-suggestions"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-4"
                    >
                      {/* Suggested Questions Section */}
                      <div>
                        <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2 select-none">
                          Suggested Queries
                        </div>
                        <div className="flex flex-col gap-0.5">
                          {SPOTLIGHT_SUGGESTIONS.map((s) => (
                            <button
                              key={s.id}
                              onClick={() => {
                                setInput(s.query);
                                handleSearchSubmit(s.query);
                              }}
                              className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg border-none text-left cursor-pointer hover:bg-white/5 text-neutral-300 hover:text-white transition-colors text-xs font-medium font-sans"
                            >
                              <Search size={12} className="text-neutral-500" />
                              <span>{s.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Applications (Sections Jumps) Section */}
                      <div>
                        <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2 select-none">
                          Developer Apps
                        </div>
                        <div className="grid grid-cols-2 gap-1">
                          {[
                            { name: "Finder (About)", icon: <Globe size={11} />, id: "about" },
                            { name: "Terminal (Skills)", icon: <Command size={11} />, id: "skills" },
                            { name: "App Store (Projects)", icon: <Globe size={11} />, id: "projects" },
                            { name: "Xcode (Experience)", icon: <FileText size={11} />, id: "experience" },
                          ].map((app) => (
                            <button
                              key={app.id}
                              onClick={() => handleSectionJump(app.id)}
                              className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border-none text-left cursor-pointer hover:bg-white/5 text-neutral-400 hover:text-white transition-colors text-[11px]"
                            >
                              {app.icon}
                              <span>{app.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Spotlight help Footer */}
              <div className="px-4 py-2 border-t border-white/5 text-[9px] text-neutral-500 font-mono flex justify-between select-none">
                <span>Enter ↵ to search</span>
                <span>Cmd+K or Esc to close</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
