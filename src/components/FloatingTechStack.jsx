"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiGit,
  SiC,
  SiPython,
  SiDocker,
  SiNodedotjs,
  SiGithub,
  SiDjango,
  SiHtml5,
  SiJavascript,
  SiCss,
  SiGnubash,
  SiWebrtc,
  SiJsonwebtokens,
  SiFlask,
  SiSwagger,
  SiPostman,
  SiVitest,
  SiPytest,
  SiGsap,
  SiJinja,
} from "react-icons/si";

const tech = [
  { Icon: SiReact, name: "React", color: "#61DAFB", depth: 3 },
  { Icon: SiNextdotjs, name: "Next.js", color: "#ffffff", depth: 2 },
  { Icon: SiTypescript, name: "TypeScript", color: "#3178C6", depth: 1 },
  { Icon: SiTailwindcss, name: "Tailwind", color: "#38BDF8", depth: 2 },
  { Icon: SiPostgresql, name: "PostgreSQL", color: "#336791", depth: 1 },
  { Icon: SiNodedotjs, name: "nodejs", color: "#3ECF8E", depth: 3 },
  { Icon: SiGit, name: "Git", color: "#F1502F", depth: 2 },
  { Icon: SiC, name: "c", color: "#3178C6", depth: 2 },
  { Icon: SiPython, name: "python", color: "#336791", depth: 2 },
  { Icon: SiDocker, name: "docker", color: "#38BDF8", depth: 1 },
  { Icon: SiGithub, name: "github", color: "#ffffff", depth: 1 },
  { Icon: SiDjango, name: "django", color: "#3ECF8E", depth: 1 },
  { Icon: SiHtml5, name: "html", color: "#F1502F", depth: 1 },
  { Icon: SiJavascript, name: "js", color: "#efd81c", depth: 1 },
  { Icon: SiCss, name: "css", color: "#254bdd", depth: 1 },
  { Icon: SiGnubash, name: "bash", color: "#ffffff", depth: 1 },
  { Icon: SiWebrtc, name: "webrtc", color: "#ffffff", depth: 1 },
  { Icon: SiJsonwebtokens, name: "jwt", color: "#ffffff", depth: 1 },
  { Icon: SiFlask, name: "flask", color: "#ffffff", depth: 1 },
  { Icon: SiSwagger, name: "swagger", color: "#77e54b", depth: 1 },
  { Icon: SiPostman, name: "postman", color: "#f76936", depth: 1 },
  { Icon: SiVitest, name: "vitest", color: "#77e54b", depth: 1 },
  { Icon: SiPytest, name: "pytest", color: "#336791", depth: 1 },
  { Icon: SiGsap, name: "gsap", color: "#0add46", depth: 1 },
  { Icon: SiJinja, name: "jinja", color: "#993642", depth: 1 },
];

const positions = [
  { x: -180, y: -120 },
  { x: -120, y: -70 },
  { x: -210, y: -10 },
  { x: -150, y: 90 },
  { x: -60, y: -140 },

  { x: -40, y: 120 },
  { x: 40, y: -110 },
  { x: 80, y: -30 },
  { x: 120, y: 70 },
  { x: 170, y: -80 },

  { x: 190, y: 20 },
  { x: 130, y: 130 },
  { x: 20, y: 170 },
  { x: -90, y: 160 },
  { x: -200, y: 70 },

  { x: 220, y: -10 },
  { x: 210, y: 110 },
  { x: 100, y: -170 },
  { x: -20, y: -190 },
  { x: -170, y: -170 },

  { x: 60, y: 180 },
  { x: 180, y: 170 },
  { x: -230, y: -80 },
  { x: 240, y: -130 },
  { x: -250, y: 140 },
];

export default function FloatingTechStack() {
  const [hovered, setHovered] = useState(null);

  const smoothX = useSpring(0, {
    stiffness: 60,
    damping: 20,
  });

  const smoothY = useSpring(0, {
    stiffness: 60,
    damping: 20,
  });

  useEffect(() => {
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;

      smoothX.set(x);
      smoothY.set(y);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, [smoothX, smoothY]);

  return (
    <div className="relative w-full h-[600px] flex items-center justify-start">
      {tech.map((t, i) => (
        <FloatingTechItem
          key={t.name}
          t={t}
          i={i}
          pos={positions[i]}
          smoothX={smoothX}
          smoothY={smoothY}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}

function FloatingTechItem({
  t,
  i,
  pos,
  smoothX,
  smoothY,
  hovered,
  setHovered,
}) {
  const isHover = hovered === i;

  const itemX = useTransform(smoothX, (v) => v * (t.depth * 0.5));
  const itemY = useTransform(smoothY, (v) => v * (t.depth * 0.5));

  return (
    <motion.div
      className="absolute flex flex-col items-center cursor-pointer"
      style={{
        left: "50%",
        top: "50%",
        marginLeft: pos.x,
        marginTop: pos.y,
        x: itemX,
        y: itemY,
      }}
      onHoverStart={() => setHovered(i)}
      onHoverEnd={() => setHovered(null)}
      whileHover={{ scale: 1.35 }}
      animate={
        isHover
          ? { y: 0, x: 0 }
          : {
              y: [0, 12, 0],
              x: [0, 6, 0],
            }
      }
      transition={
        isHover
          ? { type: "spring", stiffness: 300, damping: 20 }
          : {
              duration: 4 + i * 0.6,
              repeat: Infinity,
              ease: "easeInOut",
            }
      }
    >
      <motion.div
        style={{
          filter: isHover
            ? `drop-shadow(0 0 18px ${t.color})`
            : `blur(${t.depth * 0.2}px)`,
          opacity: 0.9 + t.depth * 0.03,
        }}
        className="text-white text-4xl transition-all duration-300"
      >
        <t.Icon style={{ color: t.color }} />
      </motion.div>

      <motion.span
        initial={{ opacity: 0, y: 6 }}
        animate={{
          opacity: isHover ? 1 : 0,
          y: isHover ? 0 : 6,
        }}
        className="text-xs mt-2 text-white/70"
      >
        {t.name}
      </motion.span>
    </motion.div>
  );
}
