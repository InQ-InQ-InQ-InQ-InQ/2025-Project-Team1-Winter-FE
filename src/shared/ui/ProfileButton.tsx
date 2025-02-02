"use client";

import React, { useState } from "react";
import ProfileModal from "./ProfileModal";
import { cn } from "@/shared/utils";

interface ProfileProps {
  className?: string;
}

export default function ProfileButton({ className }: ProfileProps) {
  const [isVisible, setVisible] = useState(false);
  return (
    <div
      className={cn("absolute w-fit", className)}
      onClick={() => setVisible(!isVisible)}
      // onMouseEnter={() => setVisible(true)}
      // onMouseLeave={() => setVisible(false)}
    >
      <button className="border-border-color/80 size-8 cursor-pointer rounded-[50%] border bg-white">
        K
      </button>
      <div
        className={cn(
          "top-9 right-0 h-fit w-30",
          isVisible ? "absolute" : "hidden",
        )}
      >
        <ProfileModal />
      </div>
    </div>
  );
}
