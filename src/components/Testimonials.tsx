import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";

export const Testimonials = () => {
  return (
    <Swiper
      className="w-full h-full"
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
          feedback:
            "Sanjeet delivered an outstanding portfolio website. Highly professional and creative!",
        },
        {
          name: "Jane Smith",
          feedback:
            "Working with Sanjeet was smooth and he really understood the requirements. Great developer!",
        },
        {
          name: "Alex Johnson",
          feedback:
            "Amazing attention to detail and very responsive. I highly recommend Sanjeet.",
        },
      ].map(({ name, feedback }, i) => (
        <SwiperSlide
          className="px-10 py-5 hover:border hover:border-orange-500 transition-all hover:scale-105 bg-slate-900 rounded-xl p-6 md:p-8 shadow-lg h-full"
          key={i}
        >
          <p className="text-slate-300 text-lg mb-4 relative">
            <span className="font-cursive2 text-orange-500 text-2xl mr-2">&quot;</span>
            {feedback}
            <span className="font-cursive2 text-orange-500 text-2xl ml-2">&quot;</span>
          </p>
          <h3 className="font-cursive2 text-orange-500 font-bold">{name}</h3>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
