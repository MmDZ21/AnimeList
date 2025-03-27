import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { User } from "@/types/types";
import Image from "next/image";
export default function ListLayout({
  user,
  type,
}: {
  user: User;
  type: "movie" | "anime" | "series" | "drama";
}) {
  const data =
    type === "movie"
      ? user.movies
      : type === "series"
      ? user.series
      : type === "drama"
      ? user.dramas
      : user.animeShows;
  return (
    <Table className="border-separate border-spacing-x-0 border-spacing-y-1">
      <TableHeader>
        <TableRow className="border-none  hover:bg-transparent">
          <TableHead className="text-start text-base font-bold  text-white">
            عنوان
          </TableHead>
          <TableHead className="text-base font-bold  text-white">
            نمره
          </TableHead>
          <TableHead className="text-base font-bold  text-white">
            پیشرفت
          </TableHead>
          <TableHead className="text-base font-bold  text-white">
            نوع
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((show, i) => (
          <TableRow key={show.title} className="border-none">
            <TableCell className="rounded-r-lg text-base font-bold text-ellipsis bg-background flex items-center gap-4">
              <Image
                src={show.image}
                alt={show.title}
                width={40}
                height={40}
                className="aspect-square rounded"
              />
              {show.title}
            </TableCell>
            <TableCell className="bg-background text-center text-base font-medium">
              {show.userRating}/10
            </TableCell>
            <TableCell className="bg-background text-center text-base font-medium">
              {show.episodesWatched}/{show.episodesCount}
            </TableCell>
            <TableCell className="rounded-l-lg bg-background text-center text-base font-medium">
              {show.type}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
