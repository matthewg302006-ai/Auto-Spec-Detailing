"use client"

import { useState } from "react"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const WHATSAPP_BASE = "https://wa.me/27659100500?text="

type VehicleType = "normal" | "suv"

const packages = [
  {
    name: "Basic Wash",
    description: "A thorough exterior and interior refresh for your vehicle.",
    price: { normal: 200, suv: 250 },
    features: [
      "Exterior Hand Wash",
      "Tire Shine",
      "Window Cleaning",
      "Interior Vacuum",
    ],
    featured: false,
    badge: null,
  },
  {
    name: "Standard Wash",
    description: "Our most popular package with professional wheel care included.",
    price: { normal: 300, suv: 340 },
    features: [
      "Everything in Basic",
      "Professional Wheel Cleaning",
      "Wheel Decontamination",
      "Dashboard Wipe Down",
    ],
    featured: true,
    badge: "Best Value",
  },
  {
    name: "Premium Wash",
    description: "The full treatment with a high-gloss wax and polish finish.",
    price: { normal: 400, suv: 500 },
    features: [
      "Everything in Standard",
      "Professional Wax",
      "Full Polish Treatment",
      "High-Gloss Protection",
    ],
    featured: false,
    badge: null,
  },
]

export function PricingPackages() {
  const [vehicleType, setVehicleType] = useState<VehicleType>("normal")

  return (
    <section id="packages" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section heading */}
        <div className="mb-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Detailing Packages
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Choose Your Level of Shine
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Every package includes our signature attention to detail. Select your
            vehicle type to see accurate pricing.
          </p>
        </div>

        {/* Vehicle type toggle */}
        <div className="mb-12 flex items-center justify-center">
          <div className="inline-flex rounded-lg border border-border bg-secondary p-1">
            <button
              onClick={() => setVehicleType("normal")}
              className={cn(
                "rounded-md px-6 py-2 text-sm font-medium transition-all",
                vehicleType === "normal"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Normal Car
            </button>
            <button
              onClick={() => setVehicleType("suv")}
              className={cn(
                "rounded-md px-6 py-2 text-sm font-medium transition-all",
                vehicleType === "suv"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              SUV / Large
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => {
            const whatsappMsg = encodeURIComponent(
              `Hi Auto Spec Detailing, I'd like to book the ${pkg.name} (${vehicleType === "suv" ? "SUV" : "Normal"} - R${pkg.price[vehicleType]}).`
            )
            return (
              <div
                key={pkg.name}
                className={cn(
                  "relative flex flex-col rounded-2xl border p-8 transition-all",
                  pkg.featured
                    ? "border-primary/50 bg-card shadow-[0_0_40px_-10px] shadow-primary/20"
                    : "border-border/50 bg-card hover:border-border"
                )}
              >
                {pkg.badge && (
                  <Badge className="absolute -top-3 left-8 bg-primary text-primary-foreground">
                    {pkg.badge}
                  </Badge>
                )}

                <h3 className="mb-2 text-xl font-bold text-foreground">{pkg.name}</h3>
                <p className="mb-6 text-sm text-muted-foreground">{pkg.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-black text-foreground">
                    R{pkg.price[vehicleType]}
                  </span>
                  <span className="ml-1 text-sm text-muted-foreground">
                    / {vehicleType === "suv" ? "SUV" : "car"}
                  </span>
                </div>

                <ul className="mb-8 flex flex-1 flex-col gap-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  className={cn(
                    "w-full font-bold",
                    !pkg.featured && "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                >
                  <a
                    href={`${WHATSAPP_BASE}${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book This Package
                    <ArrowRight className="ml-2 size-4" />
                  </a>
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
