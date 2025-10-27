"use client";

import * as React from "react";

const models = [
  {
    title: "Launch stablecoin products for your customers.",
    description:
      "You control the user experience, BVNK handles compliance, onboarding and payment execution behind the scenes.",
    cta: "Learn about Embedded Wallets",
  },
  {
    title: "Use stablecoin payments for your own business.",
    description:
      "Send, receive and convert funds using BVNK's infrastructure. Bring your own licence or use ours.",
    cta: "Learn more",
  },
];

export function FlexibleModels() {
  return (
    <section className="py-20 md:py-32 bg-[#F7F9FC]">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Flexible models for every step of your stablecoin journey
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {models.map((model, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-10 shadow-sm border border-gray-200"
            >
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                  {model.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {model.description}
                </p>
                <div className="pt-2">
                  <button className="text-[#0066FF] hover:text-[#0052CC] font-semibold transition-colors duration-200 underline underline-offset-4">
                    {model.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
