/**
 * Home page component that serves as the landing page of the application.
 * Features:
 * - Displays welcome message and application description
 * - Handles authentication state:
 *   - Shows "View Items" button for authenticated users
 *   - Shows login prompt for unauthenticated users
 * - Integrates with NextAuth for session management
 */
import { Button } from "@/components/ui/button"
import { getServerSession } from "next-auth"
import Link from "next/link"
import { SignInButton } from "@/components/sign-in-button"

export default async function Home() {
  const session = await getServerSession()

  return (
    <div className="flex-1">
      <main className="container mx-auto py-6">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4">
          <h1 className="text-4xl font-bold">Welcome to Items Viewer</h1>
          <p className="text-lg text-muted-foreground max-w-[600px]">
            A modern application showcasing data table functionality with Next.js and Shadcn UI.
          </p>
          {session?.user ? (
            <Link href="/items">
              <Button size="lg">
                View Items
              </Button>
            </Link>
          ) : (
            <div className="flex flex-col items-center space-y-4">
              <p className="text-sm text-muted-foreground">
                Please Log in with Google to access the items
              </p>
              <SignInButton />
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
