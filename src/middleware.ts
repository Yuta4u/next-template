import NextAuth from "next-auth"
import authConfig from "../auth.config"
import { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

const { auth } = NextAuth(authConfig)
export default auth(async function middleware(req: NextRequest) {
  const { nextUrl } = req

  const protectedRoutes = ["/profile", "/heyho", "/foody"]

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  })

  if (protectedRoutes.includes(nextUrl.pathname)) {
    const now = Math.floor(Date.now() / 1000) // Waktu sekarang dalam detik
    if (!token) {
      return Response.redirect(new URL("/login", nextUrl.origin))
    } else if (token && Number(token.exp) > now) {
      return Response.redirect(new URL("/token-expired", nextUrl.origin))
    }
  }
})

// Konfigurasikan matcher untuk performa lebih baik
export const config = {
  matcher: ["/profile", "/heyho", "/foody"],
}
