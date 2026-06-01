"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Brain, Sparkles, Layers3, Code2,
  ChartSpline, Database, Server, Cloud,
  ChevronDown, CheckCircle2, Zap,
  Cpu, Award,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────
   DOMAIN DATA — curated for recruiter scanning
───────────────────────────────────────────────────────── */
const DOMAINS = [
  {
    id: "full-stack",
    title: "Full Stack Engineering",
    subtitle: "Intermediate · Active",
    description:
      "Designing and building high-performance web applications. Experienced with modern component architectures, type-safe backends, and responsive user interfaces.",
    icons: [Layers3, Code2],
    color: "#0ea5e9",
    colorRgb: "14,165,233",
    tagColor: "#0284c7",
    expertise: 75,
    preview: ["React", "Next.js", "TypeScript", "Node.js"],
    skills: [
      { name: "React", level: 80 },
      { name: "Next.js", level: 78 },
      { name: "TypeScript", level: 75 },
      { name: "Node.js", level: 72 },
      { name: "Express.js", level: 70 },
      { name: "Supabase", level: 68 },
    ],
    badge: "Active",
    highlight: "Built 5+ production-grade web apps",
  },
  {
    id: "ai-ml",
    title: "AI / Machine Learning",
    subtitle: "Intermediate · Research",
    description:
      "Developing neural networks, deep learning models, and NLP pipelines. Experienced in processing biological signals and training predictive models.",
    icons: [Brain, Sparkles],
    color: "#8b5cf6",
    colorRgb: "139,92,246",
    tagColor: "#7c3aed",
    expertise: 68,
    preview: ["TensorFlow", "PyTorch", "NLP", "Deep Learning"],
    skills: [
      { name: "TensorFlow", level: 70 },
      { name: "PyTorch", level: 68 },
      { name: "NLP", level: 65 },
      { name: "Deep Learning", level: 68 },
      { name: "Computer Vision", level: 60 },
    ],
    badge: "IEEE Author",
    highlight: "Published ML-based research project",
  },
  {
    id: "data-eng",
    title: "Data Engineering",
    subtitle: "Foundational · Growing",
    description:
      "Structuring relational databases and managing robust ETL workflows. Proficient in database query optimization and constructing analytics data pipelines.",
    icons: [Database, ChartSpline],
    color: "#10b981",
    colorRgb: "16,185,129",
    tagColor: "#059669",
    expertise: 65,
    preview: ["SQL", "PostgreSQL", "Data Pipelines", "ETL"],
    skills: [
      { name: "SQL", level: 72 },
      { name: "PostgreSQL", level: 70 },
      { name: "Data Pipelines", level: 65 },
      { name: "ETL Processes", level: 62 },
      { name: "Analytics", level: 68 },
    ],
    badge: "Database",
    highlight: "Managed analytical datasets for academic projects",
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    subtitle: "Beginner · Exploring",
    description:
      "Automating integration and deployment cycles with modern orchestration toolsets. Familiar with cloud server management and container virtualization.",
    icons: [Cloud, Server],
    color: "#f59e0b",
    colorRgb: "245,158,11",
    tagColor: "#d97706",
    expertise: 60,
    preview: ["Docker", "AWS", "CI/CD", "Linux"],
    skills: [
      { name: "Docker", level: 65 },
      { name: "AWS", level: 58 },
      { name: "CI/CD", level: 60 },
      { name: "Linux", level: 68 },
    ],
    badge: "Automation",
    highlight: "Deployed applications with Vercel and AWS",
  },
  {
    id: "research",
    title: "Research & Innovation",
    subtitle: "Published · Published Author",
    description:
      "Academic writing, algorithm design, and system optimization. Published author in IEEE exploring machine learning techniques for fraud detection systems.",
    icons: [Cpu, Award],
    color: "#ec4899",
    colorRgb: "236,72,153",
    tagColor: "#db2777",
    expertise: 70,
    preview: ["IEEE Publications", "AI Research", "System Design", "Optimization"],
    skills: [
      { name: "IEEE Publications", level: 75 },
      { name: "AI Research", level: 72 },
      { name: "System Design", level: 68 },
      { name: "Optimization", level: 65 },
    ],
    badge: "IEEE Published",
    highlight: "Published author at IEEE conferences",
  },
] as const;

