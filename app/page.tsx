import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { SocialProofGrid } from "@/components/social-proof-grid"
import { ProcessSection } from "@/components/process-section"
import { PricingPackages } from "@/components/pricing-packages"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { CtaHub } from "@/components/cta-hub"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <HeroSection />
        <SocialProofGrid />
        <ProcessSection />
        <PricingPackages />
        <BeforeAfterSlider />
        <TestimonialsSection />
        <FaqSection />
        <CtaHub />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  )
}
