import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useSectionVisible } from "../hooks/useSectionVisible";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer:
      "I specialize in full-stack web development, including frontend design with React, backend development with Node.js, and database design. I also offer UI/UX consulting and performance optimization.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on complexity. Small projects typically take 2-4 weeks, medium projects 4-8 weeks, and larger projects 8-12 weeks. I provide detailed timelines after an initial consultation.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes! I love working with startups and early-stage companies. I understand the challenges of building products with limited resources and can help you create MVPs quickly and cost-effectively.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "My primary tech stack includes React, TypeScript, Node.js, Express, MongoDB, PostgreSQL, and Tailwind CSS. I'm also experienced with GSAP, Vite, and modern DevOps practices.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "I maintain regular communication through weekly check-ins, detailed progress reports, and responsive email/chat support. I use tools like GitHub for code collaboration and provide transparent updates.",
  },
  {
    question: "Can you build custom designs?",
    answer:
      "Absolutely! I can work with your existing design systems, create custom designs from scratch, or collaborate with your design team. I specialize in converting complex designs into performant, interactive web experiences.",
  },
];

export const FAQ = () => {
  const [expanded, setExpanded] = useState<number | null>(0);
  const { sectionRef, isVisible } = useSectionVisible();

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative w-full py-24 px-6 md:px-10 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-20 animate-slideUp">
          <h2 className="text-accent font-outfit font-bold tracking-widest text-sm uppercase">
            QUESTIONS
          </h2>
          <h3 className="text-4xl md:text-6xl font-outfit font-black text-white leading-tight">
            FREQUENTLY ASKED <span className="text-gradient">QUESTIONS</span>
          </h3>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, idx) => (
            <div
              key={idx}
              className={`group relative glass-panel border border-white/5 hover:border-accent/30 rounded-2xl overflow-hidden transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <button
                onClick={() => setExpanded(expanded === idx ? null : idx)}
                className="w-full text-left p-6 md:p-8 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-outfit font-black text-white group-hover:text-accent transition-colors">
                  {item.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-accent transition-transform duration-300 flex-shrink-0 ml-4 ${
                    expanded === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expanded === idx && (
                <div className="border-t border-white/5 px-6 md:px-8 py-6 bg-white/2">
                  <p className="text-slate-400 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
