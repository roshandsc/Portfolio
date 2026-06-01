"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  ExternalLink, 
  X, 
  Folder, 
  ChevronLeft, 
  ChevronRight,
  LayoutGrid, 
  List, 
  Columns, 
  Tv, 
  Search, 
  Laptop, 
  Cloud, 
  Archive,
  ChevronDown,
  CheckCircle2,
  Layers
} from "lucide-react";
import MacWindow from "../MacWindow";

const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

/* ─────────────────────────────────────────────────────────
   SHARED STRUCTURAL INTERFACES
   ───────────────────────────────────────────────────────── */
interface ShowcaseItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
  github?: string;
  live?: string;
  category: string;
  architecture: string;
  icon?: string;
  type: "project" | "paper" | "memory";
}

/* ─────────────────────────────────────────────────────────
   HIGH FIDELITY MOCKUP PREVIEWS FOR HERO BANNER
   ───────────────────────────────────────────────────────── */
function ShowcaseHero({ itemId, accentColor }: { itemId: string; accentColor: string }) {
  switch (itemId) {
    case "fraud-detection":
    case "fraud-pipeline":
      return (
        <div className="w-full h-full relative bg-neutral-950 flex items-center justify-center overflow-hidden rounded-xl border border-white/5 select-none" style={{ minHeight: "220px" }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
          <div className="absolute w-[200px] h-[200px] rounded-full blur-[40px] opacity-20" style={{ background: accentColor }} />
          <svg viewBox="0 0 400 200" className="w-[85%] h-[85%] relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="380" height="180" rx="8" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.08)" />
            <line x1="10" y1="50" x2="390" y2="50" stroke="rgba(255,255,255,0.08)" />
            <circle cx="30" cy="30" r="3.5" fill="#ef4444" />
            <circle cx="45" cy="30" r="3.5" fill="#f59e0b" />
            <circle cx="60" cy="30" r="3.5" fill="#10b981" />
            
            <rect x="30" y="70" width="160" height="100" rx="6" fill="rgba(239,68,68,0.06)" stroke="rgba(239,68,68,0.25)" strokeWidth="1" />
            <text x="42" y="92" fill="#ef4444" fontSize="10" fontWeight="bold" fontFamily="monospace">🚨 ANOMALY DETECTED</text>
            <text x="42" y="112" fill="#fff" fontSize="8" fontFamily="monospace">Trans ID: TXN_98745</text>
            <text x="42" y="125" fill="#fff" fontSize="8" fontFamily="monospace">Amount: $4,920.00</text>
            <rect x="42" y="140" width="70" height="16" rx="3" fill="#ef4444" />
            <text x="77" y="151" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">BLOCK CARD</text>
            
            <rect x="210" y="70" width="160" height="100" rx="6" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" />
            <text x="222" y="88" fill="rgba(255,255,255,0.4)" fontSize="8" fontWeight="bold" fontFamily="monospace">MODEL CLASSIFIER WEIGHTS</text>
            <line x1="290" y1="105" x2="260" y2="135" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
            <line x1="290" y1="105" x2="320" y2="135" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
            <circle cx="290" cy="105" r="5" fill={accentColor} />
            <circle cx="260" cy="135" r="5" fill="#3b82f6" />
            <circle cx="320" cy="135" r="5" fill="#10b981" />
            <circle cx="240" cy="155" r="4" fill="rgba(255,255,255,0.3)" />
            <circle cx="280" cy="155" r="4" fill="rgba(255,255,255,0.3)" />
            <line x1="260" y1="135" x2="240" y2="155" stroke="rgba(255,255,255,0.15)" />
            <line x1="260" y1="135" x2="280" y2="155" stroke="rgba(255,255,255,0.15)" />
          </svg>
        </div>
      );
    case "visual-perception":
    case "ai-research":
      return (
        <div className="w-full h-full relative bg-neutral-950 flex items-center justify-center overflow-hidden rounded-xl border border-white/5 select-none" style={{ minHeight: "220px" }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
          <div className="absolute w-[200px] h-[200px] rounded-full blur-[40px] opacity-20" style={{ background: accentColor }} />
          <svg viewBox="0 0 400 200" className="w-[85%] h-[85%] relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="380" height="180" rx="8" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.08)" />
            
            <path d="M 30 50 L 30 30 L 50 30" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
            <path d="M 370 50 L 370 30 L 350 30" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
            <path d="M 30 150 L 30 170 L 50 170" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
            <path d="M 370 150 L 370 170 L 350 170" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
            
            <circle cx="200" cy="95" r="45" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
            <circle cx="200" cy="95" r="50" stroke={accentColor} strokeWidth="1.5" strokeDasharray="10 150" />
            
            <rect x="175" y="80" width="18" height="10" rx="2" fill="rgba(59,130,246,0.08)" stroke="#3b82f6" strokeWidth="1" />
            <rect x="207" y="80" width="18" height="10" rx="2" fill="rgba(59,130,246,0.08)" stroke="#3b82f6" strokeWidth="1" />
            <circle cx="184" cy="85" r="1.5" fill="#3b82f6" />
            <circle cx="216" cy="85" r="1.5" fill="#3b82f6" />
            
            <path d="M 188 115 Q 200 125 212 115" stroke="#10b981" strokeWidth="1.5" fill="none" />
            
            <rect x="290" y="30" width="80" height="42" rx="4" fill="rgba(0,0,0,0.5)" stroke="rgba(255,255,255,0.1)" />
            <text x="298" y="44" fill="rgba(255,255,255,0.4)" fontSize="6" fontWeight="bold">EMOTION ESTIMATOR</text>
            <text x="298" y="56" fill="#10b981" fontSize="10" fontWeight="bold">HAPPY (94%)</text>
            <text x="298" y="66" fill="rgba(255,255,255,0.5)" fontSize="6">Eye Contact: 98%</text>
          </svg>
        </div>
      );
    case "portfolio-v4":
      return (
        <div className="w-full h-full relative bg-neutral-950 flex items-center justify-center overflow-hidden rounded-xl border border-white/5 select-none" style={{ minHeight: "220px" }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
          <div className="absolute w-[200px] h-[200px] rounded-full blur-[40px] opacity-20" style={{ background: accentColor }} />
          <svg viewBox="0 0 400 200" className="w-[85%] h-[85%] relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="360" height="160" rx="8" fill="rgba(30,30,40,0.6)" stroke="rgba(255,255,255,0.08)" />
            <rect x="20" y="20" width="360" height="20" rx="8" fill="rgba(0,0,0,0.2)" />
            <circle cx="32" cy="30" r="2.5" fill="#ef4444" />
            <circle cx="40" cy="30" r="2.5" fill="#f59e0b" />
            <circle cx="48" cy="30" r="2.5" fill="#10b981" />
            <text x="200" y="33" fill="rgba(255,255,255,0.4)" fontSize="7" textAnchor="middle" fontWeight="semibold">Roshan Shetty - Finder Portfolio</text>
            
            <rect x="20" y="40" width="80" height="140" fill="rgba(0,0,0,0.15)" stroke="rgba(255,255,255,0.04)" />
            <rect x="25" y="48" width="70" height="8" rx="2" fill="rgba(0, 122, 255, 0.2)" />
            <circle cx="30" cy="52" r="1.5" fill="#007aff" />
            <rect x="25" y="60" width="70" height="8" rx="2" fill="rgba(255,255,255,0.03)" />
            
            <rect x="115" y="55" width="24" height="20" rx="2" fill="rgba(0,122,255,0.15)" stroke="rgba(0,122,255,0.3)" />
            <rect x="155" y="55" width="24" height="20" rx="2" fill="rgba(0,122,255,0.15)" stroke="rgba(0,122,255,0.3)" />
            <rect x="195" y="55" width="24" height="20" rx="2" fill="rgba(0,122,255,0.15)" stroke="rgba(0,122,255,0.3)" />
            <text x="127" y="87" fill="#fff" fontSize="5" textAnchor="middle">AI/ML</text>
            <text x="167" y="87" fill="#fff" fontSize="5" textAnchor="middle">Apps</text>
            <text x="207" y="87" fill="#fff" fontSize="5" textAnchor="middle">Papers</text>
          </svg>
        </div>
      );
    case "tessa-learn":
      return (
        <div className="w-full h-full relative bg-neutral-950 flex items-center justify-center overflow-hidden rounded-xl border border-white/5 select-none" style={{ minHeight: "220px" }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
          <div className="absolute w-[200px] h-[200px] rounded-full blur-[40px] opacity-20" style={{ background: accentColor }} />
          <svg viewBox="0 0 400 200" className="w-[85%] h-[85%] relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="380" height="180" rx="8" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.08)" />
            <line x1="10" y1="45" x2="390" y2="45" stroke="rgba(255,255,255,0.08)" />
            
            <circle cx="25" cy="27" r="3" fill="#3b82f6" />
            <rect x="40" y="24" width="80" height="6" rx="2" fill="rgba(255,255,255,0.1)" />
            <rect x="310" y="21" width="60" height="12" rx="3" fill={`${accentColor}25`} stroke={`${accentColor}40`} />
            <text x="340" y="29" fill={accentColor} fontSize="6" fontWeight="bold" textAnchor="middle">LOG OUT</text>
            
            <rect x="30" y="65" width="100" height="100" rx="6" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" />
            <text x="40" y="80" fill="rgba(255,255,255,0.4)" fontSize="8" fontWeight="bold">COURSE OUTLINE</text>
            <rect x="40" y="92" width="80" height="12" rx="2" fill="rgba(255,255,255,0.04)" />
            <circle cx="50" cy="98" r="2" fill="#10b981" />
            <rect x="40" y="110" width="80" height="12" rx="2" fill="rgba(255,255,255,0.04)" />
            <circle cx="50" cy="116" r="2" fill="#10b981" />
            <rect x="40" y="128" width="80" height="12" rx="2" fill="rgba(255,255,255,0.04)" />
            <circle cx="50" cy="134" r="2" fill="rgba(255,255,255,0.2)" />
            
            <rect x="150" y="65" width="210" height="100" rx="6" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.06)" />
            <text x="162" y="80" fill="rgba(255,255,255,0.4)" fontSize="8" fontWeight="bold">AUTOMATED ASSIGNMENT ENGINE</text>
            
            <circle cx="180" cy="115" r="8" fill="#3b82f6" />
            <text x="180" y="118" fill="#fff" fontSize="6" fontWeight="bold" textAnchor="middle">IN</text>
            
            <circle cx="255" cy="115" r="8" fill={accentColor} />
            <text x="255" y="118" fill="#fff" fontSize="5" fontWeight="bold" textAnchor="middle">ETL</text>
            
            <circle cx="330" cy="115" r="8" fill="#10b981" />
            <text x="330" y="118" fill="#fff" fontSize="6" fontWeight="bold" textAnchor="middle">OUT</text>
            
            <line x1="188" y1="115" x2="247" y2="115" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
            <line x1="263" y1="115" x2="322" y2="115" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
          </svg>
        </div>
      );
    case "la-capella":
      return (
        <div className="w-full h-full relative bg-neutral-950 flex items-center justify-center overflow-hidden rounded-xl border border-white/5 select-none" style={{ minHeight: "220px" }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
          <div className="absolute w-[200px] h-[200px] rounded-full blur-[40px] opacity-20" style={{ background: accentColor }} />
          <svg viewBox="0 0 400 200" className="w-[85%] h-[85%] relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="380" height="180" rx="8" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.08)" />
            <line x1="10" y1="35" x2="390" y2="35" stroke="rgba(255,255,255,0.08)" />
            
            <circle cx="20" cy="22.5" r="2" fill="#ef4444" />
            <circle cx="26" cy="22.5" r="2" fill="#f59e0b" />
            <circle cx="32" cy="22.5" r="2" fill="#10b981" />
            <rect x="48" y="19" width="304" height="7" rx="2.5" fill="rgba(255,255,255,0.05)" />
            
            <circle cx="200" cy="110" r="40" fill="url(#soundwaveBlob2)" />
            <path d="M 120 110 Q 160 80 200 110 T 280 110" stroke={accentColor} strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M 140 110 Q 180 130 220 110 T 260 110" stroke="#f59e0b" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6" />
            
            <rect x="35" y="60" width="80" height="24" rx="4" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" />
            <text x="45" y="74" fill="#fff" fontSize="8" fontWeight="bold">98+ PERFORMANCE</text>
            
            <rect x="285" y="130" width="80" height="24" rx="4" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" />
            <text x="295" y="144" fill="#10b981" fontSize="8" fontWeight="bold">100 ACCESSIBILITY</text>
            
            <defs>
              <radialGradient id="soundwaveBlob2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={`${accentColor}25`} />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      );
    case "ten-seconds":
      return (
        <div className="w-full h-full relative bg-neutral-950 flex items-center justify-center overflow-hidden rounded-xl border border-white/5 select-none" style={{ minHeight: "220px" }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
          <div className="absolute w-[200px] h-[200px] rounded-full blur-[40px] opacity-20" style={{ background: accentColor }} />
          <svg viewBox="0 0 400 200" className="w-[85%] h-[85%] relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="380" height="180" rx="8" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.08)" />
            <line x1="10" y1="35" x2="390" y2="35" stroke="rgba(255,255,255,0.08)" />
            
            <circle cx="200" cy="115" r="50" stroke="rgba(255,255,255,0.06)" strokeWidth="6" strokeDasharray="180 300" strokeLinecap="round" transform="rotate(-15 200 115)" />
            <circle cx="200" cy="115" r="50" stroke={accentColor} strokeWidth="6" strokeDasharray="140 300" strokeLinecap="round" transform="rotate(-15 200 115)" />
            
            <circle cx="200" cy="115" r="4" fill="#fff" />
            <line x1="200" y1="115" x2="235" y2="85" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
            
            <rect x="35" y="70" width="70" height="35" rx="4" fill="rgba(0,0,0,0.3)" stroke="rgba(255,255,255,0.06)" />
            <text x="70" y="85" fill={accentColor} fontSize="10" fontWeight="bold" textAnchor="middle">&lt; 1.0s</text>
            <text x="70" y="96" fill="rgba(255,255,255,0.4)" fontSize="5" textAnchor="middle">LOAD TIME</text>
            
            <rect x="295" y="70" width="70" height="35" rx="4" fill="rgba(0,0,0,0.3)" stroke="rgba(255,255,255,0.06)" />
            <text x="330" y="85" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">60fps</text>
            <text x="330" y="96" fill="rgba(255,255,255,0.4)" fontSize="5" textAnchor="middle">ANIMATIONS</text>
          </svg>
        </div>
      );
    default:
      if (itemId.startsWith("memory-")) {
        const num = itemId.replace("memory-", "");
        return (
          <div className="w-full h-full relative bg-neutral-950 flex items-center justify-center overflow-hidden rounded-xl border border-white/5 select-none" style={{ minHeight: "220px" }}>
            <img 
              src={`/activity_${num}.jpeg`} 
              alt={itemId}
              className="w-full h-full object-cover"
            />
          </div>
        );
      }
      return null;
  }
}

/* ─────────────────────────────────────────────────────────
   NATIVE MACOS FOLDER ICON COMPONENT
   ───────────────────────────────────────────────────────── */
function FinderFolderIcon({ type, accentColor }: { type: string; accentColor: string }) {
  const renderPeekingDoc = () => {
    switch (type) {
      case "fraud-detection":
        return (
          <g transform="translate(10, -9)">
            <path d="M 0 0 H 32 V 42 H 0 Z" fill="#ffffff" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.15))" />
            <path d="M 8 10 L 16 6 L 24 10 V 20 C 16 26, 16 26, 8 20 Z" fill={`${accentColor}18`} stroke={accentColor} strokeWidth="1" />
            <path d="M 6 32 H 26 M 6 36 H 18" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
          </g>
        );
      case "ai-research":
        return (
          <g transform="translate(10, -9)">
            <path d="M 0 0 H 32 V 42 H 0 Z" fill="#ffffff" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.15))" />
            <circle cx="16" cy="15" r="3" fill={accentColor} />
            <circle cx="8" cy="25" r="2.5" fill="#3b82f6" />
            <circle cx="24" cy="25" r="2.5" fill="#10b981" />
            <line x1="16" y1="15" x2="8" y2="25" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
            <line x1="16" y1="15" x2="24" y2="25" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
            <line x1="8" y1="25" x2="24" y2="25" stroke="rgba(0,0,0,0.15)" strokeWidth="1" strokeDasharray="2 1" />
          </g>
        );
      case "portfolio":
        return (
          <g transform="translate(10, -9)">
            <path d="M 0 0 H 32 V 42 H 0 Z" fill="#ffffff" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.15))" />
            <rect x="4" y="6" width="24" height="6" rx="1.5" fill={`${accentColor}18`} />
            <path d="M 6 18 H 26 M 6 22 H 20 M 6 26 H 24 M 6 30 H 16" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" strokeLinecap="round" />
          </g>
        );
      case "tessa-learn":
        return (
          <g transform="translate(10, -9)">
            <path d="M 0 0 H 32 V 42 H 0 Z" fill="#ffffff" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.15))" />
            <rect x="6" y="8" width="20" height="8" rx="1" fill="rgba(0,0,0,0.03)" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" />
            <rect x="6" y="20" width="20" height="8" rx="1" fill="rgba(0,0,0,0.03)" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" />
            <line x1="16" y1="16" x2="16" y2="20" stroke={accentColor} strokeWidth="1" />
          </g>
        );
      case "full-stack":
        return (
          <g transform="translate(10, -9)">
            <path d="M 0 0 H 32 V 42 H 0 Z" fill="#ffffff" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.15))" />
            <rect x="4" y="6" width="24" height="28" rx="2" fill="rgba(0,0,0,0.03)" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
            <rect x="4" y="6" width="24" height="5" rx="1" fill={`${accentColor}20`} />
            <circle cx="7" cy="8.5" r="0.75" fill="#ef4444" />
            <circle cx="9" cy="8.5" r="0.75" fill="#f59e0b" />
            <circle cx="11" cy="8.5" r="0.75" fill="#10b981" />
            <rect x="8" y="15" width="16" height="4" rx="1" fill={`${accentColor}15`} />
            <rect x="8" y="22" width="10" height="3" rx="0.5" fill="rgba(0,0,0,0.1)" />
          </g>
        );
      case "publications":
        return (
          <g transform="translate(10, -9)">
            <g transform="rotate(-6 16 20)">
              <path d="M 0 0 H 30 V 40 H 0 Z" fill="#ffffff" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.1))" />
              <path d="M 4 8 H 26 M 4 12 H 20 M 4 16 H 24 M 4 20 H 16" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
            </g>
            <g transform="translate(6, 4) rotate(4 16 20)">
              <path d="M 0 0 H 30 V 40 H 0 Z" fill="#ffffff" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.15))" />
              <rect x="4" y="6" width="22" height="6" fill={`${accentColor}12`} />
              <path d="M 4 16 H 26 M 4 20 H 22 M 4 24 H 26 M 4 28 H 14" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
            </g>
          </g>
        );
      case "memories":
        return (
          <g transform="translate(10, -9)">
            {/* White paper background */}
            <path d="M 0 0 H 32 V 42 H 0 Z" fill="#ffffff" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.15))" />
            {/* Camera body */}
            <rect x="5" y="14" width="22" height="15" rx="2.5" fill={`${accentColor}18`} stroke={accentColor} strokeWidth="1" />
            {/* Camera lens */}
            <circle cx="16" cy="21.5" r="4.5" fill="none" stroke={accentColor} strokeWidth="1" />
            <circle cx="16" cy="21.5" r="2.2" fill={accentColor} />
            {/* Flash/top plate */}
            <rect x="9" y="10" width="14" height="4" rx="1" fill={accentColor} />
            <circle cx="22" cy="16.5" r="1" fill={accentColor} />
          </g>
        );
      default:
        return null;
    }
  };

  return (
    <svg width="110" height="92" viewBox="0 0 88 74" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg select-none">
      <defs>
        <linearGradient id="finderFolderBack" x1="44" y1="8" x2="44" y2="66" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7cbcf5" />
          <stop offset="100%" stopColor="#247cd3" />
        </linearGradient>
        <linearGradient id="finderFolderFront" x1="44" y1="20" x2="44" y2="70" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#9bd2fc" />
          <stop offset="25%" stopColor="#6cb7f2" />
          <stop offset="100%" stopColor="#1a74c7" />
        </linearGradient>
        <filter id="finderFlapShadow" x="-10%" y="-10%" width="120%" height="125%" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="2.5" stdDeviation="2" floodColor="#000" floodOpacity="0.28" />
        </filter>
      </defs>
      
      <path 
        d="M4 11C4 7.68629 6.68629 5 10 5H30L38 13H78C81.3137 13 84 15.6863 84 19V61C84 64.3137 81.3137 67 78 67H10C6.68629 67 4 64.3137 4 61V11Z" 
        fill="url(#finderFolderBack)" 
      />

      <g transform="translate(14, 11)">
        {renderPeekingDoc()}
      </g>

      <path 
        d="M4 22C4 18.6863 6.68629 16 10 16H78C81.3137 16 84 18.6863 84 22V61C84 64.3137 81.3137 67 78 67H10C6.68629 67 4 64.3137 4 61V22Z" 
        fill="url(#finderFolderFront)" 
        filter="url(#finderFlapShadow)"
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   6 EXPLICIT CATEGORY FOLDERS
   ───────────────────────────────────────────────────────── */
const FOLDERS = [
  {
    id: "folder-fraud-detection",
    title: "Fraud Detection",
    subtitle: "1 Project, 1 Paper",
    projectIds: ["fraud-detection"],
    publicationIds: ["fraud-pipeline"],
    tags: ["ML Pipeline", "XGBoost", "SMOTE"],
    category: "AI/ML Research",
    isFeatured: true,
    thumbnailType: "fraud-detection",
    accentColor: "#a855f7"
  },
  {
    id: "folder-tessa-learn",
    title: "Tessa Learn",
    subtitle: "1 Project, LMS Platform",
    projectIds: ["tessa-learn"],
    publicationIds: [],
    tags: ["LMS", "Workflows", "PostgreSQL"],
    category: "Full Stack",
    isFeatured: false,
    thumbnailType: "tessa-learn",
    accentColor: "#3b82f6"
  },
  {
    id: "folder-la-capella",
    title: "LA Capella Studios",
    subtitle: "1 Project, Studio Site",
    projectIds: ["la-capella"],
    publicationIds: [],
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "Full Stack",
    isFeatured: true,
    thumbnailType: "full-stack",
    accentColor: "#f59e0b"
  },
  {
    id: "folder-ten-seconds",
    title: "Ten Seconds",
    subtitle: "1 Project, Web App",
    projectIds: ["ten-seconds"],
    publicationIds: [],
    tags: ["React", "CSS", "Performance"],
    category: "Full Stack",
    isFeatured: true,
    thumbnailType: "full-stack",
    accentColor: "#10b981"
  },
  {
    id: "folder-publications",
    title: "Publications",
    subtitle: "2 IEEE Papers",
    projectIds: [],
    publicationIds: ["fraud-pipeline", "visual-perception"],
    tags: ["IEEE", "ML Research", "HCI"],
    category: "AI/ML Research",
    isFeatured: false,
    thumbnailType: "publications",
    accentColor: "#10b981"
  },
  {
    id: "folder-memories",
    title: "Activities & Memories",
    subtitle: "15 Photos",
    projectIds: [],
    publicationIds: [],
    tags: ["Memories", "Events", "College Life"],
    category: "Memories",
    isFeatured: true,
    thumbnailType: "memories",
    accentColor: "#ec4899"
  }
];

const MEMORY_SHOWCASE_ITEMS: ShowcaseItem[] = Array.from({ length: 15 }, (_, idx) => {
  const num = idx + 1;
  return {
    id: `memory-${num}`,
    title: `activity_${num}.jpeg`,
    subtitle: `JPEG Image`,
    description: ``,
    longDescription: ``,
    tags: [],
    metrics: [],
    accentColor: "#ec4899",
    category: "Memories",
    architecture: `public/activity_${num}.jpeg`,
    type: "memory"
  };
});

const _SHOWCASE_ITEMS_RAW: ShowcaseItem[] = [
  {
    id: "fraud-detection",
    title: "Fraud Detection Pipeline",
    subtitle: "IEEE-Published Research Project",
    description: "An end-to-end machine learning pipeline for credit card fraud detection achieving 97% ROC-AUC on the IEEE-CIS dataset.",
    longDescription: "Built a comprehensive credit card fraud detection system using ensemble techniques. Implemented advanced feature engineering to handle sparse features, SMOTE to address class imbalance, and PCA for dimensionality reduction. Verified robustness using cross-validation. Published as a paper in IEEE.",
    tags: ["XGBoost", "LightGBM", "SMOTE", "PCA", "Python", "Scikit-Learn"],
    metrics: [
      { label: "ROC-AUC Score", value: "97%" },
      { label: "Transactions", value: "140K+" },
      { label: "Features", value: "430+" },
      { label: "Dataset", value: "IEEE-CIS" }
    ],
    accentColor: "#a855f7",
    github: "https://github.com/roshandsc/Fraud_detection_pipeline",
    live: "",
    category: "AI/ML Research",
    architecture: "Ensemble ML Pipeline → Feature Engineering → SMOTE Balancing → XGBoost + LightGBM → Stacking Meta-Learner",
    icon: "🔬",
    type: "project"
  },
  {
    id: "la-capella",
    title: "LA Capella Studios",
    subtitle: "Premium Studio Website",
    description: "A stunning, high-performance studio website featuring fluid animations and a polished aesthetic.",
    longDescription: "Designed and engineered a high-performance web experience for LA Capella Studios. Implemented silky-smooth page transitions, custom mouse spotlights, scroll parallax reveals, and pixel-perfect layouts. Achieved outstanding scores across performance, accessibility, and SEO metrics.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Vercel"],
    metrics: [
      { label: "Performance", value: "98+" },
      { label: "Accessibility", value: "100" },
      { label: "SEO Score", value: "100" },
      { label: "Framework", value: "Next.js 14" }
    ],
    accentColor: "#f59e0b",
    github: "https://github.com/roshandsc/la_capella",
    live: "https://www.lacapellastudios.com/",
    category: "Full Stack",
    architecture: "Next.js 14 → Tailwind CSS → Framer Motion Web Transitions → Vercel Edge Server",
    icon: "🎵",
    type: "project"
  },
  {
    id: "ten-seconds",
    title: "Ten Seconds",
    subtitle: "High-Performance Web App",
    description: "A fully responsive web application focused on sub-second load times and exceptional design standards.",
    longDescription: "Engineered a responsive single-page web app with sub-second initial load speeds. Utilized native Web APIs, modular styling tokens, and clean layout patterns to optimize browser compositing threads, guaranteeing 60fps interaction and flawless responsiveness across viewports.",
    tags: ["React", "CSS", "Responsive Design", "Web Compositor", "Performance"],
    metrics: [
      { label: "Load Time", value: "<1.0s" },
      { label: "Mobile Score", value: "95+" },
      { label: "Rendering", value: "60fps" },
      { label: "Optimization", value: "Brotli" }
    ],
    accentColor: "#10b981",
    github: "https://github.com/roshandsc/ten_s",
    live: "https://www.10seconds.co.in/",
    category: "Full Stack",
    architecture: "React SPA → Modular Vanilla CSS → Optimized Assets Pipeline → AWS CDN Delivery",
    icon: "⚡",
    type: "project"
  },
  {
    id: "tessa-learn",
    title: "Tessa Learn Platform",
    subtitle: "Full Stack Learning Platform",
    description: "A comprehensive learning management platform with automated workflows, built during my internship.",
    longDescription: "Developed a secure enterprise-grade learning management system during my growth internship at Tessa Cloud. Implemented role-based access controls, automatic certification generators, course tracking workflows, and interactive database dashboards.",
    tags: ["Full Stack", "Node.js", "React", "Workflow Automation", "PostgreSQL"],
    metrics: [
      { label: "Category", value: "LMS" },
      { label: "Internship", value: "Tessa Cloud" },
      { label: "Workflows", value: "Automated" },
      { label: "DB Schema", value: "Relational" }
    ],
    accentColor: "#3b82f6",
    github: "https://github.com/roshandsc/Tessa_learn",
    live: "https://learn.tessacloud.com/",
    category: "Full Stack",
    architecture: "React Client → Node.js Express API Router → Relational PostgreSQL DB → Automated Workflows Engine",
    icon: "📚",
    type: "project"
  },
  {
    id: "fraud-pipeline",
    title: "End-to-End Fraud Detection Pipeline: Leveraging Supervised, Ensemble and Unsupervised Learning for Large-Scale Financial Security",
    subtitle: "IEEE International Conference Paper",
    description: "A published IEEE conference paper investigating ensemble machine learning methods for credit card fraud detection.",
    longDescription: "Conducted scientific research on credit card transaction security. Proposed an ensemble model stack combining XGBoost and LightGBM models. Handled class imbalance using SMOTE and applied feature selection algorithms to minimize classification noise. Achieved a 97% ROC-AUC score and published the findings in an IEEE conference proceedings.",
    tags: ["Machine Learning", "Fraud Detection", "XGBoost", "LightGBM", "SMOTE"],
    metrics: [
      { label: "Conference", value: "IEEE" },
      { label: "Year", value: "2024" },
      { label: "ROC-AUC", value: "97%" },
      { label: "Index", value: "Scopus" }
    ],
    accentColor: "#a855f7",
    github: "",
    live: "https://ieeexplore.ieee.org/document/11394031",
    category: "AI/ML Research",
    architecture: "IEEE Research Study → Machine Learning Model Validation → Peer Review & Indexing",
    icon: "📄",
    type: "paper"
  },
  {
    id: "visual-perception",
    title: "Human Visual Perception and Emotion: Leveraging AI and Color Psychology for User Experience Optimization",
    subtitle: "IEEE International Conference Paper",
    description: "A published IEEE paper exploring human visual perception and deep learning emotion recognition algorithms.",
    longDescription: "Researched deep learning methods in Computer Vision matching human emotion patterns. Analyzed visual perception layers in neural nets to optimize feature extraction for facial expression datasets. Designed applications for assistive human-computer interaction (HCI) software.",
    tags: ["Computer Vision", "Deep Learning", "Emotion Recognition", "HCI", "IEEE"],
    metrics: [
      { label: "Conference", value: "IEEE" },
      { label: "Year", value: "2024" },
      { label: "Topic", value: "CV & HCI" },
      { label: "Publisher", value: "IEEE Xplore" }
    ],
    accentColor: "#3b82f6",
    github: "",
    live: "https://ieeexplore.ieee.org/document/11394008",
    category: "AI/ML Research",
    architecture: "IEEE Research Paper → Computer Vision Experiments → Deep Learning Validation Models",
    icon: "👁️",
    type: "paper"
  }
];

