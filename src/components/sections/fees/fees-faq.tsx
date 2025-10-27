"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How much will I pay in processing fees?",
    a: "Fees vary by method. See the table above for card-present, online, invoices, ACH, and more.",
  },
  {
    q: "Is there a free trial and can I cancel later?",
    a: "Yes, Plus and Premium offer trials. You can cancel anytime from your dashboard.",
  },
  {
    q: "Can I accept any type of credit card?",
    a: "Yes. Visa, Mastercard, Discover, and American Express.",
  },
  {
    q: "Do I need to purchase hardware?",
    a: "Only for in-person card-present payments; online and invoices work without hardware.",
  },
  {
    q: "How can I get in touch for support?",
    a: "Visit our contact page for email and phone options.",
  },
  {
    q: "How can I switch from my current solution?",
    a: "Our team can help migrate your catalog and customers.",
  },
];

export function FeesFaq() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
          FAQ
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map(({ q, a }, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-base">{q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FeesFaq;
