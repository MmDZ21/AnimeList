import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Image from "next/image";
import React from "react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      {/* Dashboard Header Image */}
      <div className="w-full h-[293px] lg:h-[500px] relative">
        <Image
          priority
          src="/images/dashboard.webp"
          fill
          alt="anime"
          className="object-cover object-top"
        />
        <div className="absolute h-1/2 lg:h-full bottom-0 left-0 right-0 z-10  bg-gradient-to-t  from-background  to-background/0"></div>
      </div>
      {children}
    </div>
  );
}
