"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience, personalInfo } from "@/lib/portfolio-data";
import { FileCode, FolderOpen, ChevronRight, ChevronDown, Play, Terminal, HelpCircle } from "lucide-react";
import MacWindow from "../MacWindow";

export default function Experience() {
  const [selectedFile, setSelectedFile] = useState("tessa-cloud.json");
  const [navOpen, setNavOpen] = useState(true);

  // Simulated Xcode debugger console states
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [showConsole, setShowConsole] = useState(false);

  const files = [
    ...experience.map((exp) => ({
      id: `${exp.id}.json`,
      label: `${exp.id}.json`,
      category: "Experience",
      data: exp,
    })),
    { 
      id: "alvas-degree.json", 
      label: "alvas-degree.json", 
      category: "Education", 
      data: {
        role: "B.E. in Computer Science & Engineering(DATA SCIENCE)",
        company: "Alva's Institute of engineering and technology",
        period: "2022 – 2026",
        description: "B.E. in Computer Science & Engineering(DATA SCIENCE)",
        achievements: [
          `Graduation Year: 2026`,
          `Cumulative CGPA: ${personalInfo.cgpa} / 10`,
          `Specialization: AI, Machine Learning, and Software Systems`,
        ],
        color: "#10b981",
      } 
    },
  ];

  const currentFile = files.find((f) => f.id === selectedFile)!;

  const handleRunTarget = () => {
    setIsRunning(true);
    setShowConsole(true);
    setConsoleOutput([
      `Build target PortfolioApp: Active`,
      `Compile ${currentFile.label}: Clean`,
      `Linking PortfolioApp binaries...`,
      `Launching ./PortfolioApp...`,
    ]);

    setTimeout(() => {
      setConsoleOutput((prev) => [
        ...prev,
        "================================================",
        ` Executing Module: ${currentFile.label}`,
        "================================================",
        `[x] Entity: ${currentFile.data.company}`,
        `[x] Role/Degree: ${currentFile.data.role}`,
        `[x] Timeline: ${currentFile.data.period}`,
        `[x] Focus: ${currentFile.data.description}`,
        `[x] Achievements & Highlights:`,
        ...currentFile.data.achievements.map((ach) => `    - ${ach}`),
        "------------------------------------------------",
        "[SUCCESS] Process completed with Exit Code: 0",
        "================================================",
      ]);
      setIsRunning(false);
    }, 1000);
  };

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background radial blue gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 60% at 80% 50%, rgba(59,130,246,0.02) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container">
        {/* Header */}
        <motion.div
          className="section-header-spacing text-center"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-section-label mb-3">Career</p>
          <h2 className="text-display mb-4" style={{ color: "var(--text-primary)" }}>
            Professional <span className="gradient-text-blue">Experience</span>
          </h2>
        </motion.div>

        {/* Xcode App Window mockup */}
        <MacWindow
          title={`Xcode — ${currentFile.label} — Workspace`}
          minHeight="540px"
          className="mb-16"
          toolbar={
            <div className="flex items-center gap-4 text-xs font-semibold select-none mr-2">
              <button 
                onClick={() => setNavOpen(!navOpen)}
                className="bg-transparent border-none text-white/50 hover:text-white cursor-pointer"
                title="Toggle Sidebar Navigator"
              >
                <FolderOpen size={13} />
              </button>
              <button 
                onClick={handleRunTarget}
                className="flex items-center gap-1 opacity-80 hover:opacity-100 bg-white/5 hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/30 px-2 py-0.5 rounded text-[10px] text-neutral-400 hover:text-emerald-400 cursor-pointer font-sans transition-all"
                title="Execute target PortfolioApp (Cmd+R)"
              >
                <Play size={8} fill="currentColor" className="text-emerald-500" />
                <span>Run Target: PortfolioApp</span>
              </button>
            </div>
          }
          sidebar={
            navOpen ? (
              <div className="flex flex-col gap-3 p-4 font-mono text-[10px] text-neutral-400 select-none">
                <div>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-neutral-300 mb-2 px-1">
                    <ChevronDown size={11} />
                    <span>PortfolioWorkspace</span>
                  </div>
                  
                  <div className="flex flex-col gap-1.5 ml-2">
                    {/* Experience Group */}
                    <div>
                      <div className="flex items-center gap-1.5 py-1 px-1 text-neutral-500 font-semibold uppercase tracking-wider text-[9px]">
                        <ChevronDown size={10} />
                        <span>Experience/</span>
                      </div>
                      
                      <div className="flex flex-col gap-0.5 ml-3">
                        {files.filter(f => f.category === "Experience").map(file => (
                          <button
                            key={file.id}
                            onClick={() => setSelectedFile(file.id)}
                            className="w-full flex items-center gap-2 px-2 py-1 rounded border-none text-left cursor-pointer transition-colors text-[10px]"
                            style={{
                              background: selectedFile === file.id ? "rgba(255, 255, 255, 0.08)" : "transparent",
                              color: selectedFile === file.id ? "#3b82f6" : "#9ca3af",
                            }}
                          >
                            <FileCode size={11} className={selectedFile === file.id ? "text-blue-400" : "text-neutral-500"} />
                            <span className="truncate">{file.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Education Group */}
                    <div className="mt-2">
                      <div className="flex items-center gap-1.5 py-1 px-1 text-neutral-500 font-semibold uppercase tracking-wider text-[9px]">
                        <ChevronDown size={10} />
                        <span>Education/</span>
                      </div>
                      
                      <div className="flex flex-col gap-0.5 ml-3">
                        {files.filter(f => f.category === "Education").map(file => (
                          <button
                            key={file.id}
                            onClick={() => setSelectedFile(file.id)}
                            className="w-full flex items-center gap-2 px-2 py-1 rounded border-none text-left cursor-pointer transition-colors text-[10px]"
                            style={{
                              background: selectedFile === file.id ? "rgba(255, 255, 255, 0.08)" : "transparent",
                              color: selectedFile === file.id ? "#3b82f6" : "#9ca3af",
                            }}
                          >
                            <FileCode size={11} className={selectedFile === file.id ? "text-blue-400" : "text-neutral-500"} />
                            <span className="truncate">{file.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : undefined
          }
        >
          {/* Main IDE Workspace view */}
          <div className="w-full h-full font-mono text-[11px] leading-relaxed flex flex-col justify-between select-text select-none md:select-text">
            
            {/* Editor tab label */}
            <div className="flex items-center gap-2 border-b border-white/5 pb-2 mb-4 text-[10px] text-neutral-400 select-none">
              <span>📄</span>
              <span className="text-white font-semibold">{currentFile.label}</span>
              <span className="text-neutral-600">&gt; Editor &gt; Syntax JSON</span>
            </div>

            {/* Code lines container */}
            <div className="flex-grow w-full overflow-x-auto scrollbar-thin pb-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedFile}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-0.5 min-w-[500px]"
                >
                  {/* JSON Syntax rendering */}
                  <div className="xcode-line-num font-mono text-neutral-500 whitespace-nowrap" data-line="1">
                    <span className="text-purple-400">&#123;</span>
                  </div>
                  
                  <div className="xcode-line-num font-mono ml-4 whitespace-nowrap" data-line="2">
                    <span className="text-sky-400">&quot;company&quot;</span>: <span className="text-orange-300">&quot;{currentFile.data.company}&quot;</span>,
                  </div>
                  
                  <div className="xcode-line-num font-mono ml-4 whitespace-nowrap" data-line="3">
                    <span className="text-sky-400">&quot;role&quot;</span>: <span className="text-orange-300">&quot;{currentFile.data.role}&quot;</span>,
                  </div>

                  <div className="xcode-line-num font-mono ml-4 whitespace-nowrap" data-line="4">
                    <span className="text-sky-400">&quot;period&quot;</span>: <span className="text-orange-300">&quot;{currentFile.data.period}&quot;</span>,
                  </div>

                  <div className="xcode-line-num font-mono ml-4 whitespace-nowrap" data-line="5">
                    <span className="text-sky-400">&quot;description&quot;</span>: <span className="text-orange-300">&quot;{currentFile.data.description}&quot;</span>,
                  </div>

                  <div className="xcode-line-num font-mono ml-4 whitespace-nowrap" data-line="6">
                    <span className="text-sky-400">&quot;key_contributions&quot;</span>: <span className="text-purple-400">[</span>
                  </div>

                  {currentFile.data.achievements.map((item, index) => (
                    <div 
                      key={item} 
                      className="xcode-line-num font-mono ml-8 text-[11px] whitespace-nowrap" 
                      data-line={String(7 + index)}
                    >
                      <span className="text-orange-300">&quot;{item}&quot;</span>
                      {index < currentFile.data.achievements.length - 1 ? "," : ""}
                    </div>
                  ))}

                  <div className="xcode-line-num font-mono ml-4 whitespace-nowrap" data-line={String(7 + currentFile.data.achievements.length)}>
                    <span className="text-purple-400">]</span>
                  </div>

                  <div className="xcode-line-num font-mono text-purple-400 whitespace-nowrap" data-line={String(8 + currentFile.data.achievements.length)}>
                    &#125;
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Simulated Xcode compiler terminal debug console */}
            {showConsole && (
              <div className="mt-4 p-3 bg-black/60 border border-white/5 rounded-lg font-mono text-[10px] max-h-[140px] overflow-y-auto w-full select-text animate-fadeIn">
                <div className="flex justify-between items-center text-[9px] text-neutral-500 border-b border-white/5 pb-1.5 mb-2 select-none">
                  <span className="flex items-center gap-1.5"><Terminal size={10} /> Debug Console</span>
                  <button 
                    onClick={() => setShowConsole(false)} 
                    className="text-neutral-500 hover:text-white bg-transparent border-none cursor-pointer text-[9px]"
                  >
                    Clear & Hide
                  </button>
                </div>
                <div className="space-y-1">
                  {consoleOutput.map((line, idx) => (
                    <div 
                      key={idx} 
                      className={
                        line.startsWith("[SUCCESS]") 
                          ? "text-emerald-400" 
                          : line.startsWith("=======") 
                            ? "text-neutral-600" 
                            : line.startsWith(" Executing")
                              ? "text-purple-400 font-bold"
                              : "text-neutral-300"
                      }
                    >
                      {line}
                    </div>
                  ))}
                  {isRunning && (
                    <span className="terminal-cursor inline-block w-1.5 h-3 ml-0.5" />
                  )}
                </div>
              </div>
            )}

            {/* Simulated Xcode compiler terminal bottom bar */}
            <div className="mt-8 border-t border-white/5 pt-4 flex flex-col md:flex-row md:items-center justify-between text-[10px] text-neutral-500 select-none">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  <span>Compilation Status: Clean</span>
                </div>
                <div>Warnings: 0</div>
                <div>Errors: 0</div>
              </div>
              <div className="mt-2 md:mt-0 flex items-center gap-2">
                <span>Encoding: UTF-8</span>
                <span>Type: JSON Document</span>
              </div>
            </div>

          </div>
        </MacWindow>
      </div>
    </section>
  );
}
