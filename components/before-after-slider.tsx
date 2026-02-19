"use client"

import { useState, useRef, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const WHATSAPP_URL = "https://wa.me/27659100500?text=Hi%20Auto%20Spec%20Detailing%2C%20I%20saw%20your%20before%20%26%20after%20results%20and%20I%27d%20like%20to%20book."

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percent)
  }, [])

  const handleMouseDown = useCallback(() => {
    isDragging.current = true
  }, [])

  const handleMouseUp = useCallback(() => {
    isDragging.current = false
  }, [])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging.current) return
      updatePosition(e.clientX)
    },
    [updatePosition]
  )

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      updatePosition(e.touches[0].clientX)
    },
    [updatePosition]
  )

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      updatePosition(e.clientX)
    },
    [updatePosition]
  )

  return (
    <section id="before-after" className="border-y border-border/50 bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Visual Results
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            See the Difference
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Drag the slider to reveal the transformation. From dull, contaminated
            paint to a flawless high-gloss finish.
          </p>
        </div>

        {/* Slider container */}
        <div className="mx-auto max-w-4xl">
          <div
            ref={containerRef}
            className="relative aspect-[16/9] cursor-ew-resize select-none overflow-hidden rounded-2xl border border-border/50"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onClick={handleClick}
            role="slider"
            aria-label="Before and after comparison slider"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(sliderPosition)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") setSliderPosition((p) => Math.max(0, p - 2))
              if (e.key === "ArrowRight") setSliderPosition((p) => Math.min(100, p + 2))
            }}
          >
            {/* After image (full background) */}
            <Image
              src="/images/after-detail.jpg"
              alt="Car after professional detailing with high-gloss finish"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />

            {/* Before image (clipped) */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src="/images/before-detail.jpg"
                alt="Car before detailing with dull paint and swirl marks"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            {/* Slider line */}
            <div
              className="absolute top-0 bottom-0 z-10 w-0.5 bg-primary shadow-[0_0_12px_2px] shadow-primary/40"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Slider handle */}
              <div className="absolute top-1/2 left-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary bg-background shadow-lg">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-primary"
                >
                  <path d="M5 3L2 8L5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11 3L14 8L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 z-20 rounded-md bg-background/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-foreground backdrop-blur-sm">
              Before
            </div>
            <div className="absolute top-4 right-4 z-20 rounded-md bg-primary/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground backdrop-blur-sm">
              After
            </div>
          </div>

          {/* CTA below slider */}
          <div className="mt-10 flex flex-col items-center gap-4 text-center">
            <p className="text-lg font-medium text-foreground">
              Ready for your vehicle to look this good?
            </p>
            <Button asChild size="lg" className="h-14 px-8 text-base font-bold">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Book Your Transformation
                <ArrowRight className="ml-2 size-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
