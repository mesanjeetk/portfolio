import { useSectionVisible } from "../hooks/useSectionVisible";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { Hexagon, Cpu, Workflow, Rocket } from "lucide-react";

interface JourneyItem {
  date: string;
  title: string;
  description: string;
  tech?: string;
  icon?: React.ReactNode;
  coord?: string;
}

const journeyItems: JourneyItem[] = [
  {
    date: "MAR 2024",
    title: "The First Line",
    description: "Architected the initial foundation of my digital career. Mastered semantic structure and CSS logic, treating code as a medium for visual poetry.",
    tech: "01001000 01010100 01001101 01001100",
    icon: <Hexagon size={16} />,
    coord: "40.7128° N, 74.0060° W"
  },
  {
    date: "AUG 2024",
    title: "Dynamic Reactivity",
    description: "Pivoted to component-driven thinking. Built high-fidelity interfaces with React, orchestrating state and logic into seamless user experiences.",
    tech: "REACT.JS // VITE // GSAP",
    icon: <Cpu size={16} />,
    coord: "34.0522° N, 118.2437° W"
  },
  {
    date: "MAR 2025",
    title: "System Scaling",
    description: "Expanded into the backend cosmos. Mastered Node.js and MongoDB, building the nervous system for complex, data-driven applications.",
    tech: "NODE // EXPRESS // MONGODB",
    icon: <Workflow size={16} />,
    coord: "51.5074° N, 0.1278° W"
  },
  {
    date: "AUG 2025",
    title: "Production Mastery",
    description: "Reached the definitive professional milestone. Launched a high-performance, avant-garde digital artifact optimized for impact.",
    tech: "DEPLOY // OPTIMIZE // SCALE",
    icon: <Rocket size={16} />,
    coord: "35.6895° N, 139.6917° E"
  },
];

