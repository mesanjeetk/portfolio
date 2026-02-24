import React, { useState, useEffect, useRef } from "react";
import { Github, X, Layout, Code2, Globe, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Meta } from "../components/Meta";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  projectLink?: string;
  githubLink?: string;
  category: string;
  year: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A high-end personal portfolio designed with a focus on immersive user experience and premium aesthetics. Features complex GSAP animations and a custom-built glassmorphism design system.",
    techStack: ["React", "Tailwind", "GSAP", "Lucide"],
    imageUrl: "https://images.pexels.com/photos/33433704/pexels-photo-33433704.jpeg?auto=compress&cs=tinysrgb&w=600",
    githubLink: "https://github.com/sanjeetk-dev",
    category: "Web Design",
    year: "2024"
  },
  {
    title: "E-Commerce Ecosystem",
    description: "A comprehensive e-commerce platform featuring real-time inventory management, secure payment gateways, and a sophisticated product discovery engine.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    imageUrl: "https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=600",
    githubLink: "https://github.com/sanjeetk-dev",
    category: "Full Stack",
    year: "2023"
  },
  {
    title: "Social Connect",
    description: "A real-time social networking dashboard with interactive data visualizations and seamless multi-channel communication tools.",
    techStack: ["React", "Socket.io", "Chart.js", "Firebase"],
    imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
    githubLink: "https://github.com/sanjeetk-dev",
    category: "Web App",
    year: "2024"
  },
  {
    title: "Intelligence Blog",
    description: "A modern content publishing platform with markdown support, AI-driven recommendations, and advanced SEO optimization.",
    techStack: ["Next.js", "Tailwind", "Prisma", "PostgreSQL"],
    imageUrl: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600",
    githubLink: "https://github.com/sanjeetk-dev",
    category: "Content",
    year: "2024"
  },
  {
    title: "Eco-Stream Dashboard",
    description: "An environmental monitoring system with real-time sensor integration and predictive analytics visualizations.",
    techStack: ["Vue.js", "D3.js", "Node.js", "IoT"],
    imageUrl: "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=600",
    githubLink: "https://github.com/sanjeetk-dev",
    category: "IoT",
    year: "2023"
  },
];

