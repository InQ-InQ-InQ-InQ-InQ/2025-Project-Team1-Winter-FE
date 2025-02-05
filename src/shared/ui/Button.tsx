import { ComponentProps } from "react";
import { cn } from "../utils";

interface ButtonProps extends ComponentProps<"button"> {
  name: string;
  className?: string;
}

export default function Button({ name, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "hover:bg-sub z-10 w-fit cursor-pointer rounded-lg border bg-white p-2 px-4 transition delay-100 ease-in-out hover:text-white focus:outline-hidden",
        className,
      )}
      {...props}
    >
      {name}
    </button>
  );
}
