"use client";

import React, { useState } from "react";

export default function Summary({
  body,
  bodyNormalized,
  title,
  titleFa,
}: {
  body?: string;
  bodyNormalized?: string;
  title: string;
  titleFa: string;
}) {
  const [expanded, setExpanded] = useState(false);

  // Combine both parts of the content with a separator (e.g., a <br/> tag)
  const combinedContent = `
  ${bodyNormalized || ""}
  <br/>
    <br/>
  <h2 class="font-semibold lg:font-bold text-base">درباره انیمه ${titleFa}</h2>
  <br/>
  ${body || ""}
`;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold">خلاصه داستان {title}</h2>
      <div
        className={`text-sm font-medium leading-loose transition-all duration-300 ${
          expanded ? "" : "line-clamp-4"
        }`}
        dangerouslySetInnerHTML={{ __html: combinedContent }}
      />
      <button
        onClick={() => setExpanded((prev) => !prev)}
        className="hidden lg:block text-primary-500 text-base font-bold"
      >
        {expanded ? "مشاهده کمتر" : "مشاهده بیشتر"}
      </button>
    </div>
  );
}
