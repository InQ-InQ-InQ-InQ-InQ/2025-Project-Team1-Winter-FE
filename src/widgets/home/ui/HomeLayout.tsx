import React from "react";
import {
  HomeSearch,
  AnimatedSlider,
  HomeRegionButtons,
} from "@/widgets/home/ui";
import { ProfileButton } from "@/shared/ui";

export default function HomeLayout() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <AnimatedSlider />
      <ProfileButton className="top-16 right-2 md:right-4" />
      <span className="prompt-extrabold text-6xl">SpotShare</span>
      <HomeSearch />
      <span>실시간 인기 포토스팟을 찾아보세요!</span>
      <HomeRegionButtons />
    </div>
  );
}
