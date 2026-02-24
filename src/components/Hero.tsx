import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div id="home" className="relative w-full min-h-[80vh] flex flex-col items-center justify-center pt-24 pb-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-[120px] animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }}></div>

      <div className={`w-full max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start space-y-8 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-white/10 text-xs font-semibold tracking-wider text-accent uppercase">
            <Sparkles size={14} /> Available for new projects
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-outfit font-black tracking-tighter leading-[0.9] text-white">
              BUILDING <br />
              <span className="text-gradient">DIGITAL</span> <br />
              EXPERIENCES
            </h1>
            <p className="text-lg md:text-xl text-slate-400 font-outfit max-w-xl leading-relaxed">
              I'm <span className="text-white font-bold">Sanjeet Kumar</span>, a Full Stack Developer specialized in crafting high-performance, visually stunning web applications that bring ideas to life.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="/projects">
              <button className="flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-2xl font-bold shadow-xl hover:glow-shadow transition-all group btn-magnetic">
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            <Link to="/contact">
              <button className="px-8 py-4 glass-panel border border-white/10 text-white rounded-2xl font-bold hover:bg-white/5 transition-all btn-magnetic">
                Get in Touch
              </button>
            </Link>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-obsidian bg-obsidian-light flex items-center justify-center text-[10px] font-bold overflow-hidden glass-panel">
                  <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" className="w-full h-full object-cover opacity-80" />
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-400">
              Trusted by <span className="text-white font-bold">50+</span> clients worldwide
            </p>
          </div>
        </div>

        {/* Right Content - Visual */}
        <div className="flex-1 relative flex justify-center lg:justify-end">
          <div className="relative group">
            {/* Geometric Shapes */}
            <div className="absolute -top-10 -right-10 w-24 h-24 border border-accent/30 rounded-full animate-float"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 border border-indigo-500/20 rounded-xl rotate-12 animate-float" style={{ animationDelay: '1.5s' }}></div>

            {/* Main Image Container */}
            <div className="relative z-10 w-72 h-72 md:w-96 md:h-96">
              <div className="hero__img w-full h-full grayscale hover:grayscale-0 transition-all duration-700"></div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 glass-panel p-4 rounded-2xl shadow-2xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent">
                    <span className="text-xl font-bold">5+</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Years of</p>
                    <p className="text-sm text-white font-bold">Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

