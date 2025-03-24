import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {

  return (
    <Link href="/" className="flex gap-0 items-center">
      
        <h1 className="text-white font-black text-lg lg:text-xl">
           انیم<span className={cn("", className)}> آپ</span>
        </h1>
      
    </Link>
  );
}
