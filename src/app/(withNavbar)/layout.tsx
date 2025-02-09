import { Nav } from "@/widgets/menu/ui";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <div className="flex size-full p-4 pb-0">{children}</div>
      <footer className="bottom-0 mt-auto flex-shrink-0 p-4 py-6 text-center text-gray-600">
        © 2024 SpotShare. All rights reserved.
      </footer>
    </div>
  );
}
