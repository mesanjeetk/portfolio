import { Trophy, Sparkles } from "lucide-react";
import { useSectionVisible } from "../hooks/useSectionVisible";

interface Award {
  title: string;
  organization: string;
  date: string;
  description: string;
  category: string;
}

const awards: Award[] = [
  {
    title: "Full-Stack Production Deployment",
    organization: "Raja-Mantri",
    date: "2024",
    description: "Successfully architected, connected, and deployed a real-time multiplayer application handling concurrent WebSocket connections.",
    category: "Milestone",
  },
  {
    title: "Dual-Platform Engineering",
    organization: "Web & Mobile",
    date: "2024",
    description: "Bridged the gap between React/Next.js frontend architectures and native Android development using Kotlin Jetpack Compose.",
    category: "Achievement",
  },
  {
    title: "Advanced State & Data Flow",
    organization: "Frontend Ecosystem",
    date: "2023",
    description: "Mastered complex state management and seamless UI integrations, utilizing Context API, Redux patterns, and performant data fetching.",
    category: "Competency",
  },
  {
    title: "Creative UI / UX Architecture",
    organization: "Design Systems",
    date: "2023",
    description: "Developed deep expertise in translating high-fidelity design concepts into pixel-perfect, highly animated (GSAP/CSS) user interfaces.",
    category: "Competency",
  },
];

export const Awards = () => {
  const { sectionRef, isVisible } = useSectionVisible();

  return (
    <section
      ref={sectionRef}
      id="awards"
      className="relative w-full py-24 px-6 md:px-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-20 animate-slideUp">
          <h2 className="text-accent font-outfit font-bold tracking-widest text-sm uppercase">
            RECOGNITION
          </h2>
          <h3 className="text-4xl md:text-6xl font-outfit font-black text-white leading-tight">
            AWARDS &<span className="text-gradient"> ACHIEVEMENTS</span>
          </h3>
        </div>

        <div className="space-y-4">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className={`group relative glass-panel p-6 md:p-8 rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-500 hover:translate-x-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/20 text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                  {idx === 0 ? (
                    <Trophy size={24} />
                  ) : (
                    <Sparkles size={24} />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4 mb-2">
                    <h4 className="text-lg font-outfit font-black text-white group-hover:text-accent transition-colors">
                      {award.title}
                    </h4>
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider w-fit">
                      {award.category}
                    </span>
                  </div>

                  <p className="text-sm text-slate-400 font-medium mb-3">
                    {award.organization} • {award.date}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
