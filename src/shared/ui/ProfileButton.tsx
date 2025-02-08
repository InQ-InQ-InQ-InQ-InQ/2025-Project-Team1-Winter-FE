"use client";

import React, { useState } from "react";
import ProfileModal from "./ProfileModal";
import { cn } from "@/shared/utils";

interface ProfileProps {
  className?: string;
  flex?: boolean;
}

export default function ProfileButton({
  className,
  flex = false,
}: ProfileProps) {
  const [isVisible, setVisible] = useState(false);
  return (
    <div
      className={cn("z-10 w-fit", className, flex ? "flex" : "absolute")}
      onClick={() => setVisible(!isVisible)}
      // onMouseEnter={() => setVisible(true)}
      // onMouseLeave={() => setVisible(false)}
    >
      <button className="border-border-color/80 size-8 cursor-pointer rounded-[50%] border bg-white">
        K
      </button>
      <div
        className={cn(
          "h-fit w-30",
          isVisible ? "absolute" : "hidden",
          flex ? "top-14 right-2" : "top-9 right-0",
        )}
      >
        <ProfileModal />
      </div>
    </div>
  );
}
