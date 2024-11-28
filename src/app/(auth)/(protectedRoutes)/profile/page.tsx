import ProfileContent from "@/components/profile"
import { auth } from "@/auth"
import { TSession } from "@/components/layout"

export default async function ProfilePage() {
  const session: TSession = await auth()

  //test
  return <ProfileContent session={session} />
}
