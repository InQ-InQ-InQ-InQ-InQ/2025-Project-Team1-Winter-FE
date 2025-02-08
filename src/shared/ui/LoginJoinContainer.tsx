import Image from "next/image";
import React from "react";

export default function LoginJoinContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex w-[80%] flex-col justify-center gap-4 rounded-lg bg-white/60 shadow-lg backdrop-blur-md xl:w-[45%]">
      <div className="z-10 flex flex-col gap-y-2 px-12 py-24 md:px-24">
        {children}
      </div>
      <Image
        width="300"
        height="300"
        src="/images/spotshare-deco.png"
        alt="deco"
        className="absolute bottom-0 z-0 rounded-b-lg"
      />
    </div>
  );
}
