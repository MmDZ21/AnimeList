"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
      columnVisibility: {
        userStatus: false,
        status: false,
      },
    },
  });
  const userStatus = [
    { value: "all", label: "همه", count: 657 },
    { value: "watching", label: "درحال تماشا", count: 37 },
    { value: "completed", label: "تمام کردم", count: 386 },
    { value: "onHold", label: "متوقف کردم", count: 4 },
    { value: "dropped", label: "بیخیالش شدم", count: 6 },
    { value: "planToWatch", label: "می‌خوام ببینم", count: 222 },
  ];
  return (
    <div className="lg:flex gap-6 hidden">
      <div className="flex flex-col w-1/4 rounded-lg p-4 gap-5 bg-[#17212B]">
        <div className="flex items-center">
          <Input
            placeholder="نام اثر..."
            value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("title")?.setFilterValue(event.target.value)
            }
            className="max-w-sm px-3 py-2 bg-background"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h6 className="text-sm font-bold">لیست‌ها</h6>
          <ul>
            {userStatus.map((status) => (
              <li
                className={cn(
                  "p-2 flex items-center justify-between w-full rounded-lg cursor-pointer",
                  (table
                    .getColumn("userStatus")
                    ?.getFilterValue() as string) === status.value &&
                    "bg-background",
                  status.value === "all" &&
                    table.getColumn("userStatus")?.getFilterValue() ===
                      undefined &&
                    "bg-background"
                )}
                key={status.value}
                onClick={() =>
                  status.value === "all"
                    ? table.getColumn("userStatus")?.setFilterValue("")
                    : table
                        .getColumn("userStatus")
                        ?.setFilterValue(status.value)
                }
              >
                <p>{status.label}</p>
                <p>{status.count}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col w-3/4 gap-8 rounded-lg bg-[#17212B] p-4">
        <Table className="border-separate border-spacing-x-0 border-spacing-y-1">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="border-none"
              >
                {headerGroup.headers.map((header, i) => {
                  return (
                    <TableHead
                      key={header.id}
                      className={cn(
                        "text-base font-bold text-white text-center w-1/6",
                        i === 0 && "text-start w-1/2"
                      )}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="border-none"
                >
                  {row.getVisibleCells().map((cell, i) => (
                    <TableCell
                      key={cell.id}
                      className={cn(
                        "text-center text-base font-medium bg-background",
                        i === 0
                          ? "rounded-s-lg"
                          : i === row.getVisibleCells().length - 1
                          ? "rounded-e-lg"
                          : ""
                      )}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  اثری پیدا نشد
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="flex items-center justify-end space-x-2 py-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            صفحه قبل
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            صفحه بعد
          </Button>
        </div>
      </div>
    </div>
  );
}
