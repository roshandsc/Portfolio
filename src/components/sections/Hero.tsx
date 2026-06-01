"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles, Code2 } from "lucide-react";
import Image from "next/image";

/* ─────────────────────────────────────────────────────────
   PERSPECTIVE GRID BACKGROUND
   Pure CSS — no canvas animation, just a static premium mesh
───────────────────────────────────────────────────────── */
function PerspectiveGrid() {
  return (
    <div
      aria-hidden="true"
      className="perspective-grid-bg"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* Horizontal lines with perspective */}
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", inset: 0 }}
      >
        <defs>
          <pattern
            id="smallGrid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="0.75"
            />
          </pattern>
          <pattern
            id="grid"
            width="180"
            height="180"
            patternUnits="userSpaceOnUse"
          >
            <rect width="180" height="180" fill="url(#smallGrid)" />
            <path
              d="M 180 0 L 0 0 0 180"
              fill="none"
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   MAIN HERO
───────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      id="about"
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#050505",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <PerspectiveGrid />

      {/* ── DESKTOP LAYOUT ────────────────────────────────── */}
      <div
        className="hero-desktop-grid section-container"
        style={{
          position: "relative",
          zIndex: 10,
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          width: "100%",
          minHeight: "100vh",
          alignItems: "center",
        }}
      >
        {/* ══════════════════════════════════════════
            LEFT CONTENT COLUMN
        ══════════════════════════════════════════ */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingRight: "48px",
            paddingTop: "48px",
            paddingBottom: "48px",
          }}
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "32px",
              width: "fit-content",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#22c55e",
                boxShadow: "0 0 10px #22c55e",
                display: "inline-block",
                animation: "heroStatusPulse 2s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.55)",
                letterSpacing: "0.04em",
                fontFamily: "var(--font-jakarta)",
              }}
            >
              Open for Opportunities
            </span>
          </motion.div>

          {/* ── HERO HEADING ─── */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="hero-heading-text"
            style={{
              fontSize: "88px",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: "#ffffff",
              margin: 0,
              marginBottom: "32px",
              fontFamily: "var(--font-jakarta)",
              userSelect: "text",
            }}
          >
            Building{" "}
            <span style={{ color: "#f7931e" }}>Intelligent</span>
            <br />
            Digital{" "}
            <span style={{ color: "#f7931e" }}>Products</span>
          </motion.h1>

          {/* ── DESCRIPTION WITH LEFT ACCENT LINE ─── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.24 }}
            style={{
              display: "flex",
              gap: "20px",
              marginBottom: "48px",
              maxWidth: "600px",
            }}
          >
            {/* Vertical accent line */}
            <div
              style={{
                width: "3px",
                minHeight: "100%",
                borderRadius: "999px",
                background: "#f7931e",
                flexShrink: 0,
                opacity: 0.9,
              }}
            />
            <p
              className="hero-description"
              style={{
                fontSize: "22px",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.80)",
                margin: 0,
                fontFamily: "var(--font-jakarta)",
                fontWeight: 400,
              }}
            >
              Full Stack Developer &amp; AI/ML Engineer specializing in scalable
              web applications, AI-powered systems, machine learning solutions,
              and production-ready software that creates real-world impact.
            </p>
          </motion.div>

          {/* ── CTA BUTTONS ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="hero-cta-row"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
            }}
          >
            {/* PRIMARY — Let's Talk */}
            <motion.a
              href="#contact"
              className="hero-cta-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                height: "68px",
                paddingLeft: "36px",
                paddingRight: "36px",
                borderRadius: "18px",
                background: "#f7931e",
                color: "#ffffff",
                fontFamily: "var(--font-jakarta)",
                fontWeight: 700,
                fontSize: "17px",
                letterSpacing: "-0.01em",
                textDecoration: "none",
                border: "none",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(247, 147, 30, 0.40)",
                flexShrink: 0,
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 12px 40px rgba(247, 147, 30, 0.55)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Shine overlay on hover */}
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)",
                  transform: "translateX(-100%)",
                  transition: "transform 0.5s ease",
                }}
                className="btn-shine"
              />
              <MessageCircle size={18} strokeWidth={2.5} />
              Let&apos;s Talk
            </motion.a>

            {/* SECONDARY — View Portfolio */}
            <motion.a
              href="#projects"
              className="hero-cta-secondary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                height: "68px",
                paddingLeft: "8px",
                paddingRight: "8px",
                background: "transparent",
                color: "rgba(255,255,255,0.75)",
                fontFamily: "var(--font-jakarta)",
                fontWeight: 600,
                fontSize: "17px",
                letterSpacing: "-0.01em",
                textDecoration: "none",
                border: "none",
                cursor: "pointer",
                transition: "color 0.2s ease",
              }}
              whileHover={{ color: "#ffffff" } as never}
            >
              View Portfolio
              <ArrowRight
                size={20}
                strokeWidth={2}
                style={{ transition: "transform 0.25s ease" }}
                className="portfolio-arrow"
              />
            </motion.a>
          </motion.div>
        </div>

        {/* ══════════════════════════════════════════
            RIGHT IMAGE COLUMN
        ══════════════════════════════════════════ */}
        <div
          className="hero-image-col"
          style={{
            position: "relative",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            height: "100vh",
            paddingBottom: 0,
          }}
        >
          {/* Dark backdrop shape behind photo */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: "-20px",
              left: "50%",
              transform: "translateX(-44%)",
              width: "88%",
              height: "84%",
              borderRadius: "280px 280px 0 0",
              background:
                "linear-gradient(175deg, rgba(30,20,10,0.55) 0%, rgba(15,10,5,0.85) 100%)",
              border: "1px solid rgba(247,147,30,0.06)",
              zIndex: 1,
            }}
          />

          {/* Profile photo */}
          <motion.div
            style={{
              position: "relative",
              zIndex: 2,
              width: "100%",
              maxWidth: "460px",
              height: "80vh",
              maxHeight: "680px",
              minHeight: "480px",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/roshan_transparent.png"
              alt="Roshan Shetty — Full Stack Developer & AI/ML Engineer"
              fill
              priority
              sizes="(max-width: 1280px) 380px, 460px"
              style={{
                objectFit: "contain",
                objectPosition: "bottom center",
                userSelect: "none",
                filter: "drop-shadow(0 32px 64px rgba(0,0,0,0.6))",
              }}
            />
            {/* Bottom fade */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "120px",
                background:
                  "linear-gradient(to top, #050505 20%, transparent 100%)",
                zIndex: 10,
                pointerEvents: "none",
              }}
            />
          </motion.div>

          {/* ── FLOATING CARD 1 — "Hi, I'm Roshan" ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -12 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="hero-float-card-1"
            style={{
              position: "absolute",
              top: "25%",
              left: "-10%",
              zIndex: 20,
              background: "#ffffff",
              borderRadius: "16px",
              padding: "14px 20px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3)",
              userSelect: "none",
              whiteSpace: "nowrap",
              minWidth: "180px",
            }}
          >
            {/* Avatar circle */}
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #f7931e, #ff6b35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: 800,
                  color: "#fff",
                  fontFamily: "var(--font-jakarta)",
                  lineHeight: 1,
                }}
              >
                R
              </span>
            </div>
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#111111",
                  fontFamily: "var(--font-jakarta)",
                  lineHeight: 1.2,
                }}
              >
                Hi, I&apos;m Roshan
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "#888888",
                  fontFamily: "var(--font-jakarta)",
                  marginTop: "2px",
                }}
              >
                Let&apos;s build something great
              </p>
            </div>
            {/* Speech bubble tail */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: "-9px",
                left: "28px",
                width: 0,
                height: 0,
                borderLeft: "9px solid transparent",
                borderRight: "9px solid transparent",
                borderTop: "9px solid #ffffff",
              }}
            />
          </motion.div>

          {/* ── FLOATING CARD 2 — "AI/ML Engineer" ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 12 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.88,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="hero-float-card-2"
            style={{
              position: "absolute",
              top: "60%",
              right: "-5%",
              zIndex: 20,
              background: "rgba(12, 12, 18, 0.88)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "16px",
              padding: "16px 20px",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)",
              userSelect: "none",
              whiteSpace: "nowrap",
              minWidth: "196px",
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "10px",
                background: "rgba(247,147,30,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "10px",
              }}
            >
              <Sparkles
                size={16}
                style={{ color: "#f7931e" }}
                strokeWidth={2}
              />
            </div>
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                fontWeight: 700,
                color: "#ffffff",
                fontFamily: "var(--font-jakarta)",
                lineHeight: 1.3,
              }}
            >
              AI/ML Engineer
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "12px",
                fontWeight: 500,
                color: "rgba(255,255,255,0.45)",
                fontFamily: "var(--font-jakarta)",
                marginTop: "3px",
              }}
            >
              Full Stack Developer
            </p>

            {/* Small colored bar */}
            <div
              style={{
                marginTop: "12px",
                height: "3px",
                borderRadius: "999px",
                background:
                  "linear-gradient(90deg, #f7931e 0%, rgba(247,147,30,0.2) 100%)",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* ── MOBILE LAYOUT (320px - 480px) ────────────────── */}
      <div
        className="hero-mobile-layout"
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          height: "100dvh",
          display: "none",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 16px 0px 16px",
          boxSizing: "border-box",
        }}
      >
        {/* Top Area: Status, Heading, Description, CTA Buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            marginTop: "env(safe-area-inset-top, 16px)",
            zIndex: 30,
          }}
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              marginBottom: "8px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#22c55e",
                boxShadow: "0 0 8px #22c55e",
                display: "inline-block",
                animation: "heroStatusPulse 2s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontSize: "11px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.55)",
                letterSpacing: "0.04em",
                fontFamily: "var(--font-jakarta)",
              }}
            >
              Open for Opportunities
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: "30px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              margin: 0,
              marginBottom: "8px",
              fontFamily: "var(--font-jakarta)",
              textAlign: "center",
            }}
          >
            Building <span style={{ color: "#f7931e" }}>Intelligent</span>
            <br />
            Digital <span style={{ color: "#f7931e" }}>Products</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{
              fontSize: "13px",
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.75)",
              margin: 0,
              marginBottom: "16px",
              fontFamily: "var(--font-jakarta)",
              fontWeight: 400,
              textAlign: "center",
              maxWidth: "340px",
            }}
          >
            Full Stack Developer &amp; AI/ML Engineer specializing in scalable web applications, AI-powered systems, machine learning solutions, and production software.
          </motion.p>

          {/* CTA Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              width: "100%",
            }}
          >
            {/* PRIMARY — Let's Talk */}
            <motion.a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                height: "44px",
                paddingLeft: "20px",
                paddingRight: "20px",
                borderRadius: "12px",
                background: "#f7931e",
                color: "#ffffff",
                fontFamily: "var(--font-jakarta)",
                fontWeight: 700,
                fontSize: "13px",
                textDecoration: "none",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 16px rgba(247, 147, 30, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle size={14} strokeWidth={2.5} />
              Let&apos;s Talk
            </motion.a>

            {/* SECONDARY — View Portfolio */}
            <motion.a
              href="#projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                height: "44px",
                color: "rgba(255,255,255,0.75)",
                fontFamily: "var(--font-jakarta)",
                fontWeight: 600,
                fontSize: "13px",
                textDecoration: "none",
                border: "none",
                cursor: "pointer",
              }}
              whileTap={{ scale: 0.98 }}
            >
              View Portfolio
              <ArrowRight size={14} strokeWidth={2.5} />
            </motion.a>
          </motion.div>
        </div>

        {/* Center / Image Area */}
        <div
          style={{
            flex: 1,
            position: "relative",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          {/* Subtle Orange Glow behind image */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: "10%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(247,147,30,0.18) 0%, transparent 70%)",
              zIndex: 1,
              pointerEvents: "none",
            }}
          />

          {/* Centered Profile Image Wrapper */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              width: "75vw",
              height: "48dvh",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <Image
              src="/roshan_transparent.png"
              alt="Roshan Shetty"
              fill
              priority
              sizes="75vw"
              style={{
                objectFit: "contain",
                objectPosition: "bottom center",
                userSelect: "none",
              }}
            />
            {/* Smooth transition bottom fade to blend with background */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "40px",
                background: "linear-gradient(to top, #050505 15%, transparent 100%)",
                zIndex: 3,
                pointerEvents: "none",
              }}
            />

            {/* ── SIDE-BY-SIDE BADGES CONTAINER ── */}
            <div
              style={{
                position: "absolute",
                top: "-24px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "90vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                zIndex: 20,
                pointerEvents: "none",
              }}
            >
              {/* ── GREETING BUBBLE (Minimized) ── */}
              <div className="mobile-bubble-float" style={{ width: "165px", pointerEvents: "none" }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  style={{
                    background: "#ffffff",
                    borderRadius: "14px",
                    padding: "8px 10px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                    position: "relative",
                    pointerEvents: "auto",
                  }}
                >
                  {/* Avatar Icon */}
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #f7931e, #ff6b35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: 800,
                        color: "#fff",
                        fontFamily: "var(--font-jakarta)",
                        lineHeight: 1,
                      }}
                    >
                      R
                    </span>
                  </div>
                  {/* Text */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "#111111",
                        fontFamily: "var(--font-jakarta)",
                        lineHeight: 1.1,
                      }}
                    >
                      Hi, I&apos;m Roshan
                    </p>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "9px",
                        fontWeight: 500,
                        color: "#666666",
                        fontFamily: "var(--font-jakarta)",
                        lineHeight: 1.1,
                      }}
                    >
                      Let&apos;s build great things
                    </p>
                  </div>
                  {/* Speech Bubble Tail */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      bottom: "-6px",
                      right: "24px",
                      width: 0,
                      height: 0,
                      borderLeft: "6px solid transparent",
                      borderRight: "6px solid transparent",
                      borderTop: "6px solid #ffffff",
                    }}
                  />
                </motion.div>
              </div>

              {/* ── PROFESSION CARD (Minimized) ── */}
              <div className="mobile-card-float" style={{ width: "165px", pointerEvents: "none" }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  style={{
                    background: "rgba(15, 15, 20, 0.85)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "14px",
                    padding: "8px 10px",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    pointerEvents: "auto",
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "6px",
                      background: "rgba(247,147,30,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Sparkles size={12} style={{ color: "#f7931e" }} strokeWidth={2.5} />
                  </div>
                  {/* Text */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "#ffffff",
                        fontFamily: "var(--font-jakarta)",
                        lineHeight: 1.1,
                      }}
                    >
                      AI/ML Engineer
                    </p>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "9px",
                        fontWeight: 500,
                        color: "rgba(255,255,255,0.5)",
                        fontFamily: "var(--font-jakarta)",
                        lineHeight: 1.1,
                      }}
                    >
                      Full Stack Dev
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── MOBILE LAYOUT ──────────────────────────────────── */}
      <style>{`
        /* Pulse animation for status dot */
        @keyframes heroStatusPulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 10px #22c55e; }
          50% { opacity: 0.6; box-shadow: 0 0 18px #22c55e; }
        }

        /* Button hover shine */
        a:hover .btn-shine {
          transform: translateX(200%) !important;
        }

        /* Portfolio arrow hover */
        a:hover .portfolio-arrow {
          transform: translateX(4px);
        }

        /* Floating animations for mobile cards */
        @keyframes floatBubbleMobile {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes floatCardMobile {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
        .mobile-bubble-float {
          animation: floatBubbleMobile 5s ease-in-out infinite;
        }
        .mobile-card-float {
          animation: floatCardMobile 5s ease-in-out infinite;
        }

        /* Default layout behavior */
        .hero-desktop-grid {
          display: grid !important;
        }
        .hero-mobile-layout {
          display: none !important;
        }

        /* ──── TABLET ──── */
        @media (max-width: 1100px) {
          .hero-desktop-grid {
            grid-template-columns: 1fr 0.9fr !important;
            padding: 0 40px !important;
          }
        }

        /* ──── TABLET / MEDIUM SCREENS ──── */
        @media (max-width: 768px) {
          .hero-desktop-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto auto !important;
            min-height: 100vh !important;
            padding-top: 80px !important;
            padding-bottom: 100px !important;
            align-items: start !important;
            gap: 32px;
          }

          .hero-desktop-grid > div:first-child {
            padding-right: 0 !important;
            padding-top: 0 !important;
          }

          .hero-heading-text {
            font-size: 44px !important;
            letter-spacing: -0.03em !important;
          }

          .hero-description {
            font-size: 16px !important;
          }

          .hero-cta-row {
            flex-direction: column !important;
            gap: 16px !important;
            width: 100% !important;
          }

          .hero-cta-primary {
            width: 100% !important;
            justify-content: center !important;
          }

          .hero-cta-secondary {
            justify-content: center !important;
          }

          .hero-image-col {
            height: 50vh !important;
            min-height: 300px !important;
          }

          .hero-float-card-1 {
            left: 10px !important;
            top: 8% !important;
            transform: scale(0.8) !important;
            transform-origin: left top !important;
          }

          .hero-float-card-2 {
            right: 10px !important;
            top: auto !important;
            bottom: 8% !important;
            transform: scale(0.8) !important;
            transform-origin: right bottom !important;
          }
        }

        /* ──── STRICT MOBILE SCREENS ──── */
        @media (max-width: 480px) {
          #about {
            height: 100dvh !important;
            min-height: 100dvh !important;
            max-height: 100dvh !important;
          }

          .perspective-grid-bg {
            opacity: 0.12 !important;
          }

          .hero-desktop-grid {
            display: none !important;
          }

          .hero-mobile-layout {
            display: flex !important;
          }
        }
      `}</style>
    </section>
  );
}
