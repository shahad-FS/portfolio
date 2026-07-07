import React from "react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { aboutMe } from "@/constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function AboutMe() {
  useGSAP(() => {
    gsap.utils.toArray(".about-card").forEach((card) => {
      const direction = card.dataset.direction;

      gsap.from(card, {
        x: direction === "right" ? 120 : -120,
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "top 60%",
          scrub: 1.5,
        },
      });
    });
  }, []);

  return (
    <section id="about" className="mt-30">
      <h1 className="heading">
        Know Me{" "}
        <span className="text-white underline bg-[#51a4d08b]">Better!</span>
      </h1>
      <BentoGrid className="m-20">
        {aboutMe.map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
            className={item.className}
            titleClassName={item.titleClassName}
            imgClassName={item.imgClassName}
            img={item.img}
            spareImg={item.spareImg}
            direction={item.direction}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
