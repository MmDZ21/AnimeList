import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { LOGIN_MUTATION } from "./graphql/mutations/login";
import { REFRESH_TOKEN_MUTATION } from "./graphql/mutations/refreshToken";
import { getClient } from "./lib/apolloClient";

const users = [{ id: "1", email: "", password: "" }];
export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
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
          const { data } = await getClient().mutate({
            mutation: LOGIN_MUTATION,
            variables: {
              input: {
                username: credentials?.email,
                password: credentials?.password,
              },
            },
          });
          console.log(data);
          if (data.login && data.login.user) {
            return {
              ...data.login.user,
              accessToken: data.login.access_token,
              refreshToken: data.login.refresh_token,
              exp: data.login.expires_in,
            };
          } else {
            return null;
          }
        } catch (error) {
          console.error("Error authenticating user", error);
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
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.exp = Math.floor(Date.now() / 1000) + user.exp;
      }

      // Refresh token logic
      //   const now = Math.floor(Date.now() / 1000);
      //   if (token.exp && now > token.exp - 10) {
      //     // refresh one hour before expiry
      //     try {
      //       const { data } = await client.mutate({
      //         mutation: REFRESH_TOKEN_MUTATION,
      //         variables: {
      //           refreshToken: token.refreshToken,
      //         },
      //       });

      //       if (data.refreshToken) {
      //         token.accessToken = data.refreshToken.access_token;
      //         token.refreshToken = data.refreshToken.refresh_token;
      //         token.exp =
      //           Math.floor(Date.now() / 1000) + data.refreshToken.expires_in;
      //       }
      //     } catch (error) {
      //       console.error("Error refreshing token", error);
      //       return null;
      //     }
      //   }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id,
          accessToken: token.accessToken,
          refreshToken: token.refreshToken,
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
});
