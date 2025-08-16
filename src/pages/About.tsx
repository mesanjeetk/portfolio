import { ArrowRight, Briefcase, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Testimonials } from "../components/Testimonials"

const About = () => {
  return (
    <section className="w-full py-20 px-4 md:px-10 bg-slate-950 text-slate-200">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden shadow-2xl border-4 border-orange-500 animate-slideUp">
            <img
              src="/image.webp"
              alt="Sanjeet"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bio & Info */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold text-orange-500 font-cursive2 relative inline-block">
            About Me
            <span
            className="absolute left-1/2 -bottom-2 w-full h-[3px] bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full transition-all animate-underline"
          ></span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Hello! I’m <span className="text-orange-500 font-semibold">Sanjeet</span>, a passionate web developer specializing in building interactive and modern websites and web applications. I love combining <span className="text-orange-500">clean UI</span> with <span className="text-orange-500">efficient code</span> to create engaging digital experiences.
          </p>
          <p className="text-slate-300 text-lg leading-relaxed">
            I have experience in <span className="text-orange-500">React, Next.js, Node.js, and Tailwind CSS</span>, and I enjoy exploring new technologies to improve my skills. When I’m not coding, I love to read, design, and experiment with animations.
          </p>

          {/* Skills/Highlights */}
          <div className="flex flex-wrap gap-4 mt-4">
            {["React", "Node.js", "Tailwind", "GSAP", "TypeScript"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full bg-orange-500 text-slate-900 font-medium text-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Experience Stats */}
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

          {/* Call to Action */}
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 mt-6 text-orange-500 font-medium hover:underline"
          >
            <span>Get in Touch</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>

      {/* Testimonials / Trust Section */}
      <div className="max-w-5xl mx-auto mt-16 space-y-8">
        <h3 className="text-3xl font-bold text-orange-500 font-cursive2 text-center mb-8">
          What People Say
        </h3>
        <Testimonials />
      </div>
    </section>
  );
};

export default About;



