import React, { useState } from "react";
import { ArrowRight, Mail, Github, Linkedin, Instagram } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open email client
    const mailto = `mailto:iamsanjeet1432@gmail.com?subject=${encodeURIComponent(
      "Message from " + formData.name
    )}&body=${encodeURIComponent(formData.message + "\n\nFrom: " + formData.email)}`;
    window.location.href = mailto;
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="w-full py-20 px-4 md:px-10 bg-slate-950 text-slate-200">
      <div className="w-full text-center relative mb-12">
        <h2 className="text-4xl font-bold text-orange-500 font-cursive2 inline-block relative">
          Contact Me
          <span
            className="absolute left-1/2 -bottom-2 w-full h-[3px] bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full transition-all animate-underline"
          ></span>
        </h2>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          {submitted ? (
            <div className="text-center p-10 bg-slate-800 rounded-xl shadow-lg animate-slideUp">
              <h3 className="text-2xl font-semibold text-white mb-4 font-cursive2">
                Thank you!
              </h3>
              <p className="text-slate-300">Your message has been sent successfully.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-slate-800 rounded-xl p-8 shadow-lg space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none transition-all duration-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none transition-all duration-300"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none transition-all duration-300 resize-none"
              ></textarea>
              <button
                type="submit"
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-orange-500 text-white rounded-full font-medium shadow-lg hover:bg-orange-600 hover:shadow-2xl transition-all duration-300"
              >
                <span>Send Message</span>
                <ArrowRight size={20} />
              </button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className="space-y-6 flex flex-col justify-center">
          <p className="text-lg flex items-center gap-2">
            <Mail className="text-orange-500" /> 
            <a href="mailto:iamsanjeet1432@gmail.com" className="hover:text-orange-500 transition-colors">
              iamsanjeet1432@gmail.com
            </a>
          </p>
          <p className="text-lg flex items-center gap-2">
            <Github className="text-orange-500" /> 
            <a href="https://github.com/sanjeetk-dev" target="_blank" className="hover:text-orange-500 transition-colors">
              github.com/sanjeetk-dev
            </a>
          </p>
          <p className="text-lg flex items-center gap-2">
            <Instagram className="text-orange-500" /> 
            <a href="https://www.instagram.com/iamsanjeet_1432" target="_blank" className="hover:text-orange-500 transition-colors">
              @sanjeet
            </a>
          </p>
          <p className="text-lg flex items-center gap-2">
            <Linkedin className="text-orange-500" /> 
            <a href="https://www.linkedin.com/in/sanjeetk-dev" target="_blank" className="hover:text-orange-500 transition-colors">
              linkedin.com/in/sanjeetk-dev
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};


export default ContactPage