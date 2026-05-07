import { useState, useRef } from "react";
import { Send, Mail, Github, Instagram, Linkedin } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Left Info Stagger
    gsap.from(".contact-info > *", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      x: -50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out"
    });

    // Right Form Reveal
    gsap.from(".contact-form", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      y: 80,
      opacity: 0,
      rotationX: 10,
      transformPerspective: 1000,
      duration: 1.5,
      ease: "expo.out"
    });
  }, { scope: containerRef });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = encodeURIComponent(`Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:iamsanjeet1432@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section ref={containerRef} id="contact" className="relative w-full py-32 px-6 md:px-10 overflow-hidden bg-obsidian">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* Left - Info */}
          <div className="contact-info flex-1 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <h2 className="text-slate-300 font-inter font-semibold tracking-[0.2em] text-xs uppercase">CONTACT</h2>
              </div>
              <h3 className="text-5xl md:text-7xl font-outfit font-black text-white leading-tight tracking-tighter">
                LET'S START A <br /><span className="text-gradient">CONVERSATION</span>
              </h3>
              <p className="text-slate-400 font-inter font-light text-lg max-w-md pt-2">
                Have a project in mind or just want to say hello? I'm always open to discussing new opportunities and creative ideas.
              </p>
            </div>

            <div className="space-y-6 pt-6">
              <a href="mailto:iamsanjeet1432@gmail.com" className="group flex items-center gap-6 text-slate-300 hover:text-white transition-colors">
                <div className="w-16 h-16 glass-panel rounded-[1.5rem] flex items-center justify-center group-hover:bg-accent group-hover:text-obsidian transition-all duration-300 shadow-xl border border-white/5">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-1">Email Me</p>
                  <p className="font-outfit font-bold text-xl tracking-wide group-hover:text-accent transition-colors">iamsanjeet1432@gmail.com</p>
                </div>
              </a>

              <div className="flex gap-4 pt-6">
                <a href="https://github.com/sanjeetk-dev" target="_blank" className="w-14 h-14 glass-panel rounded-2xl flex items-center justify-center text-slate-300 hover:bg-accent hover:text-obsidian transition-all shadow-lg border border-white/5" aria-label="Visit Sanjeet's GitHub">
                  <Github size={22} />
                </a>
                <a href="#" target="_blank" className="w-14 h-14 glass-panel rounded-2xl flex items-center justify-center text-slate-300 hover:bg-accent hover:text-obsidian transition-all shadow-lg border border-white/5" aria-label="Visit Sanjeet's LinkedIn">
                  <Linkedin size={22} />
                </a>
                <a href="https://www.instagram.com/iamsanjeet_1432" target="_blank" className="w-14 h-14 glass-panel rounded-2xl flex items-center justify-center text-slate-300 hover:bg-accent hover:text-obsidian transition-all shadow-lg border border-white/5" aria-label="Visit Sanjeet's Instagram">
                  <Instagram size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="contact-form flex-[1.5] w-full">
            <div className="glass-panel p-8 md:p-12 rounded-[3.5rem] border border-white/5 relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-white/[0.01] backdrop-blur-3xl overflow-hidden">
              {/* Form background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
              
              {submitted ? (
                <div className="text-center py-16 space-y-6 animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto text-accent shadow-[0_0_30px_rgba(0,240,255,0.4)]">
                    <Send size={40} />
                  </div>
                  <h4 className="text-4xl font-outfit font-black text-white">Message Sent!</h4>
                  <p className="text-slate-400 font-light text-lg">Thank you for reaching out. I'll get back to you securely through the hyperwave.</p>
                  <button onClick={() => setSubmitted(false)} className="text-accent font-bold hover:underline py-4 block mx-auto tracking-widest text-sm uppercase">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-5 rounded-2xl bg-obsidian-light/50 border border-white/5 focus:border-accent focus:bg-white/5 outline-none transition-all text-white font-medium placeholder-slate-600 shadow-inner"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-5 rounded-2xl bg-obsidian-light/50 border border-white/5 focus:border-accent focus:bg-white/5 outline-none transition-all text-white font-medium placeholder-slate-600 shadow-inner"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-6 py-5 rounded-2xl bg-obsidian-light/50 border border-white/5 focus:border-accent focus:bg-white/5 outline-none transition-all text-white font-medium resize-none placeholder-slate-600 shadow-inner"
                      placeholder="Discussing the architecture of..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-8 py-6 bg-accent text-obsidian rounded-2xl font-black text-xl shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:shadow-[0_0_50px_rgba(0,240,255,0.6)] transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    SEND MESSAGE
                    <Send size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

