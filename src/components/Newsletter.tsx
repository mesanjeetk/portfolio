import { useState } from "react";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your email");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    // Simulate submission
    console.log("Newsletter signup:", email);
    setSubmitted(true);
    setEmail("");

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="relative w-full py-20 px-6 md:px-10 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 pointer-events-none"></div>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              <div className="flex-1">
                <h3 className="text-2xl md:text-4xl font-outfit font-black text-white mb-2">
                  Stay Updated
                </h3>
                <p className="text-slate-400 text-sm md:text-base">
                  Subscribe to get notified about my latest projects, articles, and opportunities.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="w-full md:w-auto flex-shrink-0">
                {submitted ? (
                  <div className="flex items-center gap-3 text-accent font-bold animate-slideUp">
                    <CheckCircle size={20} />
                    <span>Subscribed!</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1 md:flex-none">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={18} />
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setError("");
                        }}
                        className="w-full md:w-56 pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-accent transition-colors"
                      />
                      {error && (
                        <p className="text-red-400 text-xs mt-1 absolute -bottom-5">{error}</p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="px-5 py-3 bg-accent text-white rounded-xl font-bold hover:shadow-lg hover:glow-shadow transition-all flex items-center gap-2 flex-shrink-0"
                    >
                      <span className="text-sm">Join</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
