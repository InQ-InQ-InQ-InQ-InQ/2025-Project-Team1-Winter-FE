"use client";

import ProfileModal from "./ProfileModal";
import { cn } from "@/shared/utils";
import { useModal } from "../model";

interface ProfileProps {
  className?: string;
  flex?: boolean;
}

export default function ProfileButton({
  className,
  flex = false,
}: ProfileProps) {
  const { visible, setVisible, modalRef } = useModal();

  return (
    <div
      className={cn("z-10 w-fit", className, flex ? "flex" : "absolute")}
      onClick={() => setVisible((prev) => !prev)}
      // onMouseEnter={() => setVisible(true)}
      // onMouseLeave={() => setVisible(false)}
    >
      <button className="size-8 cursor-pointer rounded-[50%] border bg-white">
        K
      </button>
      <div
        ref={modalRef}
        className={cn(
          "h-fit w-30",
          visible ? "absolute" : "hidden",
          flex ? "top-14 right-2" : "top-9 right-0",
        )}
      >
        <ProfileModal />
      </div>
    </div>
  );
}
