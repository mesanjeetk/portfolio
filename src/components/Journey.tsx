import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
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
    date: "THE BEGINNING",
    title: "The Self-Taught Genesis",
    description: "Started my journey into software engineering through rigorous independent study. Mastered semantic HTML, CSS, and core JavaScript logic, treating the web as a canvas for interactive development.",
    tech: "HTML5 // CSS3 // JAVASCRIPT",
    icon: <Hexagon size={18} />,
    coord: "Nalanda, IN"
  },
  {
    date: "PHASE 02",
    title: "React & Component Logic",
    description: "Transitioned to modern frameworks, mastering React ecosystem. Learned to architect high-fidelity components, orchestrate state management, and build seamless single-page applications.",
    tech: "REACT // NEXT.JS // TAILWIND",
    icon: <Cpu size={18} />,
    coord: "Nalanda, IN"
  },
  {
    date: "PHASE 03",
    title: "Full-Stack Architecture",
    description: "Expanded my expertise into the backend cosmos. Developed real-time server logic using Node.js and Express, coupled with Postgre/MongoDB for persistent database management, powering dynamic platforms.",
    tech: "NODE // EXPRESS // MONGODB",
    icon: <Workflow size={18} />,
    coord: "Nalanda, IN"
  },
  {
    date: "PRESENT",
    title: "Bridging Web & Mobile",
    description: "Achieved dual-platform mastery. Translating complex React architectures into high-performance native Android experiences utilizing Kotlin and Jetpack Compose.",
    tech: "KOTLIN // COMPOSE // EXPO",
    icon: <Rocket size={18} />,
    coord: "Nalanda, IN"
  },
];

