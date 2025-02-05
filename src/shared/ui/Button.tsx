import React from "react";

export default function Button({ name }: { name: string }) {
  return (
    <button className="hover:bg-primary-200 z-10 w-fit cursor-pointer rounded-lg border bg-white p-2 px-4">
      {name}
    </button>
  );
}
