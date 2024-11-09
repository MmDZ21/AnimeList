"use client";
import { useNavMenus } from "@/hooks/useNavMenus";
import { useTranslation } from "@/i18n/client";
import Link from "next/link";
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/navbar-tabs";
import { menuItems } from "@/constants";

export default function NavBar() {
  const { t } = useTranslation("navbar");
  const navMenus = useNavMenus(t);
  const [activeTab, setActiveTab] = useState("categories");
  return (
    <nav className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base font-medium p-2 dark:text-white">
                گشت و گذار
              </NavigationMenuTrigger>
              <NavigationMenuContent
                onMouseLeave={() => setActiveTab("categories")}
              >
                <div className="w-[800px] px-3 py-4">
                  <Tabs
                    defaultValue="categories"
                    orientation="vertical"
                    value={activeTab}
                    onValueChange={setActiveTab}
                  >
                    <TabsList className="w-[200px] items-start gap-1">
                      <TabsTrigger
                        className="w-full h-12 rounded-lg p-1 flex gap-[10px] dark:data-[state=active]:bg-background"
                        value="categories"
                        onMouseEnter={() => setActiveTab("categories")}
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
                        <p className="text-base font-medium">دسته‌بندی‌ها</p>
                      </TabsTrigger>
                      <TabsTrigger
                        className="w-full h-12 rounded-lg p-1 flex gap-[10px] dark:data-[state=active]:bg-background"
                        value="animegenre"
                        onMouseEnter={() => setActiveTab("animegenre")}
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
                        <p className="text-base font-medium">ژانر انیمه</p>
                      </TabsTrigger>
                      <TabsTrigger
                        className="w-full h-12 rounded-lg p-1 flex gap-[10px] dark:data-[state=active]:bg-background"
                        value="moviegenre"
                        onMouseEnter={() => setActiveTab("moviegenre")}
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
                              d="M12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28248 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28248 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5Z"
                              stroke="white"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M7 21.5V2.5"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M17 21.5V2.5"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M17 12H7"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7 16H3M7 8H3"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M21 16H17M21 8H17"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <p className="text-base font-medium">ژانر فیلم</p>
                      </TabsTrigger>
                      <TabsTrigger
                        className="w-full h-12 rounded-lg p-1 flex gap-[10px] dark:data-[state=active]:bg-background"
                        value="seriesgenre"
                        onMouseEnter={() => setActiveTab("seriesgenre")}
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
                              d="M2 14C2 10.2288 2 8.34315 3.17157 7.17157C4.34315 6 6.22876 6 10 6H14C17.7712 6 19.6569 6 20.8284 7.17157C22 8.34315 22 10.2288 22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M9 3L12 6L16 2"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <p className="text-base font-medium">ژانر سریال</p>
                      </TabsTrigger>
                    </TabsList>
                    <Separator
                      className="h-[204px] mt-1"
                      orientation="vertical"
                    />
                    <TabsContent value="categories">
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
                    <TabsContent value="animegenre">
                      {" "}
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
                    <TabsContent value="moviegenre">
                      {" "}
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
                      {" "}
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
      </div>
      <Separator orientation="vertical" className="h-4" />

      <div className="flex items-center gap-2">
        {navMenus.addition.map((menu) => (
          <Link
            key={menu.label}
            className="text-base font-medium p-2 dark:text-white"
            href={menu.href}
          >
            {menu.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
