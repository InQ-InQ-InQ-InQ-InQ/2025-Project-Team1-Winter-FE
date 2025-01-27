import React from "react";

export default function HomeRegionButtons() {
  return (
    <div className="absolute bottom-3 w-full gap-y-5 h-fit flex flex-col p-10">
      <p className="font-extrabold text-3xl">지역으로 찾아보기</p>
      <div className="flex gap-5">
        <RegionButton name="서울" />
        <RegionButton name="서울" />
        <RegionButton name="서울" />
        <RegionButton name="서울" />
        <RegionButton name="서울" />
      </div>
    </div>
  );
}

interface Region {
  name: string;
}

function RegionButton({ name }: Region) {
  return (
    <button className="h-40 w-80 px-4 rounded-lg bg-cover bg-center text-2xl text-center bg-[#7BB9FF] hover:bg-[#6495ED] focus:outline-none">
      {name}
    </button>
  );
}
