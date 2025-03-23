import { cn } from "@/lib/utils";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React, { ReactNode } from "react";

export default function SectionContainer({
  className,
  title,
  description,
  children,
  styles,
  hasMore,
  hasMoreLink
}: {
  className?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  styles?: {};
  hasMore?:boolean;
  hasMoreLink?: string
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 lg:gap-6 lg:h-full mx-auto w-full",
        className
      )}
      style={styles || {}}
    >
      {title && (
        <div className="w-full flex justify-between items-center">
                  <div className="flex flex-col gap-1 lg:gap-2 z-10">
          <h2 className="text-xl font-bold lg:text-2xl lg:font-extrabold">
            {title}
          </h2>
          {description && (
            <p className="text-sm font-medium lg:text-lg lg:font-normal opacity-65 z-10">
              {description}
            </p>
          )}
        </div>
          {hasMore && hasMoreLink && <Link href={hasMoreLink} className="flex items-center">مشاهده بیشتر <ChevronLeftIcon/></Link>}
        </div>
      )}
      <div className="w-full">{children}</div>
    </div>
  );
}
