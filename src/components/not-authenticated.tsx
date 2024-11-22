import Link from "next/link"
import React from "react"

const NotAuthenticated = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="text-center">
        <h1>You are not authenticated</h1>
        <p>
          Please{" "}
          <span className="underline text-blue-700 hover:cursor-pointer">
            <Link href="/login">log in</Link>
          </span>{" "}
          to access this page.
        </p>
      </div>
    </div>
  )
}

export default NotAuthenticated
