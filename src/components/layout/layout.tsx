import { ThemeProvider, ToggleTheme } from "../theme-provider"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

export default function Layout({ children }: { children: React.ReactNode }) {
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
      </ThemeProvider>
    </>
  )
}
