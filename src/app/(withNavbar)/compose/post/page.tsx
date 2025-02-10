"use client";
import { ComposeLayout } from "@/widgets/compose/ui";
import React from "react";

export default function page() {
  return (
    <div className="flex h-[calc(100vh-136px)] w-full items-center justify-center">
      <ComposeLayout />
    </div>
  );
}
