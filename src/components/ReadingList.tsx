import { BookOpen, ExternalLink } from "lucide-react";
import { useSectionVisible } from "../hooks/useSectionVisible";

interface ReadingItem {
  title: string;
  author: string;
  type: string;
  link: string;
}

const readingList: ReadingItem[] = [
  {
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    type: "Book",
    link: "#",
  },
  {
    title: "The Web Performance Working Group Blog",
    author: "W3C",
    type: "Article",
    link: "#",
  },
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    type: "Book",
    link: "#",
  },
  {
    title: "React Best Practices and Patterns",
    author: "Kent C. Dodds",
    type: "Article",
    link: "#",
  },
  {
    title: "The Pragmatic Programmer",
    author: "David Thomas & Andrew Hunt",
    type: "Book",
    link: "#",
  },
  {
    title: "Web Design Trends 2024",
    author: "CSS-Tricks",
    type: "Article",
    link: "#",
  },
];

export const ReadingList = () => {
  const { sectionRef, isVisible } = useSectionVisible();

  return (
    <section
      ref={sectionRef}
      id="reading"
      className="relative w-full py-24 px-6 md:px-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-20 animate-slideUp">
          <h2 className="text-accent font-outfit font-bold tracking-widest text-sm uppercase">
            RESOURCES
          </h2>
          <h3 className="text-4xl md:text-6xl font-outfit font-black text-white leading-tight">
            RECOMMENDED <span className="text-gradient">READING</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {readingList.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative glass-panel p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-500 hover:translate-y-[-5px] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10 text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                  <BookOpen size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-outfit font-black text-white group-hover:text-accent transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-medium mt-1">
                    {item.author}
                  </p>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
                    <span className="text-[10px] font-bold text-accent/70 uppercase tracking-wider">
                      {item.type}
                    </span>
                    <ExternalLink size={14} className="text-slate-500 group-hover:text-accent transition-colors" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
