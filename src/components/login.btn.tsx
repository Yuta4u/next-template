import { SignInDiscord, SignInGithub, SignInGoogle } from "./auth/SignIn.btn"

export default function Login() {
  return (
    <div className="w-80 h-72 p-4 border rounded-md">
      <div className="flex justify-between ">
        <SignInDiscord />
        <SignInGithub />
      </div>
      <div className="flex justify-between mt-2">
        <SignInGoogle />
      </div>
    </div>
  )
}
