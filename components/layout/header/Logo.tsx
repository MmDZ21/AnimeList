import { cn } from "@/lib/utils";
import React from "react";

export default function Logo({ className }: { className?: string }) {
  return (
    <div>
      <h1 className="text-white font-black flex gap-0">
        انیمه <span className={cn("", className)}>لیست</span>
      </h1>
    </div>
  );
}
