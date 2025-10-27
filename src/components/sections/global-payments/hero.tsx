"use client";

import * as React from "react";

const stats = [
  { value: "99.9%", label: "Platform uptime" },
  { value: "$20bn+", label: "In payments processed annually" },
  { value: "150+", label: "Countries supported for custody & onboarding" },
  { value: "0.1s", label: "Avg. API response time" },
];

export function GlobalPaymentsHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-20 md:py-32">
        <div className="text-center space-y-10">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
              Power your global payments with stablecoins.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Launch using BVNK&apos;s licensing and custody, without handling
              crypto.
            </p>
          </div>

          <div className="pt-2">
            <button className="bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold rounded-full px-10 py-4 text-lg transition-colors duration-200">
              Speak to an expert
            </button>
          </div>
        </div>

        {/* Enterprise grade technology stats */}
        <div className="mt-28">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Enterprise grade technology.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-base md:text-lg text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
