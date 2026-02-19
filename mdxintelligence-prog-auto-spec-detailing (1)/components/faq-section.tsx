import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Do you need my water or power?",
    answer:
      "Not at all. Our mobile units are 100% self-sufficient with onboard deionized water and silent generators. You just provide the keys.",
  },
  {
    question: "Where are you located?",
    answer:
      "We are based at Huguenot, Franschhoek, 7690, servicing the entire surrounding area including greater Cape Town.",
  },
  {
    question: "What are your hours?",
    answer:
      "We operate every day from 8am to 8pm to fit your schedule. Weekend and holiday bookings are welcome.",
  },
  {
    question: "How long does a detail take?",
    answer:
      "A Basic Wash typically takes 45 minutes to 1 hour. Our Standard Wash takes about 1.5 to 2 hours, and the Premium Wash with full wax and polish takes 2 to 3 hours depending on vehicle condition.",
  },
  {
    question: "Do you service both luxury and regular vehicles?",
    answer:
      "Absolutely. We detail everything from daily drivers to high-end luxury and performance vehicles. Every car gets the same level of meticulous attention.",
  },
  {
    question: "What is your rain policy?",
    answer:
      "If rain is forecast, we will contact you to reschedule at no extra charge. If it starts raining during a detail, we will complete as much as possible and return to finish the job free of charge.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="border-t border-border/50 bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        {/* Section heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            FAQ
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Common Questions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            Everything you need to know before booking your detail.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-border/50 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
