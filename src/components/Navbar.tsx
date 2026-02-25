import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MessageSquare, Menu, X, Download } from "lucide-react";
import { Magnetic } from "./Magnetic";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Journey", path: "/journey" },
  ];

  return (
    <nav
      aria-label="Main Navigation"
      className={`fixed top-0 left-0 w-full z-[100] px-6 md:px-10 py-6 transition-all duration-500 ${isScrolled ? 'pt-4' : 'pt-8'}`}
    >
      <div className={`max-w-7xl mx-auto flex items-center justify-between px-8 py-4 transition-all duration-500 ${isScrolled ? 'glass-panel rounded-full shadow-2xl' : 'bg-transparent'}`}>

        {/* Logo */}
        <Magnetic>
          <Link
            to="/"
            className="flex items-center gap-3 group relative cursor-pointer"
            aria-label="Go to Home"
          >
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg group-hover:glow-shadow transition-all group-hover:rotate-12">
              S
            </div>
            <span className="text-white font-outfit font-black tracking-tighter text-lg hidden sm:block">SANJEET.</span>
          </Link>
        </Magnetic>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Magnetic>
                  <Link
                    to={link.path}
                    className={`nav-link text-xs font-outfit font-black uppercase tracking-[0.2em] transition-all relative py-2 ${location.pathname === link.path ? 'text-accent' : 'text-slate-400 hover:text-white'}`}
                    aria-current={location.pathname === link.path ? "page" : undefined}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent rounded-full animate-fadeIn" />
                    )}
                  </Link>
                </Magnetic>
              </li>
            ))}
          </ul>

          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/resume.pdf";
              link.download = "Sanjeet-Resume.pdf";
              link.click();
            }}
            className="flex items-center gap-2 px-6 py-3 glass-panel border border-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/5 transition-all group"
            aria-label="Download Resume"
          >
            <Download size={16} aria-hidden="true" />
            RESUME
          </button>

          <Magnetic>
            <Link to="/contact">
              <button
                className="flex items-center gap-3 px-6 py-3 bg-accent text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg hover:glow-shadow transition-all group"
                aria-label="Start a conversation with Sanjeet"
              >
                <MessageSquare size={16} aria-hidden="true" />
                LET'S TALK
              </button>
            </Link>
          </Magnetic>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-3 glass-panel rounded-xl text-white border border-white/5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close main menu" : "Open main menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[110] bg-obsidian flex flex-col items-center justify-center gap-8 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-10 right-10 p-4 glass-panel rounded-full text-white"
            aria-label="Close menu"
          >
            <X size={32} aria-hidden="true" />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-6xl font-outfit font-black text-white hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
              aria-current={location.pathname === link.path ? "page" : undefined}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <button
              className="px-12 py-6 bg-accent text-white rounded-3xl font-black text-2xl shadow-xl"
              aria-label="Start a conversation now"
            >
              LET'S TALK
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
