import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Middleware untuk melindungi route
export function middleware(req: NextRequest) {
  // Cek apakah user memiliki sesi aktif (misalnya menggunakan cookie atau header)
  //   const token = req.cookies.get("next-auth.session-token")?.value
  //   // Jika tidak ada token, redirect ke halaman login
  //   if (!token) {
  //     const loginUrl = new URL("/login", req.url) // Redirect ke /login
  //     return NextResponse.redirect(loginUrl)
  //   }
  //   // Jika token valid, izinkan akses
  //   return NextResponse.next()
}

// Configurasi untuk melindungi route dashboard
export const config = {
  matcher: "/dashboard/:path*", // Proteksi semua sub-path dari /dashboard
}
