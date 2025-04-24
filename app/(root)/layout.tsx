import Footer from "@/components/layout/footer";
import dynamic from "next/dynamic";
const Header = dynamic(() => import('@/components/layout/header'), {
  loading: () => <p>Loading...</p>,
})
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
