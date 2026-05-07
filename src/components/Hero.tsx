import { useRef } from "react";
import { ArrowRight, Play, LayoutGrid } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { Meta } from "./Meta";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  const imageStageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Staggered words reveal using perspective
    gsap.set(".hero-word-wrapper", { perspective: 800 });
    gsap.from(".hero-word", {
      y: 150,
      opacity: 0,
      rotateX: -80,
      transformOrigin: "0% 50% -50",
      duration: 1.8,
      stagger: 0.1,
      ease: "expo.out"
    });

    gsap.from(".hero-sub", {
      y: 40,
      opacity: 0,
      duration: 1.5,
      delay: 0.6,
      ease: "power3.out"
    });

    gsap.from(".hero-btn", {
      scale: 0.9,
      y: 20,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      delay: 0.8,
      ease: "back.out(1.5)"
    });

    gsap.from(".hero-image-scale", {
      scale: 0.85,
      opacity: 0,
      rotationY: 15,
      duration: 2.5,
      delay: 0.4,
      ease: "expo.out"
    });

    // Elegant Mouse Parallax Effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5);
      const yPos = (clientY / window.innerHeight - 0.5);

      gsap.to(textRef.current, {
        x: xPos * 40,
        y: yPos * 40,
        duration: 2,
        ease: "power3.out"
      });

      gsap.to(bgTextRef.current, {
        x: xPos * -100,
        y: yPos * -100,
        duration: 2.5,
        ease: "power3.out"
      });

      gsap.to(imageStageRef.current, {
        x: xPos * -50,
        y: yPos * -50,
        rotationY: xPos * 10,
        rotationX: -yPos * 10,
        duration: 1.8,
        ease: "power3.out"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-32"
      aria-labelledby="hero-title"
    >
      <Meta
        title="Home"
        description="Explore the digital gallery of Sanjeet Kumar, a Creative Engineer specializing in high-end, immersive digital experiences and bespoke engineering."
      />

      {/* Background Cinematic Text Layer */}
      <div
        ref={bgTextRef}
        className="absolute w-[150vw] left-[-25vw] inset-0 flex flex-col items-center justify-center pointer-events-none select-none opacity-[0.03]"
        aria-hidden="true"
      >
        <span className="text-[25vw] font-outfit font-black leading-none tracking-tighter text-white whitespace-nowrap">CREATIVE</span>
        <span className="text-[25vw] font-outfit font-black leading-none tracking-tighter text-white -mt-[5vw] whitespace-nowrap">ENGINEER</span>
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Main Display Area (Left + Center) */}
        <div className="lg:col-span-8 relative perspective-[1000px]">
          <div ref={textRef} className="space-y-10">
            <div className="hero-sub inline-flex items-center gap-4 px-6 py-2 glass-panel rounded-full border border-white/5 group cursor-default shadow-lg">
              <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
              <span className="text-xs font-outfit font-bold text-slate-300 uppercase tracking-[0.25em]">Available for Work</span>
            </div>

            <div className="space-y-4">
              <h1 id="hero-title" className="text-6xl md:text-[8rem] font-outfit font-black text-white leading-[0.85] tracking-tighter">
                <div className="hero-word-wrapper overflow-hidden pb-4">
                  <div className="hero-word inline-block">CRAFTING</div>
                </div>
                <div className="hero-word-wrapper overflow-hidden pb-4">
                  <div className="hero-word inline-block text-gradient">SEAMLESS</div>
                </div>
                <div className="hero-word-wrapper overflow-hidden pb-4">
                  <div className="hero-word inline-block">EXPERIENCES</div>
                </div>
              </h1>
            </div>

            <div className="hero-sub max-w-xl">
              <p className="text-slate-400 font-inter text-xl md:text-2xl font-light leading-relaxed">
                Bridging the gap between platforms. Specializing in high-performance <span className="text-white font-medium">Web Architectures</span> and Native <span className="text-white font-medium">Mobile Apps</span>.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <Link to="/projects" className="hero-btn perspective-[800px]">
                <button
                  className="px-10 py-5 bg-accent text-obsidian rounded-2xl font-black text-lg shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:shadow-[0_0_50px_rgba(0,240,255,0.6)] transition-all duration-300 transform hover:scale-105 group flex items-center gap-4 will-change-transform"
                  aria-label="View curated work and projects"
                >
                  EXPLORE WORK
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/contact" className="hero-btn">
                <button
                  className="px-10 py-5 glass-panel text-white rounded-2xl font-black text-lg border border-white/10 hover:border-accent/50 hover:bg-white/5 transition-all duration-300 transform hover:scale-105 flex items-center gap-4 will-change-transform"
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
        <div className="lg:col-span-4 relative flex justify-center lg:justify-end perspective-[1000px]">
          <div
            ref={imageStageRef}
            className="relative w-full max-w-sm aspect-[3/4.5] hero-image-scale"
            style={{ transformStyle: 'preserve-3d' }}
            aria-hidden="true"
          >
            {/* Overlapping Glass Shapes */}
            <div className="absolute -top-12 -left-12 w-32 h-32 glass-panel rounded-[2rem] border border-white/5 -rotate-12 z-20 flex items-center justify-center text-accent shadow-2xl backdrop-blur-xl translate-z-[50px]">
              <LayoutGrid size={40} className="opacity-80" />
            </div>

            <div className="absolute -bottom-8 -right-8 w-48 h-20 glass-panel rounded-2xl border border-white/5 rotate-6 z-20 flex items-center justify-center px-8 shadow-2xl backdrop-blur-xl translate-z-[80px]">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-obsidian bg-slate-800 overflow-hidden shadow-lg">
                    <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="client avatar" height={40} width={40} />
                  </div>
                ))}
              </div>
              <div className="ml-4 flex flex-col justify-center">
                <p className="text-[10px] font-outfit font-black text-white leading-none tracking-wider">100% SELF TAUGHT</p>
                <p className="text-[8px] font-inter font-medium text-slate-400 uppercase mt-1">Engineer</p>
              </div>
            </div>

            {/* Main Image Container */}
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden glass-panel p-2 group shadow-[0_20px_50px_rgba(0,0,0,0.5)] translate-z-[0px]">
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent z-10 pointer-events-none" />
                <img
                  src="/image.jpg"
                  alt="Sanjeet Kumar - Creative Engineer"
                  fetchPriority="high"
                  loading="eager"
                  className="w-full h-full object-cover grayscale brightness-75 scale-105 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-100 transition-all duration-[1.5s] ease-out will-change-transform"
                />
              </div>
            </div>

            {/* Decorative Glows */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] bg-accent/20 rounded-full blur-[100px] opacity-70"></div>
          </div>
        </div>

      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-accent rounded-full animate-float opacity-50 shadow-[0_0_10px_rgba(0,240,255,0.8)]" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 right-20 w-3 h-3 bg-white rounded-full animate-float opacity-30 shadow-[0_0_10px_rgba(255,255,255,0.8)]" style={{ animationDelay: '1s' }} aria-hidden="true"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-px h-[40vh] bg-gradient-to-t from-transparent via-accent/20 to-transparent -z-10" aria-hidden="true"></div>
    </section>
  );
}
