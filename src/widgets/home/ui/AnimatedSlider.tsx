"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

import { sliderContents } from "@/widgets/home/model";

export default function AnimatedSlider() {
  return (
    <div className="swiper-container fixed top-3 flex w-full overflow-x-scroll">
      <Swiper
        spaceBetween={0}
        slidesPerView={4}
        centeredSlides={false}
        loop={true}
        freeMode={true}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        modules={[Autoplay, FreeMode]}
      >
        {sliderContents.map((slider, index) => (
          <SwiperSlide
            key={index}
            className={`shrink-0 p-2 px-4 text-center text-nowrap text-ellipsis`}
            style={{ backgroundColor: slider.color }}
          >
            {slider.content}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
