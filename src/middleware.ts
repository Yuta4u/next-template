import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Middleware untuk melindungi route
export function middleware(req: NextRequest) {}

// Configurasi untuk melindungi route dashboard
export const config = {
  matcher: "/profile",
}
