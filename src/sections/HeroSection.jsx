"use client";

import React from "react";
import FloatingTechStack from "../components/FloatingTechStack";
import Particles from "../components/Particles"; // ✅ Fixed: Import your local custom Three.js component
import { Canvas } from "@react-three/fiber"; // ✅ Added: Essential wrapper for WebGL components
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/src/SplitText";
import { words } from "@/constants";

gsap.registerPlugin(useGSAP, SplitText);

export default function HeroSection() {
  useGSAP(() => {
    const tl = gsap.timeline();

    // Split text by lines instead of individual words to keep it looking clean and unbroken
    const splitHeader = SplitText.create(".animate-header", {
      type: "lines",
      linesClass: "line-child",
    });

    const splitSubheader = SplitText.create(".animate-subheader", {
      type: "lines",
      linesClass: "line-child-sub",
    });

    // Create masks to elegantly hide text boundaries during reveal transitions
    SplitText.create(".animate-header, .animate-subheader", {
      type: "lines",
      linesClass: "overflow-hidden py-1",
    });

    tl.from(splitHeader.lines, {
      y: 60,
      autoAlpha: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    }).from(
      splitSubheader.lines,
      {
        y: 40,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.out",
      },
      "-=0.4",
    ); // Slightly overlaps the animations for a smooth transition layout
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden  min-h-screen flex flex-col flex-center  items-center bg-[#0d0e12]"
    >
      <div className="hero-layout mr-30 ml-30 w-full grid md:grid-cols-2 grid-cols-1 items-center gap-0 relative z-10">
        {/* LEFT: HERO CONTENT */}
        <header className="flex flex-col justify-center md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text text-white">
              <h1 className="animate-header text-4xl md:text-6xl font-bold tracking-tight leading-none flex flex-wrap items-center gap-x-3">
                Building
                <span className="slide inline-block h-[1.2em] relative overflow-hidden align-middle ml-2">
                  <span className="wrapper flex flex-col">
                    {words.map((word, index) => {
                      const IconComponent = word.icon;
                      return (
                        <span
                          key={`${word.text}-${index}`}
                          className="flex items-center gap-2 md:gap-3 h-[1.2em] "
                        >
                          <span className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                            {IconComponent && (
                              <IconComponent className="w-full h-full text-[#51a4d08b]" />
                            )}
                          </span>
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#51a4d08b] to-cyan-400">
                            {word.text}
                          </span>
                        </span>
                      );
                    })}
                  </span>
                </span>
              </h1>

              <h1 className="animate-header text-4xl md:text-6xl font-bold tracking-tight leading-none mt-2">
                software solutions
              </h1>
              <h1 className="animate-header text-4xl md:text-6xl font-bold tracking-tight leading-none mt-2 text-white/80">
                from the infrastructure up
              </h1>
            </div>

            <p className="animate-subheader text-white/60 md:text-xl max-w-xl leading-relaxed">
              Hi, I’m{" "}
              <strong className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#51a4d08b] to-cyan-400">
                Shahad Alsaneea
              </strong>
              . A software engineer who speaks both low-level machine logic and
              high-level web architecture. I don't just write code—I build from
              the iron up, turning complex system fundamentals into seamless
              user experiences. Let’s build something impactful.
            </p>
          </div>
        </header>

        {/* RIGHT: FloatingTechStack */}

        <div className="w-full h-[600px] flex items-center justify-center ">
          <FloatingTechStack />
          {/* 🌌 BACKGROUND LAYER: Custom Three.js Particle System */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
              <ambientLight intensity={1.5} />
              <Particles count={120} />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}
