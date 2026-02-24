import { useState } from "react";
import { ArrowRight, Mail, Github, Linkedin, Instagram, Send, Globe } from "lucide-react";
import { Magnetic } from "../components/Magnetic";
import { Meta } from "../components/Meta";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:iamsanjeet1432@gmail.com?subject=${encodeURIComponent(
      "Inquiry from " + formData.name
    )}&body=${encodeURIComponent(formData.message + "\n\nFrom: " + formData.email)}`;
    window.location.href = mailto;
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      className="w-full min-h-screen py-24 px-6 md:px-10 overflow-hidden relative"
      aria-labelledby="contact-title"
    >
      <Meta
        title="Contact"
        description="Let's build something legendary together. Reach out to Sanjeet for high-end digital solutions, collaborative engineering, and bespoke design inquiries."
      />

      {/* Background Editorial Typography */}
      <div className="absolute top-40 -right-20 pointer-events-none select-none opacity-5 -rotate-90 origin-bottom-right" aria-hidden="true">
        <span className="text-[20vw] font-outfit font-black tracking-tighter uppercase">CONNECT</span>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">

        {/* Editorial Info Side (Left) */}
        <div className="lg:col-span-12 space-y-12 animate-slideUp">
          <div className="space-y-4">
            <h2 className="text-accent font-outfit font-bold tracking-[0.3em] text-sm uppercase px-1">START A JOURNEY</h2>
            <h1 id="contact-title" className="text-6xl md:text-9xl font-outfit font-black text-white leading-[0.9] tracking-tighter">
              LET'S BUILD <br />
              <span className="text-gradient">SOMETHING</span> <br />
              LEGENDARY.
            </h1>
          </div>
        </div>

        {/* Action Grid */}
        <div className="lg:col-span-7 space-y-12 animate-slideUp" style={{ animationDelay: '200ms' }}>
          {submitted ? (
            <div
              className="glass-panel p-20 rounded-[4rem] text-center space-y-8 border border-accent/20 animate-scaleUp"
              role="status"
              aria-live="polite"
            >
              <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto text-accent shadow-2xl">
                <Send size={40} aria-hidden="true" />
              </div>
              <h3 className="text-4xl font-outfit font-black text-white uppercase italic">Message Dispatch Success!</h3>
              <p className="text-slate-400 font-outfit text-xl leading-relaxed max-w-sm mx-auto">
                I'll review your vision and get back to you with the same energy.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-white font-outfit font-black uppercase tracking-[0.2em] text-xs hover:text-accent transition-colors"
                aria-label="Send another message"
              >
                Send another transmission
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="glass-panel p-10 md:p-16 rounded-[4rem] border border-white/5 space-y-12"
              aria-label="Direct contact form"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label htmlFor="name-input" className="text-[10px] font-outfit font-black text-slate-500 uppercase tracking-[0.3em] px-4">IDENTITY</label>
                  <input
                    id="name-input"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className="w-full px-8 py-6 rounded-3xl bg-white/5 border border-white/5 focus:border-accent/40 focus:bg-white/10 outline-none transition-all duration-500 text-white font-outfit placeholder:text-slate-700"
                    aria-required="true"
                  />
                </div>
                <div className="space-y-4">
                  <label htmlFor="email-input" className="text-[10px] font-outfit font-black text-slate-500 uppercase tracking-[0.3em] px-4">CHANNEL</label>
                  <input
                    id="email-input"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className="w-full px-8 py-6 rounded-3xl bg-white/5 border border-white/5 focus:border-accent/40 focus:bg-white/10 outline-none transition-all duration-500 text-white font-outfit placeholder:text-slate-700"
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label htmlFor="vision-input" className="text-[10px] font-outfit font-black text-slate-500 uppercase tracking-[0.3em] px-4">VISON</label>
                <textarea
                  id="vision-input"
                  name="message"
                  placeholder="Tell me about your amazing project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-8 py-6 rounded-[3rem] bg-white/5 border border-white/5 focus:border-accent/40 focus:bg-white/10 outline-none transition-all duration-500 text-white font-outfit resize-none placeholder:text-slate-700"
                  aria-required="true"
                ></textarea>
              </div>

              <Magnetic>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-6 px-12 py-8 bg-accent text-white rounded-3xl font-black text-xl shadow-2xl hover:glow-shadow transition-all group"
                  aria-label="Submit contact form"
                >
                  INITIATE CONTACT
                  <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" aria-hidden="true" />
                </button>
              </Magnetic>
            </form>
          )}
        </div>

        {/* Sidebar Info */}
        <aside className="lg:col-span-5 space-y-12 animate-slideUp" style={{ animationDelay: '400ms' }} aria-label="Contact Information">
          <div className="space-y-8">
            <h4 className="text-accent font-outfit font-bold tracking-[0.3em] text-[10px] uppercase px-1">STATIONS</h4>
            <div className="grid grid-cols-1 gap-6">
              {[
                { Icon: Mail, label: "Email", value: "iamsanjeet1432@gmail.com", link: "mailto:iamsanjeet1432@gmail.com" },
                { Icon: Globe, label: "Location", value: "New Delhi, India", link: "#" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  className="glass-panel p-10 rounded-[2.5rem] border border-white/5 hover:border-accent/20 transition-all group flex items-center gap-8"
                  aria-label={`Contact via ${item.label}: ${item.value}`}
                >
                  <div className="w-16 h-16 glass-panel flex items-center justify-center rounded-2xl text-accent group-hover:scale-110 transition-transform" aria-hidden="true">
                    <item.Icon size={24} />
                  </div>
                  <div>
                    <p className="text-slate-500 font-outfit font-black uppercase tracking-widest text-[10px] mb-1">{item.label}</p>
                    <p className="text-white font-outfit font-bold text-lg">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-accent font-outfit font-bold tracking-[0.3em] text-[10px] uppercase px-1">FREQUENCIES</h4>
            <div className="flex flex-wrap gap-4">
              {[
                { Icon: Github, name: "GitHub", link: "https://github.com/sanjeetk-dev" },
                { Icon: Linkedin, name: "LinkedIn", link: "https://www.linkedin.com/in/sanjeetk-dev" },
                { Icon: Instagram, name: "Instagram", link: "https://www.instagram.com/iamsanjeet_1432" },
              ].map((social, idx) => (
                <Magnetic key={idx}>
                  <a
                    href={social.link}
                    target="_blank"
                    className="w-20 h-20 glass-panel rounded-3xl flex items-center justify-center text-white border border-white/5 hover:border-accent transition-all group"
                    aria-label={`Follow Sanjeet on ${social.name}`}
                  >
                    <social.Icon size={24} className="group-hover:scale-110 transition-transform" aria-hidden="true" />
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>

          <div className="glass-panel p-12 rounded-[3rem] border border-accent/30 bg-accent/5 relative overflow-hidden group">
            <div className="relative z-10 space-y-6">
              <h4 className="text-white font-outfit font-black text-3xl leading-tight">Always <br />Open for <br />Collaborations.</h4>
              <p className="text-slate-400 font-outfit leading-relaxed">
                If you're looking for a bespoke digital solution, I'm just one message away.
              </p>
            </div>
            <div className="absolute -bottom-12 -right-12 text-accent/10 -rotate-12 translate-y-4 group-hover:translate-y-0 transition-transform duration-700" aria-hidden="true">
              <Send size={180} />
            </div>
          </div>
        </aside>

      </div>
    </section>
  );
};

export default ContactPage;
