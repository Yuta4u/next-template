import {
  SignInDiscord,
  SignInGithub,
  SignInGoogle,
  SignInFacebook,
} from "./auth/sign-in.btn"

export default function Login() {
  return (
    <div className="h-auto p-4  grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-3 border rounded-md border-gray-100 w-[320px]">
      <SignInDiscord />
      <SignInGithub />
      <SignInGoogle />
      <SignInFacebook />
    </div>
  )
}
