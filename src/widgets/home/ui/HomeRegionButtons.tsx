import React from "react";
import { regions } from "@/widgets/home/model";

export default function HomeRegionButtons() {
  return (
    <div className="absolute bottom-3 flex h-fit w-full flex-col gap-y-5 p-10">
      <p className="text-3xl font-extrabold">지역으로 찾아보기</p>
      <div className="flex gap-5">
        {regions.map((region, index) => (
          <RegionButton key={index} name={region} />
        ))}
      </div>
    </div>
  );
}

interface Region {
  name: string;
}

function RegionButton({ name }: Region) {
  return (
    <button
      className="group relative h-40 w-80 rounded-lg bg-cover bg-center px-4"
      style={{
        backgroundImage: `url(/images/${name}.png)`,
      }}
    >
      <span className="relative z-20 text-2xl font-bold text-white">
        {name}
      </span>
      <div className="absolute inset-0 rounded-lg bg-black/20" />
      <div className="absolute inset-0 z-10 rounded-lg bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </button>
  );
}
