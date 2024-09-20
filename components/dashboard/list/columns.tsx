"use client";

import { UserAnime, UserDrama, UserMovie, UserSeries } from "@/types/types";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

export const columns: ColumnDef<
  UserAnime | UserMovie | UserDrama | UserSeries
>[] = [
  {
    accessorKey: "title",
    header: "عنوان",
    cell: ({ row }) => {
      return (
        <div className="font-bold text-ellipsis flex items-center gap-4">
          <Image
            src={row.original.image}
            alt={row.original.title}
            width={40}
            height={40}
            className="aspect-square rounded"
          />
          {row.original.title}
        </div>
      );
    },
  },
  {
    accessorKey: "userRating",
    header: "نمره",
    cell: ({ row }) => {
      return `${row.original.userRating}/10`;
    },
  },
  {
    accessorKey: "episodesWatched",
    header: "پیشرفت",
    cell: ({ row }) => {
      return `${row.original.episodesWatched}/${row.original.episodesCount}`;
    },
  },
  {
    accessorKey: "type",
    header: "نوع",
  },
  {
    accessorKey: "userStatus",
    header: "userStatus",
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "status",
    header: "status",
    enableSorting: false,
    enableHiding: true,
  },
];
