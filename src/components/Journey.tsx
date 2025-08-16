import { useSectionVisible } from "../hooks/useSectionVisible";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

interface JourneyItem {
  date: string;
  title: string;
  description: string;
}

const journeyItems: JourneyItem[] = [
  {
    date: "March 2024",
    title: "Started Learning Web Development",
    description: "Began with HTML, CSS, and JavaScript. Built small personal projects.",
  },
  {
    date: "Aug 2024",
    title: "First Real Project",
    description: "Built my first real portfolio website and learned React basics.",
  },
  {
    date: "Mar 2025",
    title: "Advanced Skills & Node.js",
    description: "Started learning backend with Node.js, Express, and MongoDB.",
  },
  {
    date: "Aug 2025",
    title: "Professional Portfolio",
    description: "Created a fully dynamic portfolio with interactive sections & animations.",
  },
];

export const Journey = () => {
  const { sectionRef, isVisible } = useSectionVisible();
  const lineRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Animate vertical line and circles on section visible
  useEffect(() => {
    if (isVisible && lineRef.current) {
      gsap.to(lineRef.current, { height: "100%", duration: 1.5, ease: "power2.out" });

      circleRefs.current.forEach((circle, idx) => {
        if (circle) {
          gsap.fromTo(
            circle,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.6, delay: idx * 0.2, ease: "back.out(1.7)" }
          );
        }
      });
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 px-4 md:px-10 bg-slate-900 text-slate-200"
    >
      <h2 className="text-4xl font-bold text-orange-500 mb-12 font-cursive2 text-center relative inline-block">
        My Journey
        <span
          className={`absolute left-1/2 -bottom-2 w-0 h-[3px] bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full ${isVisible ? "animate-underline" : ""
            }`}
        ></span>
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div
          ref={lineRef}
          className="absolute top-0 left-10 md:left-16 w-1 bg-orange-500 rounded-full shadow-[0_0_20px_#f97316] origin-top"
          style={{ height: "0", transform: "translateX(-50%)" }}
        ></div>

        {/* Journey Items */}
        <div className="space-y-16">
          {journeyItems.map((item, idx) => {
            const rotateDirection = idx % 2 === 0 ? "clockwise" : "anticlockwise";
            const innerRotate = rotateDirection === "clockwise" ? "anticlockwise" : "clockwise";

            return (
              <div key={idx} className="relative flex items-start md:items-start group">
                {/* Concentric Circles */}
                <div
                  ref={(el) => {
                    circleRefs.current[idx] = el;
                  }}

                  className={`absolute top-0 left-10 md:left-16 flex flex-col items-center opacity-0`}
                  style={{ transform: "translate(-50%, -50%)" }}
                >
                  <div
                    className={`w-6 h-6 md:w-8 md:h-8 border-2 border-orange-500 rounded-full flex items-center justify-center shadow-[0_0_15px_#f97316] animate-${rotateDirection}`}
                  >
                    <div
                      className={`w-3 h-3 md:w-4 md:h-4 border-2 border-orange-300 rounded-full shadow-[0_0_10px_#ffb84d] animate-${innerRotate}`}
                    ></div>
                  </div>
                </div>

                {/* Event Box */}
                <div className="ml-16 md:ml-24 bg-slate-800 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 flex-1 group-hover:scale-[1.02]">
                  <p className="text-orange-500 font-medium mb-2">{item.date}</p>
                  <h3 className="text-2xl font-semibold text-white mb-2 font-cursive2">
                    {item.title}
                  </h3>
                  <p className="text-slate-300">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
