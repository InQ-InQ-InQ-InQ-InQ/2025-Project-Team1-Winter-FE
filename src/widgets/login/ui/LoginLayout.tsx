import { Button, TextField } from "@/shared/ui";
import Image from "next/image";
import Link from "next/link";

import React from "react";

export default function LoginLayout() {
  return (
    <div className="relative flex h-[50%] w-[70%] flex-col justify-center gap-4 rounded-lg bg-white">
      <div className="absolute top-0 flex w-full justify-between px-24 pt-12">
        <span className="text-2xl font-bold">로그인</span>
        <Link href="/" className="prompt-extrabold text-3xl">
          SpotShare
        </Link>
      </div>
      <div className="z-10 flex flex-col gap-y-2 px-24">
        <TextField />
        <TextField />
      </div>
      <div className="absolute bottom-0 flex w-full justify-end px-24 pb-12">
        <Button name="로그인" />
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
