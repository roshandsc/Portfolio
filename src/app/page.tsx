"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Philosophy from "@/components/sections/Philosophy";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import AskRoshanAI from "@/components/AskRoshanAI";

export default function Portfolio() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <Skills />
      <Projects />
      <Experience />
      <Philosophy />
      <Contact />
      <Footer />
      <AskRoshanAI />
    </main>
  );
}
