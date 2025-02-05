import React from "react";

export default function Button({ name }: { name: string }) {
  return (
    <button className="hover:bg-sub z-10 w-fit cursor-pointer rounded-lg border bg-white p-2 px-4 transition delay-100 ease-in-out hover:text-white focus:outline-hidden">
      {name}
    </button>
  );
}
