"use client";

import { skillCategories } from "@/constants";
import GlowCard from "@/components/GlowCard";
import { useState } from "react";

export default function Skills() {
  const [flipped, setFlipped] = useState({});

  return (
    <section
      id="skills"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0 "
    >
      <h1 className="heading">
        Technical{" "}
        <span className="text-white underline bg-[#51a4d08b]">
          Core & Tooling
        </span>
      </h1>
      <div className="w-full h-full md:px-20 px-5">
        <div className="mt-32 relative">
          <div className="relative z-50 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
            {skillCategories.map((card, index) => {
              const isFlipped = flipped[index];

              return (
                <div key={card.title} className="exp-card-wrapper w-full">
                  <div className="xl:w-2/6 ">
                    <GlowCard
                      card={card}
                      index={index}
                      isFlipped={isFlipped}
                      onClick={() => {
                        setFlipped((prev) => ({
                          ...prev,
                          [index]: !prev[index],
                        }));
                      }}
                      onMouseEnter={() => {
                        setFlipped((prev) => ({
                          ...prev,
                          [index]: true,
                        }));
                      }}
                      onMouseLeave={() => {
                        setFlipped((prev) => ({
                          ...prev,
                          [index]: false,
                        }));
                      }}
                    >
                      {/* FRONT */}
                      {!isFlipped && (
                        <div className="transition-transform duration-500">
                          <h2 className="text-xl font-bold">{card.title}</h2>
                        </div>
                      )}

                      {/* BACK */}
                      {isFlipped && (
                        <div className="transition-transform duration-500">
                          <ul className="space-y-2">
                            {card.skills.map((skill) => (
                              <li
                                className="[transform:rotateY(180deg)]"
                                key={skill}
                              >
                                • {skill}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </GlowCard>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
// "use client";

// import { motion } from "framer-motion";
// import GlowCard from "@/components/GlowCard";

// export default function Skills() {
//   const skillCategories = [
//     {
//       title: "Frontend",
//       color: "#22d3ee",
//       description: "Crafting immersive user interfaces and experiences.",
//       skills: [
//         "React",
//         "Next.js",
//         "TypeScript",
//         "Tailwind CSS",
//         "Framer Motion",
//       ],
//     },
//     {
//       title: "Backend",
//       color: "#a855f7",
//       description: "Building scalable systems and APIs.",
//       skills: ["Python", "Django", "REST APIs", "PostgreSQL", "Authentication"],
//     },
//     {
//       title: "Tools",
//       color: "#10b981",
//       description: "Development workflow and productivity stack.",
//       skills: ["Git", "GitHub", "Docker", "Linux", "Figma"],
//     },
//   ];

//   return (
//     <section
//       id="skills"
//       className="relative min-h-screen flex items-center py-32 px-6"
//     >
//       <div className="max-w-7xl mx-auto w-full">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-20"
//         >
//           <span className="uppercase tracking-[0.35em] text-cyan-400 text-sm font-mono">
//             // Skill Tree
//           </span>

//           <h2 className="mt-4 text-5xl md:text-7xl font-bold">
//             Abilities &<span className="text-white/40"> Tech Stack</span>
//           </h2>

//           <p className="mt-6 max-w-2xl text-white/50 text-lg">
//             Technologies and systems I use to build premium digital products and
//             interactive experiences.
//           </p>
//         </motion.div>

//         {/* Cards */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {skillCategories.map((category, index) => (
//             <motion.div
//               key={category.title}
//               initial={{ opacity: 0, y: 80 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 delay: index * 0.15,
//                 duration: 0.7,
//               }}
//               className="group perspective-[1500px] h-[380px]"
//             >
//               <div className="relative h-full w-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
//                 {/* FRONT */}
//                 <GlowCard color={category.color}>
//                   <div className="absolute inset-0 backface-hidden p-8 flex flex-col justify-between">
//                     <div>
//                       <span className="text-xs uppercase tracking-[0.3em] text-white/40">
//                         Category
//                       </span>

//                       <h3 className="mt-4 text-4xl font-bold">
//                         {category.title}
//                       </h3>
//                     </div>

//                     <p className="text-white/50 leading-relaxed">
//                       {category.description}
//                     </p>

//                     <div
//                       className="h-[2px] w-full rounded-full"
//                       style={{
//                         background: category.color,
//                       }}
//                     />
//                   </div>
//                 </GlowCard>

//                 {/* BACK */}
//                 <GlowCard color={category.color}>
//                   <div className="absolute inset-0 rotate-y-180 backface-hidden p-8">
//                     <span className="text-xs uppercase tracking-[0.3em] text-white/40">
//                       Unlocked Skills
//                     </span>

//                     <h3 className="mt-4 text-3xl font-bold mb-8">
//                       {category.title}
//                     </h3>

//                     <div className="space-y-4">
//                       {category.skills.map((skill) => (
//                         <div
//                           key={skill}
//                           className="flex items-center gap-4 border-b border-white/10 pb-3"
//                         >
//                           <div
//                             className="w-2 h-2 rounded-full"
//                             style={{
//                               background: category.color,
//                             }}
//                           />

//                           <span className="text-white/80">{skill}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </GlowCard>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
