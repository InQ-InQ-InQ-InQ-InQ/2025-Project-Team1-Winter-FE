import React from "react";
import {
  HomeSearch,
  AnimatedSlider,
  HomeRegionButtons,
} from "@/widgets/home/ui";
import { ProfileButton } from "@/shared/ui";

export default function HomeLayout() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/scenery.png")' }}
    >
      <AnimatedSlider />
      <ProfileButton className="top-16 right-2 md:right-4" />
      <span className="prompt-extrabold mb-10 text-6xl text-white">
        SpotShare
      </span>
      <HomeSearch />
      <span className="z-10 mt-2 text-white">
        실시간 인기 포토스팟을 찾아보세요!
      </span>
      <HomeRegionButtons />
      <div
        className="b absolute bottom-0 z-0 h-screen w-screen"
        style={{
          backgroundImage:
            "linear-gradient(to top, #f4f4f4 20%, transparent 60%)",
        }}
      ></div>
    </div>
  );
}
