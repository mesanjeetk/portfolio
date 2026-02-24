import { Github, Mail, Linkedin, Instagram, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full py-12 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white font-black text-xl">S</div>
            <span className="text-2xl font-outfit font-black text-white tracking-tighter">SANJEET</span>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/sanjeetk-dev" target="_blank" className="p-3 glass-panel rounded-xl text-slate-400 hover:text-white hover:bg-accent transition-all">
              <Github size={20} />
            </a>
            <a href="#" target="_blank" className="p-3 glass-panel rounded-xl text-slate-400 hover:text-white hover:bg-accent transition-all">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/iamsanjeet_1432" target="_blank" className="p-3 glass-panel rounded-xl text-slate-400 hover:text-white hover:bg-accent transition-all">
              <Instagram size={20} />
            </a>
            <a href="mailto:iamsanjeet1432@gmail.com" className="p-3 glass-panel rounded-xl text-slate-400 hover:text-white hover:bg-accent transition-all">
              <Mail size={20} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 glass-panel rounded-xl flex items-center justify-center text-slate-400 hover:text-white border border-white/5 hover:border-accent transition-all group"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-outfit font-bold tracking-widest uppercase">
          <p>© {new Date().getFullYear()} SANJEET KUMAR. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

