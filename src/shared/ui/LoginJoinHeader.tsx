import Link from "next/link";
import React from "react";

export default function LoginJoinHeader({ name }: { name: string }) {
  return (
    <div className="mb-2 flex w-full justify-between">
      <span className="text-2xl font-bold">{name}</span>
      <Link href="/" className="prompt-extrabold text-3xl">
        SpotShare
      </Link>
    </div>
  );
}
