import { User } from "@/types/types";
import Image from "next/image";
import React from "react";
interface BlogCardProps {
  user: User;
  createdAt: string;
  title: string;
  image: string;
}
export default function BlogCard({ blog }: { blog: BlogCardProps }) {
  return (
    <div
      className={`h-[300px] flex flex-col w-full px-4 py-6 gap-2 justify-end bg-cover bg-center rounded-2xl`}
      style={{
        backgroundImage: `linear-gradient(to top, hsla(210,30%,13%,1), hsla(210,30%,13%,0)), url(${blog.image})`,
      }}
    >
      <div className="flex gap-2 items-center">
        <div className="size-6 rounded-full relative">
          <Image
            src={blog.user.avatar}
            alt={blog.user.name}
            fill
            className="object-cover object-center rounded-full"
          />
        </div>
        <p className="text-[#979CA6] text-sm font-normal">{blog.user.name}</p>
        <div className="size-1 rounded-full bg-[#979CA6]"></div>
        <div className="text-sm font-normal text-[#B5B8BF]">
          {blog.createdAt}
        </div>
      </div>
      <h3 className="text-[#F0F1F2] text-lg font-bold">{blog.title}</h3>
    </div>
  );
}
