"use client";

import Link from "next/link";
import React from "react";
import { cn } from "../utils";
import { useRouter } from "next/navigation";
import { IoIosClose } from "react-icons/io";

export default function LoginJoinHeader({
  name,
  logo = true,
}: {
  name: string;
  logo?: boolean;
}) {
  const router = useRouter();

  return (
    <div className="mb-2 flex w-full justify-between">
      <span className="h2">{name}</span>
      {logo ? (
        <Link
          href="/"
          className={cn(
            logo ? "hidden md:block" : "hidden",
            "prompt-extrabold text-3xl",
          )}
        >
          SpotShare
        </Link>
      ) : (
        <button onClick={() => router.back()} className="cursor-pointer">
          <IoIosClose size={32} />
        </button>
      )}
    </div>
  );
}
