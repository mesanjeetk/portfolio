import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BackgroundSparkles } from "./BackgroundSparkles";
import { useSectionVisible } from "../hooks/useSectionVisible"

interface Project {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  projectLink?: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio to showcase projects and skills with animations.",
    techStack: ["React", "Tailwind", "GSAP"],
    imageUrl: "https://images.pexels.com/photos/33433704/pexels-photo-33433704.jpeg",
    projectLink: "https://yourwebsite.com",
    githubLink: "https://github.com/yourusername/portfolio",
  },
  {
    title: "E-Commerce App",
    description: "A modern e-commerce platform with shopping cart and payment integration.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    imageUrl: "https://images.pexels.com/photos/33433704/pexels-photo-33433704.jpeg",
    projectLink: "https://ecommerce.com",
    githubLink: "https://github.com/yourusername/ecommerce",
  },
  {
    title: "Blog Platform",
    description: "A full-featured blog platform with user authentication and admin panel.",
    techStack: ["Next.js", "Tailwind", "Prisma"],
    imageUrl: "https://images.pexels.com/photos/33433704/pexels-photo-33433704.jpeg",
    githubLink: "https://github.com/yourusername/blog",
  },
];

export const Projects = () => {
  const { sectionRef, isVisible } = useSectionVisible()

  return (
    <section ref={sectionRef} id="projects" className="w-full py-20 px-4 md:px-10 bg-slate-900 text-slate-200 relative">
      <BackgroundSparkles />
      <h2 className="text-4xl font-bold text-orange-500 mb-12 font-cursive2 relative inline-block">
        Projects
        <span className={`absolute left-1/2 -bottom-2 w-0 h-[3px] bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full ${isVisible ? "animate-underline" : ""}`}></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="box group relative bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-orange-500 mb-2 font-cursive2">
                {project.title}
              </h3>
              <p className="text-slate-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs bg-orange-500 text-slate-900 px-2 py-1 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                {project.projectLink && (
                  <Link
                    to={project.projectLink}
                    target="_blank"
                    className="flex items-center space-x-1 text-orange-500 hover:underline font-medium"
                  >
                    <span>Live</span>
                    <ArrowRight size={18} />
                  </Link>
                )}
                {project.githubLink && (
                  <Link
                    to={project.githubLink}
                    target="_blank"
                    className="flex items-center space-x-1 text-orange-500 hover:underline font-medium"
                  >
                    <span>Code</span>
                    <ArrowRight size={18} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center">
      <Link to="/projects">
        <button className="mt-10 mx-auto px-6 py-3 text-white cursor-pointer rounded-2xl text-xl bg-gradient-to-r from-orange-300 to-orange-700 hover:from-orange-700 hover:to-orange-300 transition-all duration-300">
          See more
        </button>
      </Link>
      </div>
    </section>
  );
};
