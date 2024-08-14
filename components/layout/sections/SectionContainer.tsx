import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export default function SectionContainer({
  className,
  title,
  description,
  children,
}: {
  className?: string;
  title?: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 lg:gap-6 h-full mx-auto w-full px-4 lg:px-16",
        className
      )}
    >
      {title && (
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
      )}
      <div className="w-full">{children}</div>
    </div>
  );
}
