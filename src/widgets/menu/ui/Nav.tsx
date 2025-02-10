"use client";

import Link from "next/link";
import { ProfileButton } from "@/shared/ui";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";
import { cn } from "@/shared/utils";

export default function Nav() {
  const [opened, setOpened] = useState(false);
  return (
    <nav className="sticky top-0 w-full bg-white">
      <div className="flex h-12 w-full items-center justify-between px-4">
        <Link href="/">
          <span className="prompt-extrabold text-2xl">SpotShare</span>
        </Link>
        <div className="flex items-center gap-x-2">
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            className={cn(
              "w-full rounded-lg border px-2 py-1 text-sm focus:outline-none",
              opened ? "block" : "hidden",
            )}
          />
          <button
            className="cursor-pointer"
            onClick={() => setOpened((prev) => !prev)}
          >
            <IoIosSearch size={24} className="hover:text-gray" />
          </button>
          <Link href="/compose/post">
            <IoAddSharp size={24} className="hover:text-gray" />
          </Link>
          <ProfileButton flex={true} />
        </div>
      </div>
    </nav>
  );
}
