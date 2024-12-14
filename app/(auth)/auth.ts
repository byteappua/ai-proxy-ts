// import { compare } from "bcrypt-ts";
import NextAuth, { type User, type Session } from "next-auth";
import Credentials from "next-auth/providers/credentials";

// import { getUser } from "@/lib/db/queries";
// import { hasDb } from "@/lib/db/migrate";

import { authConfig } from "./auth.config";

interface ExtendedSession extends Session {
  user: User;
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {},
      async authorize({ email, password }: any) {
        console.log(email);
        console.log(password);
        return {
          id: "1",
          email: "demo@qq.com",
          password: "123456",
        };
        // if (!hasDb())
        //   return {
        //     id: 1,
        //     email: "demo@qq.com",
        //     password: "123456",
        //   };
        // const users = await getUser(email);
        // if (users.length === 0) return null;
        // // biome-ignore lint: Forbidden non-null assertion.
        // const passwordsMatch = await compare(password, users[0].password!);
        // if (!passwordsMatch) return null;
        // return users[0] as any;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    async session({ session, token }: { session: ExtendedSession; token: any }) {
      if (session.user) {
        session.user.id = token.id as string;
      }

      return session;
    },
  },
});
