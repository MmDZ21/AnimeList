"use client";
import { useNavMenus } from "@/hooks/useNavMenus";
import { useTranslation } from "@/i18n/client";
// import Link from "next/link";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { Separator } from "@/components/ui/separator";

import { genres, menuItems, years } from "@/constants";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex items-center gap-6">
      <Separator orientation="vertical" className="h-4" />
      {/* <div className="flex items-center gap-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base font-medium p-2 dark:text-white">
                گشت و گذار
              </NavigationMenuTrigger>
              <NavigationMenuContent
                onMouseLeave={() => setActiveTab("genres")}
              >
                <div className="w-[800px] px-3 py-4">
                  <Tabs
                    defaultValue="genres"
                    orientation="vertical"
                    value={activeTab}
                    onValueChange={setActiveTab}
                  >
                    <TabsList className="w-[200px] items-start gap-1">
                      <TabsTrigger
                        className="w-full h-12 rounded-lg p-1 flex gap-[10px] dark:data-[state=active]:bg-background"
                        value="genres"
                        onMouseEnter={() => setActiveTab("genres")}
                      >
                        <div className="p-2 flex justify-center items-center rounded-lg bg-[#242F3D]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 5H20"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M18 12H6"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8 19H16"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <p className="text-base font-medium">براساس ژانر</p>
                      </TabsTrigger>
                      <TabsTrigger
                        className="w-full h-12 rounded-lg p-1 flex gap-[10px] dark:data-[state=active]:bg-background"
                        value="years"
                        onMouseEnter={() => setActiveTab("years")}
                      >
                        <div className="p-2 flex justify-center items-center rounded-lg bg-[#242F3D]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                              stroke="white"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M15.9453 12.3948C15.7686 13.0215 14.9333 13.4644 13.2629 14.3502C11.648 15.2064 10.8406 15.6346 10.1899 15.4625C9.9209 15.3913 9.6758 15.2562 9.47812 15.0701C9 14.6198 9 13.7465 9 12C9 10.2535 9 9.38018 9.47812 8.92995C9.6758 8.74381 9.9209 8.60868 10.1899 8.53753C10.8406 8.36544 11.648 8.79357 13.2629 9.64983C14.9333 10.5356 15.7686 10.9785 15.9453 11.6052C16.0182 11.8639 16.0182 12.1361 15.9453 12.3948Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <p className="text-base font-medium">براساس سال</p>
                      </TabsTrigger>
                      <Link
                        href="/anime/movie"
                        className="flex w-full h-12 rounded-lg p-1 gap-[10px] items-center justify-start whitespace-nowrap text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-background hover:text-foreground hover:shadow-sm"
                      >
                        <div className="p-2 flex justify-center items-center rounded-lg bg-[#242F3D]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 5H20"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M18 12H6"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8 19H16"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <p className="text-base font-medium">سینمایی</p>
                      </Link>
                      <Link
                        href="/anime/ongoing"
                        className="flex w-full h-12 rounded-lg p-1 gap-[10px] items-center justify-start whitespace-nowrap text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-background hover:text-foreground hover:shadow-sm"
                      >
                        <div className="p-2 flex justify-center items-center rounded-lg bg-[#242F3D]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 5H20"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M18 12H6"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8 19H16"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <p className="text-base font-medium">در حال پخش</p>
                      </Link>
                    </TabsList>
                    <Separator
                      className="h-[204px] mt-1"
                      orientation="vertical"
                    />
                    <TabsContent value="genres">
                      <div className="grid grid-cols-3 gap-4">
                        {genres.map((item) => (
                          <Link
                            href={item.href!}
                            key={item.title}
                            className="w-44 h-10 rounded hover:bg-background flex items-center justify-center text-base font-medium"
                          >
                            {item.title}
                          </Link>
                        ))}
                        <Link
                          href="/anime/genre"
                          className="w-44 h-10 rounded hover:bg-background flex items-center justify-center text-base font-medium text-primary-500"
                        >
                          مشاهده بیشتر
                        </Link>
                      </div>
                    </TabsContent>
                    <TabsContent value="years">
                      <div className="grid grid-cols-3 gap-4">
                        {years.map((item) => (
                          <Link
                            href={`anime/year/${item}`}
                            key={item}
                            className="w-44 h-10 rounded hover:bg-background flex items-center justify-center text-base font-medium"
                          >
                            {item}
                          </Link>
                        ))}
                        <Link
                          href="/anime/year"
                          className="w-44 h-10 rounded hover:bg-background flex items-center justify-center text-base font-medium text-primary-500"
                        >
                          مشاهده بیشتر
                        </Link>
                      </div>
                    </TabsContent>
                    <TabsContent value="moviegenre">
                      <div className="grid grid-cols-3 gap-4">
                        {menuItems.map((item) => (
                          <Link
                            href="#"
                            key={item.label}
                            className="w-44 h-10 rounded hover:bg-background flex items-center justify-center text-base font-medium"
                          >
                            {item.label}
                            {item.count ? `(${item.count})` : ""}
                          </Link>
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="seriesgenre">
                      <div className="grid grid-cols-3 gap-4">
                        {menuItems.map((item) => (
                          <Link
                            href="#"
                            key={item.label}
                            className="w-44 h-10 rounded hover:bg-background flex items-center justify-center text-base font-medium"
                          >
                            {item.label}
                            {item.count ? `(${item.count})` : ""}
                          </Link>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div> */}
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>انیمه‌ها براساس ژانر</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid grid-cols-3 gap-4 w-[600px] p-4">
                {genres.map((item) => (
                  <Link
                    href={item.href!}
                    key={item.title}
                    className="w-44 h-10 rounded hover:bg-background flex items-center justify-center text-base font-medium"
                  >
                    {item.title}
                  </Link>
                ))}
                <Link
                  href="/anime/genre"
                  className="w-44 h-10 rounded hover:bg-background flex items-center justify-center text-base font-medium text-primary-500"
                >
                  مشاهده بیشتر
                </Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>انیمه‌ها براساس سال</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid grid-cols-3 gap-4 w-[600px] p-4">
                {years.map((item) => (
                  <Link
                    href={`/anime/year/${item}`}
                    key={item}
                    className="w-44 h-10 rounded hover:bg-background flex items-center justify-center text-base font-medium"
                  >
                    {item}
                  </Link>
                ))}
                <Link
                  href="/anime/year"
                  className="w-44 h-10 rounded hover:bg-background flex items-center justify-center text-base font-medium text-primary-500"
                >
                  مشاهده بیشتر
                </Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/anime/movies" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                انیمه‌های سینمایی
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/anime/ongoing" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                انیمه‌های در‌حال پخش
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* <div className="flex items-center gap-2">
        {navMenus.addition.map((menu) => (
          <Link
            key={menu.label}
            className="text-base font-medium p-2 dark:text-white"
            href={menu.href}
          >
            {menu.label}
          </Link>
        ))}
      </div> */}
    </nav>
  );
}
