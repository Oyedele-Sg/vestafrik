"use client";

import * as React from "react";

const features = [
  {
    id: "send-payments",
    title: "Send payments.",
    subtitle:
      "Pay partners, customers, employees and creators in their preferred currency.",
    points: [
      {
        title: "Flexible funding options",
        description:
          "Use your fiat balance to send stablecoins, or fund in stablecoins and pay out in fiat.",
      },
      {
        title: "Lower costs",
        description:
          "Bypass intermediaries and cut FX fees with direct stablecoin rails.",
      },
      {
        title: "Mass payouts, simplified",
        description:
          "Send high-volume payments via CSV or integrate with our API for scale.",
      },
    ],
    demoText: "See it in action – try the demo",
  },
  {
    id: "receive-payments",
    title: "Receive payments.",
    subtitle:
      "Expand your global reach with digital currencies in your checkout. Auto-convert to EUR, GBP, USD.",
    points: [
      {
        title: "Get started fast",
        description:
          "Use our hosted payment page – fully optimized for conversion and available in multiple languages.",
      },
      {
        title: "Connect with existing systems",
        description:
          "Integrates with systems like Payment IQ, Praxis Checkout, Bridgerpay, Premier cashier and Stratified.",
      },
      {
        title: "Get paid through any channel",
        description:
          "Generate invoices and request payment via email, SMS, WhatsApp and other platforms.",
      },
    ],
    demoText: "See it in action – try the demo",
  },
  {
    id: "convert-currencies",
    title: "Convert currencies.",
    subtitle:
      "24/7 access and full control. Avoid banking hour limitations and delays.",
    points: [
      {
        title: "Flexible conversion options",
        description:
          "Exchange between fiat and crypto 24/7, whether it's USD to EUR, USDC to GBP, or any mix in between.",
      },
      {
        title: "Trade your way",
        description:
          "Lock in OTC quotes through our portal, API or direct chat for large or time-sensitive conversions.",
      },
    ],
    demoText: "See it in action – try the demo",
  },
  {
    id: "store-funds",
    title: "Store funds.",
    subtitle:
      "Let your customers store, spend and get paid in USD, GBP, EUR or stablecoins.",
    points: [
      {
        title: "Embed wallets in your platform",
        description:
          "Set up wallets for USD, GBP, EUR and stablecoins. Convert between them automatically or on demand, 24/7.",
      },
      {
        title: "Named accounts for your customers",
        description:
          "Use named virtual accounts to simplify reconciliation and keep client funds clearly separated.",
      },
      {
        title: "No need to hold crypto",
        description:
          "Auto-convert stablecoins to fiat on receipt, or fiat to stablecoins on payout.",
      },
    ],
    demoText: "See it in action – try the demo",
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {features.map((feature) => (
            <div key={feature.id} className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {feature.title}
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {feature.subtitle}
                </p>
              </div>

              <div className="space-y-6">
                {feature.points.map((point, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-semibold text-lg text-gray-900">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button className="text-[#0066FF] hover:text-[#0052CC] font-semibold transition-colors duration-200 underline underline-offset-4">
                  {feature.demoText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
