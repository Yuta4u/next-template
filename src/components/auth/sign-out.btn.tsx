import { signOut } from "@/auth"
import { Button } from "../ui/button"

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut({ redirectTo: "/login" })
      }}
    >
      <Button type="submit" className="bg-gray-100">
        Sign Out
      </Button>
    </form>
  )
}
