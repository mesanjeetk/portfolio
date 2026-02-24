import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);


  return (
    <nav className="w-full fixed top-0 left-0 z-50 px-4 py-4 pointer-events-none">
      <div
        className={`max-w-5xl mx-auto flex items-center justify-between transition-all duration-500 rounded-2xl px-6 py-3 pointer-events-auto
      ${scrolled ? "glass-panel shadow-2xl py-2" : "bg-transparent"}
    `}
      >
        {/* Logo */}
        <div
          className="select-none cursor-pointer flex items-center gap-2 group"
          onClick={() => navigate("/")}
        >
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform">S</div>
          <span className="font-outfit font-bold text-2xl tracking-tight text-white group-hover:text-accent transition-colors">
            Sanjeet
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-1 items-center">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm
              ${isActive ? "bg-accent/10 text-accent" : "text-slate-300 hover:text-white hover:bg-white/5"}`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link to="/contact">
            <button className="ml-4 px-5 py-2 bg-accent text-white rounded-lg text-sm font-semibold hover:glow-shadow transition-all btn-magnetic">
              Let's Talk
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-200 p-2 glass-panel rounded-lg"
          onClick={() => setIsOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-80 glass-panel shadow-2xl transform transition-transform duration-500 ease-in-out z-50 pointer-events-auto
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center px-6 py-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-xl">S</div>
            <span className="font-outfit font-bold text-2xl text-white">Sanjeet</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/5 rounded-lg transition-colors">
            <X size={24} className="text-slate-200" />
          </button>
        </div>

        <div className="flex flex-col space-y-2 mt-6 px-4">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-xl font-medium transition-all text-lg
              ${isActive ? "bg-accent/20 text-accent" : "text-slate-300 hover:bg-white/5"}`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link to="/contact" className="pt-4" onClick={() => setIsOpen(false)}>
            <button className="w-full py-4 bg-accent text-white rounded-xl font-bold">
              Let's Talk
            </button>
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-obsidian/80 backdrop-blur-sm z-40 pointer-events-auto"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

