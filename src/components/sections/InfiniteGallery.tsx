"use client";

import Image from "next/image";
import * as React from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { Pause, Play } from "lucide-react";

type GalleryImage = {
  src: string;
  alt: string;
};

const DEFAULT_IMAGES: ReadonlyArray<GalleryImage> = [
  { src: "/images/hero/hero_image-1.avif", alt: "Window" },
  { src: "/images/hero/hero_image-2.avif", alt: "File" },
  { src: "/images/hero/hero_image-3.avif", alt: "Globe" },
  { src: "/images/hero/hero_image-4.avif", alt: "Next" },
  { src: "/images/hero/hero_image-5.avif", alt: "Vercel" },
];

export function InfiniteGallery({
  images = DEFAULT_IMAGES,
  speed = 40,
}: {
  images?: ReadonlyArray<GalleryImage>;
  speed?: number; // seconds per loop
}) {
  const items = React.useMemo(() => [...images, ...images], [images]);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const x = useMotionValue(0);
  const trackRef = React.useRef<HTMLDivElement | null>(null);
  const [halfWidth, setHalfWidth] = React.useState(0);

  React.useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const measure = () => {
      setHalfWidth(el.scrollWidth / 2);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Drive the marquee with time-based motion. Pausing keeps the current x.
  useAnimationFrame((_, delta) => {
    if (!isPlaying || !halfWidth) return;
    const pxPerSecond = halfWidth / speed;
    const step = (pxPerSecond * delta) / 1000;
    let next = x.get() - step;
    if (next <= -halfWidth) next = 0;
    x.set(next);
  });

  return (
    <section className="relative py-6 md:py-10">
      <div className="w-full px-0">
        <div className="relative overflow-hidden">
          <motion.div
            ref={trackRef}
            className={`flex gap-6 will-change-transform`}
            style={{ x }}
          >
            {items.map((img, idx) => (
              <div
                key={`${img.src}-${idx}`}
                className="shrink-0 w-[520px] h-[360px] md:w-[560px] md:h-[400px] rounded-2xl overflow-hidden bg-muted border"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </motion.div>
          <button
            type="button"
            onClick={() => setIsPlaying((p) => !p)}
            className="absolute bottom-8 right-6 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-transparent text-foreground border border-border shadow-sm hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={isPlaying ? "Pause gallery" : "Play gallery"}
          >
            {isPlaying ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default InfiniteGallery;
