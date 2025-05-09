import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import React from "react";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <Header />
        {children}
      <Footer />
    </div>
  );
}
