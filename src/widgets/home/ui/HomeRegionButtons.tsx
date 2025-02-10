"use client";

import React, { useState } from "react";
import { regions } from "@/widgets/home/model";
import { RegionMapModal } from "@/widgets/home/ui";
import { Region } from "@/widgets/home/types";
import { useModal } from "@/shared/model";

interface RegionButtonProps {
  name: Region;
}

export default function HomeRegionButtons() {
  const { visible, setVisible, modalRef } = useModal();
  const [region, setRegion] = useState<Region | "">("");

  function handleRegionClick(name: Region) {
    setVisible(true);
    setRegion(name);
  }

  function RegionButton({ name }: RegionButtonProps) {
    return (
      <button
        onClick={() => handleRegionClick(name)}
        className="group relative z-10 h-40 w-80 cursor-pointer rounded-lg bg-cover bg-center px-4"
        style={{
          backgroundImage: `url(/images/${name}.png)`,
        }}
      >
        <span className="relative z-20 text-lg font-bold text-white md:text-2xl">
          {name}
        </span>
        <div className="absolute inset-0 rounded-lg bg-black/20" />
        <div className="absolute inset-0 z-10 rounded-lg bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </button>
    );
  }

  return (
    <div className="absolute bottom-3 z-10 flex h-fit w-full flex-col gap-y-4 p-10 md:gap-y-5">
      <p className="h2">지역으로 찾아보기</p>
      <div className="flex gap-2 md:gap-5">
        {regions.map((region, index) => (
          <RegionButton key={index} name={region} />
        ))}
      </div>
      <RegionMapModal
        title={region as Region}
        visible={visible}
        ref={modalRef}
        setVisible={setVisible}
        setTitle={setRegion}
      />
    </div>
  );
}
