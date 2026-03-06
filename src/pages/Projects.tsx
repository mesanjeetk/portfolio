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
    title: "Raja-Mantri Multiplayer",
    description: "A high-performance real-time multiplayer application. Engineered a low-latency backend with Node.js/Express and synchronized game state across multiple concurrent web clients using React and Next.js. Currently being adapted into a native mobile app via Kotlin Jetpack Compose.",
    techStack: ["Next.js", "React Native", "Kotlin", "Express", "MongoDB"],
    imageUrl: "https://images.pexels.com/photos/7858742/pexels-photo-7858742.jpeg?auto=compress&cs=tinysrgb&w=800",
    projectLink: "https://raja-mantri.netlify.app",
    githubLink: "https://github.com/mesanjeetk",
    category: "Full Stack App",
    year: "2024"
  },
  {
    title: "Premium Engineering Portfolio",
    description: "A highly interactive, avant-garde digital portfolio. Leveraged complex CSS techniques, GSAP animations, and custom React hooks to create a performant glassmorphism aesthetic that serves as a testament to my creative engineering capabilities.",
    techStack: ["React", "TypeScript", "TailwindCSS", "GSAP", "Vite"],
    imageUrl: "https://images.pexels.com/photos/33433704/pexels-photo-33433704.jpeg?auto=compress&cs=tinysrgb&w=800",
    projectLink: "https://mesanjeetk.vercel.app/",
    githubLink: "https://github.com/mesanjeetk",
    category: "Web UI/UX",
    year: "2024"
  },
  {
    title: "Nexus (Concept)",
    description: "Spearheaded the frontend architecture for an enterprise-grade AI analytics dashboard. Engineered a recursive data visualization engine using D3.js, enabling fortune 500 clients to traverse multi-dimensional datasets with fluid animations.",
    techStack: ["Next.js", "D3.js", "TailwindCSS", "Node.js", "GraphQL"],
    imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Enterprise UI",
    year: "2023"
  },
  {
    title: "Omniverse (Concept)",
    description: "Led the migration of a legacy monolithic store to a modern composable commerce architecture. Integrated algorithmic product recommendations and a headless CMS, resulting in a 300% improvement in Lighthouse performance scores.",
    techStack: ["Next.js", "Shopify Plus", "Sanity CMS", "Stripe", "tRPC"],
    imageUrl: "https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "E-Commerce",
    year: "2024"
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
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTech, setActiveTech] = useState<string | null>(null);

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const allTechs = Array.from(new Set(projects.flatMap((p) => p.techStack)));

  const filteredProjects = projects.filter((project) => {
    const categoryMatch = activeCategory === "All" || project.category === activeCategory;
    const techMatch = !activeTech || project.techStack.includes(activeTech);
    return categoryMatch && techMatch;
  });

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

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">

        <div className="max-w-3xl space-y-6 animate-slideUp">
          <h2 className="text-accent font-outfit font-bold tracking-[0.3em] text-sm uppercase px-1">SELECTED WORKS</h2>
          <h1 id="projects-title" className="text-6xl md:text-9xl font-outfit font-black text-white leading-[0.9] tracking-tighter">
            A CURATION OF <br />
            <span className="text-gradient">DIGITAL</span> ARTIFACTS.
          </h1>
        </div>

        {/* Filters */}
        <div className="space-y-6 border-y border-white/10 py-8">
          {/* Category Filter */}
          <div>
            <h3 className="text-xs font-bold text-accent uppercase tracking-wider mb-4">Filter by Category</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full font-bold uppercase tracking-widest text-xs transition-all ${
                    activeCategory === cat
                      ? "bg-accent text-white shadow-lg"
                      : "border border-white/10 text-slate-400 hover:border-accent hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Tech Filter */}
          <div>
            <h3 className="text-xs font-bold text-accent uppercase tracking-wider mb-4">Filter by Technology</h3>
            <div className="flex flex-wrap gap-2">
              {allTechs.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setActiveTech(activeTech === tech ? null : tech)}
                  className={`px-4 py-2 rounded-lg font-semibold text-xs transition-all ${
                    activeTech === tech
                      ? "bg-accent text-white"
                      : "bg-white/5 text-slate-400 hover:bg-white/10 hover:border-accent"
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-slate-400 text-sm">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>

        {filteredProjects.length > 0 ? (
          <>
            {/* Staggered Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start pb-32" role="list">
              {filteredProjects.map((project, idx) => (
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
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg mb-6">No projects found matching your filters.</p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setActiveTech(null);
              }}
              className="px-6 py-3 border border-accent text-accent rounded-xl font-bold hover:bg-accent hover:text-white transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}

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

{/* <a href='https://ko-fi.com/U7U71UWQ2U' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi6.png?v=6' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a> */}