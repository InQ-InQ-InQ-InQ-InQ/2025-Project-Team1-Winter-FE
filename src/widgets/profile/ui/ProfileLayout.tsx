import { Post } from "@/shared/ui";
import React, { type ReactNode } from "react";
import { CONTENT } from "@/widgets/profile/model";

export default function ProfileLayout({ id }: { id: string }) {
  const ProfileHeader = (): ReactNode => (
    <div className="flex w-full gap-x-4 bg-white px-18 py-10">
      <div className="flex size-12 items-center justify-center rounded-[50%] border bg-white text-2xl md:size-30 md:text-6xl">
        K
      </div>
      <div className="flex h-full flex-col justify-center">
        <p className="text-4xl font-bold">{id}</p>
        <p className="text-gray font-medium">@{id}</p>
        <button className="mt-2 cursor-pointer rounded-md border py-1 transition duration-300 ease-in-out hover:bg-gray-600 hover:text-white">
          프로필 편집
        </button>
      </div>
    </div>
  );

  const infoContent = CONTENT;

  const ProfileInfo = (): ReactNode => (
    <div className="bg-bgGray-50 flex gap-x-4 px-18 py-6 text-lg">
      {infoContent.map((info) => (
        <div className="text-center" key={info}>
          <p className="font-bold">{info}</p>
          <p>1</p>
        </div>
      ))}
    </div>
  );

  const ProfilePosts = (): ReactNode => (
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

  return (
    <div className="size-full flex-col">
      <ProfileHeader />
      <ProfileInfo />
      <ProfilePosts />
    </div>
  );
}
