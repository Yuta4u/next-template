import { ThemeProvider, ToggleTheme } from "../theme-provider"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import { TSession } from "@/app/(pages)/profile/page"
import { auth } from "@/auth"
import { SignOut } from "../auth/sign-out.btn"
import Link from "next/link"
import { Button } from "../ui/button"

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
        <Link href="/profile">
          <Button className="flex bg-white text-black border border-slate-50 rounded hover:bg-slate-50 min-w-[8.5rem] w-[8.5rem] fixed bottom-2 right-40">
            Profile
          </Button>
        </Link>
        {session && <SignOut />}
      </ThemeProvider>
    </>
  )
}
