import React, { ReactElement, ReactNode } from "react";
import SectionContainer from "./SectionContainer";
import { cn } from "@/lib/utils";

export default function Parallel({
  children,
  title,
  description,
  bgUrl,
  bgGradient,
  actions,
  className,
}: {
  children: ReactNode;
  title?: string;
  description?: string;
  bgUrl?: string;
  bgGradient?: string;
  actions?: ReactElement[];
  className?: string;
}) {
  return (
    <SectionContainer
      className={cn(
        "bg-cover bg-center bg-no-repeat hidden lg:flex rounded-lg",
        className
      )}
      styles={{
        backgroundImage: `linear-gradient(${bgGradient}), url(${bgUrl})`,
      }}
    >
      <div className="flex justify-between items-center gap-40 px-12 py-10">
        <div className="flex flex-col gap-8 min-w-96">
          <div className="flex flex-col gap-2">
            <h2 className="text-[32px] font-black">{title}</h2>
            <p className="text-xl font-medium">{description}</p>
          </div>
          <div className="flex gap-3">{actions?.map((action) => action)}</div>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </SectionContainer>
  );
}
