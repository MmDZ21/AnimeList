"use client";

import { cn } from "@/lib/utils";
import { UserTicket } from "@/types/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<UserTicket>[] = [
  {
    accessorKey: "number",
    header: "شماره تیکت",
  },
  {
    accessorKey: "title",
    header: "موضوع تیکت",
    cell: ({ row }) => {
      return <div className="text-ellipsis">{row.original.title}</div>;
    },
  },
  {
    accessorKey: "category",
    header: "دپارتمان پشتیبانی",
  },
  {
    accessorKey: "createdAt",
    header: "تاریخ آخرین پیام",
  },
  {
    accessorKey: "status",
    header: "وضعیت تیکت",
    cell: ({ row }) => {
      return (
        <div
          className={cn(
            "rounded-lg px-2 py-1 text-xs font-medium w-fit mx-auto",
            row.original.status === "replied"
              ? "bg-[#053827]/50 text-[#87DCC0]"
              : row.original.status === "closed"
              ? "bg-[#481414]/50 text-[#F7A1A1]"
              : "bg-gray-700/50 text-gray-400"
          )}
        >
          {row.original.status === "replied"
            ? "پاسخ داده شده"
            : row.original.status === "closed"
            ? "بسته شده"
            : "در انتظار پاسخ"}
        </div>
      );
    },
  },
  {
    header: "عملیات",
    cell: ({ row }) => {
      return "جزئیات";
    },
  },
];