const ProjectCard = React.memo(
  ({ project, onClick, index }: { project: Project; onClick: () => void; index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          cardRef.current,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 85%",
              once: true
            }
          }
        );
      }, cardRef);
      return () => ctx.revert();
    }, []);

    return (
      <div
        ref={cardRef}
        className={`group relative cursor-pointer ${index % 2 !== 0 ? "md:mt-24" : ""}`}
        onClick={onClick}
        role="button"
        aria-label={`View details for ${project.title}`}
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onClick()}
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/5 hover:border-accent/40 transition-all duration-500">

          {/* IMAGE */}
          <img
            src={project.imageUrl}
            alt={`Preview for project: ${project.title}`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
            srcSet={`
              ${project.imageUrl}?w=438 438w,
              ${project.imageUrl}?w=768 768w,
              ${project.imageUrl}?w=1200 1200w
            `}
            sizes="(max-width: 600px) 438px,
              (max-width: 900px) 768px,
              1200px"
          />

          {/* Soft gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />

          {/* CATEGORY + ICON */}
          <div className="absolute top-6 left-6 right-6 flex justify-between items-center" aria-hidden="true">
            <span className="px-4 py-2 bg-black/40 backdrop-blur-md rounded-full text-[10px] font-semibold text-white uppercase tracking-widest border border-white/10">
              {project.category}
            </span>

            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/10 opacity-0 group-hover:opacity-100 transition">
              <ArrowUpRight size={18} />
            </div>
          </div>

          {/* TEXT */}
          <div className="absolute bottom-8 left-8 right-8 space-y-2">
            <p className="text-accent text-xs tracking-widest uppercase font-semibold" aria-hidden="true">
              {project.year}
            </p>

            <h3 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">
              {project.title}
            </h3>
          </div>
        </div>
      </div>
    );
  }
);

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section className="w-full min-h-screen py-24 px-6 md:px-10 overflow-hidden relative" aria-labelledby="projects-title">
      <Meta
        title="Works"
        description="A curated gallery of engineering artifacts and digital experiences crafted by Sanjeet Kumar. Explore high-performance web apps, IoT dashboards, and creative UI solutions."
      />

      {/* Background Decor */}
      <div className="absolute top-40 -right-20 pointer-events-none select-none opacity-5 -rotate-90 origin-bottom-right" aria-hidden="true">
        <span className="text-[20vw] font-outfit font-black tracking-tighter uppercase font-outline">Gallery</span>
      </div>
      <div className="absolute bottom-40 -left-20 pointer-events-none select-none opacity-[0.02] rotate-90 origin-top-left" aria-hidden="true">
        <span className="text-[25vw] font-outfit font-black tracking-tighter uppercase whitespace-nowrap">CRAFTED</span>
      </div>

      <div className="max-w-7xl mx-auto space-y-32 relative z-10">

        <div className="max-w-3xl space-y-6 animate-slideUp">
          <h2 className="text-accent font-outfit font-bold tracking-[0.3em] text-sm uppercase px-1">SELECTED WORKS</h2>
          <h1 id="projects-title" className="text-6xl md:text-9xl font-outfit font-black text-white leading-[0.9] tracking-tighter">
            A CURATION OF <br />
            <span className="text-gradient">DIGITAL</span> ARTIFACTS.
          </h1>
        </div>

        {/* Staggered Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start pb-32" role="list">
          {projects.map((project, idx) => (
            <div key={idx} role="listitem">
              <ProjectCard project={project} index={idx} onClick={() => setActiveProject(project)} />
            </div>
          ))}

          <div className="flex flex-col items-center justify-center pointer-events-none py-20 animate-slideUp" aria-hidden="true">
            <div className="w-48 h-48 border-2 border-accent/10 rounded-full animate-float flex items-center justify-center relative">
              <div className="absolute inset-0 bg-accent/5 rounded-full blur-2xl"></div>
              <div className="w-4 h-4 bg-accent/30 rounded-full animate-pulse"></div>
              <p className="absolute -bottom-10 whitespace-nowrap text-[10px] font-outfit font-black text-slate-700 tracking-[0.5em] uppercase">Innovating daily</p>
            </div>
            <div className="mt-20 w-px h-64 bg-gradient-to-t from-transparent via-accent/20 to-transparent"></div>
          </div>
        </div>

        {/* Modal */}
        {activeProject && (
          <div
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div
              className="absolute inset-0 bg-obsidian/95 backdrop-blur-2xl animate-fadeIn"
              onClick={() => setActiveProject(null)}
              aria-hidden="true"
            ></div>

            <div
              className="relative w-full max-w-6xl glass-panel rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl animate-scaleUp flex flex-col lg:flex-row max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-10 right-10 z-[210] p-4 glass-panel rounded-full text-white hover:text-accent border border-white/10 transition-all hover:rotate-90"
                aria-label="Close project details"
              >
                <X size={24} aria-hidden="true" />
              </button>

              <div className="w-full lg:w-3/5 relative min-h-[300px]" aria-hidden="true">
                <img
                  src={activeProject.imageUrl}
                  alt=""
                  className="w-full h-full object-cover grayscale brightness-50"
                  srcSet={`
                    ${activeProject.imageUrl}?w=438 438w,
                    ${activeProject.imageUrl}?w=768 768w,
                    ${activeProject.imageUrl}?w=1200 1200w
                  `}
                  sizes="(max-width: 600px) 438px,
                    (max-width: 900px) 768px,
                    1200px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-obsidian hidden lg:block"></div>
                <div className="absolute bottom-16 left-16 right-16 space-y-4">
                  <span className="text-accent font-outfit font-bold tracking-widest text-xs uppercase">{activeProject.category} • {activeProject.year}</span>
                  <h2 id="modal-title" className="text-5xl md:text-7xl font-outfit font-black text-white leading-tight tracking-tighter">{activeProject.title}</h2>
                </div>
              </div>

              <div className="w-full lg:w-2/5 p-12 md:p-20 overflow-y-auto space-y-12 custom-scrollbar flex flex-col justify-center bg-obsidian/50">
                <div className="space-y-6">
                  <h4 className="text-white font-outfit font-black flex items-center gap-3 tracking-widest text-[10px] uppercase opacity-50">
                    <Layout size={14} className="text-accent" aria-hidden="true" /> OVERVIEW
                  </h4>
                  <p className="text-slate-400 font-outfit text-xl leading-relaxed">
                    {activeProject.description}
                  </p>
                </div>

                <div className="space-y-6">
                  <h4 className="text-white font-outfit font-black flex items-center gap-3 tracking-widest text-[10px] uppercase opacity-50">
                    <Code2 size={14} className="text-accent" aria-hidden="true" /> ARCHITECTURE
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.techStack.map((tech, idx) => (
                      <span key={idx} className="px-5 py-3 glass-panel rounded-2xl text-[10px] font-outfit font-black text-white/70 uppercase tracking-widest">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-8">
                  {activeProject.projectLink && (
                    <a
                      href={activeProject.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-3 px-10 py-6 bg-accent text-white rounded-3xl font-black text-lg transition-all hover:glow-shadow group"
                      aria-label={`View live version of ${activeProject.title}`}
                    >
                      <Globe size={20} aria-hidden="true" /> LIVE
                    </a>
                  )}
                  {activeProject.githubLink && (
                    <a
                      href={activeProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-3 px-10 py-6 glass-panel text-white border border-white/10 hover:border-accent/30 rounded-3xl font-black text-lg transition-all"
                      aria-label={`View source code of ${activeProject.title} on GitHub`}
                    >
                      <Github size={20} aria-hidden="true" /> CODE
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
