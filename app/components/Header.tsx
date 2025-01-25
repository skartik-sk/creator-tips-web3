"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="bg-background border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text"
        >
          CreatorTip
        </Link>
        <div className="flex items-center space-x-4">
          <Button variant="outline" asChild>
            <Link href="/register">Register as Creator</Link>
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </nav>
    </header>
  )
}

