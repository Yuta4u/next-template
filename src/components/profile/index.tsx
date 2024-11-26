import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UserCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TSession } from "@/app/profile/page"

export default function ProfileContent({ session }: { session: TSession }) {
  const user = session?.user
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8">
          {/* User Profile Card */}
          <Card className="w-full max-w-2xl mx-auto">
            <CardHeader className="flex flex-row items-center gap-4">
              <UserCircle className="h-12 w-12 text-primary" />
              <div>
                <CardTitle className="text-2xl font-bold">
                  Welcome, {user?.name ?? "User"}!
                </CardTitle>
                <p className="text-sm text-gray-500">{user?.email}</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Role</p>
                    <p className="mt-1 text-lg font-semibold capitalize">
                      {user?.role}
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-4">
                  <p className="text-gray-600">
                    Nothing gonna change my love for you, you ought to know by
                    know how much i love you
                  </p>
                </div>

                <Link href="/foody">
                  <Button>Foody</Button>
                </Link>

                <Link href="/heyho">
                  <Button className="ml-2">Heyho</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
