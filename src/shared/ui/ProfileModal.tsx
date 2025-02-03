import Link from "next/link";
import React from "react";

export default function ProfileModal() {
  return (
    <div className="flex size-full flex-col gap-y-1 rounded-md bg-white p-2 px-4 focus:outline-hidden">
      <Link href="/profile">내 페이지</Link>
      <Link href="/">로그인</Link>
    </div>
  );
}
