"use client";

import { FaDownload } from "react-icons/fa";

export default function FloatingCVButton() {
  return (
    <a
      href="/resume.pdf"
      download
      className="
        fixed
        bottom-8
        right-8
        z-[9999]

        flex items-center gap-2

        rounded-full
        px-5 py-3

        bg-black/20
        backdrop-blur-sm
        border border-white/10

        text-white/50

        opacity-40

        transition-all
        duration-300

        hover:opacity-100
        hover:bg-[#51a4d0]/20
        hover:border-[#51a4d0]/40
        hover:text-white
        hover:backdrop-blur-md
        hover:scale-105
      "
    >
      <FaDownload size={14} />
      <span className="font-medium">Download CV</span>
    </a>
  );
}
