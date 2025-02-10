import Link from "next/link";
import React from "react";

export default function LoginJoinHeader({ name }: { name: string }) {
  return (
    <div className="mb-2 flex w-full justify-between">
      <span className="h2">{name}</span>
      <Link href="/" className="prompt-extrabold hidden text-3xl md:block">
        SpotShare
      </Link>
    </div>
  );
}
