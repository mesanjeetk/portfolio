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
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  }, [isOpen]);


  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      {/* Top Navbar */}
      <div
        className={`px-4 md:px-6 lg:px-8 flex items-center justify-between transition-all duration-300
      ${scrolled ? "bg-slate-900/50 backdrop-blur-md shadow-md" : "bg-slate-900"}
    `}
      >
        {/* Logo */}
        <div
          className="select-none cursor-pointer py-4"
          onClick={() => navigate("/")}
        >
          <span className="font-cursive font-bold text-4xl text-orange-500">
            Sanjeet
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium transition-colors duration-200 
              ${isActive ? "text-orange-500" : "text-slate-200 hover:text-orange-500"}`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-orange-500 transition-all duration-500 ease-out
                ${isActive ? "w-full opacity-100" : "w-0 opacity-0"}`}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-200 p-2"
          onClick={() => setIsOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-slate-900 shadow-lg transform transition-transform duration-500 ease-in-out z-50
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-slate-700">
          <span
            className="font-cursive font-bold text-3xl text-orange-500 cursor-pointer"
            onClick={() => {
              navigate("/");
              setIsOpen(false);
            }}
          >
            Sanjeet
          </span>
          <X
            size={28}
            className="text-slate-200 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col space-y-6 mt-6 px-4">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`relative font-medium transition-colors duration-200 text-lg text-center
              ${isActive ? "text-orange-500" : "text-slate-200 hover:text-orange-500"}`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-orange-500 transition-all duration-500 ease-out
                ${isActive ? "w-full opacity-100" : "w-0 opacity-0"}`}
                ></span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-[1px] z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};
