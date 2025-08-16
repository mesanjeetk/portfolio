import { useState } from "react";
import { ArrowRight, Mail, Github, Instagram } from "lucide-react";
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
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    const mailtoLink = `mailto:iamsanjeet1432@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section ref={sectionRef} id="contact" className="w-full py-20 px-4 md:px-10 bg-slate-900 text-slate-200">
      <h2 className="text-4xl font-bold text-orange-500 mb-12 font-cursive2 text-center relative inline-block">
        Contact Me
        <span
          className={`absolute left-1/2 -bottom-2 w-0 h-[3px] bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full ${
            isVisible ? "animate-underline" : ""
          }`}
        ></span>
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          {submitted ? (
            <div className="text-center p-10 bg-slate-800 rounded-xl shadow-lg animate-slideUp">
              <h3 className="text-2xl font-semibold text-white mb-4 font-cursive2">
                Thank you!
              </h3>
              <p className="text-slate-300">Your email client should open with the message ready to send.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-slate-800 rounded-xl p-8 shadow-lg space-y-6">
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 focus:border-orange-500 outline-none transition-all duration-300"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 focus:border-orange-500 outline-none transition-all duration-300"
                />
              </div>

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 focus:border-orange-500 outline-none transition-all duration-300 resize-none"
              ></textarea>

              <button
                type="submit"
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-orange-500 text-white rounded-full font-medium shadow-lg hover:bg-orange-600 transition-all duration-300"
              >
                <span>Send Message</span>
                <ArrowRight size={20} />
              </button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className="space-y-6 flex flex-col justify-center">
          <p className="text-lg">
            <Mail className="inline mr-2 text-orange-500" />{" "}
            <a href="mailto:iamsanjeet1432@gmail.com" className="hover:text-orange-500 transition-colors">
              iamsanjeet1432@gmail.com
            </a>
          </p>
          <p className="text-lg">
            <Github className="inline mr-2 text-orange-500" />{" "}
            <a href="https://github.com/sanjeetk-dev" target="_blank" className="hover:text-orange-500 transition-colors">
              github.com/sanjeetk-dev
            </a>
          </p>
          <p className="text-lg">
            <Instagram className="inline mr-2 text-orange-500" />{" "}
            <a href="https://www.instagram.com/iamsanjeet_1432" target="_blank" className="hover:text-orange-500 transition-colors">
              @sanjeet
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
