"use client";
import { getImagePath } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

interface AnimeColumn {
  __typename?: "Beloved";
  score?: string | null;
  anime: {
    __typename?: "Anime";
    dic_duration?: string | null;
    dic_episodes?: string | null;
    dic_title?: string | null;
    dic_types?: number | null;
    anilist_image_url?: string | null;
    mal_image_url?: string | null;
  };
}
export const columns: ColumnDef<AnimeColumn>[] = [
  {
    accessorKey: "title",
    header: "عنوان",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-4">
          <Image
            src={getImagePath(
              row.original.anime.mal_image_url,
              row.original.anime.anilist_image_url
            )}
            alt={row.original.anime.dic_title!}
            width={40}
            height={40}
            className="aspect-square rounded"
          />
          <div className="flex justify-start">
          <p dir="ltr" className="font-bold truncate">{row.original.anime.dic_title!}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "userRating",
    header: "نمره",
    cell: ({ row }) => {
      return `${row.original.score}/10`;
    },
  },
  {
    accessorKey: "episodesWatched",
    header: "پیشرفت",
    cell: ({ row }) => {
      return `${7}/${row.original.anime.dic_episodes}`;
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
