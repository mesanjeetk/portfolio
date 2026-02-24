import { useSectionVisible } from "../hooks/useSectionVisible"
import { Briefcase, CheckCircle, GraduationCap } from "lucide-react";

interface AboutMeProps {
  className?: string;
  title?: string;
  description?: string;
  image?: string;
}

export const AboutMe: React.FC<AboutMeProps> = ({
  title = "ABOUT ME",
  description = "I'm a dedicated Full Stack Developer with a passion for building seamless digital experiences. With over a year of professional experience, I've had the privilege of working on diverse projects that challenge my creativity and technical skills. My approach combines clean code with intuitive design to deliver performance-driven solutions.",
  image = "/image.webp",
  className = ""
}) => {
  const { sectionRef, isVisible } = useSectionVisible()

  return (
    <section ref={sectionRef} id="about" className={`relative w-full py-24 px-6 lg:px-20 overflow-hidden ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left - Image with fancy border */}
          <div className={`flex-1 relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative group w-full max-w-md mx-auto aspect-square">
              <div className="absolute inset-0 bg-accent/20 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-indigo-500/10 rounded-3xl -rotate-6 group-hover:-rotate-3 transition-transform duration-500 delay-75"></div>
              <div className="relative z-10 w-full h-full glass-panel p-2 rounded-3xl overflow-hidden">
                <img
                  src={image}
                  alt="Sanjeet Kumar"
                  className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Accent Dot */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white shadow-xl animate-float">
                <GraduationCap size={20} />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className={`flex-1 space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-4">
              <h2 className="text-accent font-outfit font-bold tracking-widest text-sm uppercase">{title}</h2>
              <h3 className="text-4xl md:text-5xl font-outfit font-black text-white leading-tight">
                CRAFTING CODE WITH <span className="text-gradient">PRECISION</span>
              </h3>
              <p className="text-slate-400 font-outfit text-lg leading-relaxed">
                {description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all group">
                <Briefcase className="text-accent mb-4 group-hover:scale-110 transition-transform" size={24} />
                <h4 className="text-white font-bold text-xl mb-1">1+ Year</h4>
                <p className="text-slate-500 text-sm">Professional experience in web development</p>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all group">
                <CheckCircle className="text-accent mb-4 group-hover:scale-110 transition-transform" size={24} />
                <h4 className="text-white font-bold text-xl mb-1">5+ Projects</h4>
                <p className="text-slate-500 text-sm">Successfully delivered high-quality applications</p>
              </div>
            </div>

            <div className="pt-4">
              <button className="px-8 py-4 glass-panel border border-white/10 text-white rounded-2xl font-bold hover:bg-white/5 transition-all btn-magnetic flex items-center gap-3">
                Download CV
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <CheckCircle size={14} className="text-white" />
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

