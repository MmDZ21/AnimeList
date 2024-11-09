"use client";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/mobile-menu-sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNavMenus } from "@/hooks/useNavMenus";
import { useTranslation } from "@/i18n/client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React, { useState } from "react";
import { menuItems } from "@/constants";

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
        className="flex flex-col gap-4 dark:bg-background h-full lg:hidden"
      >
        <SheetTitle className="hidden"></SheetTitle>

        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger className="bg-[#182533] flex justify-between py-2 ps-2 pe-4">
              <div className="flex gap-[10px] items-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="40" rx="8" fill="#242F3D" />
                  <path
                    d="M12 13H28"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M26 20H14"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 27H24"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-base font-medium">دسته‌بندی‌ها</p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 py-4">
              {menuItems.map((menu) => (
                <Link
                  href="#"
                  key={menu.label}
                  className="h-10 w-full px-3 text-base font-medium flex items-center"
                >
                  {menu.label} {menu.count ? `(${menu.count})` : ""}
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="bg-[#182533] flex justify-between py-2 ps-2 pe-4">
              <div className="flex gap-[10px] items-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="40" rx="8" fill="#242F3D" />
                  <path
                    d="M20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30Z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M23.9453 20.3948C23.7686 21.0215 22.9333 21.4644 21.2629 22.3502C19.648 23.2064 18.8406 23.6346 18.1899 23.4625C17.9209 23.3913 17.6758 23.2562 17.4781 23.0701C17 22.6198 17 21.7465 17 20C17 18.2535 17 17.3802 17.4781 16.9299C17.6758 16.7438 17.9209 16.6087 18.1899 16.5375C18.8406 16.3654 19.648 16.7936 21.2629 17.6498C22.9333 18.5356 23.7686 18.9785 23.9453 19.6052C24.0182 19.8639 24.0182 20.1361 23.9453 20.3948Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>

                <p className="text-base font-medium">ژانر انیمه</p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 py-4">
              {menuItems.map((menu) => (
                <Link
                  href="#"
                  key={menu.label}
                  className="h-10 w-full px-3 text-base font-medium flex items-center"
                >
                  {menu.label} {menu.count ? `(${menu.count})` : ""}
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="bg-[#182533] flex justify-between py-2 ps-2 pe-4">
              <div className="flex gap-[10px] items-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="40" rx="8" fill="#242F3D" />
                  <path
                    d="M20 29.5C15.5217 29.5 13.2825 29.5 11.8912 28.1088C10.5 26.7175 10.5 24.4783 10.5 20C10.5 15.5217 10.5 13.2825 11.8912 11.8912C13.2825 10.5 15.5217 10.5 20 10.5C24.4783 10.5 26.7175 10.5 28.1088 11.8912C29.5 13.2825 29.5 15.5217 29.5 20C29.5 24.4783 29.5 26.7175 28.1088 28.1088C26.7175 29.5 24.4783 29.5 20 29.5Z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M15 29.5V10.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25 29.5V10.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25 20H15"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 24H11M15 16H11"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M29 24H25M29 16H25"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p className="text-base font-medium">ژانر فیلم</p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 py-4">
              {menuItems.map((menu) => (
                <Link
                  href="#"
                  key={menu.label}
                  className="h-10 w-full px-3 text-base font-medium flex items-center"
                >
                  {menu.label} {menu.count ? `(${menu.count})` : ""}
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="bg-[#182533] flex justify-between py-2 ps-2 pe-4">
              <div className="flex gap-[10px] items-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="40" rx="8" fill="#242F3D" />
                  <path
                    d="M10 22C10 18.2288 10 16.3431 11.1716 15.1716C12.3432 14 14.2288 14 18 14H22C25.7712 14 27.6569 14 28.8284 15.1716C30 16.3431 30 18.2288 30 22C30 25.7712 30 27.6569 28.8284 28.8284C27.6569 30 25.7712 30 22 30H18C14.2288 30 12.3432 30 11.1716 28.8284C10 27.6569 10 25.7712 10 22Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M17 11L20 14L24 10"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p className="text-base font-medium">ژانر سریال</p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 py-4">
              {menuItems.map((menu) => (
                <Link
                  href="#"
                  key={menu.label}
                  className="h-10 w-full px-3 text-base font-medium flex items-center"
                >
                  {menu.label} {menu.count ? `(${menu.count})` : ""}
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SheetContent>
    </Sheet>
  );
}
