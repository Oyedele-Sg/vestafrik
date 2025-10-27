"use client";

import * as React from "react";
import Image from "next/image";

export type PartnersCarouselProps = {
  images?: string[];
  /** Duration of one full loop in seconds */
  speedSec?: number;
  className?: string;
  title?: string;
};

const DEFAULT_IMAGES = [
  "/partners/1.png",
  "/partners/2.png",
  "/partners/3.png",
  "/partners/4.png",
];

export function PartnersCarousel({
  images = DEFAULT_IMAGES,
  speedSec = 30,
  className,
  title = "Trusted by leading partners",
}: PartnersCarouselProps) {
  const track = React.useMemo(() => images.filter(Boolean), [images]);
  const loop = React.useMemo(() => [...track, ...track], [track]);

  return (
    <section className={`py-10 md:py-12 ${className ?? ""}`}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-6 md:mb-8 text-center">
          <p className="text-xs md:text-sm font-medium tracking-wide text-muted-foreground uppercase">
            {title}
          </p>
        </div>

        <div className="group/track relative overflow-hidden">
          <div
            className="flex w-max animate-partners-scroll gap-10 md:gap-16 hover:[animation-play-state:paused]"
            style={
              { ["--partners-speed"]: `${speedSec}s` } as React.CSSProperties
            }
            aria-hidden
          >
            {/* Sequence A + B for seamless loop */}
            {[0, 1].map((seq) => (
              <div
                className="flex w-max items-center gap-10 md:gap-16 shrink-0"
                key={seq}
              >
                {track.map((src, idx) => (
                  <div
                    key={`${seq}-${idx}`}
                    className="flex h-14 md:h-16 items-center justify-center opacity-80 hover:opacity-100 transition"
                  >
                    <Image
                      src={src}
                      alt="Partner logo"
                      width={128}
                      height={64}
                      className="h-10 sm:h-12 md:h-14 w-auto object-contain grayscale hover:grayscale-0 transition"
                      sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, 160px"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>

      <style jsx>{`
        @keyframes partners-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-partners-scroll {
          animation: partners-scroll var(--partners-speed, 30s) linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-partners-scroll {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

export default PartnersCarousel;
