import { ThemeProvider, ToggleTheme } from "../providers/theme-provider"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import { auth } from "@/auth"
import { SignOut } from "./auth/sign-out.btn"
import Link from "next/link"
import { Button } from "./ui/button"
import { User } from "next-auth"

export type TSession = {
  user?: User & {
    role?: string
    name?: string | null
    email?: string | null
  }
} | null

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const session: TSession = await auth()

  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <ToggleTheme />
        <ToastContainer />
        {children}
        <div className="fixed right-2 bottom-2 flex gap-2">
          <Link href="/profile">
            <Button className="flex bg-white text-black border border-slate-50 rounded hover:bg-slate-50 min-w-[8.5rem] w-[8.5rem]">
              Profile
            </Button>
          </Link>
          {session && <SignOut />}
        </div>
      </ThemeProvider>
    </>
  )
}
