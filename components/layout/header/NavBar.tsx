"use client";
import { useNavMenus } from "@/hooks/useNavMenus";
import { useTranslation } from "@/i18n/client";
import Link from "next/link";
import React from "react";
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

export default function NavBar() {
  const { t } = useTranslation("navbar");
  const navMenus = useNavMenus(t);

  return (
    <nav className="flex items-center gap-2">
      <div className="flex items-center gap-2">
        {navMenus.main.map((menu) =>
          menu.subMenus ? (
            <NavigationMenu key={menu.label}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-medium p-2 dark:bg-[#17212B] dark:text-white ">
                    {menu.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="dark:bg-[#17212B]">
                    <ul className="flex flex-col items-center p-2">
                      {menu.subMenus?.map((submenu) => (
                        <li key={submenu.label}>
                          <Link href={submenu.href} passHref className="w-full">
                            <NavigationMenuLink
                              className={`${navigationMenuTriggerStyle()} text-sm dark:hover:bg-primary-500 dark:bg-[#17212B] `}
                            >
                              {submenu.label}
                            </NavigationMenuLink>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          ) : (
            <Link
              key={menu.label}
              className="text-base font-medium p-2 dark:text-white"
              href={menu.href}
            >
              {menu.label}
            </Link>
          )
        )}
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
