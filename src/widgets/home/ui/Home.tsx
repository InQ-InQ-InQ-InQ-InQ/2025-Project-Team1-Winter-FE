import React from "react";
import HomeSearch from "./HomeSearch";
import AnimatedSlider from "./AnimatedSlider";
import HomeRegionButtons from "./HomeRegionButtons";

export default function Home() {
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
