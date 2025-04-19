/**
 * Navigation bar component that provides the main application header.
 * Features:
 * - Responsive design
 * - Authentication state handling
 * - User profile dropdown with avatar
 * - Theme toggle functionality
 * - Sign in/out capabilities
 */
"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { signIn, signOut, useSession } from "next-auth/react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const { data: session, status } = useSession()

  return (
    <nav className="border-b shadow-sm">
      <div className="flex h-16 justify-between items-center px-4">
        <div className="mr-4 flex items-center space-x-6">
          <Link href="/" className="flex items-center">
            <span className="font-bold text-2xl">ITEMS VIEWER</span>
          </Link>
          
        </div>

        <div className="flex items-center space-x-4">

        {/* <nav className="flex items-center space-x-4">
            <Link
              href="/items"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Items
            </Link>
        </nav> */}

          <Link
            href="https://github.com/yourusername/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative overflow-hidden transition-colors hover:bg-transparent p-0"
            >
              <Image
                src="/git.png"
                alt="GitHub Repository"
                width={24}
                height={24}
                className="transition-transform duration-300 group-hover:scale-110 dark:invert"
              />
              <span className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-full" />
            </Button>
          </Link>
          <ThemeToggle />
          {status === "loading" ? (
            <div className="h-8 w-8 animate-pulse rounded-full bg-muted" />
          ) : session?.user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={session.user.image || ""} alt={session.user.name || ""} />
                    <AvatarFallback>{session.user.name?.charAt(0) || "U"}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuItem className="flex-col items-start">
                  <div className="text-sm font-medium">{session.user.name}</div>
                  <div className="text-xs text-muted-foreground">{session.user.email}</div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => signOut()}>
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="outline" onClick={() => signIn("google")}>
              Log in with Google
            </Button>
          )}
        </div>
      </div>
    </nav>
  )
} 