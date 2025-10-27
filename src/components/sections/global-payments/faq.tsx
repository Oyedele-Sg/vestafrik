"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Is it easy to integrate with BVNK?",
    answer:
      "Integrating the BVNK payments API can take a week or less. Our dedicated solutions engineers will work with you throughout the process. You can use utilise pre-built components and elements or build natively with a full API integration.",
  },
  {
    question: "What can I do with BVNK's platform?",
    answer:
      "BVNK builds stablecoin-native infrastructure to power global financial services. Our platform enables businesses to move value near-instantly across borders and networks. Send, receive, convert, and store stablecoins and fiat across a variety of domestic and international payment rails and blockchains.",
  },
  {
    question: "Is BVNK safe?",
    answer:
      "We invest in security at every level of our business, from operations to the boardroom. BVNK has achieved its ISO 27001:2022 certification and SOC 2 Type 11, globally recognised standards in information security and data management. Learn more about our controls and credentials.",
  },
];

export function FAQSection() {
  return (
    <section className="py-20 md:py-32 bg-[#F7F9FC]">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Frequently asked questions.
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border border-gray-200 rounded-xl px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-lg font-semibold text-gray-900">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-gray-600 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
