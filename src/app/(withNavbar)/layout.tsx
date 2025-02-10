import { Nav } from "@/widgets/menu/ui";
import React from "react";

export default function layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal?: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <div className="flex size-full p-4 pb-0">
        {children}
        {modal}
      </div>
      <footer className="mt-auto flex-shrink-0 p-4 py-6 text-center text-gray-600">
        © 2024 SpotShare. All rights reserved.
      </footer>
    </div>
  );
}
