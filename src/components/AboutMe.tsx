import { BackgroundSparkles } from "./BackgroundSparkles"
import { useSectionVisible } from "../hooks/useSectionVisible"
import { ArrowRight, Award, Briefcase, CheckCircle } from "lucide-react";

interface AboutMeProps {
  className?: string;
  title?: string;
  description?: string;
  image?: string;
  skills?: string[]; // optional tech stack

}



export const AboutMe: React.FC<AboutMeProps> = ({
  title = "About Me",
  description = "I’m a passionate developer who loves building interactive and dynamic web applications. I have experience with React, Tailwind CSS, Node.js, and more. My goal is to create impactful digital experiences that solve real-world problems.",
  image = "/image.webp",
  skills = ["React", "TailwindCSS", "Node.js", "TypeScript"],
  className = ""
}) => {
  const { sectionRef, isVisible } = useSectionVisible()

  return (
    <section ref={sectionRef} id="about" className={`relative w-full py-20 px-4 lg:px-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden ${className}`}>
      {/* Background sparkles */}
      <BackgroundSparkles />
      <h2 className="relative text-4xl font-bold text-orange-500 mb-12 font-cursive2 text-center inline-block">
        {/* Glow layer */}
        <span className="absolute inset-0 text-orange-500 blur-md opacity-75 animate-pulse">
          {title}
        </span>

        {/* Main text */}
        <span className="relative">{title}</span>

        {/* Underline */}
        <span
          className={`absolute left-1/2 -bottom-2 w-0 h-[3px] bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full ${isVisible ? "animate-underline" : ""
            }`}
        ></span>
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-14 animate-slideUp">

        {/* Left - Text */}
        <div className="flex-1 relative z-10">
          <p className="text-gray-300 leading-relaxed mb-6">{description}</p>
          {/* Skills */}
          {skills.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-4">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-orange-500/20 border border-orange-500 rounded-full text-sm hover:bg-orange-500/40 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            <div className="flex flex-col items-center bg-slate-800 rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300">
              <Briefcase size={28} className="text-orange-500 mb-2" />
              <p className="text-2xl font-bold text-white">1+</p>
              <p className="text-slate-300 text-center">Years of Experience</p>
            </div>
            <div className="flex flex-col items-center bg-slate-800 rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CheckCircle size={28} className="text-orange-500 mb-2" />
              <p className="text-2xl font-bold text-white">5+</p>
              <p className="text-slate-300 text-center">Projects Completed</p>
            </div>
          </div>
        </div>

        {/* Right - Image */}
        <div className="flex-1 relative z-10">
          <div className="group relative w-72 h-72 mx-auto">
            <img
              src={image}
              alt="About me"
              className="w-full h-full object-cover rounded-2xl shadow-lg border-2 border-orange-500 transform transition-transform duration-500 group-hover:rotate-2 group-hover:scale-105"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-orange-500/30 to-pink-500/30 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
