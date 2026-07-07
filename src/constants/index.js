import {
  TrendingUp,
  Shield,
  Zap,
  RefreshCw,
  Layers,
  Terminal,
  Cpu,
  Server,
  Monitor,
  FolderGit2,
  FileText,
  Database,
  Layout,
  Rocket,
} from "lucide-react";
import {
  SiReact,
  SiDjango,
  SiPostgresql,
  SiVercel,
  SiVitest,
  SiPython,
  SiFlask,
  SiSqlalchemy,
  SiSqlite,
  SiMysql,
  SiDocker,
  SiNginx,
  SiGnu,
  SiWebrtc,
} from "react-icons/si";

export const navLinks = [
  {
    name: "About Me",
    link: "#about",
  },
  {
    name: "My Approach",
    link: "#approach",
  },

  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "My Projects",
    link: "#projects",
  },
];

export const skillCategories = [
  {
    id: "systems-core",
    title: "Systems Programming & Computer Science",
    icon: Cpu,
    skills: [
      "C Language",
      "Data Structures & Algorithms",
      "Dynamic Memory Management",
      "OS Internals & Big O",
      "Custom Unix Shell",
      "Custom Printf Implementation",
    ],
  },
  {
    id: "backend-databases",
    title: "Backend Engineering & Databases",
    icon: Server,
    skills: [
      "Python (Django)",
      "Node.js & JavaScript (ES6+)",
      "RESTful APIs & Serialization",
      "WebRTC (Real-time Video/Audio)",
      "SQL & NoSQL Databases",
      "Object-Relational Mapping (ORM)",
    ],
  },
  {
    id: "frontend-development",
    title: "Frontend Engineering",
    icon: Monitor,
    skills: [
      "Vite & React",
      "TypeScript",
      "Server-Side Rendering (SSR)",
      "Advanced HTML5 & CSS3",
      "DOM Manipulation",
      "Asynchronous JS (Promises/Async)",
    ],
  },
  {
    id: "devops-infrastructure",
    title: "DevOps & Infrastructure",
    icon: Terminal,
    skills: [
      "Docker Containerization",
      "Nginx Web Server",
      "Linux / Unix Administration",
      "Bash / Shell Scripting",
      "Web Infrastructure (DNS, TCP/IP)",
      "Cloud Deployment (Vercel, Render)",
      "Git & GitHub",
    ],
  },
];
export const words = [
  { text: "scalable", icon: TrendingUp },
  { text: "robust", icon: Shield },
  { text: "optimized", icon: Zap },
  { text: "resilient", icon: RefreshCw },
  { text: "efficient", icon: Layers },
  { text: "scalable", icon: TrendingUp },
  { text: "robust", icon: Shield },
  { text: "optimized", icon: Zap },
  { text: "resilient", icon: RefreshCw },
  { text: "efficient", icon: Layers },
];

