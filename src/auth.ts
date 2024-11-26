import NextAuth from "next-auth"
import authConfig from "../auth.config"

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    async session({ session, token, user }: any) {
      if (session.user.email === "youremail@gmail.com") {
        session.user.role = "admin"
      } else {
        session.user.role = "user"
      }
      return session
    },
    async authorized({ auth, request }) {
      return true
    },
  },

  ...authConfig,
})
