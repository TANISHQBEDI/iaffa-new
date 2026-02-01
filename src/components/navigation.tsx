"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Programs", href: "/program" },
  { label: "Submissions", href: "/submissions" },
  { label: "Prizes", href: "/prizes" },
  { label: "Membership", href: "/membership" },
  { label: "News", href: "/news" },
  { label: "Oman Partnership", href: "/oman-partnership" },
  { label: "About", href: "/about" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-xl font-bold text-primary tracking-wide">IAFFA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm text-champagne/80 hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2 bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-champagne hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden absolute top-16 left-0 right-0 glass border-t border-primary/10 transition-all duration-300",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-champagne/80 hover:text-primary hover:bg-primary/5 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block mt-4 px-4 py-3 bg-primary text-primary-foreground text-center font-medium tracking-wide"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
