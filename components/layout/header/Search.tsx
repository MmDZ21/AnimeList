"use client";
import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  Cross2Icon,
  ArrowRightIcon,
} from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import Link from "next/link";

export default function Search() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace, back } = useRouter();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("query") || "");

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const saveRecentSearch = useDebouncedCallback((term: string) => {
    if (term.length > 2) {
      const recentSearches = JSON.parse(
        localStorage.getItem("recentSearches") || "[]"
      );
      const updatedSearches = [
        term,
        ...recentSearches.filter((search: string) => search !== term),
      ].slice(0, 8);
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
    }
  }, 1500);

  const onSearch = (value: string) => {
    setSearchTerm(value);
    handleSearch(value);
    saveRecentSearch(value);
  };

  return (
    <>
      {/* Desktop: Link to search page */}
      <div>
        <Link href="/search">
          <MagnifyingGlassIcon className="text-white w-6 h-6" />
        </Link>
      </div>

      {/* Mobile: Input always open on search page */}
      {pathname === "/search" && (
        <div className="absolute top-0 left-0 w-full h-16 z-50 block lg:hidden">
          {/* Back Button */}
          <button
            onClick={() => {
              back();
              setSearchTerm("");
            }}
            className="text-white absolute top-5 start-4"
          >
            <ArrowRightIcon className="w-6 h-6" />
          </button>

          {/* Clear input on Cross click */}
          <button
            onClick={() => setSearchTerm("")}
            className="text-white absolute top-5 end-4"
          >
            <Cross2Icon className="w-6 h-6" />
          </button>

          {/* Search input */}
          <div className="w-full">
            <Input
              placeholder="جستجوی انیمه..."
              className="w-full h-16 rounded-none border-none px-16  bg-[#17212B]  focus-visible:ring-0  placeholder:text-[#979CA6]"
              value={searchTerm}
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
        </div>
      )}
    </>
  );
}
