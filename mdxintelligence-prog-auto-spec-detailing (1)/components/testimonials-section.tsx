import { Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const WHATSAPP_URL = "https://wa.me/27659100500?text=Hi%20Auto%20Spec%20Detailing%2C%20I%27d%20like%20to%20book%20a%20detail."

const testimonials = [
  {
    name: "Adrian Z.",
    vehicle: "Porsche 911",
    initial: "A",
    quote:
      "Removed swirls I thought were permanent. Better than showroom quality. I won't trust anyone else with my 911.",
    rating: 5,
  },
  {
    name: "Thandi M.",
    vehicle: "Range Rover",
    initial: "T",
    quote:
      "Arrived at my estate in Franschhoek. The convenience of a mobile unit that brings its own water is a game-changer.",
    rating: 5,
  },
  {
    name: "Johan K.",
    vehicle: "Classic Benz",
    initial: "J",
    quote:
      "The Premium Wash is phenomenal. The wax and polish finish has my Benz looking like it just rolled off the showroom floor.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Client Reviews
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Our Clients Say
          </h2>
        </div>

        {/* Bento grid - 3 visible cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative flex flex-col rounded-2xl border border-border/50 bg-card p-8 transition-all hover:border-primary/30 hover:shadow-[0_0_30px_-5px] hover:shadow-primary/10"
            >
              {/* Quote icon */}
              <Quote className="mb-4 size-8 text-primary/30" />

              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="mb-6 flex-1 text-base leading-relaxed text-foreground">
                {`"${t.quote}"`}
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-border/50 pt-6">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {t.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.vehicle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-lg font-medium text-muted-foreground">
            Ready to join our satisfied clients?
          </p>
          <Button asChild size="lg" className="h-12 px-8 font-bold">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Book Your Detail Today
              <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
