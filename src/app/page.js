"use client";
import { useState, useEffect } from "react";
import Logo from "@/components/Logo";
import HeroSection from "@/sections/HeroSection";
import AboutMe from "@/sections/AboutMe";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Approach from "@/sections/Approach";
import NavBar from "@/components/NavBar";
import FloatingCVButton from "@/components/FloatingCVButton";
export default function Home() {
  const [player, setPlayer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleGameStart = (playerData) => {
    setPlayer(playerData);
  };

  return (
    <>
      {/* <NavBar /> */}
      {!introFinished && (
        <div id="intro-screen" className="fixed inset-0 bg-black z-[9990]" />
      )}

      <div className="z-[9999]">
        <Logo onComplete={() => setIntroFinished(true)} />
      </div>
      <NavBar />
      <section
        id="hero"
        className={`h-screen mb-20 flex items-center justify-center transition-all duration-1000 ${
          introFinished
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <HeroSection />
      </section>

      <AboutMe />
      <Approach />
      <Skills />
      <Projects />
      <Contact />
      <FloatingCVButton />
    </>
  );
}
