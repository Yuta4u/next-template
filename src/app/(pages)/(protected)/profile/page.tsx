import { auth } from "@/auth"
import { User } from "next-auth"
import { redirect } from "next/navigation"
import ProfileContent from "@/components/pages/profile/profile"

export type TSession = {
  user?: User & {
    role?: string
    name?: string | null
    email?: string | null
  }
} | null

export default async function ProfilePage() {
  const session: TSession = await auth()

  if (!session?.user) {
    return redirect("/login")
  }

  return <ProfileContent session={session} />
}
