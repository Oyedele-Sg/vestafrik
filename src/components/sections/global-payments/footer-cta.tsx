"use client";

import * as React from "react";

export function FooterCTA() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="mx-auto max-w-4xl px-6 md:px-8 text-center">
        <div className="space-y-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Ready to start your BVNK journey?
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold rounded-full px-10 py-4 text-lg transition-colors duration-200">
              Speak to an expert
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-full px-10 py-4 text-lg border-2 border-gray-300 transition-colors duration-200">
              Create a test account
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
