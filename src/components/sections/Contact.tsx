"use client";

import { motion } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  Phone
} from "lucide-react";
import { personalInfo } from "@/lib/portfolio-data";

// Custom SVG Icons for branding
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-[#050505] w-full flex flex-col items-center justify-center">
      {/* Background ambient radial gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 80%, rgba(139,92,246,0.03) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <motion.div
          className="w-full section-header-spacing text-center flex flex-col items-center gap-3"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Category Badge */}
          <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-neutral-500 font-sans select-none">
            GET IN TOUCH
          </span>
          
          {/* Main Headline */}
          <h2 style={{
            fontSize: "clamp(2.5rem, 5vw, 3.8rem)",
            fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.05,
            color: "#ffffff", margin: "0",
            fontFamily: "var(--font-jakarta)",
          }} className="select-none font-sans">
            Let&apos;s Build{" "}
            <span style={{
              background: "linear-gradient(135deg, #8b5cf6 0%, #0ea5e9 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Together
            </span>
          </h2>
          
          {/* Supporting description */}
          <p className="text-xs sm:text-sm leading-relaxed text-neutral-400 font-sans max-w-[48ch] mt-2">
            Have an innovative project idea, technical inquiry, or interested in collaborating? Reach out through any of the channels below, and let&apos;s build something exceptional.
          </p>
        </motion.div>

        {/* Content Box */}
        <motion.div
          className="w-full flex flex-col items-center text-center max-w-2xl gap-8"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Premium Glass Card containing Contact Details */}
          <div 
            className="w-full max-w-md rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl p-6 sm:p-8 flex flex-col gap-5 shadow-2xl relative select-text"
            style={{
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4), 0 0 40px rgba(255, 255, 255, 0.01)",
            }}
          >
            {/* Email */}
            <div className="flex items-center gap-4 justify-start p-3 rounded-xl hover:bg-white/[0.02] transition-colors group">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/[0.03] border border-white/5 text-neutral-400 group-hover:text-purple-400 group-hover:border-purple-500/30 transition-colors shrink-0">
                <Mail size={15} />
              </div>
              <div className="flex flex-col items-start gap-0.5">
                <span className="text-[10px] font-extrabold text-neutral-500 uppercase tracking-wider font-sans select-none">Email Address</span>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="text-xs sm:text-sm font-semibold text-neutral-200 no-underline hover:text-purple-400 transition-colors font-mono"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 justify-start p-3 rounded-xl hover:bg-white/[0.02] transition-colors group">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/[0.03] border border-white/5 text-neutral-400 group-hover:text-purple-400 group-hover:border-purple-500/30 transition-colors shrink-0">
                <Phone size={15} />
              </div>
              <div className="flex flex-col items-start gap-0.5">
                <span className="text-[10px] font-extrabold text-neutral-500 uppercase tracking-wider font-sans select-none">Contact Number</span>
                <a 
                  href="tel:9187516197" 
                  className="text-xs sm:text-sm font-semibold text-neutral-200 no-underline hover:text-purple-400 transition-colors font-mono"
                >
                  9187516197
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 justify-start p-3 rounded-xl hover:bg-white/[0.02] transition-colors group">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/[0.03] border border-white/5 text-neutral-400 group-hover:text-purple-400 group-hover:border-purple-500/30 transition-colors shrink-0">
                <MapPin size={15} />
              </div>
              <div className="flex flex-col items-start gap-0.5">
                <span className="text-[10px] font-extrabold text-neutral-500 uppercase tracking-wider font-sans select-none">Current Location</span>
                <span className="text-xs sm:text-sm font-semibold text-neutral-200 font-sans">
                  {personalInfo.location}
                </span>
              </div>
            </div>
          </div>

          {/* Social Links and Availability indicator */}
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center w-full mt-2 select-none">
            {/* Availability */}
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-full border border-emerald-500/10 bg-emerald-500/[0.02]">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-bold text-emerald-400 leading-none">Available for Opportunities</span>
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {[
                { icon: <GithubIcon />, href: personalInfo.social.github, label: "GitHub" },
                { icon: <LinkedinIcon />, href: personalInfo.social.linkedin, label: "LinkedIn" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/[0.02] border border-white/5 text-neutral-400 transition-all cursor-pointer"
                  whileHover={{ scale: 1.05, borderColor: "rgba(168,85,247,0.3)", color: "#ffffff", backgroundColor: "rgba(255,255,255,0.03)" }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
