import React from "react";
import { regions } from "@/widgets/home/model";

export default function HomeRegionButtons() {
  return (
    <div className="absolute bottom-3 w-full gap-y-5 h-fit flex flex-col p-10">
      <p className="font-extrabold text-3xl">지역으로 찾아보기</p>
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
      className="h-40 w-80 px-4 rounded-lg bg-cover bg-center relative group "
      style={{
        backgroundImage: `url(/images/${name}.png)`,
      }}
    >
      <span className="relative z-20 text-2xl font-bold text-white">
        {name}
      </span>
      <div className="absolute inset-0 rounded-lg bg-black/20" />
      <div className="absolute z-10 inset-0 rounded-lg bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
}
