import { useRef } from "react";
import { Briefcase, CheckCircle, GraduationCap, Download } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface AboutMeProps {
  className?: string;
  title?: string;
  description?: string;
  image?: string;
}

export const AboutMe: React.FC<AboutMeProps> = ({
  title = "ENGINEERING PHILOSOPHY",
  description = "I am a self-taught Full Stack and Mobile App Developer passionate about building seamless digital experiences. Leveraging a mastery of modern web frameworks and native Android development, I architecture solutions that bridge platforms without sacrificing performance. My focus spans real-time backend systems, responsive web apps, and native Kotlin mobile experiences.",
  image = "/image.jpg",
  className = ""
}) => {
  const containerRef = useRef<HTMLElement>(null);
  
  useGSAP(() => {
    // Image container animation
    gsap.from(".about-img-box", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      x: -100,
      opacity: 0,
      rotationY: -30,
      transformPerspective: 1000,
      duration: 1.5,
      ease: "power3.out"
    });

    // Content animation
    gsap.from(".about-content > *", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      x: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: "power3.out"
    });
    
    // Floating element parallax on scroll
    gsap.to(".about-float-icon", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
      y: -50,
      ease: "none"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="about" className={`relative w-full py-32 px-6 lg:px-20 overflow-hidden bg-obsidian ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left - Image with fancy border */}
          <div className={`about-img-box flex-1 relative w-full`}>
            <div className="relative group w-full max-w-md mx-auto aspect-square perspective-[1000px]">
              
              <div className="absolute inset-0 bg-accent/20 rounded-[2.5rem] rotate-6 group-hover:rotate-12 transition-transform duration-700 blur"></div>
              <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-[2.5rem] -rotate-3 group-hover:-rotate-6 transition-transform duration-700 delay-75 shadow-2xl"></div>
              
              <div className="relative z-10 w-full h-full glass-panel p-2 rounded-[2.5rem] overflow-hidden translate-z-[20px]">
                <div className="w-full h-full relative rounded-[2rem] overflow-hidden">
                  <div className="absolute inset-0 bg-obsidian/40 mix-blend-overlay z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-700"></div>
                  <img
                    src={image}
                    alt="Sanjeet Kumar"
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000 will-change-transform"
                  />
                </div>
              </div>

              {/* Accent Floating Icon */}
              <div className="about-float-icon absolute -top-8 -left-8 w-16 h-16 bg-obsidian border bg-clip-padding backdrop-filter backdrop-blur-xl border-white/10 rounded-full flex items-center justify-center text-accent shadow-[0_0_30px_rgba(0,240,255,0.3)] z-20">
                <GraduationCap size={24} />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className={`about-content flex-1 space-y-8`}>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <h2 className="text-slate-300 font-inter font-semibold tracking-[0.2em] text-xs uppercase">{title}</h2>
              </div>
              <h3 className="text-5xl md:text-6xl font-outfit font-black text-white leading-tight tracking-tighter">
                CRAFTING CODE WITH <br/><span className="text-gradient">PRECISION</span>
              </h3>
              <p className="text-slate-400 font-inter font-light text-lg leading-relaxed pt-2">
                {description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-panel p-6 rounded-3xl border border-white/5 hover:border-accent/30 hover:bg-white/[0.02] transition-all duration-300 group shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Briefcase className="text-accent" size={24} />
                </div>
                <h4 className="text-white font-bold text-xl mb-1 font-outfit">Dual-Platform</h4>
                <p className="text-slate-500 font-inter text-sm">Expertise in Web and Native Android</p>
              </div>

              <div className="glass-panel p-6 rounded-3xl border border-white/5 hover:border-accent/30 hover:bg-white/[0.02] transition-all duration-300 group shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircle className="text-accent" size={24} />
                </div>
                <h4 className="text-white font-bold text-xl mb-1 font-outfit">Self-Taught</h4>
                <p className="text-slate-500 font-inter text-sm">Driven by rapid continuous learning</p>
              </div>
            </div>

            <div className="pt-6">
              <button 
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/resume.pdf";
                  link.download = "Sanjeet-Resume.pdf";
                  link.click();
                }}
                className="px-8 py-4 glass-panel border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all btn-magnetic flex items-center gap-3 group"
              >
                Download CV
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
                  <Download size={14} className="text-white group-hover:text-obsidian transition-colors" />
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

