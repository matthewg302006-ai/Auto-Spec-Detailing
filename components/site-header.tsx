"use client"

import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL = "https://wa.me/27659100500?text=Hi%20Auto%20Spec%20Detailing%2C%20I%27d%20like%20to%20book%20a%20detail."

const navLinks = [
  { label: "Services", href: "#packages" },
  { label: "Results", href: "#before-after" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#footer" },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl font-black italic tracking-wider text-primary">
            AUTO SPEC
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a href="tel:0659100500" className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <Phone className="size-4" />
            <span className="sr-only md:not-sr-only">065 910 0500</span>
          </a>
          <Button asChild size="lg" className="font-bold">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Book Now
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav
          className="border-t border-border/50 bg-background px-4 pb-6 pt-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="tel:0659100500" className="flex items-center gap-2 text-base text-muted-foreground">
              <Phone className="size-4" />
              065 910 0500
            </a>
            <Button asChild size="lg" className="w-full font-bold">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
