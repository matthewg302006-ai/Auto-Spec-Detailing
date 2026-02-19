import Image from "next/image"
import { ArrowRight, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL = "https://wa.me/27659100500?text=Hi%20Auto%20Spec%20Detailing%2C%20I%27d%20like%20to%20get%20a%20quote."

export function CtaHub() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/premium-wash.jpg"
          alt="Professional detailer working on luxury vehicle"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/90" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
          Get Started
        </p>
        <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Your Vehicle Deserves the Best
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Join over 1,200 satisfied vehicle owners across Franschhoek and the
          Cape. Book your mobile detail today and experience the showroom shine.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="h-14 px-8 text-base font-bold">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 size-5" />
              Get a Quote on WhatsApp
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base font-medium">
            <a href="tel:0659100500">
              <Phone className="mr-2 size-5" />
              Call 065 910 0500
            </a>
          </Button>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Open every day 8am - 8pm. We come to you in Franschhoek and the greater Cape Town area.
        </p>
      </div>
    </section>
  )
}
