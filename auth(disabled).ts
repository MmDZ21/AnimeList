import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { LOGIN_MUTATION } from "./graphql/mutations/login";
import { REFRESH_TOKEN_MUTATION } from "./graphql/mutations/refreshToken";
import { JWT } from "next-auth/jwt";
import { makeClient } from "./lib/apollo-login";

// async function refreshAccessToken(token: JWT) {
//   try {
//     const { data } = await getClient().mutate({
//       mutation: REFRESH_TOKEN_MUTATION,
//       variables: {
//         input: {
//           refresh_token: token.refreshToken,
//         },
//       },
//       fetchPolicy: "no-cache",
//     });

//     console.log("refreshed: ", { data });

//     const newToken = {
//       accessToken: data.refreshToken.access_token,
//       refreshToken: data.refreshToken.refresh_token ?? token.refreshToken,
//       expiration: Date.now() + data.refreshToken.expires_in * 1000,
//     };

//     if (newToken.accessToken) {
//       token.accessToken = newToken.accessToken;
//     }
//     return token;
//   } catch (error) {
//     return {
//       ...token,
//       error: "RefreshAccessTokenError",
//     };
//   }
// }

export const { handlers, signIn, signOut, auth, unstable_update } = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30,
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const { data } = await makeClient().mutate({
            mutation: LOGIN_MUTATION,
            variables: {
              input: {
                username: credentials?.email,
                password: credentials?.password,
              },
            },
          });

          if (data.login && data.login.user) {
            return {
              ...data.login.user,
              accessToken: data.login.access_token,
              refreshToken: data.login.refresh_token,
              expiration: Math.floor(Date.now() / 1000) + data.login.expires_in,
            };
          } else {
            return null;
          }
        } catch (error) {
          return null;
        }
      },
    }),
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.expiration = user.expiration ?? 0;
        token.accessToken = user.accessToken!;
        token.refreshToken = user.refreshToken!;
      }

      return token;
      // console.log("token is: ", { token });
      // if (user) {
      //   return {
      //     accessToken: user.accessToken,
      //     expiration: Date.now() + user.expiration * 1000,
      //     refreshToken: user.refreshToken,
      //     user: user,
      //   };
      // } else if (Date.now() < token.expiration) {
      //   // Subsequent logins, if the `access_token` is still valid, return the JWT
      //   console.log("token is still valid: ", { token });
      //   return token;
      // } else {
      //   if (!token.refreshToken) throw new Error("Missing refresh token");

      //   try {
      //     console.log("refreshing token with: ", token.refreshToken);
      //     const { data, errors } = await makeClient().mutate({
      //       mutation: REFRESH_TOKEN_MUTATION,
      //       variables: {
      //         input: {
      //           refresh_token: token.refreshToken,
      //         },
      //       },
      //     });

      //     if (errors) throw errors;
      //     console.log("new token data: ", { data });
      //     await unstable_update({
      //       token: {
      //         ...token,
      //         accessToken: data.refreshToken.access_token,
      //         expiration: data.refreshToken.expires_in,
      //         // Fall back to old refresh token, but note that
      //         // many providers may only allow using a refresh token once.
      //         refreshToken:
      //           data.refreshToken.refresh_token ?? token.refreshToken,
      //       },
      // });
      //     return {
      //       ...token,
      //       accessToken: data.refreshToken.access_token,
      //       expiration: data.refreshToken.expires_in,
      //       // Fall back to old refresh token, but note that
      //       // many providers may only allow using a refresh token once.
      //       refreshToken: data.refreshToken.refresh_token ?? token.refreshToken,
      //     };
      //   } catch (error) {
      //     console.error("Error refreshing access token", error);
      //     // The error property can be used client-side to handle the refresh token error
      //     return { ...token, error: "RefreshAccessTokenError" as const };
      //   }
      // }
    },
    async session({ session, token }) {
      if (!token) return session;

      return {
        expires: session.expires,
        user: session.user,
        token: token,
      };
    },
  },
  pages: {
    signIn: "/login",
  },
});
