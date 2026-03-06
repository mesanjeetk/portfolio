import { Code, Server, Database, Layers, Globe } from "lucide-react";
import { useSectionVisible } from "../hooks/useSectionVisible"

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  category: string;
}

const skills: Skill[] = [
  { name: "React & Next.js", level: 95, icon: <Layers size={20} />, category: "Frontend" },
  { name: "React Native (Expo)", level: 85, icon: <Globe size={20} />, category: "Mobile" },
  { name: "Kotlin & Jetpack Compose", level: 80, icon: <Code size={20} />, category: "Android" },
  { name: "Node.js & Express", level: 90, icon: <Server size={20} />, category: "Backend" },
  { name: "MongoDB / Mongoose", level: 88, icon: <Database size={20} />, category: "Database" },
  { name: "Real-time (WebSockets)", level: 85, icon: <Server size={20} />, category: "Networking" },
];

export const Skills = () => {
  const { sectionRef, isVisible } = useSectionVisible()

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full py-24 px-6 md:px-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-20 animate-slideUp">
          <h2 className="text-accent font-outfit font-bold tracking-widest text-sm uppercase">EXPERTISE</h2>
          <h3 className="text-4xl md:text-6xl font-outfit font-black text-white leading-tight">
            TECHNICAL <span className="text-gradient">STACK</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className={`glass-panel p-8 rounded-3xl border border-white/5 hover:border-accent/30 transition-all duration-500 hover:translate-y-[-5px] group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-accent text-white group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">{skill.category}</span>
              </div>

              <div className="space-y-4 relative">
                <div className="flex items-end justify-between">
                  <h4 className="text-xl font-outfit font-bold text-white">{skill.name}</h4>
                  <span className="text-accent font-outfit font-black text-2xl leading-none">{skill.level}%</span>
                </div>

                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all duration-1000 ease-out relative"
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%"
                    }}
                  >
                    <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-r from-transparent to-white/30 skew-x-[45deg] animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

