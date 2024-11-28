import { signOut } from "@/auth"
import { Button } from "../ui/button"
import { cookies } from "next/headers"

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut({ redirectTo: "/login" })
      }}
    >
      <Button
        type="submit"
        className="flex bg-white text-black border border-slate-50 rounded hover:bg-slate-50 min-w-[8.5rem] w-[8.5rem]"
      >
        Sign Out
      </Button>
    </form>
  )
}
