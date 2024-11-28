import NextAuth from "next-auth"
import authConfig from "../auth.config"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db, accounts, users } from "./server/schema"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
  }),
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user, account }: any) {
      if (account && user) {
        const tokenExpiresIn = Date.now() + 5 * 60 * 1000
        return {
          accessToken: account.access_token,
          // SET CUSTOM EXPIRE TOKEN
          accessTokenExpires: tokenExpiresIn,
          ...user,
          ...token,
        }
      }

      return token
    },
    async session({ session, token }: any) {
      // Tambahkan data tambahan ke session
      if (token.id) session.user.id = token.id
      if (token.role) session.user.role = token.role

      if (token.exp && Date.now() > token.exp * 1000) {
        return null // Ini akan membuat session menjadi null
      }

      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    error: "/token-expired", // Halaman yang akan ditampilkan jika token expired
    signOut: "/logout",
  },
  ...authConfig,
})
