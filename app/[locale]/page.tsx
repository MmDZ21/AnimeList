"use client";
import { query } from "@/graphql/queries/test";
import { useSuspenseQuery } from "@apollo/client";

export default function HomePage() {
  const { data } = useSuspenseQuery(query);

  return (
    <div>
      <h1>Private Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
