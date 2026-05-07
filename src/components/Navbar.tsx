import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { MessageSquare, Menu, X, Download } from "lucide-react";
import { Magnetic } from "./Magnetic";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    gsap.fromTo(navRef.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "expo.out",
        delay: 0.2,
        force3D: true, // Hardware acceleration for low-end devices
        clearProps: "transform" // Clean up layout afterward
      }
    );
  }, { scope: navRef });

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Journey", path: "/journey" },
  ];

  return (
    <nav
      ref={navRef}
      aria-label="Main Navigation"
      className={`fixed top-0 left-0 right-0 z-[100] w-full flex justify-center transition-[padding] duration-500 ease-out bg-transparent will-change-[opacity] ${isScrolled ? 'pt-4 px-4 sm:px-6 md:px-10' : 'pt-8 px-4 sm:px-6 md:px-10'}`}
    >
      {/* Background container expands/contracts based on isScrolled */}
      <div
        className={`w-full max-w-7xl relative flex items-center justify-between px-6 py-3 transition-all duration-700 ease-out border ${isScrolled
          ? 'glass-panel rounded-full border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.8)] backdrop-blur-2xl bg-white/[0.05]'
          : 'rounded-2xl border-transparent bg-transparent backdrop-blur-none shadow-none'
          }`}
      >
        {/* Logo */}
        <Magnetic>
          <Link
            to="/"
            className="flex items-center gap-3 group relative cursor-pointer"
            aria-label="Go to Home"
          >
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-obsidian font-black text-xl shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:shadow-[0_0_25px_rgba(0,240,255,0.8)] transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
              S
            </div>
            <span className="text-white font-outfit font-black tracking-tighter text-xl hidden sm:block">SANJEET.</span>
          </Link>
        </Magnetic>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <ul className={`flex items-center gap-1 px-2 py-1 rounded-full border transition-colors duration-500 ${isScrolled ? 'bg-transparent border-transparent' : 'bg-white/5 border-white/5'}`}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`relative px-4 py-2 rounded-full text-xs font-inter font-semibold tracking-widest uppercase transition-all duration-300 z-10 block ${isActive ? 'text-obsidian' : 'text-slate-400 hover:text-white'}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {isActive && (
                      <span className="absolute inset-0 w-full h-full bg-accent rounded-full -z-10 shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
                    )}
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3 xl:gap-4">
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/resume.pdf";
                link.download = "Sanjeet-Resume.pdf";
                link.click();
              }}
              className="flex items-center gap-2 px-4 xl:px-5 py-2.5 glass-panel border border-white/10 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all duration-300 group"
              aria-label="Download Resume"
            >
              <Download size={14} className="group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
              <span className="hidden xl:inline">RESUME</span>
              <span className="xl:hidden">CV</span>
            </button>

            <Magnetic>
              <Link to="/contact">
                <button
                  className="flex items-center gap-2 px-5 xl:px-6 py-2.5 bg-white text-obsidian rounded-full font-black text-xs uppercase tracking-widest hover:bg-accent transition-all duration-300 shadow-xl group whitespace-nowrap"
                  aria-label="Start a conversation with Sanjeet"
                >
                  <MessageSquare size={14} aria-hidden="true" />
                  LET'S TALK
                </button>
              </Link>
            </Magnetic>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-3 glass-panel rounded-full text-white border border-white/10 active:scale-95 transition-transform hover:bg-white/5"
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
          className="fixed inset-0 z-[110] bg-obsidian/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 animate-in fade-in zoom-in-95 duration-300 will-change-transform"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 sm:top-8 sm:right-8 p-4 glass-panel rounded-full text-white border border-white/10 hover:bg-white/5 hover:text-accent transition-colors"
            aria-label="Close menu"
          >
            <X size={24} aria-hidden="true" />
          </button>

          <div className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-4xl md:text-5xl font-outfit font-black uppercase tracking-tight transition-all duration-300 hover:scale-110 hover:text-accent ${location.pathname === link.path ? 'text-accent scale-110' : 'text-white'}`}
                onClick={() => setIsOpen(false)}
                aria-current={location.pathname === link.path ? "page" : undefined}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-8">
            <button
              className="px-12 py-5 bg-accent text-obsidian rounded-full font-black text-xl shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:shadow-[0_0_50px_rgba(0,240,255,0.6)] hover:-translate-y-1 transition-all duration-300"
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
