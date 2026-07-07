"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import TitleHeader from "@/components/TitleHeader";
import { workflowPhases } from "@/constants";
import GlowingCard from "@/components/GlowingCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Approach() {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      });
    });
    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });
    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        xPercent: 0,
        opacity: 0,

        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
          end: "top 30%",
          scrub: true,
        },
      });
    });
  }, []);
  return (
    <section id="approach" className=" md:mt-40 mt-20 section-padding xl:px-0">
      <div className="flex flex-col gap-3 items-center ">
        <h1 className="heading">
          My Work{" "}
          <span className="text-white underline bg-[#51a4d08b]">Approach</span>
        </h1>
        <p className="line-clamp-2">
          How I structure, build, and optimize applications—from low-level
          infrastructure to seamless user interfaces.
        </p>

        <div className="mt-32 relative">
          {/* Timeline واحد فقط */}
          <div className="timeline-wrapper hidden md:block">
            <div className="timeline-bg"></div>
            <div className="timeline"></div>
          </div>

          <div className="z-50 xl:space-y-32 space-y-10">
            {workflowPhases.map((phase, index) => (
              <div key={phase.phase} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowingCard card={phase} index={index} />
                </div>

                <div className="xl:w-4/6">
                  <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                    {/* الدائرة فقط */}
                    <div className="timeline-logo">
                      <phase.icon size={24} />
                    </div>

                    {/* المحتوى */}
                    <div className="flex-1">
                      <h1 className="font-semibold text-md">
                        {phase.subtitle}
                      </h1>

                      <p className="text-[#839cb5] italic">Responsibilities:</p>

                      <ul className="list-disc ms-5 mt-5 flex flex-col gap-2 text-white-50">
                        {phase.points.map((point) => (
                          <li key={point} className="text-lg">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
