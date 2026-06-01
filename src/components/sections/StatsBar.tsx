"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FileText, GraduationCap, Sparkles, Trophy, Brain, Rocket } from "lucide-react";

/* ─── Achievement data ─────────────────────────────────── */
const ACHIEVEMENTS = [
  {
    id: "ieee",
    category: "Research",
    metric: 2,
    suffix: "",
    decimals: 0,
    description: "IEEE Publications",
    icon: FileText,
    color: "#1d6fe8",
    colorRgb: "29,111,232",
    tag: "IEEE Author",
  },
  {
    id: "students",
    category: "Education",
    metric: 800,
    suffix: "+",
    decimals: 0,
    description: "Students Trained",
    icon: GraduationCap,
    color: "#16a34a",
    colorRgb: "22,163,74",
    tag: "Mentor",
  },
  {
    id: "genai",
    category: "Innovation",
    metric: 150,
    suffix: "+",
    decimals: 0,
    description: "GenAI Participants",
    icon: Sparkles,
    color: "#06b6d4",
    colorRgb: "6,182,212",
    tag: "AI Pioneer",
  },
  {
    id: "hackathon",
    category: "Competition",
    metric: 2,
    suffix: "",
    decimals: 0,
    description: "Hackathon Wins",
    icon: Trophy,
    color: "#ca8a04",
    colorRgb: "202,138,4",
    tag: "Champion",
  },
  {
    id: "cgpa",
    category: "Academic",
    metric: 8.52,
    suffix: "",
    decimals: 2,
    description: "CGPA Score",
    icon: Brain,
    color: "#7c3aed",
    colorRgb: "124,58,237",
    tag: "Excellence",
  },
  {
    id: "projects",
    category: "Execution",
    metric: 4,
    suffix: "+",
    decimals: 0,
    description: "Projects Shipped",
    icon: Rocket,
    color: "#ea580c",
    colorRgb: "234,88,12",
    tag: "Builder",
  },
] as const;

