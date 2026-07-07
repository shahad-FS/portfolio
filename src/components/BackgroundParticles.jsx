"use client";

import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function BackgroundParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: false, // ⚠️ مهم جدًا
        background: {
          color: "#ff0000",
        },
        particles: {
          number: { value: 50 },
          color: { value: "#ffffff" },
          opacity: { value: 0.3 },
          size: { value: 2 },
          move: {
            enable: true,
            speed: 0.5,
          },
          links: {
            enable: true,
            distance: 140,
            opacity: 0.2,
          },
        },
      }}
      className="w-full h-full"
    />
  );
}
