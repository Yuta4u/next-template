import { auth } from "@/auth"
import ProfileContent from "@/components/profile"
import { User } from "next-auth"

export type TSession = {
  user?: User & {
    role?: string
    name?: string | null
    email?: string | null
  }
} | null

export default async function ProfilePage() {
  const session: TSession = await auth()

  return <ProfileContent session={session} />
}
