import { Button, TextField } from "@/shared/ui";
import Image from "next/image";
import Link from "next/link";

import React from "react";

export default function LoginLayout() {
  return (
    <div className="relative flex h-[50%] w-[80%] flex-col justify-center gap-4 rounded-lg bg-white xl:w-[45%]">
      <LoginHeader />
      <div className="z-10 flex flex-col gap-y-2 px-12 md:px-24">
        <TextField />
        <TextField />
        <LoginFooter />
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

function LoginHeader() {
  return (
    <div className="flex w-full justify-between px-12 md:px-24">
      <span className="text-2xl font-bold">로그인</span>
      <Link href="/" className="prompt-extrabold text-3xl">
        SpotShare
      </Link>
    </div>
  );
}

function LoginFooter() {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex w-[55%] justify-between">
        <Link href="/join">
          <span className="text-gray text-md cursor-pointer hover:text-gray-600">
            회원가입
          </span>
        </Link>
        <span className="text-gray text-md hidden lg:block">|</span>
        <button className="text-gray text-md hidden cursor-pointer hover:text-gray-600 lg:block">
          비밀번호를 잊어버렸어요!
        </button>
      </div>
      <Button name="로그인" />
    </div>
  );
}
