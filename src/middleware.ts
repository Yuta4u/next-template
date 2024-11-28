import NextAuth from "next-auth"
import { NextRequest, NextResponse } from "next/server"
import { JWT, getToken } from "next-auth/jwt"
import authConfig from "../auth.config"

// Definisi tipe yang lebih komprehensif
type EnhancedToken = JWT & {
  id?: string
  role?: string
  accessTokenExpires?: number
  emailVerified?: string | Date
}

export default NextAuth(authConfig).auth(async function middleware(
  req: NextRequest
) {
  const { nextUrl } = req

  // Konfigurasi route yang dilindungi
  const protectedRoutes = ["/profile", "/heyho", "/foody"]
  const authRoutes = ["/login"]

  // Ambil token dengan opsi tambahan
  const token = (await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  })) as EnhancedToken | null

  // Flags untuk kondisi
  const isProtectedRoute = protectedRoutes.includes(nextUrl.pathname)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)

  // Logika redirect yang lebih kompleks
  if (isProtectedRoute) {
    // Jika tidak ada token, redirect ke login
    if (!token) {
      return NextResponse.redirect(new URL("/login", nextUrl.origin))
    }

    // Pengecekan token expired
    if (
      token.accessTokenExpires &&
      Date.now() > Number(token?.accessTokenExpires)
    ) {
      return NextResponse.redirect(new URL("/token-expired", nextUrl.origin))
    }
  }

  // Mencegah akses ke halaman auth jika sudah login
  if (isAuthRoute) {
    if (token) {
      return NextResponse.redirect(new URL("/profile", nextUrl.origin))
    }
  }

  // Lanjutkan request jika tidak ada kondisi khusus
  return NextResponse.next()
})

// Konfigurasi matcher yang lebih spesifik
export const config = {
  matcher: [
    // Route yang dilindungi
    "/profile/:path*",
    "/heyho/:path*",
    "/foody/:path*",
    // Route autentikasi
    "/login",
  ],
}
