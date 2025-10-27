"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Feature = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: { src: string; alt: string };
  cta?: { label: string; href: string };
};

const FEATURES: ReadonlyArray<Feature> = [
  {
    id: "access-money",
    title: "Access money instantly",
    subtitle:
      "Withdraw, transfer, and convert without waiting or hidden steps.",
    description:
      "Move funds in real time across your Raiz Borderless Account. Cash out to local rails, settle suppliers, or top up cards—no branch visits, no paperwork.",
    image: {
      src: "https://images.unsplash.com/photo-1553729459-efe14ef6055d",
      alt: "Person using a mobile banking app",
    },
    cta: { label: "Open your account", href: "/personal-banking" },
  },
  {
    id: "get-credit-card",
    title: "Get a credit card",
    subtitle: "Flexible purchasing power with rewards on everyday spend.",
    description:
      "Cover business expenses and earn back on processing fees. Manage cards, set spend limits, and freeze instantly from your app.",
    image: {
      src: "https://images.unsplash.com/photo-1518459031867-a89b944bffe0",
      alt: "Hand holding a credit card",
    },
    cta: { label: "Explore Raiz Card", href: "#credit-card" },
  },
  {
    id: "pay-bills",
    title: "Pay bills easily",
    subtitle: "Set and forget with automated local payments.",
    description:
      "Schedule utilities, vendors, and subscriptions. Pay locally or across borders—Raiz routes the fastest, most affordable rails for you.",
    image: {
      src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
      alt: "Paying bills at a desk",
    },
    cta: { label: "Set up bill pay", href: "/services" },
  },
];

export function PersonalFeatures() {
  const [activeFeature, setActiveFeature] = React.useState("access-money");

  const activeIndex = React.useMemo(
    () =>
      Math.max(
        0,
        FEATURES.findIndex((f) => f.id === activeFeature)
      ),
    [activeFeature]
  );

  const onKeyDownTabs = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      const next = (activeIndex + 1) % FEATURES.length;
      setActiveFeature(FEATURES[next].id);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = (activeIndex - 1 + FEATURES.length) % FEATURES.length;
      setActiveFeature(FEATURES[prev].id);
    }
  };

  const current = FEATURES[activeIndex];

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div
          className="
        mb-10
        "
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-center font-semibold tracking-tight">
            Your money, on your time
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Feature List */}
            <div
              role="tablist"
              aria-label="Personal features"
              className="space-y-6"
              onKeyDown={onKeyDownTabs}
            >
              {FEATURES.map((feature) => {
                const selected = activeFeature === feature.id;
                if (selected) {
                  return (
                    <button
                      key={feature.id}
                      id={`tab-${feature.id}`}
                      role="tab"
                      aria-selected="true"
                      aria-controls={`panel-${feature.id}`}
                      tabIndex={0}
                      onClick={() => setActiveFeature(feature.id)}
                      className={`w-full text-left group rounded-lg px-3 py-3 transition-colors text-foreground bg-muted`}
                    >
                      <div className="text-xl md:text-2xl font-semibold">
                        {feature.title}
                      </div>
                      <div className="mt-1 text-sm md:text-base text-muted-foreground">
                        {feature.subtitle}
                      </div>
                    </button>
                  );
                }
                return (
                  <button
                    key={feature.id}
                    id={`tab-${feature.id}`}
                    role="tab"
                    aria-selected="false"
                    aria-controls={`panel-${feature.id}`}
                    tabIndex={-1}
                    onClick={() => setActiveFeature(feature.id)}
                    className={`w-full text-left group rounded-lg px-3 py-3 transition-colors text-muted-foreground hover:text-foreground hover:bg-muted/50`}
                  >
                    <div className="text-xl md:text-2xl font-semibold">
                      {feature.title}
                    </div>
                    <div className="mt-1 text-sm md:text-base text-muted-foreground">
                      {feature.subtitle}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column - Image and Description */}
          <div
            id={`panel-${current.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${current.id}`}
            className="space-y-6"
          >
            <Image
              src={current.image.src}
              alt={current.image.alt}
              width={880}
              height={660}
              sizes="(max-width: 768px) 92vw, (max-width: 1200px) 50vw, 640px"
              className="w-full h-auto rounded-2xl object-cover shadow"
              priority
            />
            <p className="text-base md:text-lg text-muted-foreground">
              {current.description}
            </p>
            {current.cta && (
              <Button asChild>
                <Link href={current.cta.href}>{current.cta.label}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PersonalFeatures;