/* ─── Counter ──────────────────────────────────────────── */
function Counter({ target, decimals = 0, suffix = "" }: { target: number; decimals?: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const [go, setGo] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting && !go) setGo(true); }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [go]);

  useEffect(() => {
    if (!go) return;
    const dur = 1800, t0 = Date.now();
    const tick = () => {
      const p = Math.min((Date.now() - t0) / dur, 1);
      setVal(target * (1 - Math.pow(2, -10 * p)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [go, target]);

  return <span ref={ref}>{val.toFixed(decimals)}{suffix}</span>;
}

/* ─── Single card ──────────────────────────────────────── */
type Achievement = (typeof ACHIEVEMENTS)[number];

function StatCard({ a, i }: { a: Achievement; i: number }) {
  const [hov, setHov] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 30 });
  const sy = useSpring(my, { stiffness: 200, damping: 30 });
  const Icon = a.icon;

  const bg = useTransform(
    [sx, sy],
    ([lx, ly]: number[]) =>
      `radial-gradient(220px circle at ${lx}px ${ly}px, rgba(${a.colorRgb},0.10) 0%, transparent 70%)`
  );

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  }, [mx, my]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5, scale: 1.02 }}
      onMouseMove={onMove}
      onHoverStart={() => setHov(true)}
      onHoverEnd={() => setHov(false)}
      style={{
        position: "relative",
        flex: "1 1 0",
        minWidth: 0,
        borderRadius: "20px",
        padding: "22px 20px 20px",
        background: "rgba(255,255,255,0.03)",
        border: `1px solid ${hov ? `rgba(${a.colorRgb},0.30)` : "rgba(255,255,255,0.07)"}`,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        overflow: "hidden",
        cursor: "default",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        boxShadow: hov
          ? `0 0 0 1px rgba(${a.colorRgb},0.20), 0 16px 48px rgba(0,0,0,0.45), 0 0 32px rgba(${a.colorRgb},0.14)`
          : "0 2px 12px rgba(0,0,0,0.3)",
      }}
    >
      {/* Cursor spotlight */}
      <motion.div aria-hidden="true" style={{
        position: "absolute", inset: 0, borderRadius: "20px",
        background: bg, pointerEvents: "none",
        opacity: hov ? 1 : 0, transition: "opacity 0.3s ease", zIndex: 0,
      }} />

      {/* Top accent line */}
      <div aria-hidden="true" style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "2px",
        borderRadius: "20px 20px 0 0", background: a.color,
        transform: `scaleX(${hov ? 1 : 0})`,
        transformOrigin: "left",
        transition: "transform 0.32s cubic-bezier(0.16,1,0.3,1)", zIndex: 2,
      }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 3 }}>
        {/* Icon + category */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
          <span style={{
            fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.28)",
            fontFamily: "var(--font-jakarta)",
          }}>
            {a.category}
          </span>
          <motion.div
            animate={{ scale: hov ? 1.12 : 1 }}
            transition={{ duration: 0.25 }}
            style={{
              width: "32px", height: "32px", borderRadius: "10px",
              background: `rgba(${a.colorRgb},0.10)`,
              border: `1px solid rgba(${a.colorRgb},0.18)`,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <Icon size={15} strokeWidth={1.75} style={{ color: a.color }} />
          </motion.div>
        </div>

        {/* Metric */}
        <motion.div
          animate={{ scale: hov ? 1.04 : 1 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 800,
            letterSpacing: "-0.04em", lineHeight: 1,
            color: "#fff", fontFamily: "var(--font-jakarta)",
            marginBottom: "8px", userSelect: "none",
          }}
        >
          <Counter target={a.metric} decimals={a.decimals} suffix={a.suffix} />
        </motion.div>

        {/* Description */}
        <p style={{
          fontSize: "12px", lineHeight: 1.4,
          color: "rgba(255,255,255,0.42)", margin: "0 0 14px",
          fontFamily: "var(--font-jakarta)", fontWeight: 450,
        }}>
          {a.description}
        </p>

        {/* Tag pill */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "5px",
          padding: "3px 9px", borderRadius: "999px",
          background: `rgba(${a.colorRgb},0.09)`,
          border: `1px solid rgba(${a.colorRgb},0.18)`,
        }}>
          <div style={{
            width: "4px", height: "4px", borderRadius: "50%",
            background: a.color, boxShadow: `0 0 5px ${a.color}`,
          }} />
          <span style={{
            fontSize: "9px", fontWeight: 700, letterSpacing: "0.08em",
            textTransform: "uppercase", color: a.color,
            fontFamily: "var(--font-jakarta)",
          }}>
            {a.tag}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Section ──────────────────────────────────────────── */
export default function StatsBar() {
  return (
    <section
      id="achievements-stats"
      className="section-padding"
      style={{
        position: "relative",
        backgroundColor: "#050505",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
          <defs>
            <pattern id="sg" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255,255,255,0.028)" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sg)" />
        </svg>
      </div>

      <div
        className="stats-row-container section-container"
        style={{
          position: "relative", zIndex: 10,
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="section-header-spacing"
          style={{
            display: "flex", alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "18px", height: "1px", background: "rgba(255,255,255,0.2)" }} />
            <span style={{
              fontSize: "11px", fontWeight: 700, letterSpacing: "0.16em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.28)",
              fontFamily: "var(--font-jakarta)",
            }}>
              Impact & Credentials
            </span>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            {ACHIEVEMENTS.map((a) => (
              <div key={a.id} title={a.category} style={{
                width: "5px", height: "5px", borderRadius: "50%",
                background: a.color, opacity: 0.45,
              }} />
            ))}
          </div>
        </motion.div>

        {/* Single row of cards */}
        <div
          className="stats-cards-row"
          style={{ display: "flex", gap: "12px", alignItems: "stretch" }}
        >
          {ACHIEVEMENTS.map((a, i) => (
            <StatCard key={a.id} a={a} i={i} />
          ))}
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{
            marginTop: "24px", textAlign: "right",
            fontSize: "11px", color: "rgba(255,255,255,0.16)",
            fontFamily: "var(--font-jakarta)", fontWeight: 500,
            letterSpacing: "0.04em",
          }}
        >
          All metrics verified · 2025
        </motion.p>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 1024px) {
          .stats-cards-row { flex-wrap: wrap !important; }
          .stats-cards-row > div { flex: 1 1 calc(33.33% - 8px) !important; min-width: 160px !important; }
          .stats-row-container { padding: 0 32px !important; }
        }
        @media (max-width: 640px) {
          .stats-cards-row > div { flex: 1 1 calc(50% - 6px) !important; }
          .stats-row-container { padding: 0 16px !important; }
        }
        @media (max-width: 380px) {
          .stats-cards-row > div { flex: 1 1 100% !important; }
        }
      `}</style>
    </section>
  );
}
