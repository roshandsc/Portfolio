"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, Code2, Briefcase, GraduationCap, Mail, 
  Wifi, Search
} from "lucide-react";

const navItems = [
  { label: "About", href: "#about", icon: User, appName: "Finder" },
  { label: "Skills", href: "#skills", icon: Code2, appName: "Terminal" },
  { label: "Projects", href: "#projects", icon: Briefcase, appName: "App Store" },
  { label: "Experience", href: "#experience", icon: GraduationCap, appName: "Xcode" },
  { label: "Contact", href: "#contact", icon: Mail, appName: "Mail" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [time, setTime] = useState("");

  // Clock script
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      };
      setTime(now.toLocaleDateString("en-US", options).replace(",", ""));
    };
    updateTime();
    const timer = setInterval(updateTime, 30000);
    return () => clearInterval(timer);
  }, []);

  // Theme initialization: locked to dark mode
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  // Section visibility observer for active dots
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25, rootMargin: "-80px 0px -50% 0px" }
    );
    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Spotlight trigger
  const triggerSpotlight = () => {
    window.dispatchEvent(new CustomEvent("toggle-spotlight"));
  };

  return (
    <>
      {/* ── TOP macOS MENU BAR ─────────────────────────────── */}
      <div className="mac-menubar px-4 md:px-6">
        {/* Left menu items */}
        <div className="flex items-center gap-4">
          <span className="font-bold text-[12px] mr-2">Roshan Shetty</span>
          {navItems.slice(0, 5).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hidden md:inline hover:bg-white/10 dark:hover:bg-white/5 px-2 py-0.5 rounded transition-colors text-[11px] no-underline"
              style={{ color: "inherit" }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right status bar */}
        <div className="flex items-center gap-4 text-xs font-semibold">
          <Wifi size={12} className="opacity-80" />
          


          {/* Spotlight Search Icon */}
          <button
            onClick={triggerSpotlight}
            className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity bg-transparent border-none text-inherit cursor-pointer"
            title="Open Spotlight Search (Cmd+K)"
          >
            <Search size={12} />
          </button>

          <span className="opacity-85 text-[11px] font-medium tracking-tight select-none md:block hidden">
            {time || "Sun May 31 6:00 PM"}
          </span>
          <span className="opacity-85 text-[11px] font-medium tracking-tight select-none md:hidden block">
            {time ? time.split(" ").slice(-2).join(" ") : "6:00 PM"}
          </span>
        </div>
      </div>

      {/* ── BOTTOM Navigation Dock ─────────────────────────────── */}
      <div className="mac-dock-wrapper md:block hidden">
        <nav className="mac-dock-container items-end">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.slice(1);
            const isHovered = hoveredIndex === index;

            return (
              <div 
                key={item.href} 
                className="relative flex flex-col items-center group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Tooltip */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, x: "-50%" }}
                      animate={{ opacity: 1, y: 0, x: "-50%" }}
                      exit={{ opacity: 0, y: 8, x: "-50%" }}
                      transition={{ type: "spring", stiffness: 350, damping: 20 }}
                      className="absolute bottom-full mb-3.5 left-1/2 px-2 py-0.5 rounded-md text-[10px] font-medium tracking-wide shadow-md pointer-events-none whitespace-nowrap z-50 bg-neutral-900/90 text-white border border-white/5"
                    >
                      {item.appName} ({item.label})
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Dock Icon Button */}
                <motion.a
                  href={item.href}
                  className="w-12 h-12 rounded-xl flex items-center justify-center border shadow-md transition-colors"
                  style={{
                    background: isActive
                      ? "linear-gradient(135deg, rgba(168,85,247,0.18), rgba(59,130,246,0.18))"
                      : "rgba(255, 255, 255, 0.05)",
                    borderColor: isActive
                      ? "rgba(168, 85, 247, 0.3)"
                      : "rgba(255, 255, 255, 0.08)",
                    color: isActive ? "var(--accent-purple)" : "var(--text-primary)",
                  }}
                  whileHover={{
                    scale: 1.25,
                    y: -10,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                  }}
                  whileTap={{ y: -3, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 350, damping: 18 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>

                {/* macOS Dock dot indicator */}
                <div className="h-1 flex items-center justify-center mt-1">
                  {isActive && (
                    <motion.span
                      layoutId="dock-dot"
                      className="w-1 h-1 rounded-full bg-white dark:bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </nav>
      </div>

      {/* ── MOBILE NAV OVERLAY DOCK (Simplified) ─────────────────────────────── */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden flex justify-center">
        <nav className="flex items-center justify-around w-full py-2.5 px-4 rounded-2xl glass border border-white/10 shadow-lg">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className="flex flex-col items-center justify-center w-9 h-9 rounded-lg"
                style={{
                  color: isActive ? "var(--accent-purple)" : "var(--text-secondary)",
                }}
              >
                <Icon size={16} />
              </a>
            );
          })}
        </nav>
      </div>
    </>
  );
}
