import { Code, Server, Database, Terminal } from "lucide-react";
import { useSectionVisible } from "../hooks/useSectionVisible"

interface Skill {
  name: string;
  level: number;
  experience: string;
  color?: string;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  { name: "HTML", level: 95, experience: "Expert", color: "#f97316", icon: <Code size={24} /> },
  { name: "CSS", level: 90, experience: "Advanced", color: "#3b82f6", icon: <Code size={24} /> },
  { name: "JavaScript", level: 92, experience: "Advanced", color: "#facc15", icon: <Code size={24} /> },
  { name: "React", level: 88, experience: "Advanced", color: "#06b6d4", icon: <Code size={24} /> },
  { name: "Node.js", level: 75, experience: "Intermediate", color: "#22c55e", icon: <Server size={24} /> },
  { name: "MongoDB", level: 70, experience: "Intermediate", color: "#16a34a", icon: <Database size={24} /> },
];

export const Skills = () => {
  const { sectionRef, isVisible } = useSectionVisible()

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="w-full py-20 px-4 md:px-10 bg-slate-900 text-slate-200"
    >
      <h2 className="text-4xl font-bold text-orange-500 mb-12 font-cursive2 relative inline-block">
        Skills & Expertise
        <span className={`absolute left-1/2 -bottom-2 w-0 h-[3px] bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full ${isVisible ? "animate-underline" : ""}`}></span>
      </h2>

      <div className="space-y-8 max-w-4xl mx-auto">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex flex-col md:flex-row md:items-center gap-4 group relative">
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 group-hover:bg-orange-500 transition-colors duration-300 text-white">
              {skill.icon}
            </div>

            {/* Skill Bar */}
            <div className="flex-1 relative">
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-orange-500 font-cursive2">{skill.name}</span>
                <span className="text-slate-300">{skill.experience} • {skill.level}%</span>
              </div>

              <div className="w-full h-2 md:h-3 bg-slate-800 rounded-full overflow-hidden relative">
                <div
                  className="h-2 md:h-3 rounded-full transition-all duration-1500 ease-out"
                  style={{
                    width: isVisible ? `${skill.level}%` : "0%",
                    background: `linear-gradient(90deg, ${skill.color} 0%, #ffffff33 50%, ${skill.color} 100%)`,
                  }}
                ></div>

                {/* Sparkle dots */}
                {isVisible &&
                  Array.from({ length: Math.floor(skill.level / 10) }).map((_, i) => (
                    <span
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full animate-sparkle"
                      style={{
                        left: `${(i + 1) * 10}%`,
                        top: `${Math.random() * 50 - 5}%`,
                      }}
                    ></span>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
