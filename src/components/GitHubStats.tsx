import { Github, GitFork, Star } from "lucide-react";
import { useSectionVisible } from "../hooks/useSectionVisible";

interface GitHubRepo {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  link: string;
}

const repos: GitHubRepo[] = [
  {
    name: "Portfolio Website",
    description: "A stunning personal portfolio with advanced animations and glassmorphism design.",
    stars: 128,
    forks: 42,
    language: "TypeScript",
    link: "https://github.com/sanjeetk-dev",
  },
  {
    name: "Modern Dashboard",
    description: "Real-time analytics dashboard with beautiful UI and interactive charts.",
    stars: 89,
    forks: 23,
    language: "React",
    link: "https://github.com/sanjeetk-dev",
  },
  {
    name: "Web Components Library",
    description: "Reusable, accessible web components for modern applications.",
    stars: 156,
    forks: 67,
    language: "TypeScript",
    link: "https://github.com/sanjeetk-dev",
  },
];

export const GitHubStats = () => {
  const { sectionRef, isVisible } = useSectionVisible();

  return (
    <section
      ref={sectionRef}
      id="github"
      className="relative w-full py-24 px-6 md:px-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 animate-slideUp">
          <div className="space-y-4">
            <h2 className="text-accent font-outfit font-bold tracking-widest text-sm uppercase">
              OPEN SOURCE
            </h2>
            <h3 className="text-4xl md:text-6xl font-outfit font-black text-white leading-tight">
              FEATURED <span className="text-gradient">PROJECTS</span>
            </h3>
          </div>
          <a
            href="https://github.com/sanjeetk-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 glass-panel border border-white/10 hover:border-accent rounded-xl text-white font-bold hover:bg-white/5 transition-all"
          >
            <Github size={18} />
            View All Projects
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, idx) => (
            <a
              key={idx}
              href={repo.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative glass-panel p-6 md:p-8 rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-500 hover:translate-y-[-8px] flex flex-col ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <Github className="text-accent group-hover:scale-110 transition-transform" size={24} />
                <span className="px-2 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-wider">
                  {repo.language}
                </span>
              </div>

              <h4 className="text-lg font-outfit font-black text-white group-hover:text-accent transition-colors mb-3">
                {repo.name}
              </h4>

              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                {repo.description}
              </p>

              <div className="flex items-center gap-6 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 text-slate-400">
                  <Star size={16} className="text-accent" />
                  <span className="text-sm font-medium">{repo.stars}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <GitFork size={16} />
                  <span className="text-sm font-medium">{repo.forks}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
