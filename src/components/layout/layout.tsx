import { ThemeProvider, ToggleTheme } from "../theme-provider"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import { TSession } from "@/app/(pages)/profile/page"
import { auth } from "@/auth"
import { SignOut } from "../auth/sign-out.btn"

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
        {session && <SignOut />}
      </ThemeProvider>
    </>
  )
}
