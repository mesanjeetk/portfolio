import { useRef } from "react";
import { Code, Server, Database, Layers, Globe } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  category: string;
}

const skills: Skill[] = [
  { name: "React & Next.js", level: 95, icon: <Layers size={20} />, category: "Frontend" },
  { name: "React Native", level: 85, icon: <Globe size={20} />, category: "Mobile" },
  { name: "Kotlin & Compose", level: 80, icon: <Code size={20} />, category: "Android" },
  { name: "Node.js & Express", level: 90, icon: <Server size={20} />, category: "Backend" },
  { name: "MongoDB / Postgre", level: 88, icon: <Database size={20} />, category: "Database" },
  { name: "Real-time & WebRTC", level: 85, icon: <Server size={20} />, category: "Networking" },
];

export const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Header reveal
    gsap.from(".skills-header", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Staggered Cards Reveal
    gsap.from(".skill-card", {
      scrollTrigger: {
        trigger: ".skills-grid",
        start: "top 85%",
      },
      y: 80,
      opacity: 0,
      rotationX: -20,
      transformOrigin: "center top",
      duration: 1,
      stagger: 0.1,
      ease: "back.out(1.2)"
    });

    // Progress Bars Fill on Scroll
    gsap.utils.toArray<HTMLElement>(".skill-progress").forEach((bar, i) => {
      gsap.fromTo(bar, 
        { width: "0%" }, 
        {
          scrollTrigger: {
            trigger: bar,
            start: "top 95%",
          },
          width: `${skills[i].level}%`,
          duration: 1.5,
          delay: 0.2 + (i * 0.1),
          ease: "expo.out"
        }
      );
    });

    // Animate percentage numbers
    gsap.utils.toArray<HTMLElement>(".skill-percent").forEach((percentEl, i) => {
      const obj = { val: 0 };
      gsap.to(obj, {
        scrollTrigger: {
          trigger: percentEl,
          start: "top 95%",
        },
        val: skills[i].level,
        duration: 1.5,
        delay: 0.2 + (i * 0.1),
        ease: "expo.out",
        onUpdate: () => {
          percentEl.innerText = `${Math.floor(obj.val)}%`;
        }
      });
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full py-32 px-6 md:px-10 overflow-hidden bg-obsidian perspective-[1000px]"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="skills-header text-center space-y-4 mb-24">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <h2 className="text-slate-300 font-inter font-semibold tracking-[0.2em] text-xs uppercase">EXPERTISE</h2>
          </div>
          <h3 className="text-5xl md:text-7xl font-outfit font-black text-white leading-tight tracking-tighter">
            TECHNICAL <span className="text-gradient">STACK</span>
          </h3>
        </div>

        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="skill-card glass-panel p-8 rounded-3xl border border-white/5 hover:border-accent/30 transition-colors duration-500 group relative overflow-hidden bg-gradient-to-b from-white/[0.03] to-transparent hover:bg-white/[0.05]"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl"></div>

              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white group-hover:bg-accent group-hover:text-obsidian group-hover:scale-110 transition-all duration-500 shadow-xl">
                  {skill.icon}
                </div>
                <span className="px-3 py-1 rounded-full bg-obsidian-light border border-white/5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">{skill.category}</span>
              </div>

              <div className="space-y-5 relative z-10">
                <div className="flex items-end justify-between">
                  <h4 className="text-xl font-outfit font-bold text-white tracking-wide">{skill.name}</h4>
                  <span className="skill-percent text-accent font-outfit font-black text-2xl leading-none shadow-accent drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">0%</span>
                </div>

                <div className="w-full h-2 bg-obsidian rounded-full overflow-hidden border border-white/5">
                  <div className="skill-progress h-full bg-gradient-to-r from-accent/50 to-accent rounded-full relative shadow-[0_0_10px_rgba(0,240,255,0.5)]">
                    <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-r from-transparent to-white/30 skew-x-[45deg] animate-[pulse_2s_infinite]"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
    </section>
  );
};
