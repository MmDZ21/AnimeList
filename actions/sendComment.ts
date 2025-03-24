"use server";

import { SendCommentDocument, SendCommentMutation, SendCommentMutationVariables } from "@/generated/graphql";
import { getAuthClient } from "@/lib/apolloClient";

export default async function sendComment(
    anime_id: string,
    parent_id: string,
    body: string,
    spoil: boolean
) {
  try {
    const { data, errors } = await getAuthClient().mutate<SendCommentMutation,SendCommentMutationVariables>({
      mutation: SendCommentDocument,
      variables: {
        input: {
          anime_id,
          parent_id,
          body,
          spoil: spoil ? 1 : 0,
        },
      },
    });
    if (errors || data?.sendComment.status !== "COMMENT_SENT") {
      return {
        success: false,
        error:"مشکلی پیش اومد",
      };
    }

    return { success: true, message: data.sendComment.message };
  } catch (error) {
    console.error("Comment error:", error);
    return { success: false, error: "مشکلی در ثبت نظر پیش اومد" };
  }
}
