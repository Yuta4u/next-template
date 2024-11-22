"use client"

import { redirect } from "next/navigation"
import React from "react"

const NotAuthenticated = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="text-center">
        <h1>You are not authenticated</h1>
        <p>
          Please{" "}
          <span
            onClick={() => redirect("/login")}
            className="underline text-blue-700 hover:cursor-pointer"
          >
            log in
          </span>{" "}
          to access this page.
        </p>
      </div>
    </div>
  )
}

export default NotAuthenticated
