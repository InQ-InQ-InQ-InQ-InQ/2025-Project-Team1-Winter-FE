import { SharedModalContainer, SharedModalHeader } from "@/shared/ui";
import React from "react";

export default function ComposeLayout() {
  return (
    <SharedModalContainer>
      <SharedModalHeader name="게시물 작성" logo={false} />
      <form></form>
    </SharedModalContainer>
  );
}
