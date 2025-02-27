"use client";
import React, { useState } from "react";
import { BioForm } from "@/components/forms/BioForm";

export default function Bio({
  bio,
  editable,
}: {
  bio: string;
  editable: boolean;
}) {
  const [editing, setEditing] = useState<boolean>(false);

  return (
    <div className="bg-[#17212B] rounded-lg p-3 flex flex-col gap-3 w-full lg:p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-base font-bold lg:text-xl">در مورد من</h2>
        {editable &&
          (editing ? (
            ""
          ) : (
            <div
              className="size-5 flex items-center justify-center text-[#979CA6] transition-colors cursor-pointer hover:text-primary-500"
              onClick={() => setEditing(true)}
            >
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7281 2.7382C12.3491 2.06539 12.6596 1.72899 12.9895 1.53276C13.7856 1.05929 14.7659 1.04457 15.5753 1.49393C15.9107 1.68016 16.2308 2.00709 16.8709 2.66096C17.511 3.31483 17.831 3.64176 18.0133 3.98443C18.4532 4.81126 18.4388 5.81265 17.9753 6.62591C17.7832 6.96296 17.4539 7.28014 16.7953 7.9145L8.95886 15.4622C7.71074 16.6644 7.08667 17.2655 6.30672 17.5701C5.52677 17.8747 4.66934 17.8523 2.95448 17.8075L2.72115 17.8014C2.19909 17.7877 1.93806 17.7809 1.78633 17.6087C1.63459 17.4365 1.65531 17.1706 1.69674 16.6388L1.71924 16.35C1.83585 14.8533 1.89415 14.1049 2.18643 13.4322C2.47871 12.7594 2.98287 12.2132 3.99119 11.1207L11.7281 2.7382Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.8333 2.83398L16.6667 8.66732"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.6667 17.834L18.3333 17.834"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          ))}
      </div>
      {editing ? (
        <BioForm bio={bio} setEditing={setEditing}/>
      ) : (
        <div>
          <p className="text-sm font-medium lg:text-base me-5">{bio}</p>
        </div>
      )}
    </div>
  );
}
