import NextAuth from "next-auth"
import authConfig from "../auth.config"
import { NextRequest } from "next/server"

const { auth } = NextAuth(authConfig)
export default auth(async function middleware(req: NextRequest) {
  const { nextUrl } = req

  const protectedRoutes = ["/profile", "/heyho", "/foody"]
  const token = req.cookies
    .getAll()
    .find((obj) => obj.name === process.env.SESSION_TOKEN)?.value

  if (protectedRoutes.includes(nextUrl.pathname)) {
    if (!token) {
      return Response.redirect(new URL("/login", nextUrl))
    }
  }
})
