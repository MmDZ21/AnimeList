"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // State to store the search query
  const [searchTerm, setSearchTerm] = useState(searchParams.get("query") || "");

  // Debounce for searching (300ms)
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  // Debounce for saving recent search (1500ms)
  const saveRecentSearch = useDebouncedCallback((term: string) => {
    if (term.length > 2) {
      // Logic to save recent searches, e.g., localStorage or API
      const recentSearches = JSON.parse(
        localStorage.getItem("recentSearches") || "[]"
      );
      const updatedSearches = [
        term,
        ...recentSearches.filter((search: string) => search !== term),
      ].slice(0, 8); // Limit to 5
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
      console.log(`Saving recent search... ${term}`);
    }
  }, 1500);

  // Update both search and recent search on input change
  const onSearch = (value: string) => {
    setSearchTerm(value); // Update the state
    handleSearch(value); // Trigger the search
    saveRecentSearch(value); // Save to recent searches
  };

  return (
    <div className="hidden relative lg:flex w-full justify-center">
      <Input
        className="w-full rounded-lg px-4 max-w-[800px] h-16 placeholder:text-lg placeholder:font-medium dark:placeholder:text-[#979CA6]"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => {
          onSearch(e.target.value);
        }}
      />
    </div>
  );
}
