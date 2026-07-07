"use client";

import { startTransition, useRef } from "react";

export default function GlowCard({
  card,
  children,
  index,
  onClick,
  isFlipped,
  onMouseEnter,
  onMouseLeave,
}) {
  const cardRefs = useRef([]);
  const handleMouseMove = (index) => (e) => {
    const el = cardRefs.current[index];
    if (!el) return;

    const rect = el.getBoundingClientRect();

    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    el.style.setProperty("--start", angle + 60);
  };
  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`lg:w-100 w-full max-w-sm h-[320px] flex items-center justify-center animate-rotate-border rounded-lg bg-conic/[from_var(--border-angle)] from-neutral-500 via-neutral-300 to-neutral-200 p-px relative cursor-pointer transition-transform duration-700 transform-style-preserve-3d ${
        isFlipped ? "rotate-y-180" : ""
      }`}
    >
      <div className="p-10 w-full h-full rounded-lg bg-neutral-950 m-[1px] [transform-style:preserve-3d] flex flex-col">
        {children}
      </div>
    </div>
  );
}