const SHOWCASE_ITEMS: ShowcaseItem[] = _SHOWCASE_ITEMS_RAW.concat(MEMORY_SHOWCASE_ITEMS);

/* ─────────────────────────────────────────────────────────
   PREMIUM DETAILED PROJECT SHOWCASE WINDOW (MODAL OVERLAY)
   ───────────────────────────────────────────────────────── */
function ProjectShowcaseWindow({
  folder,
  onClose
}: {
  folder: typeof FOLDERS[number];
  onClose: () => void;
}) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const getFolderItems = (): ShowcaseItem[] => {
    if (folder.id === "folder-memories") {
      return SHOWCASE_ITEMS.filter((item) => item.type === "memory");
    }
    const items: ShowcaseItem[] = [];
    folder.projectIds.forEach((id) => {
      const match = SHOWCASE_ITEMS.find((item) => item.id === id && item.type === "project");
      if (match) items.push(match);
    });

    folder.publicationIds.forEach((id) => {
      const match = SHOWCASE_ITEMS.find((item) => item.id === id && item.type === "paper");
      if (match) items.push(match);
    });

    return items;
  };

  const folderItems = getFolderItems();
  const currentItem: ShowcaseItem = folderItems[activeItemIndex] || folderItems[0] || {
    id: "",
    title: "",
    subtitle: "",
    description: "",
    longDescription: "",
    tags: [],
    metrics: [],
    accentColor: "#3b82f6",
    category: "",
    architecture: "",
    type: "project"
  };

  // CUSTOM RENDER FOR MEMORIES PHOTO GALLERY
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  if (folder.id === "folder-memories") {
    return (
      <motion.div
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          layoutId={`folder-window-${folder.id}`}
          className="relative w-full max-w-5xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col my-8 select-text"
          style={{
            background: "linear-gradient(135deg, rgba(20, 20, 30, 0.70) 0%, rgba(10, 10, 15, 0.96) 100%)",
            backdropFilter: "blur(40px) saturate(180%)",
            WebkitBackdropFilter: "blur(40px) saturate(180%)",
            boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 50px rgba(255, 255, 255, 0.02)",
          }}
          transition={{ type: "spring", stiffness: 220, damping: 26, mass: 0.8 }}
        >
          {/* macOS Style Window Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-white/[0.02] border-b border-white/[0.06] select-none">
            <div className="flex gap-2">
              <button
                onClick={onClose}
                className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] border border-[#e0443e] flex items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-95"
                aria-label="Close window"
                style={{ padding: 0 }}
              >
                <X size={8} className="text-[#4c0000] opacity-0 hover:opacity-100 font-bold" />
              </button>
              <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] border border-[#dfa123]" />
              <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] border border-[#1aab29]" />
            </div>

            <div className="text-[13px] font-semibold text-neutral-300 tracking-wide font-sans">
              {folder.title} ({folderItems.length} Images)
            </div>

            <div className="w-[52px]" />
          </div>

          {/* Inner Content Area: Grid Showcase */}
          <div className="p-6 md:p-8 overflow-y-auto max-h-[80vh]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {folderItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  onClick={() => setSelectedPhotoIndex(idx)}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/5 bg-neutral-950 cursor-pointer group shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={`/activity_${idx + 1}.jpeg`}
                    alt={`Memory ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-white border border-white/20 select-none">
                      View Photo
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Lightbox Overlay */}
        <AnimatePresence>
          {selectedPhotoIndex !== null && (
            <motion.div
              className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 select-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhotoIndex(null)}
            >
              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPhotoIndex(null);
                }}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Close photo"
              >
                <X size={20} />
              </button>

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPhotoIndex((prev) => 
                    prev !== null ? (prev === 0 ? folderItems.length - 1 : prev - 1) : null
                  );
                }}
                className="absolute left-6 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Previous photo"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPhotoIndex((prev) => 
                    prev !== null ? (prev === folderItems.length - 1 ? 0 : prev + 1) : null
                  );
                }}
                className="absolute right-6 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Next photo"
              >
                <ChevronRight size={24} />
              </button>

              {/* Lightbox Image Container */}
              <motion.div
                className="relative max-w-4xl max-h-[85vh] flex items-center justify-center"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={`/activity_${selectedPhotoIndex + 1}.jpeg`}
                  alt={`Memory ${selectedPhotoIndex + 1}`}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg border border-white/15 shadow-2xl"
                />
                <div className="absolute bottom-[-40px] left-0 right-0 text-center text-xs font-semibold text-neutral-400">
                  Photo {selectedPhotoIndex + 1} of {folderItems.length}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }

  // Stagger animation variants for clean progressive details reveal
  const staggerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        layoutId={`folder-window-${folder.id}`}
        className="relative w-full max-w-4xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col my-8 select-text"
        style={{
          background: "linear-gradient(135deg, rgba(20, 20, 30, 0.70) 0%, rgba(10, 10, 15, 0.96) 100%)",
          backdropFilter: "blur(40px) saturate(180%)",
          WebkitBackdropFilter: "blur(40px) saturate(180%)",
          boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 50px rgba(255, 255, 255, 0.02)",
        }}
        transition={{ type: "spring", stiffness: 220, damping: 26, mass: 0.8 }}
      >
        {/* macOS Style Window Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-white/[0.02] border-b border-white/[0.06] select-none">
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] border border-[#e0443e] flex items-center justify-center cursor-pointer transition-transform hover:scale-105 active:scale-95"
              aria-label="Close window"
              style={{ padding: 0 }}
            >
              <X size={8} className="text-[#4c0000] opacity-0 hover:opacity-100 font-bold" />
            </button>
            <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] border border-[#dfa123]" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] border border-[#1aab29]" />
          </div>

          <div className="text-[13px] font-semibold text-neutral-300 tracking-wide font-sans">
            {folder.title} Details
          </div>

          <div className="shrink-0">
            <button 
              onClick={onClose} 
              className="md:hidden block px-3 py-1 text-[11px] font-bold bg-white/10 hover:bg-white/20 text-white border-none rounded-lg cursor-pointer transition-colors"
            >
              Done
            </button>
            <div className="w-[52px] md:block hidden" />
          </div>
        </div>

        {/* Inner Content Area */}
        <div className="p-6 md:p-8 flex flex-col gap-6 overflow-y-auto max-h-[75vh]">
          
          {/* Tabs Selector for Multi-Item folders */}
          {folderItems.length > 1 && (
            <div className="flex items-center justify-center bg-white/[0.04] border border-white/[0.06] rounded-xl p-[3px] gap-1 max-w-lg w-full mx-auto select-none">
              {folderItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveItemIndex(idx);
                  }}
                  className={`flex-1 px-4 py-2 rounded-lg text-xs font-semibold border-none cursor-pointer transition-all flex items-center justify-center gap-1.5 ${
                    activeItemIndex === idx
                      ? "bg-[#007aff] text-white shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
                      : "text-neutral-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="text-[12px]">{item.type === "project" ? "📁" : "📄"}</span>
                  <span className="truncate">{item.title.split(" ").slice(0, 2).join(" ")}</span>
                </button>
              ))}
            </div>
          )}

          {/* Hero Visual Mockup */}
          <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden shadow-inner relative border border-white/5 shrink-0 bg-neutral-900/50">
            <ShowcaseHero itemId={currentItem.id} accentColor={currentItem.accentColor} />
          </div>

          {/* Info Details Section */}
          <motion.div 
            variants={staggerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-5 gap-8"
          >
            {/* Left Description Column (3 cols) */}
            <div className="md:col-span-3 flex flex-col gap-6">
              <motion.div variants={childVariants}>
                <div className="flex items-center gap-2 mb-2 select-none">
                  <span className="text-[13px] font-semibold text-neutral-400 uppercase tracking-widest">
                    {currentItem.type === "project" ? "Project File" : "IEEE Research Study"}
                  </span>
                  <span 
                    className="text-[9px] font-bold px-2 py-0.5 rounded-full border"
                    style={{
                      background: `${currentItem.accentColor}12`,
                      color: currentItem.accentColor,
                      borderColor: `${currentItem.accentColor}25`
                    }}
                  >
                    {currentItem.category}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                  {currentItem.title}
                </h3>
                <p className="text-[14px] text-neutral-400 font-medium mt-1 font-sans">
                  {currentItem.subtitle}
                </p>
              </motion.div>

              <motion.div 
                variants={childVariants}
                className="text-[14.5px] leading-relaxed text-neutral-300 font-sans"
              >
                <p className="mb-4 font-semibold text-[15px] text-white">
                  {currentItem.description}
                </p>
                <p className="font-normal text-neutral-400">
                  {currentItem.longDescription}
                </p>
              </motion.div>

              <motion.div variants={childVariants} className="flex flex-wrap gap-3 mt-2 select-none">
                {currentItem.github && currentItem.github !== "#" && currentItem.type !== "paper" && (
                  <a
                    href={currentItem.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all no-underline uppercase tracking-widest relative group overflow-hidden"
                  >
                    <GithubIcon size={13} />
                    GitHub Source
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                  </a>
                )}
                {currentItem.live && currentItem.live !== "#" && (
                  <a
                    href={currentItem.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white hover:opacity-90 transition-all no-underline uppercase tracking-widest relative group overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${currentItem.accentColor} 0%, rgba(20,20,30,0.1) 150%)`,
                      boxShadow: `0 4px 14px ${currentItem.accentColor}25`
                    }}
                  >
                    <ExternalLink size={13} />
                    View Live Link
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                  </a>
                )}
              </motion.div>
            </div>

            {/* Right Tech / Metrics Column (2 cols) */}
            <div className="md:col-span-2 flex flex-col gap-6">
              
              {/* Architecture Block */}
              <motion.div 
                variants={childVariants}
                className="p-4 rounded-xl border border-white/[0.05] bg-black/35 font-mono"
              >
                <div className="flex items-center gap-2 mb-2 select-none">
                  <Layers size={13} style={{ color: currentItem.accentColor }} />
                  <span className="text-[10px] font-bold tracking-wider text-neutral-500 uppercase">Architecture Path</span>
                </div>
                <p className="text-[11.5px] leading-relaxed text-neutral-300 font-medium">
                  {currentItem.architecture}
                </p>
              </motion.div>

              {/* Tech stack grid */}
              <motion.div variants={childVariants} className="flex flex-col gap-2">
                <div className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider select-none mb-1">
                  Engineered Stack
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {currentItem.tags.map((tag) => (
                    <div 
                      key={tag} 
                      className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.04] text-[12px] font-medium text-neutral-300 font-sans"
                    >
                      <CheckCircle2 size={11} style={{ color: currentItem.accentColor }} className="shrink-0" />
                      <span className="truncate">{tag}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Metrics cards grid */}
              <motion.div variants={childVariants} className="flex flex-col gap-2">
                <div className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider select-none mb-1">
                  Key Metrics / Analytics
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {currentItem.metrics.map((metric) => (
                    <div 
                      key={metric.label}
                      className="p-3.5 rounded-xl border flex flex-col"
                      style={{
                        background: `${currentItem.accentColor}04`,
                        borderColor: `${currentItem.accentColor}12`
                      }}
                    >
                      <span 
                        className="text-lg font-bold font-sans"
                        style={{ color: currentItem.accentColor }}
                      >
                        {metric.value}
                      </span>
                      <span className="text-[10px] font-semibold text-neutral-500 tracking-wider uppercase font-sans mt-0.5">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
            </div>
          </motion.div>

        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   MAIN PROJECTS FILE EXPLORER SECTION
   ───────────────────────────────────────────────────────── */
export default function Projects() {
  const [selectedFolder, setSelectedFolder] = useState<typeof FOLDERS[number] | null>(null);
  const [currentFilter, setCurrentFilter] = useState("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"icon" | "list" | "column" | "gallery">("icon");
  const [activeColumnFolder, setActiveColumnFolder] = useState<typeof FOLDERS[number] | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 640);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const sidebarFavorites = [
    { label: "All Projects", filter: "All", icon: <Folder size={13} /> },
    { label: "Full Stack", filter: "Full Stack", icon: <Folder size={13} /> },
    { label: "AI/ML Research", filter: "AI/ML Research", icon: <Folder size={13} /> },
    { label: "Activities & Memories", filter: "Memories", icon: <Folder size={13} /> },
    { label: "Open Source", filter: "Open Source", icon: <Folder size={13} /> },
  ];

  const sidebarLocations = [
    { label: "MacBook Pro", icon: <Laptop size={13} /> },
    { label: "Cloud Drive", icon: <Cloud size={13} /> },
    { label: "Archives", icon: <Archive size={13} /> },
  ];

  const filteredFolders = FOLDERS.filter((folder) => {
    if (currentFilter === "All") return true;
    if (currentFilter === "Full Stack") {
      return folder.category === "Full Stack";
    }
    if (currentFilter === "AI/ML Research") {
      return folder.category === "AI/ML Research";
    }
    if (currentFilter === "Memories") {
      return folder.category === "Memories";
    }
    if (currentFilter === "Open Source") {
      return folder.id === "folder-la-capella" || folder.id === "folder-ten-seconds";
    }
    return true;
  });

  useEffect(() => {
    if (filteredFolders.length > 0) {
      if (!activeColumnFolder || !filteredFolders.find((f) => f.id === activeColumnFolder.id)) {
        setActiveColumnFolder(filteredFolders[0]);
      }
      if (activeGalleryIndex >= filteredFolders.length) {
        setActiveGalleryIndex(0);
      }
    } else {
      setActiveColumnFolder(null);
      setActiveGalleryIndex(0);
    }
  }, [currentFilter, filteredFolders]);

  const getColumnFolderItems = (folder: typeof FOLDERS[number]): ShowcaseItem[] => {
    if (folder.id === "folder-memories") {
      return SHOWCASE_ITEMS.filter((item) => item.type === "memory");
    }
    const items: ShowcaseItem[] = [];
    folder.projectIds.forEach((id) => {
      const match = SHOWCASE_ITEMS.find((item) => item.id === id && item.type === "project");
      if (match) items.push(match);
    });

    folder.publicationIds.forEach((id) => {
      const match = SHOWCASE_ITEMS.find((item) => item.id === id && item.type === "paper");
      if (match) items.push(match);
    });

    return items;
  };

  // Handle closing drawer menu on filter selection
  const selectFilter = (filter: string) => {
    setCurrentFilter(filter);
    setMobileMenuOpen(false);
  };

  const finderToolbar = (
    <div 
      className="flex items-center w-full select-none justify-between" 
      style={{ 
        paddingLeft: "20px", 
        paddingRight: "20px",
        height: "32px"
      }}
    >
      {/* LEFT: Navigation + View Controls */}
      <div className="flex items-center gap-3 shrink-0" style={{ height: "32px" }}>
        {/* Back Button */}
        <button 
          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 text-neutral-400 hover:text-white transition-colors" 
          disabled 
          aria-label="Go back"
          style={{ border: "none", background: "none", cursor: "not-allowed", height: "32px" }}
        >
          <ChevronLeft size={16} />
        </button>

        {/* View Controls */}
        <div 
          className="hidden sm:flex items-center bg-white/[0.04] rounded-lg p-[2px] border border-white/[0.06] shrink-0 gap-[3px]"
          style={{ height: "32px" }}
        >
          <button 
            onClick={() => setViewMode("icon")}
            className={`h-full px-2.5 rounded border-none flex items-center justify-center cursor-pointer transition-colors ${
              viewMode === "icon" ? "bg-white/10 text-white shadow-sm" : "text-neutral-400 hover:bg-white/5 hover:text-neutral-200"
            }`} 
            aria-label="Icon view"
          >
            <LayoutGrid size={13} />
          </button>
          <button 
            onClick={() => setViewMode("list")}
            className={`h-full px-2.5 rounded border-none flex items-center justify-center cursor-pointer transition-colors ${
              viewMode === "list" ? "bg-white/10 text-white shadow-sm" : "text-neutral-400 hover:bg-white/5 hover:text-neutral-200"
            }`} 
            aria-label="List view"
          >
            <List size={13} />
          </button>
          <button 
            onClick={() => setViewMode("column")}
            className={`h-full px-2.5 rounded border-none flex items-center justify-center cursor-pointer transition-colors ${
              viewMode === "column" ? "bg-white/10 text-white shadow-sm" : "text-neutral-400 hover:bg-white/5 hover:text-neutral-200"
            }`} 
            aria-label="Column view"
          >
            <Columns size={13} />
          </button>
          <button 
            onClick={() => setViewMode("gallery")}
            className={`h-full px-2.5 rounded border-none flex items-center justify-center cursor-pointer transition-colors ${
              viewMode === "gallery" ? "bg-white/10 text-white shadow-sm" : "text-neutral-400 hover:bg-white/5 hover:text-neutral-200"
            }`} 
            aria-label="Gallery view"
          >
            <Tv size={13} />
          </button>
        </div>

        {/* Mobile Dropdown Category Filter (fallback selector on mobile) */}
        <div className="md:hidden relative shrink-0" style={{ height: "32px" }}>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center gap-1.5 px-3 py-0 rounded-lg bg-white/[0.06] border border-white/[0.08] text-white text-[11px] font-bold"
            style={{ height: "32px" }}
          >
            <span>{currentFilter}</span>
            <ChevronDown size={11} />
          </button>
          <AnimatePresence>
            {mobileMenuOpen && (
              <>
                <div className="fixed inset-0 z-20" onClick={() => setMobileMenuOpen(false)} />
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 mt-2 w-40 rounded-xl border border-white/[0.08] shadow-lg overflow-hidden z-30"
                  style={{
                    background: "rgba(25, 25, 35, 0.95)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)"
                  }}
                >
                  {sidebarFavorites.map((cat) => (
                    <button
                      key={cat.filter}
                      onClick={() => selectFilter(cat.filter)}
                      className="w-full text-left px-4 py-2.5 text-[11px] font-semibold border-none bg-transparent hover:bg-white/5 cursor-pointer transition-colors"
                      style={{ color: currentFilter === cat.filter ? "#007aff" : "#aaa" }}
                    >
                      {cat.label}
                    </button>
                  ))}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* RIGHT: Search Field */}
      <div className="relative md:flex hidden items-center w-[180px] shrink-0" style={{ height: "30px" }}>
        <Search size={13} className="absolute left-3 text-neutral-400 pointer-events-none" />
        <input
          type="text"
          placeholder="Search"
          disabled
          className="w-full h-full bg-white/[0.06] border border-white/[0.08] rounded-[10px] pr-3 text-[13px] text-white focus:outline-none placeholder-neutral-400 font-sans cursor-not-allowed"
          style={{ height: "30px", paddingLeft: "34px" }}
        />
      </div>
    </div>
  );

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-[#050505] w-full flex flex-col items-center justify-center">
      {/* Background radial glow blob */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10 flex flex-col items-center justify-center w-full">
        
        {/* Header */}
        <motion.div
          className="w-full section-header-spacing text-center"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-neutral-500 mb-4 select-none font-sans">
            SELECTED WORK
          </p>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.05,
            color: "#ffffff", margin: "0 0 20px",
            fontFamily: "var(--font-jakarta)",
          }} className="select-none">
            Featured{" "}
            <span style={{
              background: "linear-gradient(135deg, #8b5cf6 0%, #0ea5e9 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Projects
            </span>
          </h2>
        </motion.div>

        {/* Finder App Window wrapper */}
        <MacWindow
          title={currentFilter === "All" ? "All Projects" : `${currentFilter} Documents`}
          minHeight="540px"
          unifiedSidebar={true}
          sidebarWidth="240px"
          toolbar={finderToolbar}
          sidebar={
            <div className="flex flex-col gap-6 p-4 font-sans text-xs select-none">
              
              {/* FAVORITES */}
              <div>
                <p className="text-[9.5px] font-extrabold text-neutral-500 uppercase tracking-widest mb-2 px-2.5">Favorites</p>
                <div className="flex flex-col gap-0.5">
                  {sidebarFavorites.map((cat) => {
                    const isActive = currentFilter === cat.filter;
                    return (
                      <button
                        key={cat.filter}
                        onClick={() => selectFilter(cat.filter)}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-md border-none text-left cursor-pointer transition-colors text-[14px] font-medium ${
                          isActive
                            ? "bg-[#007aff] text-white shadow-[0_1px_2px_rgba(0,0,0,0.15)]"
                            : "text-neutral-400 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span className={isActive ? "text-white" : "text-[#007aff]"}>
                          {cat.icon}
                        </span>
                        <span className="font-medium">{cat.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* LOCATIONS */}
              <div>
                <p className="text-[9.5px] font-extrabold text-neutral-500 uppercase tracking-widest mb-2 px-2.5">Locations</p>
                <div className="flex flex-col gap-0.5">
                  {sidebarLocations.map((loc) => (
                    <div 
                      key={loc.label}
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-[14px] font-medium text-neutral-400"
                    >
                      <span className="text-neutral-500">{loc.icon}</span>
                      <span className="font-medium truncate">{loc.label}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          }
        >
          {/* Conditional layout views for macOS Finder */}
          <div className="w-full h-full overflow-y-auto">
            {viewMode === "icon" && (
              <div 
                className="grid p-2 justify-center animate-fadeIn grid-cols-[repeat(auto-fit,minmax(140px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4 sm:gap-10 md:gap-16 lg:gap-20"
              >
                {filteredFolders.map((folder) => (
                  <motion.div
                    key={folder.id}
                    onClick={() => setSelectedFolder(folder)}
                    className="flex flex-col items-center text-center cursor-pointer group relative rounded-2xl p-3 border border-transparent hover:border-white/[0.02]"
                    whileHover={{ scale: 1.04, y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    layoutId={`folder-window-${folder.id}`}
                    style={{ contentVisibility: "auto" }}
                  >
                    {/* Folder Icon Overlay shadow */}
                    <div className="relative mb-3.5 flex items-center justify-center p-1.5 transition-all">
                      <FinderFolderIcon type={folder.thumbnailType} accentColor={folder.accentColor} />
                    </div>
                    
                    {/* Title & Count */}
                    <div className="text-[13.5px] font-bold text-neutral-200 group-hover:text-blue-400 transition-colors line-clamp-1 w-full text-center font-sans">
                      {folder.title}
                    </div>
                    
                    <div className="text-[10px] text-neutral-500 font-semibold tracking-wider uppercase mt-1 select-none font-sans text-center w-full">
                      {folder.subtitle}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {viewMode === "list" && (
              <div className="flex flex-col font-sans select-none p-4 w-full">
                {/* Header row */}
                <div className="flex border-b border-white/10 px-4 py-2 text-[10px] font-extrabold text-neutral-500 uppercase tracking-wider mb-1">
                  <div className="flex-[2] min-w-[140px] sm:min-w-[180px]">Name</div>
                  <div className="flex-1 min-w-[100px] md:block hidden">Subtitle</div>
                  <div className="flex-[1.5] min-w-[120px] sm:block hidden">Category</div>
                  <div className="flex-[2] min-w-[150px] lg:block hidden">Tags</div>
                </div>
                {/* Data rows */}
                <div className="divide-y divide-white/[0.04]">
                  {filteredFolders.map((folder) => (
                    <div 
                      key={folder.id}
                      onClick={() => setSelectedFolder(folder)}
                      className="flex items-center px-4 py-3 hover:bg-white/[0.04] active:bg-[#007aff]/20 cursor-pointer text-xs text-neutral-200 transition-colors rounded-lg mt-0.5"
                    >
                      <div className="flex-[2] min-w-[140px] sm:min-w-[180px] flex items-center gap-2.5 font-bold">
                        <Folder size={14} className="text-blue-400 shrink-0" />
                        <span className="truncate">{folder.title}</span>
                      </div>
                      <div className="flex-1 min-w-[100px] text-neutral-400 font-semibold md:block hidden">{folder.subtitle}</div>
                      <div className="flex-[1.5] min-w-[120px] text-neutral-400 font-medium sm:block hidden">
                        <span 
                          className="px-2 py-0.5 rounded-full border text-[9px] font-bold"
                          style={{
                            background: `${folder.accentColor}12`,
                            color: folder.accentColor,
                            borderColor: `${folder.accentColor}25`
                          }}
                        >
                          {folder.category}
                        </span>
                      </div>
                      <div className="flex-[2] min-w-[150px] flex-wrap gap-1 lg:flex hidden">
                        {folder.tags.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] text-neutral-400 font-mono">{t}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {viewMode === "column" && (
              <div className="flex h-full min-h-[480px] divide-x divide-white/10 font-sans">
                {/* Column 1: Folders List */}
                <div className="w-1/2 p-2 flex flex-col gap-0.5 overflow-y-auto">
                  <p className="text-[9.5px] font-extrabold text-neutral-500 uppercase tracking-widest p-2 select-none">Folders</p>
                  {filteredFolders.map((folder) => {
                    const isSelected = activeColumnFolder?.id === folder.id;
                    return (
                      <div
                        key={folder.id}
                        onClick={() => setActiveColumnFolder(folder)}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer text-xs transition-colors ${
                          isSelected ? "bg-[#007aff] text-white shadow-sm" : "text-neutral-300 hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 font-bold">
                          <Folder size={14} className={isSelected ? "text-white" : "text-blue-400"} />
                          <span className="truncate">{folder.title}</span>
                        </div>
                        <ChevronRight size={11} className={isSelected ? "text-white" : "text-neutral-500"} />
                      </div>
                    );
                  })}
                </div>

                {/* Column 2: Selected Folder Contents */}
                <div className="w-1/2 p-4 flex flex-col gap-4 overflow-y-auto bg-black/10 select-none">
                  {activeColumnFolder ? (
                    <>
                      <div className="flex flex-col items-center text-center pb-4 border-b border-white/5 shrink-0">
                        <div className="scale-90">
                          <FinderFolderIcon type={activeColumnFolder.thumbnailType} accentColor={activeColumnFolder.accentColor} />
                        </div>
                        <h4 className="text-sm font-bold text-white mt-2 font-sans">{activeColumnFolder.title}</h4>
                        <p className="text-[10px] text-neutral-400 font-semibold uppercase tracking-wider mt-1 font-sans">{activeColumnFolder.subtitle}</p>
                      </div>

                      <div className="flex flex-col gap-2 overflow-y-auto">
                        <p className="text-[9.5px] font-extrabold text-neutral-500 uppercase tracking-widest select-none mb-1 font-sans">Contents</p>
                        {getColumnFolderItems(activeColumnFolder).map((item) => (
                          <div
                            key={item.id}
                            onClick={() => setSelectedFolder(activeColumnFolder)}
                            className="flex items-center justify-between p-2.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] cursor-pointer transition-colors"
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <span className="text-base leading-none shrink-0">{item.type === "project" ? "📁" : "📄"}</span>
                              <div className="min-w-0 font-sans">
                                <p className="text-[11.5px] font-bold text-neutral-200 truncate">{item.title}</p>
                                <p className="text-[9.5px] text-neutral-400 truncate">{item.subtitle}</p>
                              </div>
                            </div>
                            <ChevronRight size={11} className="text-neutral-500 shrink-0" />
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-neutral-500 text-xs font-sans">
                      Select a folder to view contents
                    </div>
                  )}
                </div>
              </div>
            )}

            {viewMode === "gallery" && (
              <div className="w-full flex flex-col items-center justify-center p-6 bg-black/10 overflow-hidden rounded-xl font-sans min-h-[480px]">
                {/* 3D Cover Flow deck */}
                <div className="relative w-full flex items-center justify-center min-h-[240px] mb-8 select-none">
                  {filteredFolders.map((folder, idx) => {
                    const offset = idx - activeGalleryIndex;
                    const isActive = offset === 0;
                    
                    let xOffset = offset * (isMobile ? 85 : 140);
                    let rotateY = offset * -35;
                    let scale = isActive ? 1.15 : 0.75;
                    let zIndex = 10 - Math.abs(offset);
                    let opacity = 1 - Math.min(Math.abs(offset) * 0.35, 0.8);

                    return (
                      <motion.div
                        key={folder.id}
                        onClick={() => setActiveGalleryIndex(idx)}
                        className="absolute cursor-pointer flex flex-col items-center"
                        animate={{
                          x: xOffset,
                          scale: scale,
                          rotateY: rotateY,
                          opacity: opacity,
                          z: isActive ? 50 : 0
                        }}
                        transition={{ type: "spring", stiffness: 220, damping: 24 }}
                        style={{
                          zIndex: zIndex,
                          transformStyle: "preserve-3d"
                        }}
                      >
                        <FinderFolderIcon type={folder.thumbnailType} accentColor={folder.accentColor} />
                        {isActive && (
                          <motion.div 
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-4 text-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-lg"
                          >
                            <p className="text-[12px] font-bold text-white font-sans">{folder.title}</p>
                            <p className="text-[9px] text-neutral-400 font-semibold uppercase tracking-wider mt-0.5 font-sans">{folder.subtitle}</p>
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Details card below Cover Flow */}
                {filteredFolders[activeGalleryIndex] && (
                  <motion.div 
                    key={filteredFolders[activeGalleryIndex].id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md p-5 rounded-2xl border border-white/5 bg-white/[0.03] text-center shadow-lg"
                  >
                    <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest block mb-2 font-sans">Selected Folder</span>
                    <h3 className="text-lg font-bold text-white mb-2 font-sans">{filteredFolders[activeGalleryIndex].title}</h3>
                    <p className="text-xs text-neutral-400 mb-4 font-sans">{filteredFolders[activeGalleryIndex].tags.join(" · ")}</p>
                    <button
                      onClick={() => setSelectedFolder(filteredFolders[activeGalleryIndex])}
                      className="px-5 py-2.5 rounded-xl text-xs font-bold text-white border-none cursor-pointer uppercase tracking-wider font-sans transition-opacity hover:opacity-90"
                      style={{
                        background: `linear-gradient(135deg, ${filteredFolders[activeGalleryIndex].accentColor} 0%, rgba(20,20,30,0.1) 150%)`,
                        boxShadow: `0 4px 12px ${filteredFolders[activeGalleryIndex].accentColor}20`
                      }}
                    >
                      Open Folder Explorer
                    </button>
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </MacWindow>

      </div>

      {/* Safari Window Detailed modal */}
      <AnimatePresence>
        {selectedFolder && (
          <ProjectShowcaseWindow
            folder={selectedFolder}
            onClose={() => setSelectedFolder(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
