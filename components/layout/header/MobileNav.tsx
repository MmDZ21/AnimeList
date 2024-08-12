"use client";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/mobile-menu-sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNavMenus } from "@/hooks/useNavMenus";
import { useTranslation } from "@/i18n/client";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React, { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState<boolean>(false);
  const { t } = useTranslation("navbar");
  const navMenus = useNavMenus(t);
  return (
    <Sheet onOpenChange={() => setOpen((prev) => !prev)}>
      <SheetTrigger>
        <HamburgerMenuIcon
          className={`size-6  ${open ? " hidden" : "visible"}`}
        />
        <Cross2Icon className={`size-6 ${open ? "visible " : "hidden"}`} />
      </SheetTrigger>
      <SheetContent
        side="custom"
        className="flex flex-col gap-4 dark:bg-[#121212] h-3/4 lg:hidden"
      >
        <ScrollArea className="flex flex-col">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <p className="dark:text-[#979CA6] font-medium text-sm">
                گشت‌و‌گذار
              </p>
              <ul className="flex flex-col gap-3">
                {navMenus.addition.map((menu) => (
                  <li key={menu.label}>
                    <Link href={menu.href} className="text-base">
                      {menu.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              {navMenus.main.map((menu) => (
                <div key={menu.label} className="flex flex-col gap-4">
                  <p className="dark:text-[#979CA6] font-medium text-sm">
                    {menu.label}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {menu.subMenus?.map((menu) => (
                      <li key={menu.label}>
                        <Link href={menu.href} className="text-base">
                          {menu.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
