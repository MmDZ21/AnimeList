import React from "react";

import Logo from "./Logo";
import NavBar from "./NavBar";
import ChangeLocale from "@/components/common/ChangeLocale";
import Search from "./Search";
import LoginBtn from "./LoginBtn";
import SubscriptionBtn from "./SubscriptionBtn";
import { Separator } from "@/components/ui/separator";
import MobileNav from "./MobileNav";
import Profile from "./Profile";

export default function Header() {
  return (
    <header className="bg-[#17212B] sticky top-0 z-10 lg:static h-16 lg:h-[72px] w-full flex justify-between items-center px-6 lg:px-16">
      {/* logo */}
      {/* navbar */}
      <div className="w-full flex justify-between items-center lg:hidden">
        <div className="flex items-center gap-6 w-full">
          <MobileNav />
          <Logo />
        </div>
        <div className="flex items-center gap-6">
          <Search />
          <Profile />
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-8 lg:max-w-screen-4xl">
        <Logo className="text-white lg:text-primary-500" />
        <NavBar />
      </div>
      {/* search */}
      {/* login */}
      {/* subscription */}
      <div className="hidden lg:flex items-center gap-6">
        <ChangeLocale />
        <Search />
        <Separator orientation="vertical" className="h-4" />
        <div className="flex items-center gap-3">
          <LoginBtn />
          <SubscriptionBtn />
        </div>
      </div>
    </header>
  );
}
