"use client";
import { Cross2Icon } from "@radix-ui/react-icons";
import React, { useEffect, useState } from "react";

export default function Recent() {
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  // Load recent searches from localStorage
  useEffect(() => {
    const storedSearches = JSON.parse(
      localStorage.getItem("recentSearches") || "[]"
    );
    setRecentSearches(storedSearches);
  }, []);

  // Clear a single search
  const clearSearch = (search: string) => {
    const updatedSearches = recentSearches.filter((s) => s !== search);
    setRecentSearches(updatedSearches);
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
  };

  // Clear all searches
  const clearAll = () => {
    setRecentSearches([]);
    localStorage.removeItem("recentSearches");
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-base lg:text-2xl">جستجوهای اخیر</h2>
        <p
          className="text-primary-500 text-xs lg:text-sm font-medium cursor-pointer"
          onClick={clearAll}
        >
          پاکسازی
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {recentSearches.map((search, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-[#17212B] p-[10px] rounded"
          >
            <p dir="ltr" className="text-white text-base font-medium truncate">
              {search}
            </p>
            <button onClick={() => clearSearch(search)} className="text-white">
              <Cross2Icon className="size-6" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
