import { Github, Mail } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Left Section */}
        <div>
          <h1 className="text-2xl font-bold text-orange-500">Sanjeet Kumar</h1>
          <p className="text-gray-400 mt-2 text-sm">
            Crafting interactive, modern, and visually engaging web experiences.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-orange-500 transition-colors duration-300 cursor-pointer"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-orange-500 transition-colors duration-300 cursor-pointer"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:text-orange-500 transition-colors duration-300 cursor-pointer"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-orange-500 transition-colors duration-300 cursor-pointer"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Connect</h2>
          <div className="flex space-x-4">
            <a
              href="https://github.com/sanjeetk-dev"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-white/5 rounded-full hover:bg-orange-500 hover:text-black transition-all duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:youremail@example.com"
              className="p-2 bg-white/5 rounded-full hover:bg-orange-500 hover:text-black transition-all duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Sanjeet Kumar. All Rights Reserved.
      </div>
    </footer>
  );
}
