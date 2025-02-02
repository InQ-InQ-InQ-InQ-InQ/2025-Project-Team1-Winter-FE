import React from "react";
import {
  HomeSearch,
  AnimatedSlider,
  HomeRegionButtons,
} from "@/widgets/home/ui";

export default function HomeLayout() {
  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center">
      <AnimatedSlider />
      <span className="prompt-extrabold text-6xl">SpotShare</span>
      <HomeSearch />
      <span>실시간 인기 포토스팟을 찾아보세요!</span>
      <HomeRegionButtons />
    </div>
  );
}
