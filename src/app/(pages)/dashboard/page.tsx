import { auth } from "@/auth"
import { SignOut } from "@/components/auth/sign-out.btn"
import NotAuthenticated from "@/components/not-authenticated"

export default async function Dashboard() {
  const session = await auth()

  if (!session?.user) return <NotAuthenticated />

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start justify-center text-center">
        You are authenticated! Nice...
        <SignOut />
      </main>
    </div>
  )
}