import React from "react";
import { GetUserInfoDocument, GetUserInfoQuery } from "@/generated/graphql";
import { getAuthClient } from "@/lib/apolloClient";
import { delay, getDaysToExpire, getImagePath } from "@/lib/utils";
import Image from "next/image";

export default async function UserInfo() {
  const client = getAuthClient();
  const { data, error } = await client.query<GetUserInfoQuery>({
    query: GetUserInfoDocument,
  });

  if (error) {
    console.error("Error fetching user data:", error);
    return <p>Error loading user data.</p>;
  }

  const user = data.me;

  if (!user) {
    return <p>User not found.</p>;
  }
  const expiration = user.expire_date
    ? getDaysToExpire(user.expire_date)
    : null;
  return (
    <div className="flex flex-col gap-4 items-center lg:flex-row lg:gap-6 lg:justify-start lg:w-full lg:items-end">
      <div className="relative size-24 lg:size-40">
        <Image
          src={getImagePath(user.avatar, null)}
          fill
          className="object-cover rounded-lg object-center"
          alt={user.name || "name"}
        />
      </div>
      <div className="flex flex-col gap-1 items-center lg:items-start">
        <div className="flex gap-[6px] items-center justify-center lg:flex-row-reverse">
          {user.isVIP && (
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.51819 9.30575C1.13013 8.23176 0.936099 7.69476 1.01884 7.35065C1.10933 6.97427 1.377 6.68084 1.71913 6.58296C2.03193 6.49346 2.51853 6.70973 3.49173 7.14227C4.35253 7.52486 4.78293 7.71615 5.18732 7.70551C5.63257 7.69379 6.06088 7.51524 6.4016 7.19931C6.71105 6.91237 6.91861 6.45513 7.33373 5.54064L8.2486 3.52525C9.0128 1.84175 9.3949 1 10 1C10.6051 1 10.9872 1.84175 11.7514 3.52525L12.6663 5.54064C13.0814 6.45513 13.289 6.91237 13.5984 7.19931C13.9391 7.51524 14.3674 7.69379 14.8127 7.70551C15.2171 7.71615 15.6475 7.52486 16.5083 7.14227C17.4815 6.70973 17.9681 6.49346 18.2809 6.58296C18.623 6.68084 18.8907 6.97427 18.9812 7.35065C19.0639 7.69476 18.8699 8.23176 18.4818 9.30575L16.8138 13.9222C16.1002 15.897 15.7435 16.8844 14.9968 17.4422C14.2502 18 13.2854 18 11.3558 18H8.64424C6.71459 18 5.74977 18 5.00315 17.4422C4.25654 16.8844 3.89977 15.897 3.18622 13.9222L1.51819 9.30575Z"
                stroke="#FFC107"
                strokeWidth="1.5"
              />
              <path
                d="M10 13H10.009"
                stroke="#FFC107"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 21H15"
                stroke="#FFC107"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          )}
          <h1 className="font-bold text-2xl lg:text-[34px]">{user.name}</h1>
        </div>
        <p className="text-sm font-normal lg:text-base">
          <span className="text-xs  lg:text-base text-[#979CA6] font-normal">
            زمان مانده از اعتبار شما:
          </span>
          <span className="text-sm mx-[2px]  lg:text-base">
            {expiration ? expiration.daysLeft : 0}
          </span>
          روز و
          <span className="text-sm mx-[2px]  lg:text-base">
            {expiration ? expiration.hoursLeft : 0}
          </span>
          ساعت
        </p>
      </div>
    </div>
  );
}