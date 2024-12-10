import GenresList from "@/components/genres/GenresList";
import React, { Suspense } from "react";
export default async function page() {
  return (
    <Suspense fallback={<div>Loading genres...</div>}>
      <GenresList />
    </Suspense>
  );
}
