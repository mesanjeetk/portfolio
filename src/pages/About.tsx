import { ArrowRight, Star, Code2, Globe, Heart, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Testimonials } from "../components/Testimonials";
import { Meta } from "../components/Meta";

export default function About() {
  return (
    <section
      className="w-full min-h-screen py-24 px-6 md:px-10 overflow-hidden relative"
      aria-labelledby="about-headline"
    >
      <Meta
        title="Story"
        description="Discover the narrative behind Sanjeet's digital craftsmanship. Based in New Delhi, I collaborate with visionaries globally to transform abstract ideas into high-performing realities."
      />

      {/* Editorial Background Background Text */}
      <div className="absolute top-40 -left-20 pointer-events-none select-none opacity-5 rotate-90 origin-top-left" aria-hidden="true">
        <span className="text-[20vw] font-outfit font-black tracking-tighter">STORY</span>
      </div>
      <div className="absolute bottom-40 -right-20 pointer-events-none select-none opacity-5 -rotate-90 origin-bottom-right" aria-hidden="true">
        <span className="text-[20vw] font-outfit font-black tracking-tighter">ALCHEMY</span>
      </div>

      <div className="max-w-7xl mx-auto space-y-40 relative z-10">

        {/* Editorial Section 1: The Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-12 animate-slideUp">
            <div className="space-y-4">
              <h2 className="text-accent font-outfit font-bold tracking-[0.3em] text-sm uppercase">ESTABLISHED 2024</h2>
              <h1 id="about-headline" className="text-6xl md:text-9xl font-outfit font-black text-white leading-[0.9] tracking-tighter">
                ENGINEERING <br />
                <span className="text-gradient italic">EMOTION</span> <br />
                THROUGH CODE.
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
              <article className="space-y-6">
                <p className="text-slate-400 font-outfit text-lg leading-relaxed">
                  I believe that every line of code is a brushstroke. My journey started with a fascination for how logic can create beauty, and it evolved into a mission to build digital interfaces that don't just work—they <span className="text-white font-bold">resonate</span>.
                </p>
              </article>
              <article className="space-y-6">
                <p className="text-slate-400 font-outfit text-lg leading-relaxed">
                  Based in New Delhi, I collaborate with visionaries globally to transform abstract ideas into high-performing, immersive realities. No templates, just <span className="text-white font-bold">pure digital craftsmanship</span>.
                </p>
              </article>
            </div>
          </div>

          <div className="lg:col-span-5 relative" aria-hidden="true">
            <div className="aspect-[4/5] glass-panel p-2 rounded-[4rem] rotate-3 hover:rotate-0 transition-transform duration-1000 group">
              <div className="w-full h-full rounded-[3.5rem] overflow-hidden relative">
                <img
                  src="/image.webp"
                  alt="Sanjeet Kumar at work"
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-obsidian via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 glass-panel rounded-full flex flex-col items-center justify-center p-6 border border-white/10 shadow-2xl animate-float">
                <Heart className="text-accent mb-2" />
                <p className="text-[10px] font-outfit font-black text-white text-center leading-tight uppercase">Driven by <br />Passion</p>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Section 2: Core Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list" aria-label="Core Philosophy">
          {[
            { Icon: Zap, title: "Precision", desc: "Every pixel and transition is intentional and refined." },
            { Icon: Globe, title: "Scalability", desc: "Built for growth with robust, clean architecture." },
            { Icon: Code2, title: "Innovation", desc: "Always pushing the boundaries of what's possible." },
          ].map((item, idx) => (
            <div key={idx} role="listitem" className="glass-panel p-12 rounded-[3rem] border border-white/5 hover:border-accent/30 transition-all group overflow-hidden relative">
              <div className="absolute -top-10 -right-10 text-accent/5 transition-all group-hover:scale-150 rotate-12" aria-hidden="true">
                <item.Icon size={160} />
              </div>
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 glass-panel flex items-center justify-center rounded-xl text-accent" aria-hidden="true">
                  <item.Icon size={24} />
                </div>
                <h3 className="text-3xl font-outfit font-black text-white">{item.title}</h3>
                <p className="text-slate-500 font-outfit leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Section 3: The Impact */}
        <div className="space-y-20">
          <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-12 gap-8">
            <h2 className="text-6xl md:text-8xl font-outfit font-black text-white tracking-tighter">SHARED <span className="text-gradient">VALUES</span></h2>
            <div className="max-w-xs space-y-4">
              <p className="text-slate-500 font-outfit text-sm uppercase tracking-widest font-black">Trusted by the best</p>
              <p className="text-slate-400 font-outfit leading-relaxed">I measure my success by the growth and impact of the people I work with.</p>
            </div>
          </div>
          <Testimonials />
        </div>

        {/* Closing Call to Action */}
        <div className="glass-panel p-16 md:p-32 rounded-[5rem] text-center space-y-12 border border-accent/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" aria-hidden="true"></div>
          <div className="relative z-10 space-y-8">
            <h3 className="text-4xl md:text-7xl font-outfit font-black text-white leading-tight max-w-4xl mx-auto">
              READY TO BUILD THE <span className="text-gradient">FUTURE</span> TOGETHER?
            </h3>
            <div className="flex justify-center flex-wrap gap-8">
              <Link to="/contact">
                <button
                  className="px-12 py-6 bg-accent text-white rounded-2xl font-black text-xl shadow-2xl hover:glow-shadow transition-all flex items-center gap-4"
                  aria-label="Navigate to contact page to start a project"
                >
                  SAY HELLO
                  <ArrowRight size={24} aria-hidden="true" />
                </button>
              </Link>
              <div className="flex items-center gap-4" aria-label="5 Star Rated Developer status">
                <div className="flex" aria-hidden="true">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} className="fill-accent text-accent" />)}
                </div>
                <p className="text-sm font-outfit font-black text-slate-500 uppercase tracking-widest">5 Star Rated Developer</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
