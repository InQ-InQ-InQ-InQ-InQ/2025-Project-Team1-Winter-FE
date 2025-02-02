"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

import { sliderContents } from "@/widgets/home/model";

export default function AnimatedSlider() {
  return (
    <div className="swiper-container w-full flex overflow-x-scroll fixed top-3">
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
            className={`p-2 px-4 flex-shrink-0 text-center text-nowrap text-ellipsis bg-[${slider.color}]`}
          >
            {slider.content}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
