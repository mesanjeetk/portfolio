import React, { useState } from "react";
import { Github, X, Layout, Code2, Globe } from "lucide-react";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  projectLink?: string;
  githubLink?: string;
  category: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A high-end personal portfolio designed with a focus on immersive user experience and premium aesthetics. Features complex GSAP animations and a custom-built glassmorphism design system.",
    techStack: ["React", "Tailwind", "GSAP", "Lucide"],
    imageUrl: "https://images.pexels.com/photos/33433704/pexels-photo-33433704.jpeg?auto=compress&cs=tinysrgb&w=600",
    githubLink: "https://github.com/sanjeetk-dev",
    category: "Web Design"
  },
  {
    title: "E-Commerce Ecosystem",
    description: "A comprehensive e-commerce platform featuring real-time inventory management, secure payment gateways, and a sophisticated product discovery engine. Built for scale and performance.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    imageUrl: "https://images.pexels.com/photos/33433704/pexels-photo-33433704.jpeg?auto=compress&cs=tinysrgb&w=600",
    githubLink: "https://github.com/sanjeetk-dev",
    category: "Full Stack"
  },
  {
    title: "Intelligence Blog",
    description: "A modern content publishing platform with markdown support, AI-driven recommendations, and advanced SEO optimization. Designed for seamless reading and content creation.",
    techStack: ["Next.js", "Tailwind", "Prisma", "PostgreSQL"],
    imageUrl: "https://images.pexels.com/photos/33433704/pexels-photo-33433704.jpeg?auto=compress&cs=tinysrgb&w=600",
    githubLink: "https://github.com/sanjeetk-dev",
    category: "Content"
  },
];

const ProjectCard = React.memo(({ project, onClick }: { project: Project; onClick: () => void }) => (
  <div
    className="glass-panel group rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-700 cursor-pointer relative"
    onClick={onClick}
  >
    <div className="relative aspect-video overflow-hidden">
      <img
        src={project.imageUrl}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
      <div className="absolute top-6 right-6">
        <span className="px-4 py-1.5 glass-panel rounded-full text-[10px] font-outfit font-black text-accent uppercase tracking-widest border border-white/10">
          {project.category}
        </span>
      </div>
    </div>
    <div className="p-8 space-y-4">
      <h3 className="text-2xl font-outfit font-black text-white group-hover:text-accent transition-colors leading-tight">
        {project.title}
      </h3>
      <p className="text-slate-400 font-outfit text-sm line-clamp-2 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 pt-2">
        {project.techStack.slice(0, 3).map((tech, idx) => (
          <span key={idx} className="text-[10px] font-outfit font-bold text-slate-500 uppercase tracking-widest">
            {tech} {idx < 2 && "•"}
          </span>
        ))}
        {project.techStack.length > 3 && (
          <span className="text-[10px] font-outfit font-bold text-slate-500 uppercase tracking-widest">+ {project.techStack.length - 3}</span>
        )}
      </div>
    </div>
  </div>
));

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section className="w-full min-h-screen py-24 px-6 md:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-20">

        <div className="text-center space-y-4 animate-slideUp">
          <h2 className="text-accent font-outfit font-bold tracking-widest text-sm uppercase">PORTFOLIO</h2>
          <h1 className="text-5xl md:text-8xl font-outfit font-black text-white leading-tight">
            SELECTED <span className="text-gradient">WORKS</span>
          </h1>
          <p className="text-slate-400 font-outfit text-xl max-w-2xl mx-auto leading-relaxed">
            A curation of digital products and visual experiments crafted with precision and passion.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="animate-slideUp" style={{ animationDelay: `${idx * 100}ms` }}>
              <ProjectCard project={project} onClick={() => setActiveProject(project)} />
            </div>
          ))}
        </div>

        {/* Modal */}
        {activeProject && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-10 animate-fadeIn"
            onClick={() => setActiveProject(null)}
          >
            <div className="absolute inset-0 bg-obsidian/90 backdrop-blur-xl"></div>

            <div
              className="relative w-full max-w-5xl glass-panel rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl animate-scaleUp flex flex-col md:flex-row max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-8 right-8 z-50 p-3 glass-panel rounded-full text-white hover:text-accent border border-white/5 transition-all"
              >
                <X size={24} />
              </button>

              {/* Image Side */}
              <div className="w-full md:w-1/2 aspect-square md:aspect-auto relative">
                <img
                  src={activeProject.imageUrl}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-obsidian/20 hidden md:block"></div>
              </div>

              {/* Info Side */}
              <div className="w-full md:w-1/2 p-10 md:p-16 overflow-y-auto space-y-10 custom-scrollbar">
                <div className="space-y-4">
                  <span className="text-accent font-outfit font-bold tracking-widest text-xs uppercase">{activeProject.category}</span>
                  <h2 className="text-4xl md:text-6xl font-outfit font-black text-white leading-tight">{activeProject.title}</h2>
                </div>

                <div className="space-y-6">
                  <h4 className="text-white font-outfit font-black flex items-center gap-3 tracking-widest text-xs uppercase">
                    <Layout size={16} className="text-accent" /> THE PROJECT
                  </h4>
                  <p className="text-slate-400 font-outfit text-lg leading-relaxed">
                    {activeProject.description}
                  </p>
                </div>

                <div className="space-y-6">
                  <h4 className="text-white font-outfit font-black flex items-center gap-3 tracking-widest text-xs uppercase">
                    <Code2 size={16} className="text-accent" /> TECHNOLOGIES
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.techStack.map((tech, idx) => (
                      <span key={idx} className="px-4 py-2 glass-panel rounded-xl text-[10px] font-outfit font-black text-white/50 uppercase tracking-widest">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-6">
                  {activeProject.projectLink && (
                    <a
                      href={activeProject.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-accent text-white rounded-2xl font-black transition-all hover:glow-shadow group"
                    >
                      <Globe size={20} /> LIVE DEMO
                    </a>
                  )}
                  {activeProject.githubLink && (
                    <a
                      href={activeProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-3 px-8 py-5 glass-panel text-white border border-white/5 hover:border-accent/30 rounded-2xl font-black transition-all"
                    >
                      <Github size={20} /> SOURCE CODE
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

