import React from "react";
import Post from "./Post";

export default function PostView() {
  return (
    <div className="grid size-full flex-1 grid-cols-2 gap-4 bg-white p-4 md:grid-cols-4 lg:grid-cols-6">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
