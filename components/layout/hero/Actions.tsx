"use client";
import { Button } from "@/components/ui/button";
import { HeroAction } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Actions({ actions }: { actions: HeroAction }) {
  const { label, type, fn, href, icon, variant, mobileIconOnly } = actions;
  return (
    <>
      {type === "button" ? (
        <Button
          variant={variant}
          className={`h-12 flex w-full lg:w-fit ${
            mobileIconOnly ? " border-primary-500 w-fit" : ""
          } lg: border-[#94A3B8]/20`}
        >
          {href ? (
            <Link
              href={href}
              className="flex gap-2 text-base font-semibold lg:font-bold justify-center items-center "
            >
              {icon ? (
                <Image
                  src={icon}
                  width={24}
                  height={24}
                  alt={label}
                  className={
                    mobileIconOnly ? "filter-primary lg:filter-none" : ""
                  }
                />
              ) : (
                ""
              )}
              <p className={mobileIconOnly ? "hidden lg:flex" : ""}>{label}</p>
            </Link>
          ) : (
            <div className="flex gap-2 text-base font-semibold lg:font-bold">
              {icon ? (
                <Image
                  src={icon}
                  width={24}
                  height={24}
                  alt={label}
                  className={
                    mobileIconOnly ? "filter-primary lg:filter-none" : ""
                  }
                />
              ) : (
                ""
              )}
              <p className={mobileIconOnly ? "hidden lg:flex" : ""}>{label}</p>
            </div>
          )}
        </Button>
      ) : (
        <>
          {href ? (
            <Link href={href}>
              {icon ? (
                <Image
                  src={icon}
                  width={24}
                  height={24}
                  alt={label}
                  className={
                    mobileIconOnly ? "filter-primary lg:filter-none" : ""
                  }
                />
              ) : (
                ""
              )}
              {mobileIconOnly ? "" : label}
            </Link>
          ) : (
            <>
              {icon ? (
                <Image
                  src={icon}
                  width={24}
                  height={24}
                  alt={label}
                  className={
                    mobileIconOnly ? "filter-primary lg:filter-none" : ""
                  }
                />
              ) : (
                ""
              )}
              {mobileIconOnly ? "" : label}
            </>
          )}
        </>
      )}
    </>
  );
}
