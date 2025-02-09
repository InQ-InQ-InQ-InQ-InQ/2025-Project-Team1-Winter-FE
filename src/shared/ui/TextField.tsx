import React from "react";

interface TextFieldProps {
  placeholder: string;
}

export default function TextField({ placeholder }: TextFieldProps) {
  return (
    <input
      className="focus:border-sub h-10 w-full rounded-lg border bg-white/80 p-3 transition delay-100 ease-in-out focus:outline-hidden"
      placeholder={placeholder}
    />
  );
}
