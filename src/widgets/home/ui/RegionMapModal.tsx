import React, { Dispatch, SetStateAction } from "react";
import { IoClose } from "react-icons/io5";

import { cn } from "@/shared/utils";
import { Region } from "@/widgets/home/types";
import Map from "./Map";

interface RegionModalProps {
  title: Region;

  visible: boolean;
  ref: React.RefObject<HTMLDivElement | null>;
  setVisible: Dispatch<SetStateAction<boolean>>;
  setTitle: Dispatch<SetStateAction<Region | "">>;
}

export default function RegionMapModal({
  title,
  visible,
  ref,
  setVisible,
  setTitle,
}: RegionModalProps) {
  return (
    <div
      className={cn(
        "top-0 left-0 z-30 size-full cursor-pointer bg-black/10 backdrop-blur-sm",
        visible ? "fixed" : "hidden",
      )}
    >
      <div
        ref={ref}
        className="fixed top-1/2 left-[50%] z-40 flex h-[60%] w-[70%] translate-x-[-50%] translate-y-[-50%] flex-col rounded-lg border bg-white p-4 md:w-[60%]"
      >
        <div className="mb-2 flex justify-between">
          <span className="text-xl">{title}</span>
          <button
            onClick={() => {
              setVisible(false);
              setTitle("");
            }}
            className="cursor-pointer"
          >
            <IoClose className="text-xl" />
          </button>
        </div>
        <Map key={title} title={title} />
      </div>
    </div>
  );
}