type Domain = (typeof DOMAINS)[number];

/* ─────────────────────────────────────────────────────────
   SKILL CHIP
───────────────────────────────────────────────────────── */
function SkillChip({
  name,
  level,
  color,
  colorRgb,
  i,
}: {
  name: string;
  level: number;
  color: string;
  colorRgb: string;
  i: number;
}) {
  const [hov, setHov] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: i * 0.04 }}
      onHoverStart={() => setHov(true)}
      onHoverEnd={() => setHov(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px 14px",
        borderRadius: "12px",
        background: hov ? `rgba(${colorRgb},0.12)` : "rgba(255,255,255,0.04)",
        border: `1px solid ${hov ? `rgba(${colorRgb},0.35)` : "rgba(255,255,255,0.07)"}`,
        transition: "all 0.22s ease",
        cursor: "default",
        userSelect: "none",
      }}
    >
      <CheckCircle2
        size={12}
        style={{ color, flexShrink: 0, opacity: hov ? 1 : 0.5, transition: "opacity 0.2s" }}
        strokeWidth={2.5}
      />
      <span
        style={{
          fontSize: "13px",
          fontWeight: 550,
          color: hov ? "#fff" : "rgba(255,255,255,0.72)",
          fontFamily: "var(--font-jakarta)",
          transition: "color 0.2s",
          whiteSpace: "nowrap",
        }}
      >
        {name}
      </span>
      <span
        style={{
          marginLeft: "2px",
          fontSize: "10px",
          fontWeight: 700,
          color: hov ? color : "rgba(255,255,255,0.25)",
          fontFamily: "var(--font-jakarta)",
          transition: "color 0.2s",
        }}
      >
        {level}%
      </span>
    </motion.div>
  );
}


