"use client"

import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"

export function SignInButton() {
  return (
    <Button 
      size="lg" 
      variant="outline" 
      onClick={() => signIn("google")}
    >
      Log in with Google
    </Button>
  )
} 