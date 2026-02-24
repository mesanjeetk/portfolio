import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { useSectionVisible } from "../hooks/useSectionVisible"

interface Project {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  projectLink?: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A premium personal portfolio with advanced animations and glassmorphism.",
    techStack: ["React", "GSAP", "Tailwind"],
    imageUrl: "https://images.pexels.com/photos/33433704/pexels-photo-33433704.jpeg",
    projectLink: "#",
    githubLink: "#",
  },
  {
    title: "Modern Dashboard",
    description: "Real-time analytics platform with a focus on user experience and data visualization.",
    techStack: ["React", "Express", "D3.js"],
    imageUrl: "https://images.pexels.com/photos/33433704/pexels-photo-33433704.jpeg",
    projectLink: "#",
    githubLink: "#",
  }
];

export const Projects = () => {
  const { sectionRef, isVisible } = useSectionVisible()

  return (
    <section ref={sectionRef} id="projects" className="relative w-full py-24 px-6 md:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 animate-slideUp">
          <div className="space-y-4">
            <h2 className="text-accent font-outfit font-bold tracking-widest text-sm uppercase">PORTFOLIO</h2>
            <h3 className="text-4xl md:text-6xl font-outfit font-black text-white leading-tight">
              SELECTED <span className="text-gradient">WORKS</span>
            </h3>
          </div>
          <Link to="/projects">
            <button className="px-8 py-4 glass-panel border border-white/10 text-white rounded-2xl font-bold hover:bg-white/5 transition-all btn-magnetic flex items-center gap-2">
              All Projects <ArrowUpRight size={18} />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`group relative glass-panel rounded-[2rem] overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60"></div>

                {/* Links Overlay */}
                <div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" className="w-10 h-10 glass-panel rounded-full flex items-center justify-center text-white hover:bg-accent transition-colors" aria-label={`View GitHub repository for ${project.title}`}>
                      <Github size={20} />
                    </a>
                  )}
                  {project.projectLink && (
                    <a href={project.projectLink} target="_blank" className="w-10 h-10 glass-panel rounded-full flex items-center justify-center text-white hover:bg-accent transition-colors" aria-label={`View live demo of ${project.title}`}>
                      <ArrowUpRight size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-bold text-accent px-3 py-1 bg-accent/10 rounded-full uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h4 className="text-2xl font-outfit font-black text-white group-hover:text-accent transition-colors tracking-tight">
                  {project.title}
                </h4>

                <p className="text-slate-400 font-outfit leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

