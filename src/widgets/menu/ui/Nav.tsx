import { ProfileButton } from "@/shared/ui";
import Link from "next/link";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";

export default function Nav() {
  return (
    <nav className="sticky top-0 w-full bg-white">
      <div className="flex h-12 w-full items-center justify-between px-4">
        <Link href="/">
          <span className="prompt-extrabold text-2xl">SpotShare</span>
        </Link>
        <div className="flex gap-x-2">
          <Link href="/">
            <IoAddSharp className="size-7.5 pt-1" />
          </Link>
          <Link href="/">
            <IoIosSearch className="size-7 pt-1" />
          </Link>
          <ProfileButton flex={true} />
        </div>
      </div>
    </nav>
  );
}