export const Journey = () => {
  const containerRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const scanlineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header Reveal
    gsap.from(".journey-header", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Animate central line with scroll
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 30%",
            scrub: 0.6,
          }
        }
      );
    }

    // Scanline effect
    if (scanlineRef.current) {
      gsap.fromTo(
        scanlineRef.current,
        { yPercent: -100, opacity: 0 },
        {
          yPercent: 100,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 30%",
            scrub: 0.6,
          }
        }
      );
    }

    // Parallax Reveal for Each Item
    gsap.utils.toArray<HTMLElement>(".journey-item").forEach((item) => {
      gsap.from(item, {
        opacity: 0,
        y: 80,
        rotationX: 15,
        transformPerspective: 1000,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      });
    });
  }, { scope: containerRef });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!e.currentTarget) return;

    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = -(x - centerX) / 30;

    gsap.to(el, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 1000,
      overwrite: "auto"
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!e.currentTarget) return;
    const el = e.currentTarget;
    
    gsap.to(el, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.3)",
      overwrite: "auto"
    });
  };

  return (
    <section ref={containerRef} id="journey" className="relative w-full py-32 px-6 md:px-10 overflow-hidden bg-obsidian">

      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="journey-header text-center space-y-4 mb-32">
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="w-12 h-px bg-accent/30" />
            <span className="text-slate-400 font-inter font-bold tracking-[0.3em] text-xs uppercase">CHRONOLOGICAL ARCHIVE</span>
            <div className="w-12 h-px bg-accent/30" />
          </div>
          <h2 className="text-5xl md:text-8xl font-outfit font-black text-white leading-tight tracking-tighter">
            ENGINEER <span className="text-gradient">EVOLUTION</span>
          </h2>
          <div className="flex items-center justify-center gap-8 text-slate-500 font-mono text-[10px] uppercase tracking-widest pt-4">
            <span>OBJ: CONTINUOUS_GROWTH</span>
            <span className="w-1 h-1 bg-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
            <span>LOC: GLOBAL_WORKSPACE</span>
          </div>
        </div>

        <div className="relative">
          {/* Central Timeline Infrastructure */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/[0.03] md:-translate-x-1/2 z-0">
            {/* The Growth Line */}
            <div ref={lineRef} className="absolute top-0 left-0 w-full bg-gradient-to-b from-accent/0 via-accent to-accent/0 origin-top scale-y-0 shadow-[0_0_20px_rgba(0,240,255,0.4)]" />

            {/* The Scanline */}
            <div ref={scanlineRef} className="absolute top-0 left-[-10px] w-[22px] h-[3px] bg-white shadow-[0_0_20px_rgba(0,240,255,1)] z-20 rounded-full" />
          </div>

          <div className="space-y-24 md:space-y-40 relative pt-12">
            {journeyItems.map((item, idx) => (
              <div
                key={idx}
                className="journey-item relative flex flex-col md:flex-row items-center md:items-center group"
              >
                {/* Timeline Visual Node */}
                <div className="absolute left-4 md:left-1/2 top-1/2 w-12 h-12 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center">
                  <div className="w-5 h-5 rounded-sm bg-obsidian border-[2px] border-accent/50 rotate-45 group-hover:bg-accent group-hover:rotate-[225deg] transition-all duration-700 shadow-[0_0_15px_rgba(0,240,255,0.3)]" />
                  <div className="absolute inset-0 border border-accent/20 rounded-full scale-0 group-hover:scale-[1.5] opacity-0 group-hover:opacity-100 transition-all duration-700" />
                </div>

                {/* Technical Meta Data (Opposite Side) */}
                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-[40%] text-slate-500 font-mono text-[10px] uppercase tracking-[0.1em] pointer-events-none ${idx % 2 === 0 ? 'left-[55%]' : 'right-[55%] text-right'}`}>
                  <p className="mb-1 text-accent/70 font-bold drop-shadow-[0_0_5px_rgba(0,240,255,0.3)]">ENTRY_ID: 00{idx + 1}</p>
                  <p className="mb-1 opacity-70">COORD: {item.coord}</p>
                  <p className="text-white/20">{item.tech}</p>
                </div>

                {/* The Journey Card */}
                <div className={`w-full pl-12 md:pl-0 md:w-[45%] ${idx % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}
                  onMouseMove={(e) => handleMouseMove(e)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="relative group overflow-visible">
                    {/* Card Backdrop */}
                    <div className="absolute inset-0 bg-white/[0.01] backdrop-blur-xl rounded-[2rem] border border-white/5 group-hover:border-accent/30 group-hover:bg-white/[0.03] transition-all duration-500 shadow-2xl" />

                    {/* Perspective Content Container */}
                    <div className="relative p-8 md:p-10 space-y-6">

                      {/* Technical Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-2xl bg-obsidian border border-white/10 group-hover:border-accent/40 group-hover:scale-110 text-white group-hover:text-accent transition-all duration-500 shadow-lg">
                            {item.icon}
                          </div>
                          <div className="space-y-1">
                            <span className="block text-[9px] font-mono text-slate-500 uppercase tracking-[0.2em] leading-none">TIMESTAMP</span>
                            <span className="block text-sm font-outfit font-bold text-white group-hover:text-accent transition-colors leading-none tracking-wide">{item.date}</span>
                          </div>
                        </div>
                        <div className="w-10 h-10 border border-white/5 rounded-full flex items-center justify-center text-[10px] font-mono text-slate-600 font-bold group-hover:text-white transition-colors">
                          0{idx + 1}
                        </div>
                      </div>

                      {/* Descriptive Body */}
                      <div className="space-y-4">
                        <h3 className="text-3xl font-outfit font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-accent transition-all duration-500 tracking-tight flex items-center gap-3">
                          {item.title}
                          <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
                        </h3>
                        <p className="text-slate-400 font-inter text-[15px] leading-relaxed font-light">
                          {item.description}
                        </p>
                      </div>

                      {/* Technical Footer */}
                      <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                        <div className="flex gap-1.5">
                          {[1, 2, 3, 4].map(i => <div key={i} className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${i === idx + 1 ? 'bg-accent shadow-[0_0_8px_rgba(0,240,255,0.5)]' : 'bg-white/10'}`} />)}
                        </div>
                        <span className="text-[10px] font-mono text-slate-600 tracking-tighter">LOG_STATUS: ARCHIVED</span>
                      </div>
                    </div>

                    {/* Corner Technical Markers */}
                    <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-accent/40 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1" />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-accent/40 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
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
