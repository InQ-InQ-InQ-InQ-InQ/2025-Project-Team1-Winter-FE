import { PostView } from "@/shared/ui";
import React from "react";

export default function SearchLayout() {
  return (
    <div className="flex size-full flex-col">
      <p className="p-4 text-xl font-extrabold md:text-2xl">
        &quot;&quot; 에 대한 검색 결과입니다.
      </p>
      <PostView />
    </div>
  );
}
