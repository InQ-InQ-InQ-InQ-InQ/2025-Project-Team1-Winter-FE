"use client";

import React, { useState } from "react";
import { IoIosHeartEmpty, IoIosHeart, IoMdShare } from "react-icons/io";

export default function Post() {
  return (
    <div className="flex h-60 flex-col rounded-lg border">
      <div className="bg-bgGray flex-1 rounded-t-lg">photo</div>
      <PostButton />
    </div>
  );
}

function PostButton() {
  const [liked, setLiked] = useState(false);
  return (
    <div className="flex w-full justify-between rounded-b-lg bg-white p-2">
      <div className="flex justify-center gap-x-1">
        <button
          className="hover:text-gray cursor-pointer"
          onClick={() => setLiked((prev) => !prev)}
        >
          {liked ? <IoIosHeart color="red" /> : <IoIosHeartEmpty />}
        </button>
        <span className="text-sm">1</span>
      </div>
      <IoMdShare />
    </div>
  );
}
