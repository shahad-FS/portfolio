import React from "react";
import { motion } from "framer-motion";
import { projectCards } from "@/constants";
import { PinContainer } from "@/components/ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
export default function Projects() {
  return (
    <div id="projects" className="py-20">
      <h1 className="heading">
        A small Selection of{" "}
        <span className="text-white underline bg-[#51a4d08b]">
          recent projects
        </span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projectCards.map(
          ({
            id,
            title,
            link,
            description,
            responsibilities,
            imgPath,
            tools,
          }) => (
            <div
              key={id}
              className="flex items-center justify-center sm:w-[570px] w-[80vw]"
            >
              <PinContainer title={link} href={link}>
                {/* <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh]  mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:roubded-3xl bg-[#13162d]"> */}
                {/* <img src="/bg.png" alt="bg-img" /> */}
                {/* </div>
                </div> */}
                {/* <img
                  src={imgPath}
                  alt={title}
                  className="z-10 absolute bottom-0"
                /> */}
                <div className="sm:w-[570px] w-[80vw]">
                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                    {title}
                  </h1>
                  <p className="lg:text-xl lg:font-normal font-light text-sm text-base line-clamp-3">
                    {description}
                  </p>
                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      {tools.map((tool, index) => {
                        const ToolIcon = tool.Icon;
                        return (
                          <div
                            key={index}
                            className="w-8 h-8 rounded-full border border-white/[0.15] bg-white/5 flex items-center justify-center backdrop-blur-sm transition-transform hover:scale-110"
                            title={tool.name}
                            style={{
                              transform: `translateX(-${5 * index * 2}px)`,
                            }}
                          >
                            <ToolIcon
                              className="w-4 h-4"
                              style={{
                                color: tool.color,
                              }}
                            />
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex justify-center items-center">
                      <p className="flex lg:text-lg md:text-xs text-sm text-white-50">
                        Check Source Code
                      </p>
                      <FaLocationArrow
                        className="ms-3 color-white-50"
                        size={12}
                      />
                    </div>
                  </div>
                </div>
              </PinContainer>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

// بيانات المشاريع (يمكنك تعديلها لاحقاً لتبديلها بمشاريعك الفعلية)
//   const projectList = [
//     {
//       title: "E-Commerce Nexus",
//       type: "Full-Stack Project",
//       description:
//         "A highly scalable e-commerce infrastructure with real-time inventory tracking, secure stripe payment gateway, and an optimized dashboard.",
//       tags: ["Next.js", "Django", "PostgreSQL", "Docker"],
//       liveLink: "#",
//       githubLink: "#",
//       image:
//         "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", // رابط مؤقت لصورة داتا أو واجهة
//     },
//     {
//       title: "Cyber Terminal Portfolio",
//       type: "Interactive Frontend",
//       description:
//         "A gamified developer portfolio featuring a fully functional interactive terminal, custom retro themes, and fluid Framer Motion micro-interactions.",
//       tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
//       liveLink: "#",
//       githubLink: "#",
//       image:
//         "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80", // رابط مؤقت لصورة مودرن تفاعلية
//     },
//   ];

//   return (
//     <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col justify-center min-h-screen text-white">
//       {/* عنوان القسم بأسلوب سجل المهمات */}
//       <div className="mb-12 text-center md:text-right">
//         <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-1">
//           {"// ARCHIVE & COMPLETED QUESTS"}
//         </span>
//         <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-mono">
//           Featured{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
//             Projects
//           </span>
//         </h2>
//       </div>

//       {/* شبكة عرض المشاريع (مشروعين متناسقين بشكل كبير واحترافي) */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {projectList.map((project, index) => (
//           <div
//             key={index}
//             className="bg-[#11141a]/60 backdrop-blur-md border border-gray-800/80 rounded-2xl overflow-hidden shadow-2xl group hover:border-purple-500/40 transition-all duration-500 flex flex-col justify-between"
//           >
//             {/* حاوية الصورة مع تأثير تقريب عند الـ Hover */}
//             <div className="relative h-48 md:h-60 w-full overflow-hidden border-b border-gray-800/80">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
//               />
//               <div className="absolute top-4 left-4 bg-gray-950/80 backdrop-blur-sm border border-gray-800 text-xs font-mono px-3 py-1 rounded-full text-purple-400">
//                 {project.type}
//               </div>
//             </div>

//             {/* تفاصيل المشروع */}
//             <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
//               <div>
//                 <h3 className="text-2xl font-bold font-mono text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
//                   {project.title}
//                 </h3>
//                 <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-6">
//                   {project.description}
//                 </p>
//               </div>

//               {/* الأوسمة / التقنيات المستخدمة */}
//               <div>
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {project.tags.map((tag, tagIndex) => (
//                     <span
//                       key={tagIndex}
//                       className="bg-gray-900 border border-gray-800 text-xs font-mono px-2.5 py-1 rounded text-gray-300"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 {/* أزرار الروابط تفاعلية */}
//                 <div className="flex items-center gap-4 pt-4 border-t border-gray-800/60 font-mono text-sm">
//                   <a
//                     href={project.liveLink}
//                     className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-bold transition-colors group/btn"
//                   >
//                     <span>Live Demo</span>
//                     <span className="transform group-hover/btn:translate-x-1 transition-transform">
//                       →
//                     </span>
//                   </a>
//                   <a
//                     href={project.githubLink}
//                     className="text-gray-500 hover:text-gray-300 transition-colors"
//                   >
//                     Code Base &lt;/&gt;
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