export const Journey = () => {
  const { sectionRef } = useSectionVisible();
  const lineRef = useRef<HTMLDivElement>(null);
  const scanlineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!lineRef.current) return;

    const ctx = gsap.context(() => {
      // Animate central line with scroll
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: true
          }
        }
      );

      // Scanline effect
      gsap.fromTo(
        scanlineRef.current,
        { yPercent: -100, opacity: 0 },
        {
          yPercent: 100,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: true
          }
        }
      );

      // Animate items individually
      itemRefs.current.forEach((item) => {
        if (!item) return;

        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 100,
            rotationX: 30,
            transformPerspective: 1000
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1.2,
            ease: "expo.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 15;
    const rotateY = -(x - centerX) / 25;

    gsap.to(el, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.5,
      ease: "power2.out",
      transformPerspective: 1000
    });

    // Parallax sub-elements
    const content = el.querySelector(".parallax-content");
    const icon = el.querySelector(".parallax-icon");
    const tech = el.querySelector(".parallax-tech");

    if (content) gsap.to(content, { x: rotateY * 0.8, y: -rotateX * 0.8, duration: 0.5 });
    if (icon) gsap.to(icon, { x: rotateY * 2, y: -rotateX * 2, duration: 0.5 });
    if (tech) gsap.to(tech, { x: rotateY * -0.5, y: -rotateX * -0.5, duration: 0.5 });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" });

    const content = el.querySelector(".parallax-content");
    const icon = el.querySelector(".parallax-icon");
    const tech = el.querySelector(".parallax-tech");

    if (content) gsap.to(content, { x: 0, y: 0, duration: 0.8 });
    if (icon) gsap.to(icon, { x: 0, y: 0, duration: 0.8 });
    if (tech) gsap.to(tech, { x: 0, y: 0, duration: 0.8 });
  };

  return (
    <section ref={sectionRef} id="journey" className="relative w-full py-32 px-6 md:px-10 overflow-hidden">

      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="text-center space-y-4 mb-32">
          <div className="flex items-center justify-center gap-4 mb-2 animate-fadeIn">
            <div className="w-12 h-px bg-accent/30" />
            <span className="text-accent font-outfit font-bold tracking-[0.3em] text-xs uppercase italic">CHRONOLOGICAL ARCHIVE</span>
            <div className="w-12 h-px bg-accent/30" />
          </div>
          <h2 className="text-5xl md:text-8xl font-outfit font-black text-white leading-tight tracking-tighter">
            ENGINEER <span className="text-gradient">EVOLUTION</span>
          </h2>
          <div className="flex items-center justify-center gap-8 text-slate-500 font-mono text-[10px] uppercase tracking-widest pt-4">
            <span>OBJ: CONTINUOUS_GROWTH</span>
            <span className="w-1 h-1 bg-accent rounded-full animate-pulse" />
            <span>LOC: GLOBAL_WORKSPACE</span>
          </div>
        </div>

        <div className="relative">
          {/* Central Timeline Infrastructure */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/[0.05] -translate-x-1/2 hidden md:block">
            {/* The Growth Line */}
            <div ref={lineRef} className="absolute top-0 left-0 w-full bg-gradient-to-b from-accent/0 via-accent to-accent/0 origin-top scale-y-0 shadow-[0_0_30px_rgba(244,63,94,0.4)]" />

            {/* The Scanline */}
            <div ref={scanlineRef} className="absolute top-0 left-[-10px] w-[22px] h-[2px] bg-accent shadow-[0_0_15px_rgba(244,63,94,1)] z-20" />
          </div>

          <div className="space-y-24 md:space-y-48 relative pt-12">
            {journeyItems.map((item, idx) => (
              <div
                key={idx}
                ref={el => { itemRefs.current[idx] = el; }}
                className={`relative flex flex-col md:flex-row items-center md:items-center group opacity-0 transition-opacity duration-500`}
                onMouseMove={(e) => handleMouseMove(e)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Timeline Visual Node */}
                <div className="absolute left-4 md:left-1/2 top-1/2 w-12 h-12 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center">
                  <div className="w-4 h-4 rounded-sm bg-obsidian border border-accent/50 rotate-45 group-hover:bg-accent group-hover:rotate-[225deg] transition-all duration-700 shadow-glow" />
                  <div className="absolute inset-0 border border-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700" />
                </div>

                {/* Technical Meta Data (Opposite Side) */}
                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-[40%] text-slate-600 font-mono text-[9px] uppercase tracking-[0.2em] pointer-events-none ${idx % 2 === 0 ? 'left-[55%]' : 'right-[55%] text-right'}`}>
                  <p className="mb-1 text-accent/50">ENTRY_ID: 00{idx + 1}</p>
                  <p className="mb-1">COORD: {item.coord}</p>
                  <p className="text-white/10">{item.tech}</p>
                </div>

                {/* The Journey Card */}
                <div className={`w-full md:w-[45%] ${idx % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <div className="relative group overflow-visible">
                    {/* Card Backdrop with Pattern */}
                    <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-3xl rounded-3xl border border-white/5 group-hover:border-accent/20 group-hover:bg-white/[0.04] transition-all duration-500" />

                    {/* Perspective Content Container */}
                    <div className="relative p-10 md:p-12 space-y-6">

                      {/* Technical Header */}
                      <div className="flex items-center justify-between parallax-tech">
                        <div className="flex items-center gap-4">
                          <div className="parallax-icon p-3 rounded-2xl bg-accent/10 text-accent border border-accent/20 shadow-inner">
                            {item.icon}
                          </div>
                          <div className="space-y-1">
                            <span className="block text-[10px] font-mono text-accent/60 uppercase tracking-widest leading-none">TIMESTAMP</span>
                            <span className="block text-sm font-outfit font-black text-white leading-none">{item.date}</span>
                          </div>
                        </div>
                        <div className="w-10 h-10 border border-white/5 rounded-full flex items-center justify-center text-[8px] font-mono text-slate-700">
                          0{idx + 1}
                        </div>
                      </div>

                      {/* Descriptive Body */}
                      <div className="parallax-content space-y-4">
                        <h4 className="text-3xl font-outfit font-black text-white group-hover:text-accent transition-colors duration-500 tracking-tight flex items-center gap-3">
                          {item.title}
                          <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h4>
                        <p className="text-slate-400 font-outfit text-base leading-relaxed font-medium">
                          {item.description}
                        </p>
                      </div>

                      {/* Technical Footer */}
                      <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                        <div className="flex gap-1">
                          {[1, 2, 3].map(i => <div key={i} className={`w-1 h-1 rounded-full ${i === idx + 1 ? 'bg-accent' : 'bg-white/10'}`} />)}
                        </div>
                        <span className="text-[10px] font-mono text-slate-600 tracking-tighter italic">LOG_STATUS: ARCHIVED</span>
                      </div>
                    </div>

                    {/* Corner Technical Markers */}
                    <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-accent/30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-accent/30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
