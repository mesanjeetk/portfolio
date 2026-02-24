import React, { useState } from "react";
import { ArrowRight, Mail, Github, Linkedin, Instagram, Send, MapPin } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:iamsanjeet1432@gmail.com?subject=${encodeURIComponent(
      "Message from " + formData.name
    )}&body=${encodeURIComponent(formData.message + "\n\nFrom: " + formData.email)}`;
    window.location.href = mailto;
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="w-full min-h-screen py-24 px-6 md:px-10 overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-6xl mx-auto space-y-20">

        <div className="text-center space-y-4 animate-slideUp">
          <h2 className="text-accent font-outfit font-bold tracking-widest text-sm uppercase">STAY CONNECTED</h2>
          <h1 className="text-5xl md:text-8xl font-outfit font-black text-white leading-tight">
            LET'S START A <span className="text-gradient">CONVERSATION</span>
          </h1>
          <p className="text-slate-400 font-outfit text-xl max-w-2xl mx-auto leading-relaxed">
            Have a visionary project in mind? Reach out and let's build something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Contact Form Side */}
          <div className="animate-slideUp" style={{ animationDelay: '200ms' }}>
            {submitted ? (
              <div className="glass-panel p-16 rounded-[3rem] text-center space-y-6 border border-white/10 animate-scaleUp">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto text-accent">
                  <Send size={32} />
                </div>
                <h3 className="text-3xl font-outfit font-black text-white">MESSAGE SENT!</h3>
                <p className="text-slate-400 font-outfit leading-relaxed">
                  Thank you for reaching out. I'll get back to you with the same passion you've shown.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-accent font-outfit font-black uppercase tracking-widest text-xs hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-panel p-10 md:p-12 rounded-[3rem] border border-white/10 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-outfit font-black text-slate-500 uppercase tracking-widest px-2">YOUR NAME</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/5 focus:border-accent/50 focus:bg-white/10 outline-none transition-all duration-300 text-white font-outfit"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-outfit font-black text-slate-500 uppercase tracking-widest px-2">YOUR EMAIL</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/5 focus:border-accent/50 focus:bg-white/10 outline-none transition-all duration-300 text-white font-outfit"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-outfit font-black text-slate-500 uppercase tracking-widest px-2">YOUR MESSAGE</label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your amazing project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-5 rounded-3xl bg-white/5 border border-white/5 focus:border-accent/50 focus:bg-white/10 outline-none transition-all duration-300 text-white font-outfit resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-4 px-10 py-6 bg-accent text-white rounded-2xl font-black text-lg shadow-xl hover:glow-shadow transition-all group"
                >
                  SEND MESSAGE
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>

          {/* Contact Info Side */}
          <div className="space-y-12 animate-slideUp" style={{ animationDelay: '400ms' }}>
            <div className="space-y-8">
              <h4 className="text-accent font-outfit font-bold tracking-widest text-sm uppercase">CONTACT DETAILS</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-accent/30 transition-all group">
                  <Mail size={24} className="text-accent mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-slate-500 font-outfit font-bold uppercase tracking-widest text-[10px] mb-1">Email Me</p>
                  <a href="mailto:iamsanjeet1432@gmail.com" className="text-white font-outfit font-bold hover:text-accent transition-colors">
                    iamsanjeet1432@gmail.com
                  </a>
                </div>

                <div className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-accent/30 transition-all group">
                  <MapPin size={24} className="text-accent mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-slate-500 font-outfit font-bold uppercase tracking-widest text-[10px] mb-1">Location</p>
                  <p className="text-white font-outfit font-bold">New Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h4 className="text-accent font-outfit font-bold tracking-widest text-sm uppercase">SOCIAL PROFILES</h4>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: <Github size={20} />, label: "Github", link: "https://github.com/sanjeetk-dev" },
                  { icon: <Linkedin size={20} />, label: "Linkedin", link: "https://www.linkedin.com/in/sanjeetk-dev" },
                  { icon: <Instagram size={20} />, label: "Instagram", link: "https://www.instagram.com/iamsanjeet_1432" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    className="flex items-center gap-3 px-6 py-4 glass-panel rounded-2xl text-white font-outfit font-bold border border-white/5 hover:border-accent group transition-all"
                  >
                    <span className="text-slate-400 group-hover:text-accent transition-colors">{social.icon}</span>
                    <span className="text-sm tracking-wide uppercase font-black">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-panel p-10 rounded-[2.5rem] border border-accent/20 bg-accent/5 relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <h4 className="text-white font-outfit font-black text-2xl">Available for new opportunities</h4>
                <p className="text-slate-400 font-outfit leading-relaxed">
                  I'm currently looking for new challenges and visionary projects. Let's make something great together.
                </p>
              </div>
              <div className="absolute -bottom-10 -right-10 text-accent/10 -rotate-12">
                <Send size={160} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactPage;
