import { ExternalLink } from "lucide-react";

export const CaseStudy = () => {
  const caseStudies = [
    {
      title: "Building a Scalable E-Commerce Platform",
      problem: "Client needed a high-performance e-commerce platform handling 100K+ monthly users",
      solution: "Architected a full-stack solution with React frontend, Node.js backend, MongoDB, and Redis caching",
      results: "50% faster page load times, 99.9% uptime, $500K+ revenue in first year",
      metrics: ["100K+ Users", "99.9% Uptime", "50% Faster"],
      image: "https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg",
    },
    {
      title: "Real-Time Analytics Dashboard",
      problem: "Company needed to visualize complex data streams in real-time",
      solution: "Built WebSocket-powered dashboard with D3.js visualizations and live updates",
      results: "Decision-making time reduced by 60%, improved data accuracy to 99.5%",
      metrics: ["60% Faster Decisions", "99.5% Accuracy", "Real-Time Data"],
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    },
    {
      title: "IoT Sensor Network Dashboard",
      problem: "Environmental research team needed to monitor 500+ IoT sensors across multiple locations",
      solution: "Created custom Node.js backend with real-time data processing and interactive Leaflet maps",
      results: "Improved monitoring efficiency by 70%, detected anomalies 10x faster",
      metrics: ["500+ Sensors", "70% More Efficient", "10x Faster Detection"],
      image: "https://images.pexels.com/photos/8239266/pexels-photo-8239266.jpeg",
    },
  ];

  return (
    <section className="relative w-full py-24 px-6 md:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-accent font-outfit font-bold tracking-widest text-sm uppercase">
            REAL RESULTS
          </h2>
          <h3 className="text-4xl md:text-6xl font-outfit font-black text-white leading-tight">
            CASE <span className="text-gradient">STUDIES</span>
          </h3>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-3xl border border-white/5 overflow-hidden hover:border-accent/30 transition-all duration-500 hover:translate-y-[-8px] group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* Image */}
                <div className="lg:col-span-2 h-64 lg:h-auto overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                </div>

                {/* Content */}
                <div className="lg:col-span-3 p-8 md:p-12 space-y-6 flex flex-col justify-center">
                  <h4 className="text-2xl md:text-3xl font-outfit font-black text-white group-hover:text-accent transition-colors">
                    {study.title}
                  </h4>

                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
                        The Problem
                      </p>
                      <p className="text-slate-400">{study.problem}</p>
                    </div>

                    <div>
                      <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
                        The Solution
                      </p>
                      <p className="text-slate-400">{study.solution}</p>
                    </div>

                    <div>
                      <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
                        The Results
                      </p>
                      <p className="text-slate-400 font-bold">{study.results}</p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    {study.metrics.map((metric, mIdx) => (
                      <span
                        key={mIdx}
                        className="px-4 py-2 bg-accent/10 text-accent rounded-lg text-xs font-bold uppercase tracking-wider"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all w-fit"
                  >
                    Read Full Case Study
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
