import { Coffee, Heart } from "lucide-react";

export const Support = () => {
  return (
    <section className="relative w-full py-16 px-6 md:px-10 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/5 text-center space-y-6">
          <div className="flex items-center justify-center gap-2 text-accent">
            <Heart size={24} className="animate-pulse" />
            <h3 className="text-xl md:text-2xl font-outfit font-black">Support My Work</h3>
            <Heart size={24} className="animate-pulse" />
          </div>

          <p className="text-slate-400 max-w-lg mx-auto">
            If you find my work valuable and would like to support my journey, consider buying me a coffee. Your support means a lot and helps me create better content and projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="https://ko-fi.com/U7U71UWQ2U"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white rounded-2xl font-bold hover:glow-shadow transition-all group"
            >
              <Coffee size={20} />
              Buy Me Coffee
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 text-white rounded-2xl font-bold hover:border-accent transition-all"
            >
              Become a Sponsor
            </a>
          </div>

          <p className="text-xs text-slate-500 pt-4">
            100% of proceeds go towards maintaining projects and creating quality content.
          </p>
        </div>
      </div>
    </section>
  );
};
