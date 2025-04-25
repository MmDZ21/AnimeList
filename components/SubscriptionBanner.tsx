import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function SubscriptionBanner() {
  return (
    <div className="flex items-center justify-center">
      <Button
        className="h-10 px-[10px] bg-white text-primary-500 text-base font-semibold flex gap-2 items-center justify-center hover:bg-[#f9cae6]"
        asChild
      >
        <Link href="/dashboard">
          <div className="flex justify-center items-center size-5">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_1856_6087"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="white" />
              </mask>
              <g mask="url(#mask0_1856_6087)">
                <path
                  d="M8.6 22.5L6.7 19.3L3.1 18.5L3.45 14.8L1 12L3.45 9.2L3.1 5.5L6.7 4.7L8.6 1.5L12 2.95L15.4 1.5L17.3 4.7L20.9 5.5L20.55 9.2L23 12L20.55 14.8L20.9 18.5L17.3 19.3L15.4 22.5L12 21.05L8.6 22.5ZM10.95 15.55L16.6 9.9L15.2 8.45L10.95 12.7L8.8 10.6L7.4 12L10.95 15.55Z"
                  fill="#eb1187 "
                />
              </g>
            </svg>
          </div>
          خرید اشتراک
        </Link>
      </Button>
    </div>
  );
}
