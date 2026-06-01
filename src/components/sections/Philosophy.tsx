"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { philosophy } from "@/lib/portfolio-data";
import { 
  Cpu, 
  BrainCircuit, 
  Microscope, 
  Rocket, 
  Sparkles, 
  Network, 
  ShieldCheck, 
  Compass,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const futureVision = [
  { icon: "🧬", label: "AI-Native Apps", desc: "AI-first products that feel like magic" },
  { icon: "🌐", label: "Distributed Intelligence", desc: "Scaling AI systems for global impact" },
  { icon: "🔐", label: "Trustworthy AI", desc: "Privacy-preserving & explainable systems" },
  { icon: "🚀", label: "Founder Mindset", desc: "Products that create lasting change" },
];

export default function Philosophy() {
  const [angle, setAngle] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);
  const [hoveredNodeIndex, setHoveredNodeIndex] = useState<number | null>(null);
  const [dimensions, setDimensions] = useState({ rx: 340, ry: 90 });

  // Handle responsive resize of orbital dimensions
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setDimensions({ rx: 130, ry: 35 });
      } else if (window.innerWidth < 1024) {
        setDimensions({ rx: 220, ry: 60 });
      } else {
        setDimensions({ rx: 340, ry: 90 });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update orbit angles
  useEffect(() => {
    if (isPaused) return;
    let animId: number;
    const tick = () => {
      setAngle((prev) => (prev + 0.12) % 360);
      animId = requestAnimationFrame(tick);
    };
    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  // Combine Philosophy and Vision items as orbiting nodes with classy Lucide icons
  const nodes = [
    {
      id: "philosophy-0",
      title: philosophy[0].title,
      description: philosophy[0].description,
      icon: Cpu,
      color: "#3b82f6",
      colorRgb: "59,130,246",
      badge: "Principle",
      iso: "ISO 100",
      number: "01"
    },
    {
      id: "philosophy-1",
      title: philosophy[1].title,
      description: philosophy[1].description,
      icon: BrainCircuit,
      color: "#a855f7",
      colorRgb: "168,85,247",
      badge: "Principle",
      iso: "ISO 200",
      number: "02"
    },
    {
      id: "philosophy-2",
      title: philosophy[2].title,
      description: philosophy[2].description,
      icon: Microscope,
      color: "#10b981",
      colorRgb: "16,185,129",
      badge: "Principle",
      iso: "ISO 400",
      number: "03"
    },
    {
      id: "philosophy-3",
      title: philosophy[3].title,
      description: philosophy[3].description,
      icon: Rocket,
      color: "#f59e0b",
      colorRgb: "245,158,11",
      badge: "Principle",
      iso: "ISO 800",
      number: "04"
    },
    {
      id: "vision-0",
      title: futureVision[0].label,
      description: futureVision[0].desc,
      icon: Sparkles,
      color: "#06b6d4",
      colorRgb: "6,182,212",
      badge: "Vision",
      iso: "KODAK 100",
      number: "05"
    },
    {
      id: "vision-1",
      title: futureVision[1].label,
      description: futureVision[1].desc,
      icon: Network,
      color: "#ec4899",
      colorRgb: "236,72,153",
      badge: "Vision",
      iso: "KODAK 200",
      number: "06"
    },
    {
      id: "vision-2",
      title: futureVision[2].label,
      description: futureVision[2].desc,
      icon: ShieldCheck,
      color: "#ea580c",
      colorRgb: "234,88,12",
      badge: "Vision",
      iso: "KODAK 400",
      number: "07"
    },
    {
      id: "vision-3",
      title: futureVision[3].label,
      description: futureVision[3].desc,
      icon: Compass,
      color: "#84cc16",
      colorRgb: "132,204,22",
      badge: "Vision",
      iso: "KODAK 800",
      number: "08"
    }
  ];

  // The active node being displayed
  const displayIndex = hoveredNodeIndex !== null ? hoveredNodeIndex : activeNodeIndex;
  const activeNode = nodes[displayIndex];

  return (
    <section className="section-padding relative overflow-hidden bg-[#020205] w-full flex flex-col items-center justify-center">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.03) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container flex flex-col items-center">
        {/* Header */}
        <motion.div
          className="section-header-spacing text-center"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-section-label mb-2">Mindset &amp; Vision</p>
          <h2 className="text-display mb-3" style={{ color: "var(--text-primary)" }}>
            Engineering <span className="gradient-text-purple">Philosophy</span>
          </h2>
        </motion.div>

        {/* Orbit Content Box */}
        <motion.div
          className="w-full flex flex-col items-center"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Orbit System Area - tightened height to reduce whitespace */}
          <div className="relative w-full h-[260px] sm:h-[300px] md:h-[330px] flex items-center justify-center overflow-visible select-none">
          {/* Orbit paths lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" aria-hidden="true">
            <ellipse
              cx="50%"
              cy="50%"
              rx={dimensions.rx}
              ry={dimensions.ry}
              fill="none"
              stroke="url(#orbitGradient)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <defs>
              <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>

          {/* Central Sun core */}
          <motion.div 
            className="relative w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-purple-600/10 via-neutral-950 to-blue-600/10 border border-white/5 backdrop-blur-md flex flex-col items-center justify-center text-center shadow-[0_0_35px_rgba(139,92,246,0.12)] select-none z-20"
            animate={{
              boxShadow: ["0 0 25px rgba(139,92,246,0.1)", "0 0 45px rgba(14,165,233,0.2)", "0 0 25px rgba(139,92,246,0.1)"]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Compass className="text-purple-400/80 animate-spin mb-1 opacity-70" style={{ animationDuration: "16s" }} size={16} />
            <span className="text-[7px] font-extrabold uppercase tracking-widest text-neutral-500">Core Nucleus</span>
            <span className="text-[10px] font-bold text-white mt-0.5 leading-tight uppercase font-sans">Engineering<br/>Mindset</span>
          </motion.div>

          {/* Orbiting Planets */}
          {nodes.map((node, i) => {
            const phi = ((angle + (i * 360) / nodes.length) * Math.PI) / 180;
            const x = Math.sin(phi) * dimensions.rx;
            const y = Math.cos(phi) * dimensions.ry;
            
            const scale = 1 + (y / dimensions.ry) * 0.16;
            const zIndex = Math.round(50 + y * 0.3);
            const opacity = 1 - Math.max(0, -y) / dimensions.ry * 0.45;
            
            const isHighlighted = displayIndex === i;
            const IconComponent = node.icon;

            return (
              <motion.div
                key={node.id}
                className="absolute flex flex-col items-center justify-center"
                style={{
                  left: `calc(50% + ${x}px - 24px)`,
                  top: `calc(50% + ${y}px - 24px)`,
                  zIndex: zIndex,
                  transform: `scale(${scale})`,
                  opacity: opacity,
                  width: "48px",
                  height: "48px"
                }}
                onMouseEnter={() => {
                  setIsPaused(true);
                  setHoveredNodeIndex(i);
                }}
                onMouseLeave={() => {
                  setIsPaused(false);
                  setHoveredNodeIndex(null);
                }}
                onClick={() => {
                  setActiveNodeIndex(i);
                }}
              >
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg border cursor-pointer transition-all duration-300 relative group"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.08) 0%, rgba(10, 10, 15, 0.96) 80%, ${node.color}20 100%)`,
                    borderColor: isHighlighted ? node.color : "rgba(255, 255, 255, 0.06)",
                    boxShadow: isHighlighted 
                      ? `0 0 15px ${node.color}40, inset 0 0 8px ${node.color}25` 
                      : `0 3px 8px rgba(0,0,0,0.5), inset 0 0 4px rgba(255,255,255,0.02)`,
                  }}
                >
                  <IconComponent 
                    size={14} 
                    style={{ 
                      color: isHighlighted ? node.color : "rgba(255,255,255,0.5)",
                      transition: "color 0.3s ease" 
                    }} 
                  />
                  
                  {isHighlighted && (
                    <span 
                      className="absolute inset-0 rounded-full animate-ping border" 
                      style={{ borderColor: node.color, animationDuration: "1.8s" }}
                    />
                  )}
                </div>
                <span 
                  className="text-[8px] font-bold text-neutral-400 truncate max-w-[70px] mt-1 transition-all text-center select-none"
                  style={{ opacity: scale > 0.9 ? 1 : 0.3 }}
                >
                  {node.title}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Minimalist Integrated Details Panel */}
        <div className="w-full max-w-xl mx-auto mt-2 select-text text-center flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col items-center justify-center px-4"
            >
              {/* Minimal category tag */}
              <span 
                className="text-[8px] uppercase font-mono tracking-[0.25em] mb-1 inline-block font-bold"
                style={{
                  color: activeNode.color,
                  textShadow: `0 0 8px ${activeNode.color}20`
                }}
              >
                {activeNode.badge}
              </span>

              {/* Cinematic Title */}
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-tight font-sans">
                {activeNode.title}
              </h3>

              {/* Center-aligned Description (Max 60-70 characters line-width) */}
              <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-sans max-w-[62ch] mx-auto">
                {activeNode.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Muted Navigation dots & Play/Pause (Lower visual weight) */}
          <div className="flex items-center justify-center gap-4 mt-5 opacity-20 hover:opacity-60 transition-opacity duration-300">
            {/* Small index code */}
            <span className="text-[7px] font-mono tracking-widest text-neutral-500 uppercase select-none">
              REF_{activeNode.number}
            </span>
            
            {/* Pagination dots */}
            <div className="flex items-center gap-1">
              {nodes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveNodeIndex(idx)}
                  className="w-1 h-1 rounded-full transition-all duration-300 cursor-pointer"
                  style={{
                    background: idx === displayIndex ? activeNode.color : "rgba(255,255,255,0.15)",
                    transform: idx === displayIndex ? "scale(1.2)" : "scale(1)",
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            
            {/* Tiny Play/Pause */}
            <button 
              onClick={() => setIsPaused(!isPaused)}
              className="text-neutral-500 hover:text-white transition-colors cursor-pointer"
              aria-label={isPaused ? "Play" : "Pause"}
            >
              {isPaused ? <Play size={8} fill="currentColor" /> : <Pause size={8} fill="currentColor" />}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
  );
}
