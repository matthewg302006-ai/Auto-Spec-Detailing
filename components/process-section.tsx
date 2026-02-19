import { Truck, Sparkles, ThumbsUp } from "lucide-react"

const steps = [
  {
    icon: Truck,
    step: "01",
    title: "We Arrive",
    description:
      "Our fully equipped mobile unit arrives at your location with everything we need, including deionized water and power.",
  },
  {
    icon: Sparkles,
    step: "02",
    title: "We Detail",
    description:
      "Using premium products and meticulous techniques, we transform your vehicle to showroom condition.",
  },
  {
    icon: ThumbsUp,
    step: "03",
    title: "You Shine",
    description:
      "Walk around inspection with you. We only leave when you are completely satisfied with the result.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            How It Works
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Three Simple Steps
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.step} className="relative flex flex-col items-center text-center">
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="absolute top-10 left-[calc(50%+40px)] hidden h-px w-[calc(100%-80px)] bg-gradient-to-r from-primary/40 to-transparent md:block" />
              )}

              <div className="mb-6 flex size-20 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
                <s.icon className="size-8" />
              </div>

              <span className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
                Step {s.step}
              </span>
              <h3 className="mb-3 text-xl font-bold text-foreground">{s.title}</h3>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
