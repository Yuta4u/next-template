"use client"

import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"
import Link from "next/link"
import { signOut } from "next-auth/react"

export default function TokenExpiredPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <AlertTriangle className="w-16 h-16 text-red-500" />
          </div>
          <CardTitle className="text-2xl text-red-600">
            Session Expired
          </CardTitle>
          <CardDescription className="text-gray-600">
            Your session has timed out due to inactivity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-700 mb-4">
            For security reasons, you have been logged out. Please log in again
            to continue.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/login">
            <Button
              onClick={async () => await signOut({ redirectTo: "/login" })}
              className="w-full"
            >
              Log In Again
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
