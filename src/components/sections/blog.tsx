"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Post = {
  id: string;
  title: string;
  image: string; // remote unsplash
};

const DEFAULT_POSTS: ReadonlyArray<Post> = [
  {
    id: "start-business",
    title: "How to Start a Business",
    image:
      "https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&auto=format&fit=crop&w=1200&h=900",
  },
  {
    id: "guide-loans",
    title: "A Comprehensive Guide to Business Loans",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&auto=format&fit=crop&w=1200&h=900",
  },
  {
    id: "why-raiz",
    title: "Why Raiz?",
    image:
      "https://images.unsplash.com/photo-1607082350899-7d08e5f53a7d?q=80&auto=format&fit=crop&w=1200&h=900",
  },
  {
    id: "fees-explained",
    title: "Cross‑border Fees Explained",
    image:
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&auto=format&fit=crop&w=1200&h=900",
  },
  {
    id: "accept-contactless",
    title: "Accept Contactless Payments Anywhere",
    image:
      "https://images.unsplash.com/photo-1515165562835-c3b8cce9a25c?q=80&auto=format&fit=crop&w=1200&h=900",
  },
];

export function BlogSection({
  posts = DEFAULT_POSTS,
}: {
  posts?: ReadonlyArray<Post>;
}) {
  const scrollerRef = React.useRef<HTMLDivElement | null>(null);
  const scrollByAmount = 620; // width of a card incl. gap

  const scrollLeft = () =>
    scrollerRef.current?.scrollBy({
      left: -scrollByAmount,
      behavior: "smooth",
    });
  const scrollRight = () =>
    scrollerRef.current?.scrollBy({ left: scrollByAmount, behavior: "smooth" });

  // Drag to scroll and keyboard nav
  const [isDragging, setIsDragging] = React.useState(false);
  const dragRef = React.useRef<{ startX: number; scrollLeft: number } | null>(
    null
  );
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.setPointerCapture?.(e.pointerId);
    dragRef.current = { startX: e.clientX, scrollLeft: el.scrollLeft };
    setIsDragging(true);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el || !isDragging || !dragRef.current) return;
    const dx = e.clientX - dragRef.current.startX;
    el.scrollLeft = dragRef.current.scrollLeft - dx;
  };
  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.releasePointerCapture?.(e.pointerId);
    setIsDragging(false);
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollRight();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollLeft();
    }
  };

  return (
    <section id="blog" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-baseline justify-between mb-8 md:mb-12">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Quick reads to get you going
          </h2>
        </div>

        {/* Scroller aligned to page container */}
        <div className="relative -mr-4 md:-mr-6 group">
          <div
            ref={scrollerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing select-none"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            tabIndex={0}
            onKeyDown={onKeyDown}
            role="region"
            aria-label="Blog posts carousel"
          >
            {posts.map((p) => (
              <article
                key={p.id}
                className="group shrink-0 w-[520px] md:w-[560px] snap-start"
              >
                <div className="h-[360px] md:h-[400px] rounded-2xl overflow-hidden border bg-background/80 shadow-sm">
                  <div className="relative w-full h-full">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 520px, 560px"
                    />
                  </div>
                </div>
                <h3 className="mt-4 text-lg md:text-xl font-semibold leading-snug">
                  {p.title}
                </h3>
              </article>
            ))}
          </div>

          {/* Right edge fade only (left remains flush with container) */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />

          {/* Overlay controls */}
          <button
            type="button"
            onClick={scrollLeft}
            className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full border bg-background/80 shadow-sm hover:bg-background focus-visible:ring-2 focus-visible:ring-ring opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={scrollRight}
            className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full border bg-background/80 shadow-sm hover:bg-background focus-visible:ring-2 focus-visible:ring-ring opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
