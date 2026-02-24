import { ArrowRight, Briefcase, CheckCircle, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Testimonials } from "../components/Testimonials"

const About = () => {
  return (
    <section className="w-full min-h-screen py-24 px-6 md:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* Hero Section of About Page */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left - Large Profile Image with effects */}
          <div className="flex-1 relative animate-slideUp">
            <div className="relative group w-full max-w-md mx-auto aspect-[4/5] rounded-[3rem] overflow-hidden">
              <div className="absolute inset-0 bg-accent/20 rounded-[3rem] rotate-3 group-hover:rotate-6 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-indigo-500/10 rounded-[3rem] -rotate-3 group-hover:-rotate-2 transition-transform duration-700 delay-100"></div>
              <div className="relative z-10 w-full h-full glass-panel p-2 rounded-[3rem] overflow-hidden">
                <img
                  src="/image.webp"
                  alt="Sanjeet Kumar"
                  className="w-full h-full object-cover rounded-[2.5rem] grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 glass-panel rounded-full flex items-center justify-center text-center p-6 border border-white/10 shadow-2xl animate-float">
                <p className="text-[10px] font-outfit font-black text-accent leading-none uppercase tracking-tighter">
                  Crafting <br />Digital <br />Future
                </p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex-1 space-y-10 animate-slideUp" style={{ animationDelay: '200ms' }}>
            <div className="space-y-6">
              <h2 className="text-accent font-outfit font-bold tracking-widest text-sm uppercase">STORY</h2>
              <h3 className="text-5xl md:text-7xl font-outfit font-black text-white leading-tight">
                THE MIND BEHIND THE <span className="text-gradient">CODE</span>
              </h3>
              <p className="text-slate-400 font-outfit text-xl leading-relaxed">
                Hello! I’m <span className="text-white font-bold">Sanjeet</span>, a digital craftsman dedicated to merging technical excellence with visual elegance. I don’t just build websites; I craft experiences that resonate.
              </p>
              <p className="text-slate-400 font-outfit text-lg leading-relaxed">
                With a focus on <span className="text-accent">performance, accessibility, and user-centric design</span>, I leverage the modern web stack to solve complex problems and bring vision to life.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {["React", "Next.js", "Node.js", "Tailwind", "GSAP", "TypeScript"].map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2 glass-panel rounded-xl text-white font-bold text-xs uppercase tracking-widest border border-white/5 hover:border-accent/30 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="pt-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-4 px-10 py-5 bg-accent text-white rounded-2xl font-black text-lg shadow-xl hover:glow-shadow transition-all group"
              >
                LET'S TALK
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel p-10 rounded-[2.5rem] border border-white/5 hover:border-accent/30 transition-all group">
            <Briefcase size={32} className="text-accent mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-4xl font-outfit font-black text-white mb-2">1+ Year</h4>
            <p className="text-slate-500 font-outfit font-bold uppercase tracking-widest text-xs">Professional Excellence</p>
          </div>

          <div className="glass-panel p-10 rounded-[2.5rem] border border-white/5 hover:border-accent/30 transition-all group">
            <CheckCircle size={32} className="text-accent mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-4xl font-outfit font-black text-white mb-2">5+ Projects</h4>
            <p className="text-slate-500 font-outfit font-bold uppercase tracking-widest text-xs">Delivered Worldwide</p>
          </div>

          <div className="glass-panel p-10 rounded-[2.5rem] border border-white/5 hover:border-accent/30 transition-all group">
            <Award size={32} className="text-accent mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-4xl font-outfit font-black text-white mb-2">100%</h4>
            <p className="text-slate-500 font-outfit font-bold uppercase tracking-widest text-xs">Client Satisfaction</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-accent font-outfit font-bold tracking-widest text-sm uppercase">ENDORSEMENTS</h2>
            <h3 className="text-4xl md:text-5xl font-outfit font-black text-white">WHAT PARTNERS <span className="text-gradient">SAY</span></h3>
          </div>
          <div className="glass-panel p-4 md:p-12 rounded-[3rem] border border-white/5">
            <Testimonials />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;




