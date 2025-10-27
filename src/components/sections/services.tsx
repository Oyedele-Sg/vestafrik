"use client";
import * as React from "react";
import Image from "next/image";

const SERVICES: ReadonlyArray<{
  title: string;
  description: string;
  image: string;
}> = [
  {
    title: "All payments. One platform.",
    description:
      "Receive payments and send payouts in minutes at a fraction of the cost. Local fiat and stablecoin rails via dashboard or API.",
    image:
      "https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Direct debit: reimagined",
    description:
      "Set up bank debits for recurring payments with real‑time confirmation and fewer failures.",
    image:
      "https://images.unsplash.com/photo-1556742526-795a8eac09ab?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Put credit on autopilot",
    description:
      "Automate credit decisions and collections with programmable rules and smart retries.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Tailor‑made solutions",
    description:
      "Custom workflows to fit your business and compliance requirements.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
  },
];

export function ServicesSection() {
  const [hovered, setHovered] = React.useState<number | null>(null);

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 grid gap-10">
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Explore our comprehensive service offerings
          </h2>
          <p className="text-muted-foreground max-w-prose">
            Operate globally without friction across fiat and stablecoin rails.
          </p>
        </div>

        <div
          className="group relative flex gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none"
          onMouseLeave={() => setHovered(null)}
        >
          {SERVICES.map((s, idx) => {
            const isActive = hovered === idx;
            const hasHover = hovered !== null;
            return (
              <div
                key={s.title}
                className={
                  "relative min-w-[80%] sm:min-w-[60%] md:min-w-0 rounded-2xl overflow-hidden bg-neutral-900 text-white snap-start md:snap-none transition-[flex-basis,opacity] duration-300 ease-out " +
                  (hasHover && !isActive ? "opacity-80" : "opacity-100")
                }
                onMouseEnter={() => setHovered(idx)}
                style={{
                  flexBasis: hasHover ? (isActive ? "44%" : "18%") : "25%",
                }}
              >
                <div className="relative h-96 md:h-[28rem]">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 85vw, (max-width: 1200px) 40vw, 480px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/60" />
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    <h3
                      className={
                        "text-xl md:text-2xl font-semibold transition-all duration-300 " +
                        (isActive ? "translate-y-[-10px]" : "translate-y-0")
                      }
                    >
                      {s.title}
                    </h3>
                    <p
                      className={
                        "text-sm md:text-base text-white/80 transition-all duration-300 " +
                        (isActive
                          ? "opacity-100 max-h-40 mt-2"
                          : "opacity-0 max-h-0 mt-0")
                      }
                    >
                      {s.description}
                    </p>
                    <div className="absolute bottom-4 right-4 size-10 rounded-full border border-white/40 inline-flex items-center justify-center">
                      <span className="text-lg">↗</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
