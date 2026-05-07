import { Github, Mail, Linkedin, Instagram, ArrowUp, Coffee, FileText } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigate: [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/projects" },
      { label: "Blog", href: "/blog" },
      { label: "About", href: "/about" },
    ],
    resources: [
      { label: "Resume", href: "#", download: true },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
    social: [
      { name: "GitHub", url: "https://github.com/sanjeetk-dev", icon: Github },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/sanjeetk-dev", icon: Linkedin },
      { name: "Instagram", url: "https://www.instagram.com/iamsanjeet_1432", icon: Instagram },
      { name: "Email", url: "mailto:iamsanjeet1432@gmail.com", icon: Mail },
    ],
  };

  return (
    <footer className="relative w-full py-16 px-6 md:px-10 overflow-hidden bg-obsidian">
      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent shadow-[0_0_15px_rgba(0,240,255,0.8)]"></div>

      {/* Background ambient glow */}
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[200px] bg-accent/5 rounded-t-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-16 relative z-10 pt-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent rounded-[1rem] flex items-center justify-center text-obsidian font-black text-2xl shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                S
              </div>
              <span className="text-3xl font-outfit font-black text-white tracking-tighter">
                SANJEET
              </span>
            </div>
            <p className="text-slate-400 font-inter font-light text-sm leading-relaxed max-w-xs">
              Building beautiful, performant digital experiences with an obsession for precision and speed.
            </p>
          </div>

          {/* Navigate */}
          <div className="space-y-6">
            <h4 className="text-white font-outfit font-black text-sm uppercase tracking-widest">Navigate</h4>
            <div className="space-y-3">
              {footerLinks.navigate.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-slate-400 hover:text-accent font-inter font-medium transition-colors text-sm w-max"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h4 className="text-white font-outfit font-black text-sm uppercase tracking-widest">Resources</h4>
            <div className="space-y-3">
              {footerLinks.resources.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.download ? { download: "Sanjeet-Resume.pdf" } : { target: "_blank" })}
                  className="flex items-center gap-2 text-slate-400 hover:text-accent font-inter font-medium transition-colors text-sm w-max group"
                >
                  {link.label}
                  {link.download && <FileText size={14} className="group-hover:scale-110 transition-transform" />}
                </a>
              ))}
            </div>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h4 className="text-white font-outfit font-black text-sm uppercase tracking-widest">Support</h4>
            <div className="space-y-4">
              <a
                href="https://ko-fi.com/U7U71UWQ2U"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 hover:bg-accent hover:text-obsidian text-accent border border-accent/20 rounded-xl text-sm font-bold transition-all shadow-lg w-max"
              >
                <Coffee size={16} />
                Buy Me a Coffee
              </a>
              <p className="text-slate-500 font-inter text-xs max-w-[200px]">
                Support my work and help me create better content.
              </p>
            </div>
          </div>
        </div>

        {/* Social & Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-white/5">
          <div className="flex gap-4 order-2 md:order-1">
            {footerLinks.social.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 border border-white/5 hover:border-accent/50 rounded-xl text-slate-400 hover:text-obsidian hover:bg-accent transition-all duration-300 shadow-lg"
                  aria-label={`Visit Sanjeet's ${social.name} profile`}
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>

          <div className="text-center text-slate-600 text-[10px] font-outfit font-bold tracking-[0.2em] uppercase order-3 md:order-2 w-full md:w-auto">
            <p>© {currentYear} SANJEET KUMAR. ALL RIGHTS RESERVED.</p>
          </div>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-slate-400 hover:text-obsidian border border-white/5 hover:bg-accent hover:border-accent transition-all duration-300 group order-1 md:order-3 shadow-lg"
            aria-label="Scroll back to top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Bottom Note */}
        <div className="text-center text-slate-700 font-mono tracking-widest text-[9px] py-6 border-t border-white/5">
          <p>
            ENGINEERED WITH <span className="text-accent animate-pulse">❤</span> USING REACT, TYPESCRIPT, TAILWIND V4 & GSAP
          </p>
        </div>
      </div>
    </footer>
  );
}


