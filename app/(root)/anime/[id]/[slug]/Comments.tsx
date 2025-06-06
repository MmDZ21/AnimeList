import CommentWrapper from "@/components/anime/CommentWrapper";
import {
  GetAnimeCommentsDocument,
  GetAnimeCommentsQuery,
  GetAnimeCommentsQueryVariables,
} from "@/generated/graphql";
import { getClient } from "@/lib/apolloClient";
import React from "react";

const Comments = async ({ id }: { id: string }) => {
  const client = getClient();

  const { data, error } = await client.query<
    GetAnimeCommentsQuery,
    GetAnimeCommentsQueryVariables
  >({
    query: GetAnimeCommentsDocument,
    variables: { id, first: 30 },
  });

  if (error) {
    console.error("Error fetching comments data:", error);
    return <p>Error loading comments data.</p>;
  }

  const comments = data?.comments.data;

  if (!comments) {
    return <p>comments not found.</p>;
  }
  return (
    <div className="flex flex-col gap-[14px]">
      {comments.length > 0 ? comments.map((comment) => (
        <CommentWrapper key={comment.id} comment={comment} />
      )) : <div className="flex w-full justify-center text-sm lg:text-lg font-normal text-[#979CA6]">هنوز نظری برای این انیمه ثبت نشده!</div>}
    </div>
  );
};

export default Comments;
