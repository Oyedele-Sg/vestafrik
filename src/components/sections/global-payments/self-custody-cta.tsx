"use client";

import * as React from "react";

export function SelfCustodyCTA() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="mx-auto max-w-4xl px-6 md:px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Ready to launch your own stablecoin payments network in-house?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Self-custody infrastructure for customers who want full control over
            keys, licensing, and operations. Purpose-built for payments
            orchestration across fiat and stablecoins at scale.
          </p>
          <div className="pt-4">
            <button className="bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold rounded-full px-10 py-4 text-lg transition-colors duration-200">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
