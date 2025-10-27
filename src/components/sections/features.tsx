"use client";

import * as React from "react";
import Image from "next/image";

type Feature = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const DEFAULT_FEATURES: ReadonlyArray<Feature> = [
  {
    id: "in-person",
    title: "In person",
    description:
      "Take payments at your counter or on the go with hardware built for your business, supported by reliable payment processing software.",
    image:
      "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "online",
    title: "Online",
    description:
      "Set up an online store or send payment links with secure processing. Connect your existing site or app to our trusted APIs.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "invoices",
    title: "Invoices",
    description:
      "Send professional invoices and get paid faster with automated reminders, partial payments, and flexible terms.",
    image:
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "developer",
    title: "Developer APIs",
    description:
      "Build custom payment experiences with secure, well-documented APIs and webhooks for end-to-end control.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
];

export function FeaturesSection({
  features = DEFAULT_FEATURES,
}: {
  features?: ReadonlyArray<Feature>;
}) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const itemRefs = React.useRef<Array<HTMLDivElement | null>>([]);
  const imageBoxRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const handle = () => {
      const elements = itemRefs.current.filter(Boolean) as HTMLDivElement[];
      if (elements.length === 0) return;
      const imgRect = imageBoxRef.current?.getBoundingClientRect();
      const imageCenter = imgRect
        ? imgRect.top + imgRect.height / 2
        : window.innerHeight / 2;

      let bestIndex = 0;
      let bestDistance = Number.POSITIVE_INFINITY;
      elements.forEach((el, idx) => {
        const r = el.getBoundingClientRect();
        // consider only visible items
        if (r.bottom <= 0 || r.top >= window.innerHeight) return;
        const center = r.top + r.height / 2;
        const distance = Math.abs(center - imageCenter);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = idx;
        }
      });
      setActiveIndex(bestIndex);
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        handle();
      });
    };

    handle();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handle);
    };
  }, []);

  const scrollToIndex = React.useCallback((index: number) => {
    const el = itemRefs.current[index];
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <section id="features" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Sticky image that changes with active index */}
          <div className="md:pr-6 order-2 md:order-1">
            <div className="md:sticky md:top-28">
              <div
                ref={imageBoxRef}
                className="relative w-full aspect-[4/3] rounded-xl overflow-hidden"
              >
                {features.map((f, idx) => (
                  <div
                    key={f.id}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      activeIndex === idx ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={f.image}
                        alt={f.title}
                        fill
                        className="object-cover"
                        priority={idx === 0}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Scrollable text blocks */}
          <div className="md:pl-6 order-1 md:order-2">
            {/* <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Accept payments anywhere
            </h2> */}
            <div className="mt-12 ">
              {features.map((f, idx) => (
                <div
                  key={f.id}
                  ref={(el) => {
                    itemRefs.current[idx] = el;
                  }}
                  className={`scroll-mt-28 transition-opacity duration-500 py-20 md:py-28  ${
                    activeIndex === idx ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <button
                    onClick={() => scrollToIndex(idx)}
                    className="text-left"
                  >
                    <div className="text-2xl md:text-3xl font-semibold">
                      {f.title}
                    </div>
                    <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-prose">
                      {f.description}
                    </p>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
