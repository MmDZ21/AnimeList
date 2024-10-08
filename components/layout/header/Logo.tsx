import { getLocale } from "@/i18n/server";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function Logo({ className }: { className?: string }) {
  const locale = getLocale();
  return (
    <Link href="/" className="flex gap-0 items-center justify-center">
      {locale === "fa" ? (
        <h1 className="text-white font-black text-lg lg:text-xl">
          انیمه‌<span className={cn("", className)}>لیست</span>
        </h1>
      ) : (
        <h1 className="text-white font-black text-lg lg:text-xl">
          Anime <span className={cn("", className)}>List</span>
        </h1>
      )}
    </Link>
  );
}
