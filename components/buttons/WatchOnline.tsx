import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function WatchOnline({ className }: { className?: string }) {
  return (
    <Button
      className={cn(
        "text-base font-semibold flex items-center justify-center gap-2",
        className
      )}
    >
      <div className="flex justify-center items-center size-6">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.9531 11.3948C13.8016 12.0215 13.0857 12.4644 11.6539 13.3502C10.2697 14.2064 9.57766 14.6346 9.01993 14.4625C8.78934 14.3913 8.57925 14.2562 8.40982 14.07C8 13.6198 8 12.7465 8 11C8 9.25345 8 8.38018 8.40982 7.92995C8.57925 7.74381 8.78934 7.60868 9.01993 7.53753C9.57766 7.36544 10.2697 7.79357 11.6539 8.64983C13.0857 9.53559 13.8016 9.97846 13.9531 10.6052C14.0156 10.8639 14.0156 11.1361 13.9531 11.3948Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <path
            d="M1.5 11C1.5 6.52166 1.5 4.28249 2.89124 2.89124C4.28249 1.5 6.52166 1.5 11 1.5C15.4783 1.5 17.7175 1.5 19.1088 2.89124C20.5 4.28249 20.5 6.52166 20.5 11C20.5 15.4783 20.5 17.7175 19.1088 19.1088C17.7175 20.5 15.4783 20.5 11 20.5C6.52166 20.5 4.28249 20.5 2.89124 19.1088C1.5 17.7175 1.5 15.4783 1.5 11Z"
            stroke="white"
            stroke-width="1.5"
          />
        </svg>
      </div>
      <p>تماشای آنلاین</p>
    </Button>
  );
}
