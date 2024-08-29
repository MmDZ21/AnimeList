import Image from "next/image";
import React from "react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="w-full h-[293px] lg:h-[500px] relative">
        <Image
          priority
          src="/images/dashboard.webp"
          fill
          alt="anime"
          className="object-cover object-top"
        />
        <div className="absolute h-1/2 lg:h-full bottom-0 left-0 right-0 z-10 dark:bg-gradient-to-t dark:from-background dark:to-background/0"></div>
      </div>
      <div className="w-full flex flex-col gap-4 max-w-[1280px] pb-4"></div>
    </div>
  );
}
