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
    <footer className="relative w-full py-16 px-6 md:px-10 overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white font-black text-xl">
                S
              </div>
              <span className="text-2xl font-outfit font-black text-white tracking-tighter">
                SANJEET
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Building beautiful, performant digital experiences with modern web technologies.
            </p>
          </div>

          {/* Navigate */}
          <div className="space-y-4">
            <h4 className="text-white font-outfit font-black text-sm uppercase tracking-wider">Navigate</h4>
            <div className="space-y-2">
              {footerLinks.navigate.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-slate-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-white font-outfit font-black text-sm uppercase tracking-wider">Resources</h4>
            <div className="space-y-2">
              {footerLinks.resources.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.download ? { download: "Sanjeet-Resume.pdf" } : { target: "_blank" })}
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                  {link.download && <FileText size={14} />}
                </a>
              ))}
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-white font-outfit font-black text-sm uppercase tracking-wider">Support</h4>
            <div className="space-y-3">
              <a
                href="https://ko-fi.com/U7U71UWQ2U"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg text-sm font-bold transition-all"
              >
                <Coffee size={14} />
                Buy Me Coffee
              </a>
              <p className="text-slate-500 text-xs">
                Support my work and help me create better content.
              </p>
            </div>
          </div>
        </div>

        {/* Social & Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-white/10">
          <div className="flex gap-4 order-2 md:order-1">
            {footerLinks.social.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-panel rounded-xl text-slate-400 hover:text-white hover:bg-accent transition-all"
                  aria-label={`Visit Sanjeet's ${social.name} profile`}
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>

          <div className="text-center text-slate-500 text-xs font-outfit font-bold tracking-widest uppercase order-3 md:order-2 w-full md:w-auto">
            <p>© {currentYear} SANJEET KUMAR. ALL RIGHTS RESERVED.</p>
          </div>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 glass-panel rounded-xl flex items-center justify-center text-slate-400 hover:text-white border border-white/5 hover:border-accent transition-all group order-1 md:order-3"
            aria-label="Scroll back to top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Bottom Note */}
        <div className="text-center text-slate-600 text-xs py-4 border-t border-white/5">
          <p>
            Designed & developed with <span className="text-red-500">❤</span> using React, TypeScript, Tailwind CSS, and GSAP
          </p>
        </div>
      </div>
    </footer>
  );
}


