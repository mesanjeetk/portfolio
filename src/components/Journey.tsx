import { useSectionVisible } from "../hooks/useSectionVisible";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { Calendar, Star } from "lucide-react";

interface JourneyItem {
  date: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const journeyItems: JourneyItem[] = [
  {
    date: "March 2024",
    title: "The First Line of Code",
    description: "Embarked on the journey of web development. Mastered HTML, CSS, and the fundamentals of JavaScript, building a foundation for creative digital solutions.",
    icon: <Star size={16} />
  },
  {
    date: "August 2024",
    title: "Mastering the Modern Stack",
    description: "Deep-dived into React and modern frontend ecosystems. Built the first real-world portfolio and started exploring component-driven architecture.",
    icon: <Star size={16} />
  },
  {
    date: "March 2025",
    title: "Scaling with Backend",
    description: "Expanded expertise to the full stack. mastered Node.js, Express, and MongoDB, enabling the creation of complex, data-driven applications.",
    icon: <Star size={16} />
  },
  {
    date: "August 2025",
    title: "The Professional Milestone",
    description: "Launched a fully dynamic, high-performance portfolio. Integrated advanced animations and premium layouts to showcase professional-grade craftsmanship.",
    icon: <Star size={16} />
  },
];

export const Journey = () => {
  const { sectionRef, isVisible } = useSectionVisible();
  const lineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (isVisible && lineRef.current) {
      gsap.to(lineRef.current, { height: "100%", duration: 2, ease: "power4.inOut" });

      itemRefs.current.forEach((item, idx) => {
        if (item) {
          gsap.fromTo(
            item,
            { opacity: 0, x: idx % 2 === 0 ? -50 : 50 },
            { opacity: 1, x: 0, duration: 1, delay: 0.5 + idx * 0.2, ease: "power3.out" }
          );
        }
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} id="journey" className="relative w-full py-24 px-6 md:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        <div className="text-center space-y-4 mb-24 animate-slideUp">
          <h2 className="text-accent font-outfit font-bold tracking-widest text-sm uppercase">EVOLUTION</h2>
          <h3 className="text-4xl md:text-6xl font-outfit font-black text-white leading-tight">
            MY CREATIVE <span className="text-gradient">JOURNEY</span>
          </h3>
        </div>

        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block">
            <div ref={lineRef} className="absolute top-0 left-0 w-full bg-accent glow-shadow origin-top h-0"></div>
          </div>

          <div className="space-y-12 md:space-y-0 relative">
            {journeyItems.map((item, idx) => (
              <div
                key={idx}
                ref={el => { itemRefs.current[idx] = el; }}
                className={`relative flex flex-col md:flex-row items-center md:items-start group md:mb-24 opacity-0`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 top-10 w-4 h-4 rounded-full bg-obsidian border-2 border-accent z-10 -translate-x-1/2 scale-150 shadow-[0_0_15px_rgba(99,102,241,0.5)] group-hover:bg-accent transition-colors duration-500 hidden md:block"></div>

                {/* Content Side */}
                <div className={`w-full md:w-[45%] ${idx % 2 === 0 ? 'md:mr-auto md:text-right md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <div className="glass-panel p-8 rounded-[2rem] border border-white/5 hover:border-accent/30 transition-all duration-500 relative group">
                    <div className={`flex items-center gap-3 mb-4 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                        <Calendar size={18} />
                      </div>
                      <span className="text-accent font-outfit font-bold tracking-wider text-xs uppercase">{item.date}</span>
                    </div>

                    <h4 className="text-2xl font-outfit font-black text-white mb-4 group-hover:text-accent transition-colors tracking-tight">
                      {item.title}
                    </h4>

                    <p className="text-slate-400 font-outfit leading-relaxed">
                      {item.description}
                    </p>

                    {/* Decorative Corner Icon */}
                    <div className={`absolute top-6 ${idx % 2 === 0 ? 'left-6' : 'right-6'} text-white/5 group-hover:text-accent/20 transition-colors`}>
                      {item.icon}
                    </div>
                  </div>
                </div>

                {/* Empty side for layout - hidden on mobile */}
                <div className="hidden md:block md:w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

