import { useRef } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

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
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Header reveal
    gsap.from(".proj-header", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });

    // Parallax Images and Staggered Cards
    gsap.utils.toArray<HTMLElement>(".proj-card").forEach((card, i) => {
      // Main card reveal
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out"
      });

      // Pure Image Parallax
      const img = card.querySelector(".proj-img");
      if (img) {
        gsap.to(img, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
          y: 40,
          scale: 1.1,
          ease: "none"
        });
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="projects" className="relative w-full py-32 px-6 md:px-10 overflow-hidden bg-obsidian">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24 proj-header">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <h2 className="text-slate-300 font-inter font-semibold tracking-[0.2em] text-xs uppercase">PORTFOLIO</h2>
            </div>
            <h3 className="text-5xl md:text-7xl font-outfit font-black text-white leading-tight tracking-tighter">
              SELECTED <span className="text-gradient">WORKS</span>
            </h3>
          </div>
          <Link to="/projects">
            <button className="px-8 py-4 glass-panel border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all btn-magnetic flex items-center gap-3 shadow-lg">
              All Projects <ArrowUpRight size={18} />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:gap-24">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`proj-card group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`}
            >
              {/* Image Container */}
              <div className={`lg:col-span-7 relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-[2.5rem] glass-panel border border-white/5 shadow-2xl ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="proj-img w-full h-[120%] -mt-[10%] object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[2s] will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-60"></div>
                
                {/* Links Overlay (Mobile only here, desktop in content) */}
                <div className="lg:hidden absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 z-20">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-white hover:bg-accent hover:text-obsidian transition-colors shadow-lg">
                      <Github size={20} />
                    </a>
                  )}
                  {project.projectLink && (
                    <a href={project.projectLink} target="_blank" rel="noreferrer" className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-white hover:bg-accent hover:text-obsidian transition-colors shadow-lg">
                      <ArrowUpRight size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className={`lg:col-span-5 flex flex-col justify-center space-y-6 lg:px-12 ${idx % 2 !== 0 ? 'lg:order-1 lg:items-end lg:text-right' : ''}`}>
                <div className={`flex flex-wrap gap-2 ${idx % 2 !== 0 ? 'justify-end' : ''}`}>
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-bold text-obsidian px-3 py-1 bg-accent rounded-full uppercase tracking-wider shadow-[0_0_10px_rgba(0,240,255,0.3)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h4 className="text-4xl md:text-5xl font-outfit font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-accent transition-all duration-300 tracking-tight leading-tight">
                  {project.title}
                </h4>

                <div className="glass-panel p-6 rounded-2xl border border-white/5 relative z-10 shadow-xl bg-white/[0.02] backdrop-blur-xl">
                  <p className="text-slate-300 font-inter text-lg leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                {/* Desktop Links */}
                <div className={`hidden lg:flex gap-4 pt-4 ${idx % 2 !== 0 ? 'justify-end' : ''}`}>
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 group/btn">
                      <div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-white group-hover/btn:bg-accent group-hover/btn:text-obsidian transition-colors shadow-lg border border-white/10">
                        <Github size={20} />
                      </div>
                      <span className="font-inter font-semibold text-sm opacity-0 -translate-x-4 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300 text-accent">Source Code</span>
                    </a>
                  )}
                  {project.projectLink && (
                    <a href={project.projectLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 group/btn">
                      <div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-white group-hover/btn:bg-accent group-hover/btn:text-obsidian transition-colors shadow-lg border border-white/10">
                        <ArrowUpRight size={20} />
                      </div>
                      <span className="font-inter font-semibold text-sm opacity-0 -translate-x-4 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300 text-accent">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

