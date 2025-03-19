import React from "react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

import Link from "next/link";

export default function DownloadWrapper({
  links,
}: {
  links: {
    link: string;
    quality: string;
    size: string;
    ep: string;
    subtitle: string;
  };
}) {
  return (
    <div className="bg-background text-base font-semibold px-4 py-3 flex flex-col lg:flex-row gap-[10px] justify-between items-center rounded-lg">
      <div className="flex flex-col lg:flex-row gap-[10px] items-center">
        <h6 className="text-primary-500">{links.ep}</h6>
        <Separator orientation="vertical" className="h-4 hidden lg:block" />
        <div className="flex gap-[10px]">
          <p>کیفیت: {links.quality}</p>
          <Separator orientation="vertical" className="h-4" />
          {links.size !== "DIRECTORY" && <p>حجم: {links.size}</p>}
        </div>
      </div>
      <div className="flex gap-4">
        <Button className="bg-[#17212B] px-6 py-1 rounded gap-2" asChild>
          <Link href={links.link}>
            <div className="flex justify-center items-center size-8">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.0007 16.3335L4.33398 9.66683L6.20065 7.7335L9.66732 11.2002V0.333496H12.334V11.2002L15.8007 7.7335L17.6673 9.66683L11.0007 16.3335ZM3.00065 21.6668C2.26732 21.6668 1.63954 21.4057 1.11732 20.8835C0.595096 20.3613 0.333984 19.7335 0.333984 19.0002V15.0002H3.00065V19.0002H19.0007V15.0002H21.6673V19.0002C21.6673 19.7335 21.4062 20.3613 20.884 20.8835C20.3618 21.4057 19.734 21.6668 19.0007 21.6668H3.00065Z"
                  fill="white"
                />
              </svg>
            </div>
            <p>دانلود</p>
          </Link>
        </Button>
        <Button className="bg-[#17212B] px-6 py-1 rounded gap-2" asChild>
          <Link href={links.subtitle}>
            <div className="flex justify-center items-center size-8">
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.66667 21.6668C1.93333 21.6668 1.30556 21.4057 0.783333 20.8835C0.261111 20.3613 0 19.7335 0 19.0002V3.00016C0 2.26683 0.261111 1.63905 0.783333 1.11683C1.30556 0.594607 1.93333 0.333496 2.66667 0.333496H21.3333C22.0667 0.333496 22.6944 0.594607 23.2167 1.11683C23.7389 1.63905 24 2.26683 24 3.00016V19.0002C24 19.7335 23.7389 20.3613 23.2167 20.8835C22.6944 21.4057 22.0667 21.6668 21.3333 21.6668H2.66667ZM5.33333 15.0002H9.33333C9.71111 15.0002 10.0278 14.8724 10.2833 14.6168C10.5389 14.3613 10.6667 14.0446 10.6667 13.6668V12.3335H8.66667V13.0002H6V9.00016H8.66667V9.66683H10.6667V8.3335C10.6667 7.95572 10.5389 7.63905 10.2833 7.3835C10.0278 7.12794 9.71111 7.00016 9.33333 7.00016H5.33333C4.95556 7.00016 4.63889 7.12794 4.38333 7.3835C4.12778 7.63905 4 7.95572 4 8.3335V13.6668C4 14.0446 4.12778 14.3613 4.38333 14.6168C4.63889 14.8724 4.95556 15.0002 5.33333 15.0002ZM14.6667 15.0002H18.6667C19.0444 15.0002 19.3611 14.8724 19.6167 14.6168C19.8722 14.3613 20 14.0446 20 13.6668V12.3335H18V13.0002H15.3333V9.00016H18V9.66683H20V8.3335C20 7.95572 19.8722 7.63905 19.6167 7.3835C19.3611 7.12794 19.0444 7.00016 18.6667 7.00016H14.6667C14.2889 7.00016 13.9722 7.12794 13.7167 7.3835C13.4611 7.63905 13.3333 7.95572 13.3333 8.3335V13.6668C13.3333 14.0446 13.4611 14.3613 13.7167 14.6168C13.9722 14.8724 14.2889 15.0002 14.6667 15.0002Z"
                  fill="white"
                />
              </svg>
            </div>
            <p>زیرنویس</p>
          </Link>
        </Button>
        {/* <Button className="bg-[#17212B] px-6 py-1 rounded gap-2" asChild>
          <Link href="#">
            <div className="flex justify-center items-center size-8">
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.666016 19.3332V0.666504L15.3327 9.99984L0.666016 19.3332Z"
                  fill="white"
                />
              </svg>
            </div>
            <p>پخش آنلاین</p>
          </Link>
        </Button> */}
      </div>
    </div>
  );
}
