import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Quote } from "lucide-react";

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";

export const Testimonials = () => {
  return (
    <Swiper
      className="w-full h-full pb-16"
      loop={true}
      grabCursor={true}
      spaceBetween={24}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      breakpoints={{
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      }}
      modules={[Pagination]}
    >
      {[
        {
          name: "John Doe",
          role: "Creative Director",
          feedback:
            "Sanjeet delivered an outstanding portfolio website. His attention to detail and sense of modern aesthetics is truly professional.",
        },
        {
          name: "Jane Smith",
          role: "Founder, TechFlow",
          feedback:
            "Working with Sanjeet was seamless. He translated our complex requirements into a sleek, high-performing digital experience.",
        },
        {
          name: "Alex Johnson",
          role: "Senior Developer",
          feedback:
            "Incredible craftsmanship and a deep understanding of modern web technologies. Sanjeet is a rare talent in frontend engineering.",
        },
      ].map(({ name, role, feedback }, i) => (
        <SwiperSlide
          className="h-full"
          key={i}
        >
          <div className="glass-panel p-10 rounded-[2.5rem] border border-white/5 hover:border-accent/30 transition-all duration-500 h-full flex flex-col justify-between relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="space-y-6">
              <Quote size={40} className="text-accent/20 group-hover:text-accent/40 transition-colors" />
              <p className="text-slate-400 font-outfit text-lg leading-relaxed italic">
                {feedback}
              </p>
            </div>

            <div className="pt-8 space-y-1">
              <h3 className="text-white font-outfit font-black tracking-tight text-xl">{name}</h3>
              <p className="text-accent font-outfit font-bold uppercase tracking-widest text-[10px]">{role}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