export const projectCards = [
  {
    title: "Rauf — Tele-Veterinary Platform",
    description:
      "A production-grade web application engineered to connect pet owners with professional veterinarians for real-time video consultations. The system leverages secure, low-latency communication protocols, an isolated containerized backend ecosystem, and a modern, modular frontend designed for peak responsiveness.",
    link: "https://rauf.live",
    imgPath: "/rauf.png",
    logoPath: "/rauf.png",
    date: "May 2026 - Present",
    responsibilities: [
      "Built Rauf, a comprehensive tele-veterinary platform utilizing Vite-React, Python Django, and clean API design.",
      "Implemented real-time audio/video consultations using WebRTC protocol for ultra-low latency peer-to-peer connections.",
      "Containerized the entire application suite using Docker and configured Nginx as a reverse proxy for optimized production deployment on Vercel and Render.",
    ],
    tools: [
      { Icon: SiReact, name: "React (Vite)", color: "#61DAFB" },
      { Icon: SiDjango, name: "Django", color: "#092E20" },
      { Icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
      { Icon: SiWebrtc, name: "WebRTC", color: "#FF5400" }, // Using Lucide Terminal for protocol
      { Icon: SiVitest, name: "Vitest & PyTest", color: "#6E9F18" },
      { Icon: SiDocker, name: "Docker", color: "#2496ED" },
      { Icon: SiNginx, name: "Nginx", color: "#009639" },
      { Icon: SiVercel, name: "Vercel & Render", color: "#FFFFFF" },
    ],
  },
  {
    title: "Custom Unix Simple Shell",
    description:
      "A low-level systems programming project that replicates standard POSIX command-line interpreter behaviors. Built to operate natively inside Unix environments, it focuses on deep operating system mechanics, process isolation pipelines, and strict manual memory lifecycles.",
    link: "https://github.com/shahad-FS/holbertonschool-simple_shell",
    imgPath: "/images/shell-preview.png",
    logoPath: "/images/c-logo.png",
    date: "Bootcamp Core Project",
    responsibilities: [
      "Designed and coded a fully functional Unix command-line interpreter from scratch using the C programming language.",
      "Managed dynamic memory allocation and process execution handling loops using system forks, execution scripts, and strict memory cleanups (malloc/free) to guarantee zero memory leaks.",
      "Implemented advanced string parsing architectures and environmental variables logic matching standard POSIX shell behavior.",
    ],
    tools: [
      { Icon: Cpu, name: "C (gnu89)", color: "#A8B9CC" },
      { Icon: SiGnu, name: "GCC Compiler", color: "#FFFDD0" },
      {
        Icon: Terminal,
        name: "POSIX Syscalls (fork/execve)",
        color: "#4AF626",
      },
      { Icon: Terminal, name: "Unix Shell Mechanics", color: "#FFFFFF" },
    ],
  },
  {
    title: "HBnB Architectural Evolution",
    description:
      "An architectural, full-stack emulation of a property rental market application. The project serves as a comprehensive exploration of database modeling, data normalization, object-relational mapping patterns, and exposing clean administrative web interfaces.",
    link: "https://github.com/shahad-FS/holbertonschool-hbnb",
    imgPath: "/images/hbnb-preview.png",
    logoPath: "/images/python-logo.png",
    date: "Bootcamp Full-Stack Project",
    responsibilities: [
      "Developed a complete architectural clone of AirBnB utilizing Python Object-Oriented Programming and modular structural engines.",
      "Configured robust relational database pipelines utilizing advanced SQL configurations alongside custom Object-Relational Mapping (ORM) tools.",
      "Engineered an administrative RESTful API backend handling strict data serialization, exceptions manipulation, and pagination logic.",
    ],
    tools: [
      { Icon: SiPython, name: "Python (OOP)", color: "#3776AB" },
      { Icon: SiFlask, name: "Flask JWT", color: "#000000" },
      { Icon: SiSqlalchemy, name: "SQLAlchemy ORM", color: "#D71F1F" },
      { Icon: SiSqlite, name: "SQLite (Dev)", color: "#003B57" },
      { Icon: SiMysql, name: "MySQL (Prod)", color: "#4479A1" },
    ],
  },
  {
    title: "Custom Low-Level _printf Utility",
    description:
      "A complete reconstruction of the standard C library's formatted output stream engine. Written from scratch, it evaluates structural format specifiers, handles data stream parsing, and operates directly with hardware input/output primitives.",
    link: "https://github.com/shahad-FS/holbertonschool-printf",
    imgPath: "/images/printf-preview.png",
    logoPath: "/images/terminal-logo.png",
    date: "Bootcamp Fundamentals Project",
    responsibilities: [
      "Co-authored a custom low-level reproduction of the C library standard printf function handling deep binary stream formats.",
      "Leveraged variadic functions and function pointers to process dynamic data inputs and string buffer transformations seamlessly.",
      "Optimized standard library calls to output character variables, numbers, strings, and custom formats efficiently.",
    ],
    tools: [
      { Icon: Cpu, name: "C Language", color: "#A8B9CC" },
      { Icon: SiGnu, name: "GCC Compiler", color: "#FFFDD0" },
      {
        Icon: Terminal,
        name: "Variadic Functions (stdarg.h)",
        color: "#4AF626",
      },
      { Icon: Terminal, name: "Buffer Write Primitives", color: "#FFFFFF" },
    ],
  },
];

export const aboutMe = [
  {
    id: 4,
    title: "Problem Solver",
    description:
      "Approaching roadblocks and structural challenges like complex puzzles—breaking down major issues systematically to find efficient, elegant solutions.",
    icon: "🧩",
    color: "text-emerald-400",
    borderColor: "hover:border-emerald-500/50",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "absolute bottom-0  right-0 md:w-[700px] w-[400px] ",
    titleClassName: "justify-start",
    img: "/problemSolving.svg",
    spareImg: "",
    direction: "left",
  },
  {
    id: 1,
    title: "Backend Mastery",
    description:
      "Designing clean architecture, secure APIs, and handling data structures that scale seamlessly.",
    icon: "⚙️",
    color: "text-purple-400",
    borderColor: "hover:border-purple-500/50",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-end",
    img: "",
    spareImg: "",
    direction: "right",
  },
  {
    id: 2,
    title: "Frontend Craftsmanship",
    description:
      "Bringing user interfaces to life with smooth animations, responsive designs, and fluid interactions.",
    icon: "✨",
    color: "text-cyan-400",
    borderColor: "hover:border-cyan-500/50",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w50 w-50",
    titleClassName: "justify-start",
    img: "/b5.svg",
    spareImg: "",
    direction: "right",
  },
  {
    id: 3,
    title: "Architectural DevOps",
    description:
      "Treating system infrastructure as code—maximizing uptime, containerizing applications, and architecting secure environment barriers.",
    icon: "🚀",
    color: "text-rose-400",
    borderColor: "hover:border-rose-500/50",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
    direction: "left",
  },
  {
    id: 5,
    title: "High-Agency Collaboration",
    description:
      "Thriving in team environments, communicating complex ideas clearly, and taking full personal ownership of tasks to deliver high-quality results under tight deadlines.",
    icon: "🤝",
    color: "text-emerald-400",
    borderColor: "hover:border-emerald-500/50",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "",
    spareImg: "",
    direction: "right",
  },
  {
    id: 6,
    title: "Continuous Learning",
    description:
      "Constantly evolving my skill set—proactively deep-diving into new methodologies, sharpening my strategic thinking, and expanding my knowledge base daily.",
    icon: "📚",
    color: "text-amber-400",
    borderColor: "hover:border-amber-500/50",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "/grid.svg",
    direction: "left",
  },
  {
    id: 7,
    title: "Current Build: Job Tracker MVP",
    description:
      "Actively engineering an optimized minimum viable product focused on managing and analytical tracking of career pipelines seamlessly.",
    icon: "🎯",
    color: "text-blue-400",
    borderColor: "hover:border-blue-500/50",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName:
      "text-red-500 justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
    direction: "left",
  },
  {
    id: 8,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
    direction: "right",
  },
];

export const workflowPhases = [
  {
    phase: "Phase 1",
    title: "Requirements & Architecture Planning",
    subtitle:
      "Defining system bounds, database models, and documentation foundations.",
    icon: FileText,
    color: "text-purple-400",
    points: [
      "Translate high-level business goals into explicit technical specifications.",
      "Draft comprehensive Technical Documentation from day one to guide system development.",
      "Map out relational database schemas and systemic architectural bounds.",
      "Evaluate resource constraints and sketch data workflows before writing code.",
    ],
  },
  {
    phase: "Phase 2",
    title: "Core Infrastructure & Backend Setup",
    subtitle:
      "Building from the iron up with containerized environments and documented APIs.",
    icon: Database,
    color: "text-cyan-400",
    points: [
      "Initialize repository architecture and secure containerized environments using Docker.",
      "Implement robust, secure backend services and strict database integrity constraints.",
      "Deliver interactive API Documentation (such as Swagger/OpenAPI contracts).",
      "Establish a firm data contract early to align all integration pipelines.",
    ],
  },
  {
    phase: "Phase 3",
    title: "Frontend Craftsmanship & Integration",
    subtitle:
      "Bringing interfaces to life with smooth synchronization and modular components.",
    icon: Layout,
    color: "text-amber-400",
    points: [
      "Construct modular, highly reusable frontend components based on the API contract.",
      "Build fluid, responsive interfaces with smooth user interactions and transitions.",
      "Implement global state synchronization and efficient client-side data ingestion.",
      "Prioritize clean layout craftsmanship for an optimal, high-performance UX.",
    ],
  },
  {
    phase: "Phase 4",
    title: "Testing, Optimization & Deployment",
    subtitle:
      "Eliminating resource leaks, securing reverse proxies, and shipping to production.",
    icon: Rocket,
    color: "text-rose-400",
    points: [
      "Run comprehensive test suites to capture edge cases and eliminate resource leaks.",
      "Profile performance bottlenecks to optimize rendering and response times.",
      "Configure secure reverse proxies using Nginx and isolate systemic environment variables.",
      "Orchestrate automated deployment pipelines directly to cloud production networks.",
    ],
  },
];
