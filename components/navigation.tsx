"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "writing", href: "/writing" },
  { name: "bookmarks", href: "/bookmarks" },
  { name: "quotes", href: "/quotes" },
  { name: "visuals", href: "/visuals" },
  { name: "books", href: "/books" },
  { name: "products", href: "/products" },
  { name: "open source", href: "/open-source" },
  { name: "tools", href: "/tools" },
  { name: "experiments", href: "/experiments" },
  { name: "about", href: "/about" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:fixed md:top-8 md:right-30 md:flex md:flex-col md:gap-2 md:z-50">
        <Link
          href="/"
          className={`text-sm transition-colors hover:text-amber-300 ${pathname === "/" ? "text-amber-300" : "text-zinc-400"
            }`}
        >
          home
        </Link>
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`text-sm transition-colors hover:text-amber-300 ${pathname === item.href ? "text-amber-300" : "text-zinc-400"
              }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-6 right-6 z-50">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="text-zinc-400 hover:text-amber-300 hover:bg-zinc-900/50"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-sm z-40">
          <div className="flex flex-col items-center justify-center h-full gap-6">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`text-lg transition-colors hover:text-amber-300 ${pathname === "/" ? "text-amber-300" : "text-zinc-400"
                }`}
            >
              home
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg transition-colors hover:text-amber-300 ${pathname === item.href ? "text-amber-300" : "text-zinc-400"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
