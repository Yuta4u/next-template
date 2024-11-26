import { auth } from "@/auth"
import { TSession } from "./profile/page"
import { redirect } from "next/navigation"

export default async function ProtectedLayout({ children }: any) {
  const session: TSession = await auth()

  if (!session) {
    redirect("/login")
  }

  return <>{children}</>
}
