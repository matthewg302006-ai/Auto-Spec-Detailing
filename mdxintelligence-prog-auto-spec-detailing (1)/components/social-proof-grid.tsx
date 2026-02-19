import { Star, Droplets, Zap, Award } from "lucide-react"

const stats = [
  {
    icon: Star,
    value: "1,200+",
    label: "Vehicles Perfected",
    detail: "Luxury & General",
  },
  {
    icon: Droplets,
    value: "100%",
    label: "Self-Contained Unit",
    detail: "Own water & power",
  },
  {
    icon: Award,
    value: "#1",
    label: "Rated in Franschhoek",
    detail: "5-Star service",
  },
]

export function SocialProofGrid() {
  return (
    <section className="relative border-y border-border/50 bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Why Choose Us
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by Vehicle Owners Across the Cape
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Stats tiles */}
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group flex flex-col items-center gap-3 rounded-xl border border-border/50 bg-card p-8 text-center transition-all hover:border-primary/40 hover:shadow-[0_0_30px_-5px] hover:shadow-primary/10"
            >
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <stat.icon className="size-6" />
              </div>
              <p className="text-3xl font-black text-foreground">{stat.value}</p>
              <p className="text-sm font-semibold text-foreground">{stat.label}</p>
              <p className="text-xs text-muted-foreground">{stat.detail}</p>
            </div>
          ))}

          {/* Testimonial highlight tile */}
          <div className="flex flex-col justify-center rounded-xl border border-primary/30 bg-card p-8 sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-primary text-primary" />
              ))}
            </div>
            <blockquote className="mb-4 text-sm leading-relaxed text-foreground">
              {'"Better than showroom quality. The convenience of them coming to my estate in Franschhoek is unmatched."'}
            </blockquote>
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                M
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Mark R.</p>
                <p className="text-xs text-muted-foreground">Porsche 911</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling trust bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground lg:gap-10">
          <div className="flex items-center gap-2">
            <Zap className="size-4 text-primary" />
            <span>PH-Neutral Chemicals</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="size-4 text-primary" />
            <span>Microfiber Only</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="size-4 text-primary" />
            <span>Scratch-Free Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="size-4 text-primary" />
            <span>Fully Insured</span>
          </div>
        </div>
      </div>
    </section>
  )
}
