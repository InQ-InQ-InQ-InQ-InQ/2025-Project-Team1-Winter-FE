import { LoginLayout } from "@/widgets/login/ui";
import React from "react";

export default function page() {
  return (
    <div
      className="flex h-screen w-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/scenery.png")' }}
    >
      <LoginLayout />
    </div>
  );
}
