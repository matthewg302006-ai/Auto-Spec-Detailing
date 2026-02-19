import Image from "next/image"
import { ArrowRight, Clock, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL = "https://wa.me/27659100500?text=Hi%20Auto%20Spec%20Detailing%2C%20I%27d%20like%20to%20book%20a%20detail."

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-car.jpg"
          alt="Luxury car with showroom-quality finish in Franschhoek"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-24 lg:px-8">
        <div className="max-w-2xl">
          {/* Tagline */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <span className="text-sm font-medium text-primary">Premium Mobile Detailing</span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-balance text-4xl font-black leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            The Showroom Shine, Delivered to{" "}
            <span className="text-primary">Franschhoek</span>
          </h1>

          {/* Subheadline */}
          <p className="mb-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:text-xl">
            Mobile precision detailing for high-value vehicles. We bring our own
            deionized water and power to your door — from Huguenot to the
            greater Cape Town area.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="h-14 px-8 text-base font-bold">
              <a href="#packages">
                Start Your Transformation
                <ArrowRight className="ml-2 size-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base font-medium">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Get a Free Quote
              </a>
            </Button>
          </div>

          {/* Trust line */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="size-4 text-primary" />
              <span>Open Every Day: 8am - 8pm</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="size-4 text-primary" />
              <a href="tel:0659100500" className="transition-colors hover:text-foreground">
                065 910 0500
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
