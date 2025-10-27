"use client";

import * as React from "react";

type CurrenciesHeroProps = {
  heading?: string;
  subtitle?: string;
  videoSrc?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function CurrenciesHero({
  heading = "Move money globally in seconds",
  subtitle = "Transfer funds faster to and from your digital accounts via bank transfers or mobile wallets in 80+ countries. Enjoy real-time payments at a fraction of the cost of bank wires.",
  videoSrc = "/video/transfers-desktop-new.mp4",
  primaryCta = { label: "For Businesses", href: "#business" },
  secondaryCta = { label: "For Individuals", href: "#personal" },
}: CurrenciesHeroProps) {
  return (
    <section
      id="currencies"
      className="relative overflow-hidden bg-[#2E5BFF]  text-white"
    >
      <div className="relative">
        <div className="relative grid place-items-center">
          {/* Globe video - full width */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
            <video
              className="absolute inset-0 h-full w-full object-cover opacity-100"
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          {/* Lower content (no overlap with video) */}
          <div className="relative">
            <div className="mx-auto max-w-7xl px-4 md:px-6 py-8 md:py-12 grid grid-cols-1 md:grid-cols-2 items-start gap-6">
              <div className="max-w-xl">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                  {heading}
                </h3>
                <p className="mt-3 text-sm md:text-base text-white/90">
                  {subtitle}
                </p>
                <a
                  href="#transfers"
                  className="inline-block mt-4 text-sm md:text-base font-medium underline underline-offset-4 pointer-events-auto"
                >
                  Learn about Transfers →
                </a>
              </div>
              <div className="mt-6 md:mt-0 flex md:justify-end gap-3 pointer-events-auto">
                <a
                  href={primaryCta.href}
                  className="rounded-full bg-white text-[#2E5BFF] px-4 py-2 text-sm md:text-base font-semibold"
                >
                  {primaryCta.label}
                </a>
                <a
                  href={secondaryCta.href}
                  className="rounded-full border border-white/70 text-white px-4 py-2 text-sm md:text-base font-semibold hover:bg-white/10"
                >
                  {secondaryCta.label}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CurrenciesHero;
