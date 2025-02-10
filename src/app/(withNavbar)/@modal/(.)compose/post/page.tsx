import { ComposeLayout } from "@/widgets/compose/ui";
import React from "react";

export default function page() {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/10 backdrop-blur-sm">
      <ComposeLayout />
    </div>
  );
}
