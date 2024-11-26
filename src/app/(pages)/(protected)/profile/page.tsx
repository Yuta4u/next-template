import { auth } from "@/auth"
import { User } from "next-auth"
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

  console.log("hit")

  return <ProfileContent session={session} />
}
