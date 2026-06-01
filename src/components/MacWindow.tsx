"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface MacWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
  sidebar?: ReactNode;
  toolbar?: ReactNode;
  minHeight?: string;
  maxHeight?: string;
  unifiedSidebar?: boolean;
  sidebarWidth?: string;
}

export default function MacWindow({
  title,
  children,
  className = "",
  sidebar,
  toolbar,
  minHeight = "400px",
  maxHeight,
  unifiedSidebar = true,
  sidebarWidth = "240px",
}: MacWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      className={`mac-window mac-glass w-full flex flex-col ${className}`}
      style={{
        minHeight,
        maxHeight,
      }}
    >
      {/* macOS Titlebar / Header */}
      {sidebar && unifiedSidebar ? (
        <div className="flex items-center select-none h-[52px] border-b border-neutral-200/10 dark:border-white/[0.06] p-0 w-full relative">
          {/* Perfectly Centered Window Title */}
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[12px] font-semibold tracking-wide pointer-events-none select-none z-0 hidden lg:block"
            style={{ color: "var(--text-secondary)" }}
          >
            {title}
          </div>

          {/* Left Header segment (Traffic Lights) */}
          <div className="flex items-center px-4 shrink-0 z-10 h-full" style={{ width: "80px" }}>
            <div className="mac-traffic-lights flex items-center gap-1.5 relative left-0">
              <span className="mac-dot mac-dot-close group" title="Close">
                <span className="w-1 h-1 bg-red-950/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
              <span className="mac-dot mac-dot-minimize group" title="Minimize">
                <span className="w-1.5 h-0.5 bg-amber-950/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
              <span className="mac-dot mac-dot-maximize group" title="Maximize">
                <span className="w-1 h-1 bg-green-950/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </div>
          </div>

          {/* Unified header background and contents */}
          <div className="flex-grow flex-shrink h-full flex items-center z-10 min-w-0">
            {/* Sidebar header spacer background (visible on desktop) */}
            <div 
              style={{ width: `calc(${sidebarWidth} - 80px)` }}
              className="border-r border-neutral-200/10 dark:border-white/[0.06] h-full hidden md:block shrink-0 bg-neutral-200/5 dark:bg-black/10"
            />
            
            {/* Toolbar options */}
            {toolbar && (
              <div className="flex-grow h-full flex items-center min-w-0">
                {toolbar}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="mac-titlebar flex items-center justify-between select-none h-[42px] relative">
          {/* Left: Traffic Lights */}
          <div className="mac-traffic-lights flex items-center gap-1.5 z-10">
            <span className="mac-dot mac-dot-close group" title="Close">
              <span className="w-1 h-1 bg-red-950/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </span>
            <span className="mac-dot mac-dot-minimize group" title="Minimize">
              <span className="w-1.5 h-0.5 bg-amber-950/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </span>
            <span className="mac-dot mac-dot-maximize group" title="Maximize">
              <span className="w-1 h-1 bg-green-950/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </span>
          </div>

          {/* Center: Title */}
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[11px] font-semibold tracking-wide pointer-events-none select-none z-0"
            style={{ color: "var(--text-secondary)" }}
          >
            {title}
          </div>

          {/* Right: Custom toolbar buttons (if any) */}
          {toolbar && (
            <div className="ml-auto flex items-center gap-2 z-10">
              {toolbar}
            </div>
          )}
        </div>
      )}

      {/* Main Body */}
      <div className="flex flex-row flex-grow w-full overflow-hidden">
        {/* Sidebar (if any) */}
        {sidebar && (
          <aside 
            style={{ width: sidebarWidth }}
            className="border-r border-neutral-200/10 dark:border-white/[0.06] shrink-0 hidden md:block bg-neutral-200/5 dark:bg-black/10"
          >
            {sidebar}
          </aside>
        )}

        {/* Content Area */}
        <div className="flex-1 w-full overflow-y-auto relative p-6 select-text bg-white/[0.01] dark:bg-neutral-900/10">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

