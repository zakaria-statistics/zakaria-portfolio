"use client";

import { useState, useCallback, useEffect } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";
import BootSequence from "@/components/BootSequence";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";

export default function Home() {
  const [booted, setBooted] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleBootComplete = useCallback(() => {
    setBooted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <ErrorBoundary>
      {!booted && <BootSequence onComplete={handleBootComplete} />}
      <div
        className={`transition-opacity duration-500 ${
          booted ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar onSearchOpen={() => setSearchOpen(true)} />
        <main className="min-h-screen">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
    </ErrorBoundary>
  );
}
