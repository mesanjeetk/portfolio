import { Calendar, ExternalLink } from "lucide-react";
import { useSectionVisible } from "../hooks/useSectionVisible";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  icon: string;
  credentialUrl?: string;
  credentialId?: string;
}

const certifications: Certification[] = [
  {
    title: "Full Stack Development Certification",
    issuer: "Udemy",
    date: "2024",
    icon: "📜",
    credentialUrl: "#",
  },
  {
    title: "React & JavaScript Advanced",
    issuer: "Coursera",
    date: "2024",
    icon: "⚛️",
    credentialUrl: "#",
  },
  {
    title: "TypeScript Mastery",
    issuer: "LinkedIn Learning",
    date: "2023",
    icon: "📘",
    credentialUrl: "#",
  },
  {
    title: "Web Design Certification",
    issuer: "Interaction Design Foundation",
    date: "2023",
    icon: "🎨",
    credentialUrl: "#",
  },
];

export const Certifications = () => {
  const { sectionRef, isVisible } = useSectionVisible();

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="relative w-full py-24 px-6 md:px-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-20 animate-slideUp">
          <h2 className="text-accent font-outfit font-bold tracking-widest text-sm uppercase">
            CREDENTIALS
          </h2>
          <h3 className="text-4xl md:text-6xl font-outfit font-black text-white leading-tight">
            CERTIFICATIONS &<br />
            <span className="text-gradient">EDUCATION</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className={`group relative glass-panel p-6 md:p-8 rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-500 hover:translate-y-[-5px] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4 flex-1">
                  <div className="text-4xl">{cert.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-outfit font-black text-white group-hover:text-accent transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-slate-400 font-medium mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10 text-accent hover:bg-accent hover:text-white transition-all"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>

              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Calendar size={14} />
                <span className="font-medium">{cert.date}</span>
                {cert.credentialId && (
                  <>
                    <span className="text-white/20">•</span>
                    <span className="text-xs text-slate-500">ID: {cert.credentialId}</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
