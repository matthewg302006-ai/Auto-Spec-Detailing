import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL = "https://wa.me/27659100500?text=Hi%20Auto%20Spec%20Detailing%2C%20I%20have%20a%20quick%20question."

const serviceAreas = [
  "Franschhoek",
  "Stellenbosch",
  "Paarl",
  "Somerset West",
  "Cape Town CBD",
  "Constantia",
]

export function SiteFooter() {
  return (
    <footer id="footer" className="border-t border-border/50 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="mb-4 block text-xl font-black italic tracking-wider text-primary">
              AUTO SPEC
            </span>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              Premium mobile detailing in Franschhoek and the greater Cape Town
              area. We bring the showroom shine to your doorstep.
            </p>
            <p className="text-xs text-muted-foreground">
              Fully Insured. 100% Scratch-Free Guarantee.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:0659100500"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="size-4" />
                  065 910 0500
                </a>
              </li>
              <li>
                <a
                  href="mailto:specautodetailingsa@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="size-4" />
                  specautodetailingsa@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                Huguenot, Franschhoek, Cape Town, 7690
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Service Areas
            </h3>
            <ul className="flex flex-col gap-2">
              {serviceAreas.map((area) => (
                <li key={area} className="text-sm text-muted-foreground">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Actions */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Actions
            </h3>
            <div className="flex flex-col gap-3">
              <Button asChild size="lg" className="w-full font-bold">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 size-4" />
                  Chat Now
                </a>
              </Button>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://instagram.com/autospecdetailing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="size-5" />
                </a>
                <a
                  href="https://facebook.com/autospecdetailing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="size-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            {`\u00A9 ${new Date().getFullYear()} Auto Spec Detailing. All rights reserved.`}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
