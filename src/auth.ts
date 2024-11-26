import NextAuth from "next-auth"
import authConfig from "../auth.config"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db, accounts, users } from "./server/schema"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
  }),
  callbacks: {
    async session({ session, token, user }: any) {
      if (session.user.email === "youremail@gmail.com") {
        session.user.role = "admin"
      } else {
        session.user.role = "user"
      }
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    error: "/token-expired",
  },
  session: {
    strategy: "jwt",
    maxAge: 1 * 60,
  },
  ...authConfig,
})
