import { signIn } from "@/auth"
import Image from "next/image"
import { Button } from "../ui/button"

const SignInGithub = async () => {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github", { redirectTo: "/dashboard" })
      }}
    >
      <Button
        type="submit"
        className="flex relative bg-white text-black border border-slate-50 rounded hover:bg-slate-50 min-w-[8.5rem] w-full"
      >
        <Image
          src={"/icons/github.svg"}
          width={20}
          height={20}
          alt="github-icon"
        />
        Github
      </Button>
    </form>
  )
}

const SignInDiscord = async () => {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("discord", { redirectTo: "/dashboard" })
      }}
    >
      <Button
        type="submit"
        className="flex relative bg-white text-black border border-slate-50 rounded hover:bg-slate-50 min-w-[8.5rem] w-full"
      >
        <Image
          src={"/icons/discord.svg"}
          width={20}
          height={20}
          alt="discord-icon"
        />
        Discord
      </Button>
    </form>
  )
}
export { SignInGithub, SignInDiscord }
