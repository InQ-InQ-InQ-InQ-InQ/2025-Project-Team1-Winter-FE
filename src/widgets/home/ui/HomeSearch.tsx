"use client";

import React from "react";
import { IoSearch } from "react-icons/io5";

export default function HomeSearch() {
  return (
    <div className="border-border-color/80 relative h-[50px] w-[80%] rounded-lg border bg-white p-2 px-4 sm:w-[60%]">
      <button
        className="absolute top-0 right-0 h-full w-fit cursor-pointer rounded-2xl bg-white p-2"
        onClick={() => alert("아직 만드는중!")}
      >
        <IoSearch className="text-2xl text-black/70" />
      </button>
      <input className="size-full focus:outline-hidden" />
    </div>
  );
}