/* ─────────────────────────────────────────────────────────
   DOMAIN CARD — the primary expertise card
───────────────────────────────────────────────────────── */
function DomainCard({
  domain,
  index,
  totalCards,
  isOpen,
  anyOpen,
  onToggle,
  layoutMode,
  hoveredIndex,
  onHover,
  activeIndex,
  onActiveChange,
}: {
  domain: Domain;
  index: number;
  totalCards: number;
  isOpen: boolean;
  anyOpen: boolean;
  onToggle: () => void;
  layoutMode: "stack" | "tablet" | "mobile";
  hoveredIndex: number | null;
  onHover: (idx: number | null) => void;
  activeIndex?: number;
  onActiveChange?: (idx: number) => void;
}) {
  const [hov, setHov] = useState(false);
  const [hasHover, setHasHover] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover)");
    const checkHover = () => {
      setHasHover(mediaQuery.matches);
    };
    requestAnimationFrame(checkHover);
  }, []);

  const IconA = domain.icons[0];
  const IconB = domain.icons[1];

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, { stiffness: 150, damping: 25 });
  const sy = useSpring(my, { stiffness: 150, damping: 25 });

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 150, damping: 22, mass: 0.5 });
  const rotateY = useSpring(ry, { stiffness: 150, damping: 22, mass: 0.5 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const pxX = e.clientX - rect.left;
      const pxY = e.clientY - rect.top;

      mx.set(pxX);
      my.set(pxY);

      if (hasHover && layoutMode !== "mobile") {
        const normX = pxX / rect.width - 0.5;
        const normY = pxY / rect.height - 0.5;
        const maxTilt = isOpen ? 3 : 12; 

        rx.set(normY * maxTilt);
        ry.set(-normX * maxTilt);
      }
    },
    [hasHover, isOpen, layoutMode, mx, my, rx, ry]
  );

  const handleHoverStart = () => {
    setHov(true);
    onHover(index);
  };

  const handleHoverEnd = () => {
    setHov(false);
    onHover(null);
    rx.set(0);
    ry.set(0);
  };

  let x = 0;
  let y = 0;
  let z = 0;
  let rotateYVal = 0;
  let rotateXVal = 0;
  let scale = 1;
  let opacity = 1;
  let zIndex = totalCards - index;

  let cardWidth = "460px";
  let cardHeight = "285px";

  if (layoutMode === "stack") {
    cardWidth = "460px";
    cardHeight = "285px";

    const spacing = 145;
    const midIndex = (totalCards - 1) / 2;
    const baseX = (index - midIndex) * spacing;
    
    const baseZ = (totalCards - 1 - index) * 30;
    const cardAngle = -15;

    if (isOpen) {
      x = 0;
      y = -20;
      z = 250;
      rotateYVal = 0;
      rotateXVal = 0;
      scale = 1.06;
      zIndex = 100;
      opacity = 1;
    } else {
      if (anyOpen) {
        x = baseX;
        z = baseZ;
        rotateYVal = cardAngle;
        rotateXVal = 0;
        opacity = 0.15;
        zIndex = totalCards - index;
      } else {
        let hoverOffset = 0;
        if (hoveredIndex !== null) {
          if (index < hoveredIndex) {
            hoverOffset = -22; 
          } else if (index > hoveredIndex) {
            hoverOffset = 22; 
          }
        }
        
        x = baseX + (hoveredIndex === index ? 60 : hoverOffset);
        z = baseZ + (hoveredIndex === index ? 45 : 0);
        rotateYVal = cardAngle;
        rotateXVal = 0;
        opacity = 1;
        zIndex = hoveredIndex === index ? 40 : totalCards - index;
      }
    }
  } else if (layoutMode === "tablet") {
    cardWidth = "390px";
    cardHeight = "260px";

    const spacing = 130;
    const midIndex = (totalCards - 1) / 2;
    const baseX = (index - midIndex) * spacing;
    const baseZ = (totalCards - 1 - index) * 20; 
    const cardAngle = -12;

    if (isOpen) {
      x = 0;
      y = -10;
      z = 200;
      rotateYVal = 0;
      rotateXVal = 0;
      scale = 1.04;
      zIndex = 100;
      opacity = 1;
    } else {
      if (anyOpen) {
        x = baseX;
        z = baseZ;
        rotateYVal = cardAngle;
        rotateXVal = 0;
        opacity = 0.15;
        zIndex = totalCards - index;
      } else {
        let hoverOffset = 0;
        if (hoveredIndex !== null) {
          if (index < hoveredIndex) {
            hoverOffset = -15;
          } else if (index > hoveredIndex) {
            hoverOffset = 15;
          }
        }

        x = baseX + (hoveredIndex === index ? 40 : hoverOffset);
        z = baseZ + (hoveredIndex === index ? 30 : 0);
        rotateYVal = cardAngle;
        rotateXVal = 0;
        opacity = 1;
        zIndex = hoveredIndex === index ? 40 : totalCards - index;
      }
    }
  } else if (layoutMode === "mobile") {
    cardWidth = "calc(100vw - 48px)";
    cardHeight = "235px";

    const currentActive = activeIndex ?? 0;
    const offsetIndex = index - currentActive;
    const isMobileActive = offsetIndex === 0;

    if (isOpen) {
      x = 0;
      y = 0;
      z = 180;
      rotateYVal = 0;
      rotateXVal = 0;
      scale = 1.02;
      zIndex = 100;
      opacity = 1;
    } else {
      if (anyOpen) {
        x = offsetIndex * 60;
        z = -100;
        rotateYVal = -offsetIndex * 22;
        opacity = 0;
        scale = 0.8;
      } else {
        x = offsetIndex * 60; 
        z = isMobileActive ? 60 : -45 - Math.abs(offsetIndex) * 20;
        rotateYVal = -offsetIndex * 22;
        rotateXVal = 0;
        scale = isMobileActive ? 1.0 : 0.84;
        opacity = 1 - Math.min(Math.abs(offsetIndex) * 0.35, 0.85);
        zIndex = 10 - Math.abs(offsetIndex);
      }
    }
  }

  const spotlightBg = useTransform(
    [sx, sy],
    ([lx, ly]: number[]) =>
      `radial-gradient(280px circle at ${lx}px ${ly}px, rgba(${domain.colorRgb},0.09) 0%, transparent 70%)`
  );

  const glareBg = useTransform(
    [sx, sy],
    ([lx, ly]: number[]) =>
      `radial-gradient(220px circle at ${lx}px ${ly}px, rgba(255,255,255,0.12) 0%, transparent 80%)`
  );

  const glassBackground = isOpen
    ? `linear-gradient(135deg, rgba(${domain.colorRgb}, 0.12) 0%, rgba(10, 10, 15, 0.96) 60%)`
    : hov
    ? `linear-gradient(135deg, rgba(${domain.colorRgb}, 0.06) 0%, rgba(255, 255, 255, 0.02) 40%, rgba(5, 5, 5, 0.95) 90%)`
    : `linear-gradient(135deg, rgba(${domain.colorRgb}, 0.03) 0%, rgba(255, 255, 255, 0.01) 30%, rgba(5, 5, 5, 0.94) 80%)`;

  const handleCardClick = () => {
    if (layoutMode === "mobile" && onActiveChange) {
      const isMobileActive = activeIndex === index;
      if (!isMobileActive) {
        onActiveChange(index);
        return;
      }
    }
    onToggle();
  };

  const outerAnimate = {
    x: x,
    y: y,
    z: z,
    rotateX: rotateXVal,
    rotateY: rotateYVal,
    scale: scale,
    opacity: opacity,
  };

  return (
    <motion.div
      animate={outerAnimate}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 24,
        mass: 0.8,
      }}
      layout
      drag={layoutMode === "mobile" && !isOpen ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.25}
      onDragEnd={(e, info) => {
        if (layoutMode === "mobile" && onActiveChange && activeIndex !== undefined) {
          const threshold = 40;
          if (info.offset.x < -threshold) {
            onActiveChange(Math.min(activeIndex + 1, totalCards - 1));
          } else if (info.offset.x > threshold) {
            onActiveChange(Math.max(activeIndex - 1, 0));
          }
        }
      }}
      style={{
        position: "absolute",
        width: cardWidth,
        maxWidth: layoutMode === "mobile" ? "305px" : undefined,
        height: isOpen ? "auto" : cardHeight,
        zIndex: zIndex,
        transformStyle: "preserve-3d",
        pointerEvents: anyOpen && !isOpen ? "none" : "auto",
      }}
    >
      <motion.div
        onClick={handleCardClick}
        onMouseMove={handleMouseMove}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        animate={{
          scale: hov && !isOpen ? 1.025 : 1,
          z: hov && !isOpen ? 15 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
        }}
        style={{
          position: "relative",
          borderRadius: "28px",
          padding: layoutMode === "mobile" ? "24px 24px 20px" : "28px 28px 24px",
          background: glassBackground,
          border: "1px solid rgba(255, 255, 255, 0.035)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          cursor: "pointer",
          overflow: "hidden",
          transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
          boxShadow: isOpen
            ? `0 30px 70px rgba(0,0,0,0.65), 0 0 50px rgba(${domain.colorRgb},0.18)`
            : hov
            ? `0 20px 45px rgba(0,0,0,0.5), 0 0 25px rgba(${domain.colorRgb},0.1)`
            : "0 8px 30px rgba(0,0,0,0.3)",
          transformStyle: "preserve-3d",
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      >
        <motion.div
          aria-hidden="true"
          style={{
            position: "absolute", inset: 0,
            background: spotlightBg, pointerEvents: "none",
            opacity: hov || isOpen ? 1 : 0,
            transition: "opacity 0.3s ease", zIndex: 0,
            transform: "translateZ(1px)",
          }}
        />

        <motion.div
          aria-hidden="true"
          style={{
            position: "absolute", inset: 0,
            background: glareBg, pointerEvents: "none",
            opacity: hov ? 1 : 0,
            transition: "opacity 0.3s ease", zIndex: 10,
            mixBlendMode: "overlay",
            transform: "translateZ(2px)",
          }}
        />

        {isOpen && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "50%",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              cursor: "pointer",
              zIndex: 20,
              transform: "translateZ(40px)",
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.12)";
              e.currentTarget.style.transform = "translateZ(40px) scale(1.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              e.currentTarget.style.transform = "translateZ(40px) scale(1)";
            }}
          >
            ✕
          </button>
        )}

        <div
          aria-hidden="true"
          style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "2px",
            background: domain.color,
            transform: `scaleX(${isOpen || hov ? 1 : 0}) translateZ(10px)`,
            transformOrigin: "left",
            transition: "transform 0.38s cubic-bezier(0.16,1,0.3,1)",
            zIndex: 2,
          }}
        />

        <div style={{ position: "relative", zIndex: 3, transformStyle: "preserve-3d" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "18px", transformStyle: "preserve-3d" }}>
            <div style={{ display: "flex", gap: "8px", transformStyle: "preserve-3d" }}>
              {[IconA, IconB].map((Ic, ii) => (
                <motion.div
                  key={ii}
                  animate={{ scale: hov || isOpen ? 1.08 : 1 }}
                  transition={{ duration: 0.25, delay: ii * 0.05 }}
                  style={{
                    width: "42px", height: "42px", borderRadius: "12px",
                    background: `rgba(${domain.colorRgb},0.1)`,
                    border: `1px solid rgba(${domain.colorRgb},0.2)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transform: "translateZ(30px)",
                  }}
                >
                  <Ic size={18} style={{ color: domain.color }} strokeWidth={1.75} />
                </motion.div>
              ))}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "10px", transformStyle: "preserve-3d" }}>
              <div style={{
                padding: "4px 10px", borderRadius: "999px",
                background: `rgba(${domain.colorRgb},0.1)`,
                border: `1px solid rgba(${domain.colorRgb},0.2)`,
                transform: "translateZ(25px)",
              }}>
                <span style={{
                  fontSize: "10px", fontWeight: 700, letterSpacing: "0.06em",
                  textTransform: "uppercase", color: domain.color,
                  fontFamily: "var(--font-jakarta)",
                }}>
                  {domain.badge}
                </span>
              </div>

              {(!isOpen || layoutMode === "mobile") && (
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transform: "translateZ(25px)" }}
                >
                  <ChevronDown
                    size={18}
                    strokeWidth={2}
                    style={{ color: isOpen ? domain.color : "rgba(255,255,255,0.35)" }}
                  />
                </motion.div>
              )}
            </div>
          </div>

          <h3 style={{
            fontSize: layoutMode === "mobile" ? "18px" : "20px", fontWeight: 750, letterSpacing: "-0.02em",
            color: "#ffffff", margin: "0 0 4px",
            fontFamily: "var(--font-jakarta)",
            transform: "translateZ(22px)",
          }}>
            {domain.title}
          </h3>

          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px", transform: "translateZ(18px)" }}>
            <span style={{
              fontSize: "12px", fontWeight: 600, color: domain.color,
              fontFamily: "var(--font-jakarta)",
            }}>
              {domain.subtitle}
            </span>
            <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "inline-block" }} />
            <span style={{
              fontSize: "12px", fontWeight: 500, color: "rgba(255,255,255,0.35)",
              fontFamily: "var(--font-jakarta)",
            }}>
              {domain.skills.length} technologies
            </span>
          </div>

          <p style={{
            fontSize: "13.5px", lineHeight: 1.6, fontWeight: 400,
            color: "rgba(255,255,255,0.52)", margin: "0 0 18px",
            fontFamily: "var(--font-jakarta)", maxWidth: "480px",
            transform: "translateZ(15px)",
          }}>
            {domain.description}
          </p>

          <div style={{ marginBottom: "18px", transform: "translateZ(20px)", transformStyle: "preserve-3d" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
              <span style={{
                fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em",
                textTransform: "uppercase", color: "rgba(255,255,255,0.28)",
                fontFamily: "var(--font-jakarta)",
              }}>
                Expertise Score
              </span>
              <span style={{
                fontSize: "12px", fontWeight: 800, color: domain.color,
                fontFamily: "var(--font-jakarta)",
              }}>
                {domain.expertise}%
              </span>
            </div>
            <div style={{ height: "4px", borderRadius: "999px", background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${domain.expertise}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: index * 0.1 + 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  height: "100%", borderRadius: "999px",
                  background: `linear-gradient(90deg, ${domain.color}, rgba(${domain.colorRgb},0.55))`,
                  boxShadow: `0 0 10px rgba(${domain.colorRgb},0.4)`,
                }}
              />
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", transform: "translateZ(15px)", transformStyle: "preserve-3d" }}>
            {domain.preview.map((name) => (
              <span
                key={name}
                style={{
                  fontSize: "11px", fontWeight: 600,
                  color: "rgba(255,255,255,0.50)",
                  fontFamily: "var(--font-jakarta)",
                  padding: "3px 9px",
                  borderRadius: "6px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  userSelect: "none",
                }}
              >
                {name}
              </span>
            ))}
            {domain.skills.length > domain.preview.length && !isOpen && (
              <span style={{
                fontSize: "11px", fontWeight: 600,
                color: domain.color,
                fontFamily: "var(--font-jakarta)",
                padding: "3px 9px",
                borderRadius: "6px",
                background: `rgba(${domain.colorRgb},0.08)`,
                border: "1px solid rgba(${domain.colorRgb},0.15)",
                userSelect: "none",
              }}>
                +{domain.skills.length - domain.preview.length} more
              </span>
            )}
          </div>

          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                key="expand"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ overflow: "hidden", marginTop: "24px", transformStyle: "preserve-3d" }}
              >
                <div
                  style={{
                    paddingTop: "24px",
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    transform: "translateZ(10px)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px", transform: "translateZ(12px)" }}>
                    <Zap size={13} style={{ color: domain.color }} strokeWidth={2.5} />
                    <span style={{
                      fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em",
                      textTransform: "uppercase", color: domain.color,
                      fontFamily: "var(--font-jakarta)",
                    }}>
                      Full Technology Stack
                    </span>
                    <span style={{
                      marginLeft: "auto",
                      fontSize: "11px", fontWeight: 600,
                      color: "rgba(255,255,255,0.45)",
                      fontFamily: "var(--font-jakarta)",
                      padding: "3px 9px",
                      borderRadius: "999px",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      whiteSpace: "nowrap",
                    }}>
                      ✦ {domain.highlight}
                    </span>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", transform: "translateZ(15px)" }}>
                    {domain.skills.map((skill, si) => (
                      <SkillChip
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        color={domain.color}
                        colorRgb={domain.colorRgb}
                        i={si}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────────────────────── */
export default function Skills() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [layoutMode, setLayoutMode] = useState<"stack" | "tablet" | "mobile">("stack");

  useEffect(() => {
    const checkViewport = () => {
      const w = window.innerWidth;
      if (w >= 1024) {
        setLayoutMode("stack");
      } else if (w >= 768) {
        setLayoutMode("tablet");
      } else {
        setLayoutMode("mobile");
      }
    };
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  const toggle = (id: string) =>
    setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      id="skills"
      className="section-padding"
      style={{
        position: "relative",
        backgroundColor: "#050505",
        overflow: "hidden",
      }}
    >
      {/* Ambient background */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {/* Dot grid */}
        <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.9 }}>
          <defs>
            <pattern id="skillGrid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255,255,255,0.028)" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#skillGrid)" />
        </svg>
        {/* Colour blobs */}
        <div style={{ position: "absolute", top: "15%", left: "5%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)", filter: "blur(50px)" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "5%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(14,165,233,0.05) 0%, transparent 70%)", filter: "blur(50px)" }} />
        <div style={{ position: "absolute", top: "50%", right: "30%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(16,185,129,0.035) 0%, transparent 70%)", filter: "blur(60px)" }} />
      </div>

      <div
        className="skills-container section-container"
        style={{
          position: "relative", zIndex: 10,
        }}
      >
        {/* ── SECTION HEADER ─────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="section-header-spacing"
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
            <div style={{ width: "20px", height: "1px", background: "rgba(255,255,255,0.2)" }} />
            <span style={{
              fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.3)",
              fontFamily: "var(--font-jakarta)",
            }}>
              Technical Expertise
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.05,
              color: "#ffffff", margin: 0,
              fontFamily: "var(--font-jakarta)",
            }}>
              Skill{" "}
              <span style={{
                background: "linear-gradient(135deg, #8b5cf6 0%, #0ea5e9 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Intelligence
              </span>
            </h2>

            <p style={{
              fontSize: "14px", lineHeight: 1.65,
              color: "rgba(255,255,255,0.42)", margin: 0,
              fontFamily: "var(--font-jakarta)", maxWidth: "380px",
            }}>
              {layoutMode !== "mobile"
                ? "Hover cards to browse stack. Click a card to focus & inspect full details."
                : "Swipe cards or tap bullet indicators. Tap active card to reveal full technology details."}
            </p>
          </div>
        </motion.div>

        {/* ── SKILLS DISPLAY ───────────────── */}
        {layoutMode !== "mobile" ? (
          /* Desktop & Tablet Stack Layout */
          <div
            style={{
              position: "relative",
              height: layoutMode === "tablet" ? "380px" : "420px",
              width: "100%",
              perspective: "2000px",
              transformStyle: "preserve-3d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "40px auto 0",
              overflow: "visible",
            }}
          >
            {/* Dark Backdrop for Focused Card */}
            <AnimatePresence>
              {openId !== null && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setOpenId(null)}
                  style={{
                    position: "fixed",
                    inset: 0,
                    backgroundColor: "#000",
                    zIndex: 40,
                    cursor: "pointer",
                    backdropFilter: "blur(5px)",
                    WebkitBackdropFilter: "blur(5px)",
                  }}
                />
              )}
            </AnimatePresence>

            {/* 3D Tilted Stage Floor */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                transformStyle: "preserve-3d",
                transform: "rotateX(15deg)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {DOMAINS.map((domain, i) => (
                <DomainCard
                  key={domain.id}
                  domain={domain}
                  index={i}
                  totalCards={DOMAINS.length}
                  isOpen={openId === domain.id}
                  anyOpen={openId !== null}
                  onToggle={() => toggle(domain.id)}
                  layoutMode={layoutMode}
                  hoveredIndex={hoveredIndex}
                  onHover={setHoveredIndex}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Mobile Swipe Carousel Layout */
          <div style={{ width: "100%" }}>
            <div
              style={{
                position: "relative",
                height: "320px",
                width: "100%",
                perspective: "1200px",
                transformStyle: "preserve-3d",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "32px auto 0",
                overflow: "visible",
              }}
            >
              {/* Dark Backdrop for Focused Card */}
              <AnimatePresence>
                {openId !== null && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setOpenId(null)}
                    style={{
                      position: "fixed",
                      inset: 0,
                      backgroundColor: "#000",
                      zIndex: 40,
                      cursor: "pointer",
                      backdropFilter: "blur(5px)",
                      WebkitBackdropFilter: "blur(5px)",
                    }}
                  />
                )}
              </AnimatePresence>

              {/* Mobile Carousel Stage */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  transformStyle: "preserve-3d",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {DOMAINS.map((domain, i) => (
                  <DomainCard
                    key={domain.id}
                    domain={domain}
                    index={i}
                    totalCards={DOMAINS.length}
                    isOpen={openId === domain.id}
                    anyOpen={openId !== null}
                    onToggle={() => toggle(domain.id)}
                    layoutMode="mobile"
                    hoveredIndex={hoveredIndex}
                    onHover={setHoveredIndex}
                    activeIndex={activeIndex}
                    onActiveChange={setActiveIndex}
                  />
                ))}
              </div>
            </div>

            {/* Bullet indicators & swipe prompt */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                marginTop: "16px",
              }}
            >
              <div style={{ display: "flex", gap: "6px", zIndex: 10 }}>
                {DOMAINS.map((_, i) => {
                  const isActive = activeIndex === i;
                  return (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      style={{
                        width: isActive ? "20px" : "7px",
                        height: "7px",
                        borderRadius: "999px",
                        background: isActive
                          ? "linear-gradient(90deg, #8b5cf6 0%, #0ea5e9 100%)"
                          : "rgba(255,255,255,0.25)",
                        border: "none",
                        padding: 0,
                        cursor: "pointer",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    />
                  );
                })}
              </div>

              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "rgba(255, 255, 255, 0.35)",
                  fontFamily: "var(--font-jakarta)",
                }}
              >
                ← Drag to swipe left or right →
              </span>
            </div>
          </div>
        )}

        {/* ── TECHNOLOGY ECOSYSTEM FOOTER ─────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.3 }}
          style={{
            marginTop: layoutMode !== "mobile" ? "64px" : "48px",
            padding: "28px 32px",
            borderRadius: "20px",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          <div style={{
            display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px",
          }}>
            <div style={{ width: "16px", height: "1px", background: "rgba(255,255,255,0.18)" }} />
            <span style={{
              fontSize: "10px", fontWeight: 700, letterSpacing: "0.16em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.25)",
              fontFamily: "var(--font-jakarta)",
            }}>
              All Technologies
            </span>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {DOMAINS.flatMap((d) =>
              d.skills.map((s) => ({
                name: s.name,
                color: d.color,
                colorRgb: d.colorRgb,
              }))
            ).map(({ name, color, colorRgb }) => (
              <EcoChip key={name} name={name} color={color} colorRgb={colorRgb} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 900px) {
          .skills-container { padding: 0 28px !important; }
        }
        @media (max-width: 560px) {
          .skills-container { padding: 0 16px !important; }
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   ECO CHIP (footer technology bubble)
───────────────────────────────────────────────────────── */
function EcoChip({ name, color, colorRgb }: { name: string; color: string; colorRgb: string }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.span
      onHoverStart={() => setHov(true)}
      onHoverEnd={() => setHov(false)}
      style={{
        padding: "5px 12px",
        borderRadius: "8px",
        fontSize: "12px",
        fontWeight: 550,
        fontFamily: "var(--font-jakarta)",
        background: hov ? `rgba(${colorRgb},0.10)` : "rgba(255,255,255,0.035)",
        border: `1px solid ${hov ? `rgba(${colorRgb},0.30)` : "rgba(255,255,255,0.06)"}`,
        color: hov ? color : "rgba(255,255,255,0.45)",
        cursor: "default",
        userSelect: "none",
        transition: "all 0.2s ease",
      }}
    >
      {name}
    </motion.span>
  );
}
