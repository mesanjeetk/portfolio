import React, { useState } from "react";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  projectLink?: string;
  githubLink?: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio to showcase projects and skills with animations.",
    techStack: ["React", "Tailwind", "GSAP"],
    imageUrl: "https://images.pexels.com/photos/33433704/pexels-photo-33433704.jpeg?auto=compress&cs=tinysrgb&w=600",
    githubLink: "https://github.com/sanjeetk-dev",
  },
  {
    title: "E-Commerce App",
    description: "A modern e-commerce platform with shopping cart and payment integration.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    imageUrl: "https://images.pexels.com/photos/33433704/pexels-photo-33433704.jpeg?auto=compress&cs=tinysrgb&w=600",
    githubLink: "https://github.com/sanjeetk-dev",
  },
  {
    title: "Blog Platform",
    description: "A full-featured blog platform with user authentication and admin panel.",
    techStack: ["Next.js", "Tailwind", "Prisma"],
    imageUrl: "https://images.pexels.com/photos/33433704/pexels-photo-33433704.jpeg?auto=compress&cs=tinysrgb&w=600",
    githubLink: "https://github.com/sanjeetk-dev",
  },
];

const ProjectCard = React.memo(({ project, onClick }: { project: Project; onClick: () => void }) => (
  <div
    className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
    onClick={onClick}
  >
    <div className="overflow-hidden">
      <img
        src={project.imageUrl}
        alt={project.title}
        loading="lazy"
        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-semibold text-orange-400">{project.title}</h3>
      <p className="mt-2 text-slate-300 text-sm">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.techStack.map((tech, idx) => (
          <span key={idx} className="px-2 py-1 bg-slate-700 rounded text-xs text-slate-200">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
));

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section className="px-6 lg:px-20 py-10">
      <h2 className="text-4xl font-bold text-orange-500 mb-12 text-center">Projects</h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} onClick={() => setActiveProject(project)} />
        ))}
      </div>

      {/* Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="bg-slate-900 p-6 rounded-xl max-w-lg w-full shadow-xl transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeProject.imageUrl}
              alt={activeProject.title}
              loading="lazy"
              className="w-full h-56 object-cover rounded-xl mb-4"
            />
            <h3 className="text-2xl font-bold text-orange-400">{activeProject.title}</h3>
            <p className="mt-3 text-slate-300">{activeProject.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {activeProject.techStack.map((tech, idx) => (
                <span key={idx} className="px-2 py-1 bg-slate-700 rounded text-xs text-slate-200">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-4">
              {activeProject.projectLink && (
                <a
                  href={activeProject.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded transition"
                >
                  View Project
                </a>
              )}
              {activeProject.githubLink && (
                <a
                  href={activeProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded transition"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
