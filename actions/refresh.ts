"use server";

import { LOGIN_MUTATION } from "@/graphql/mutations/login";
import { REFRESH_TOKEN_MUTATION } from "@/graphql/mutations/refreshToken";
import { makeClient } from "@/lib/apollo-login";
import { getSession, updateSession } from "@/lib/authUtils";

export const refresh = async (refreshToken: string) => {
  console.log("refreshin with: ", { refreshToken });

  try {
    console.log("trying to refresh...");
    const { data, errors } = await makeClient().mutate({
      mutation: REFRESH_TOKEN_MUTATION,
      variables: {
        input: {
          refresh_token: refreshToken,
        },
      },
    });
    if (errors) {
      throw errors;
    }
    console.log("refreshed: ", { data });
    if (
      data.refreshToken.access_token &&
      data.refreshToken.refresh_token &&
      data.refreshToken.expires_in
    ) {
      console.log("updating session...");
      await updateSession(
        Date.now() / 1000 + data.refreshToken.expires_in,
        data.refreshToken.refresh_token,
        data.refreshToken.access_token
      );
      const session = await getSession();
      console.log("session: ", session);
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};
