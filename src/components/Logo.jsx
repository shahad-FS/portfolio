"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/src/SplitText";

gsap.registerPlugin(useGSAP, SplitText);
export default function Logo({ onComplete }) {
  const logoRef = useRef();

  useGSAP(() => {
    const splitLogo = SplitText.create("#logo", {
      type: "chars",
      charsClass: "logo-char",
    });

    const tl = gsap.timeline({
      onComplete: () => {
        onComplete?.();
      },
    });

    // 1. دخول الحروف
    tl.from(splitLogo.chars, {
      opacity: 0,
      scale: 3,
      y: 80,
      rotateX: -90,
      transformOrigin: "center center",
      stagger: 0.08,
      duration: 0.8,
      ease: "back.out(1.7)",
    })

      // 2. Glow خفيف
      .to(splitLogo.chars, {
        textShadow:
          "0 0 8px rgba(255,255,255,.8), 0 0 20px rgba(255,255,255,.5)",
        stagger: 0.08,
        duration: 0.2,
      })

      // 3. Glow أخضر سايبربنك
      .to(splitLogo.chars, {
        textShadow: "0 0 5px #d2e9df, 0 0 10px #d2e9df, 0 0 20px #d2e9df",
        stagger: 0.08,
        duration: 0.2,
      })
      .to("#intro-screen", {
        scale: 1.2,
        opacity: 0,
        duration: 1,
        ease: "power4.inOut",
      })

      // 4. رجوع للحالة الطبيعية
      .to(splitLogo.chars, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
      })

      // 5. تحريك اللوقو كله (مو الحروف)
      .to("#logo", {
        top: "2rem",
        left: "2rem",
        scale: 0.5,
        duration: 1.2,
        ease: "power3.inOut",
        opacity: 0,
      });

    // .to("#logo", {
    //   opacity: 0,
    //   duration: 0.4,
    //   ease: "power2.out",
    //   pointerEvents: "none",
    // });
  }, []);

  return (
    <div
      ref={logoRef}
      id="logo"
      className="
        fixed
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        z-50
        text-5xl
        font-bold
        text-yellow-500
        pointer-events-none
      "
    >
      /{"${shahad}"}
    </div>
  );
}
