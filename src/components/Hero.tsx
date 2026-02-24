import { useRef, useEffect } from "react";
import { ArrowRight, Play, LayoutGrid } from "lucide-react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { Meta } from "./Meta";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  const imageStageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animations
      gsap.from(".hero-reveal", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "power4.out"
      });

      gsap.from(".hero-image-scale", {
        scale: 1.2,
        opacity: 0,
        duration: 2,
        ease: "power2.out"
      });

      // Mouse Parallax Effect
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5);
        const yPos = (clientY / window.innerHeight - 0.5);

        gsap.to(textRef.current, {
          x: xPos * 30,
          y: yPos * 30,
          duration: 0.8,
          ease: "power2.out"
        });

        gsap.to(bgTextRef.current, {
          x: xPos * -60,
          y: yPos * -60,
          duration: 1,
          ease: "power2.out"
        });

        gsap.to(imageStageRef.current, {
          x: xPos * 50,
          y: yPos * 50,
          duration: 0.6,
          ease: "power2.out"
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[110vh] flex items-center justify-center overflow-hidden py-32"
      aria-labelledby="hero-title"
    >
      <Meta
        title="Home"
        description="Explore the digital gallery of Sanjeet Kumar, a Creative Engineer specializing in high-end, immersive digital experiences and bespoke engineering."
      />

      {/* Background Cinematic Text Layer */}
      <div
        ref={bgTextRef}
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none opacity-5"
        aria-hidden="true"
      >
        <span className="text-[25vw] font-outfit font-black leading-none tracking-tighter text-white">CREATIVE</span>
        <span className="text-[25vw] font-outfit font-black leading-none tracking-tighter text-white -mt-[5vw]">ENGINEER</span>
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Main Display Area (Left + Center) */}
        <div className="lg:col-span-8 relative">
          <div ref={textRef} className="space-y-8">
            <div className="hero-reveal inline-flex items-center gap-4 px-6 py-2 glass-panel rounded-full border border-white/10 group cursor-default">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
              <span className="text-[10px] font-outfit font-black text-slate-400 uppercase tracking-[0.3em]">Available for projects</span>
            </div>

            <div className="space-y-2">
              <h1 id="hero-title" className="hero-reveal text-6xl md:text-9xl font-outfit font-black text-white leading-[0.9] tracking-tighter">
                CRAFTING <br />
                <span className="text-gradient">DIGITAL</span> <br />
                VERSES
              </h1>
            </div>

            <div className="hero-reveal max-w-lg">
              <p className="text-slate-400 font-outfit text-xl md:text-2xl leading-relaxed">
                Turning complex logic into <span className="text-white font-bold">immersive experiences</span>. A fusion of engineering precision and high-end design.
              </p>
            </div>

            <div className="hero-reveal flex flex-wrap gap-6 pt-4">
              <Link to="/projects">
                <button
                  className="px-10 py-5 bg-accent text-white rounded-2xl font-black text-lg shadow-xl hover:glow-shadow transition-all group flex items-center gap-4"
                  aria-label="View curated work and projects"
                >
                  EXPLORE WORK
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/contact">
                <button
                  className="px-10 py-5 glass-panel text-white rounded-2xl font-black text-lg border border-white/5 hover:border-accent/30 transition-all flex items-center gap-4"
                  aria-label="Contact Sanjeet for collaboration"
                >
                  <Play size={18} fill="currentColor" aria-hidden="true" />
                  LET'S TALK
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Visual Stage (Right) */}
        <div className="lg:col-span-4 relative flex justify-center lg:justify-end">
          <div
            ref={imageStageRef}
            className="relative w-full max-w-sm aspect-[3/4] hero-image-scale"
            aria-hidden="true"
          >
            {/* Overlapping Glass Shapes */}
            <div className="absolute -top-12 -left-12 w-32 h-32 glass-panel rounded-[2rem] border border-white/10 -rotate-12 z-20 flex items-center justify-center text-accent">
              <LayoutGrid size={40} />
            </div>

            <div className="absolute -bottom-8 -right-8 w-48 h-20 glass-panel rounded-2xl border border-white/10 rotate-6 z-20 flex items-center justify-center px-8">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-obsidian bg-slate-800 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="client avatar" height={40} width={40} />
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <p className="text-[10px] font-outfit font-black text-white leading-none">100% SUCCESS</p>
                <p className="text-[8px] font-outfit font-bold text-slate-500 uppercase">Rate globally</p>
              </div>
            </div>

            {/* Main Image Container */}
            <div className="relative w-full h-full rounded-[4rem] overflow-hidden glass-panel p-2 group shadow-2xl">
              <div className="w-full h-full rounded-[3.5rem] overflow-hidden relative">
                <img
                  src="/image.jpg"
                  alt="Sanjeet Kumar - Creative Engineer"
                  fetchPriority="high"
                  loading="eager"
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors duration-1000"></div>
              </div>
            </div>

            {/* Decorative Glows */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-accent/20 rounded-full blur-[120px]"></div>
          </div>
        </div>

      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-accent rounded-full animate-float opacity-30" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 right-20 w-3 h-3 bg-white rounded-full animate-float opacity-20" style={{ animationDelay: '1s' }} aria-hidden="true"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-px h-64 bg-gradient-to-t from-transparent via-accent/30 to-transparent -z-10" aria-hidden="true"></div>
    </section>
  );
}
