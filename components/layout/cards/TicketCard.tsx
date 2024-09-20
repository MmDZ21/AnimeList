import { cn } from "@/lib/utils";
import { UserTicket } from "@/types/types";
import React from "react";

export default function TicketCard({
  data,
  className,
}: {
  data: UserTicket;
  className?: string;
}) {
  return (
    <div className="flex flex-col p-3 gap-4 rounded-lg bg-[#17212B]">
      <div className="flex justify-between items-center w-full">
        <h3 className="text-base font-medium">{data.title}</h3>
        <div
          className={cn(
            "rounded-lg px-2 py-1 text-xs font-medium",
            data.status === "replied"
              ? "bg-[#053827]/50 text-[#87DCC0]"
              : data.status === "closed"
              ? "bg-[#481414]/50 text-[#F7A1A1]"
              : "bg-gray-700/50 text-gray-400"
          )}
        >
          {data.status === "replied"
            ? "پاسخ داده شده"
            : data.status === "closed"
            ? "بسته شده"
            : "در انتظار پاسخ"}
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.83317 5.83333H13.9582C15.7137 5.83333 16.5915 5.83333 17.2221 6.25466C17.4951 6.43706 17.7294 6.67143 17.9118 6.94441C18.3332 7.57497 18.3332 8.45276 18.3332 10.2083C18.3332 13.1343 18.3332 14.5973 17.631 15.6482C17.327 16.1032 16.9363 16.4938 16.4814 16.7978C15.4304 17.5 13.9675 17.5 11.0415 17.5H9.99984C6.07147 17.5 4.10728 17.5 2.88689 16.2796C1.6665 15.0592 1.6665 13.095 1.6665 9.16667V6.62023C1.6665 5.1065 1.6665 4.34964 1.98343 3.78172C2.20935 3.37689 2.54339 3.04285 2.94822 2.81693C3.51614 2.5 4.273 2.5 5.78673 2.5C6.75652 2.5 7.24142 2.5 7.66588 2.65917C8.63503 3.0226 9.03466 3.90298 9.47197 4.7776L9.99984 5.83333"
            stroke="#EB1187"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <p className="text-sm font-normal text-[#979CA6]">{data.category}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-1">
          <p className="text-sm font-normal text-[#979CA6]">شماره تیکت:</p>
          <p>{data.number}</p>
        </div>
        <p className="text-sm font-normal text-[#979CA6]">{data.createdAt}</p>
      </div>
    </div>
  );
}
