import Image from "next/image";
import React from "react";
import { cn } from "../utils";

export default function LoginJoinContainer({
  children,
  image = true,
}: {
  children: React.ReactNode;
  image?: boolean;
}) {
  return (
    <div className="relative flex w-[80%] flex-col justify-center gap-4 rounded-lg bg-white/80 shadow-lg backdrop-blur-md md:w-[55%] xl:w-[45%]">
      <div className="z-10 flex flex-col gap-y-2 px-12 py-24 md:px-24">
        {children}
      </div>
      <Image
        width="300"
        height="300"
        src="/images/spotshare-deco.png"
        alt="deco"
        className={cn(
          image ? "absolute" : "hidden",
          "bottom-0 z-0 rounded-b-lg",
        )}
      />
    </div>
  );
}
