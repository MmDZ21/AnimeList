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
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#17212B] sticky top-0 z-50 lg:static h-16 lg:h-[72px] w-full flex justify-between items-center px-6 lg:px-16">
      {/* logo */}
      {/* navbar */}
      <div className="w-full flex justify-between items-center lg:hidden">
        <div className="flex items-center gap-6 w-full">
          <MobileNav />
          <Logo className="text-primary-500" />
        </div>
        <div className="flex items-center gap-6">
          <Link href="/subscription">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.51819 10.3058C3.13013 9.23176 2.9361 8.69476 3.01884 8.35065C3.10933 7.97427 3.377 7.68084 3.71913 7.58296C4.03193 7.49346 4.51853 7.70973 5.49173 8.14227C6.35253 8.52486 6.78293 8.71615 7.18732 8.70551C7.63257 8.69379 8.06088 8.51524 8.4016 8.19931C8.71105 7.91237 8.91861 7.45513 9.33373 6.54064L10.2486 4.52525C11.0128 2.84175 11.3949 2 12 2C12.6051 2 12.9872 2.84175 13.7514 4.52525L14.6663 6.54064C15.0814 7.45513 15.289 7.91237 15.5984 8.19931C15.9391 8.51524 16.3674 8.69379 16.8127 8.70551C17.2171 8.71615 17.6475 8.52486 18.5083 8.14227C19.4815 7.70973 19.9681 7.49346 20.2809 7.58296C20.623 7.68084 20.8907 7.97427 20.9812 8.35065C21.0639 8.69476 20.8699 9.23176 20.4818 10.3057L18.8138 14.9222C18.1002 16.897 17.7435 17.8844 16.9968 18.4422C16.2502 19 15.2854 19 13.3558 19H10.6442C8.71459 19 7.74977 19 7.00315 18.4422C6.25654 17.8844 5.89977 16.897 5.18622 14.9222L3.51819 10.3058Z"
                stroke="#FFC107"
                stroke-width="2"
              />
              <path
                d="M12 14H12.009"
                stroke="#FFC107"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7 22H17"
                stroke="#FFC107"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </Link>
          <Search />
          <Profile />
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-8 lg:max-w-screen-4xl">
        <Logo className="text-primary-500" />
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
