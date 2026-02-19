"use client"

import { MessageCircle } from "lucide-react"

const WHATSAPP_URL = "https://wa.me/27659100500?text=Hi%20Auto%20Spec%20Detailing%2C%20I%27d%20like%20a%20quick%20quote."

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-6 z-50 flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-primary/40"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">Quick Quote</span>
    </a>
  )
}
