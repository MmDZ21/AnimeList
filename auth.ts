import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getAuthClient } from "./lib/apolloClient"; // Your Apollo Client instance
import {
  LoginDocument,
  LoginMutation,
  LoginMutationVariables,
} from "./generated/graphql"; // Adjust based on your GraphQL schema
import emailLoginSchema from "./models/email-login"; // Zod validation for email/password

export const { handlers, auth, signIn,signOut } = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 600,
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials):Promise<User | null> => {
        try {
          const { email, password } = await emailLoginSchema.parseAsync(
            credentials
          );

          const { data, errors } = await getAuthClient().mutate<
            LoginMutation,
            LoginMutationVariables
          >({
            mutation: LoginDocument,
            variables: {
              input: {
                username: email,
                password: password,
              },
            },
          });

          if (errors || !data?.login) {
            return null
          }

          const { user, access_token, refresh_token, expires_in } = data.login;

          if(!user){
            return null
          }
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            isVip: user.isVIP,
            accessToken: access_token!,
            refreshToken: refresh_token!,
            expiration: Math.floor(Date.now() / 1000) + expires_in!,
          };
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.expiration = user.expiration;
        token.isVip = user.isVip
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          ...session.user,
          accessToken: token.accessToken,
          refreshToken: token.refreshToken,
          expiration:token.expiration,
          isVip: token.isVip
        };
      }
      console.log(session.user.expiration - Date.now()/1000)
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login",
  },
});
// export const config = {
//   matcher: ["/dashboard/:path*"],
// };