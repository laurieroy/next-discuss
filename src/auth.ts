import GitHub from "next-auth/providers/github";
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { db } from "./db";

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
  throw new Error("Missing OAuth credentials");
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    GitHub({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }),
  ],
  trustHost: true,
  // callbacks: {
  //   // This is to fix a bug in next auth
  //   async session({ session, user }) {
  //     if (session && user) {
  //       session.user.id = user.id;
  //     }

  //     return session;
  //   },
  // },
});
// function Github(arg0: { clientId: string; clientSecret: string; }): import("next-auth/providers").Provider {
//   throw new Error("Function not implemented.");
// }
