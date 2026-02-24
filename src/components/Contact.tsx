import { useState } from "react";
import { Send, Mail, Github, Instagram, Linkedin } from "lucide-react";
import { useSectionVisible } from "../hooks/useSectionVisible";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const { sectionRef, isVisible } = useSectionVisible();

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
    <section ref={sectionRef} id="contact" className="relative w-full py-24 px-6 md:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left - Info */}
          <div className={`flex-1 space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-4">
              <h2 className="text-accent font-outfit font-bold tracking-widest text-sm uppercase">CONTACT</h2>
              <h3 className="text-4xl md:text-6xl font-outfit font-black text-white leading-tight">
                LET'S START A <br /><span className="text-gradient">CONVERSATION</span>
              </h3>
              <p className="text-slate-400 font-outfit text-lg max-w-md">
                Have a project in mind or just want to say hello? I'm always open to discussing new opportunities and creative ideas.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <a href="mailto:iamsanjeet1432@gmail.com" className="group flex items-center gap-4 text-slate-300 hover:text-white transition-colors">
                <div className="w-12 h-12 glass-panel rounded-2xl flex items-center justify-center group-hover:bg-accent transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Email Me</p>
                  <p className="font-bold">iamsanjeet1432@gmail.com</p>
                </div>
              </a>

              <div className="flex gap-4 pt-4">
                <a href="https://github.com/sanjeetk-dev" target="_blank" className="w-12 h-12 glass-panel rounded-2xl flex items-center justify-center text-slate-300 hover:bg-accent hover:text-white transition-all" aria-label="Visit Sanjeet's GitHub">
                  <Github size={20} />
                </a>
                <a href="#" target="_blank" className="w-12 h-12 glass-panel rounded-2xl flex items-center justify-center text-slate-300 hover:bg-accent hover:text-white transition-all" aria-label="Visit Sanjeet's LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.instagram.com/iamsanjeet_1432" target="_blank" className="w-12 h-12 glass-panel rounded-2xl flex items-center justify-center text-slate-300 hover:bg-accent hover:text-white transition-all" aria-label="Visit Sanjeet's Instagram">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className={`flex-[1.5] w-full transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative">
              {submitted ? (
                <div className="text-center py-10 space-y-6 animate-slideUp">
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto text-accent">
                    <Send size={40} />
                  </div>
                  <h4 className="text-3xl font-outfit font-black text-white">Message Sent!</h4>
                  <p className="text-slate-400">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  <button onClick={() => setSubmitted(false)} className="text-accent font-bold hover:underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-accent outline-none transition-all text-white font-medium"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-accent outline-none transition-all text-white font-medium"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-accent outline-none transition-all text-white font-medium resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-accent text-white rounded-2xl font-black text-lg shadow-xl hover:glow-shadow transition-all group"
                  >
                    SEND MESSAGE
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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

