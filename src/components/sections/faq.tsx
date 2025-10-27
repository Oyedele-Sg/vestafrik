"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type QA = { q: string; a: string };

const DEFAULT_FAQS: ReadonlyArray<QA> = [
  {
    q: "How do I start taking payments with Raiz?",
    a: "Create an account, complete verification, and connect your preferred payout method. You can then accept transfers immediately via stablecoins or bank rails where supported.",
  },
  {
    q: "Does Raiz have processing fees?",
    a: "Fees vary by currency corridor and payment method. We keep pricing transparent and show exact fees before you confirm a transfer.",
  },
  {
    q: "Are payments through Raiz secure?",
    a: "Yes. We use multi‑layer security, 2‑factor authentication, and custody with established financial institutions.",
  },
  {
    q: "How does Tap to Pay work on iPhone and Android?",
    a: "Supported devices can accept contactless payments with no extra hardware. Enable it in your dashboard, follow the on‑device setup, and you’re ready to accept payments.",
  },
];

export function FAQSection({
  items = DEFAULT_FAQS,
}: {
  items?: ReadonlyArray<QA>;
}) {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-8 md:mb-12">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            FAQ
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {items.map((item, idx) => (
            <AccordionItem key={item.q} value={`item-${idx}`}>
              <AccordionTrigger className="py-6 md:py-8 text-left text-xl md:text-2xl font-semibold hover:no-underline [&>svg]:hidden [&[data-state=open]>.icon-closed]:hidden [&[data-state=closed]>.icon-open]:hidden">
                {item.q}
                <span
                  aria-hidden
                  className="icon-closed text-2xl leading-none select-none"
                >
                  +
                </span>
                <span
                  aria-hidden
                  className="icon-open text-2xl leading-none select-none"
                >
                  x
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FAQSection;
