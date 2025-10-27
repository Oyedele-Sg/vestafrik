"use client";

import * as React from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

export type ScrollStepperProps<T> = {
  items: ReadonlyArray<T>;
  renderItem: (item: T, index: number, isActive: boolean) => React.ReactNode;
  /** Adjust how soon progress starts/ends relative to viewport */
  offset?: NonNullable<Parameters<typeof useScroll>[0]>["offset"];
  /** Tailwind color classes for the filled portion */
  fillClassName?: string;
  /** Additional classes for the outer container */
  className?: string;
  /** Sticky offset from top, in rem units. Default: 7 (equiv. to top-28). */
  stickyOffsetRem?: number;
  /** Hex color used for the active fill and dots. Default: #3C2875 */
  themeColor?: string;
};

export function ScrollStepper<T>(props: ScrollStepperProps<T>) {
  const {
    items,
    renderItem,
    offset = ["start start", "end end"],
    fillClassName = "bg-lime-400",
    className,
    stickyOffsetRem = 7,
    themeColor = "#3C2875",
  } = props;

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [centers, setCenters] = React.useState<number[]>([]);
  const itemRefs = React.useRef<Array<HTMLDivElement | null>>([]);
  const listRef = React.useRef<HTMLDivElement | null>(null); // outer wrapper
  const contentRef = React.useRef<HTMLDivElement | null>(null); // scrollable list

  const { scrollYProgress } = useScroll({ target: contentRef, offset });
  // Smooth the progress to ease sharp movements
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.4,
  });
  const fillWidth = useTransform(smoothProgress, [0, 1], [4, 7]);

  const toRgba = React.useCallback((hex: string, alpha: number) => {
    const clean = hex.replace("#", "");
    const bigint = parseInt(clean, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }, []);

  const measureCenters = React.useCallback(() => {
    const container = contentRef.current;
    if (!container) return;
    const elements = itemRefs.current.filter(Boolean) as HTMLDivElement[];
    if (elements.length === 0) return;
    const cRect = container.getBoundingClientRect();
    const results = elements.map((el, idx, arr) => {
      if (idx === 0) return 0; // first dot at top
      if (idx === arr.length - 1) return 1; // last dot at bottom
      const r = el.getBoundingClientRect();
      const center = r.top - cRect.top + r.height / 2;
      return Math.min(1, Math.max(0, center / cRect.height));
    });
    setCenters(results);
  }, []);

  React.useEffect(() => {
    measureCenters();
    window.addEventListener("resize", measureCenters);
    return () => window.removeEventListener("resize", measureCenters);
  }, [measureCenters]);

  useMotionValueEvent(smoothProgress, "change", (v) => {
    if (centers.length === 0) return;
    let nearest = 0;
    let best = Number.POSITIVE_INFINITY;
    centers.forEach((c, idx) => {
      const d = Math.abs(v - c);
      if (d < best) {
        best = d;
        nearest = idx;
      }
    });
    // Only update when moved meaningfully away from current center to reduce rapid toggling
    const threshold = 0.08; // ~8% of track
    if (Math.abs(v - centers[activeIndex]) > threshold) {
      setActiveIndex(nearest);
    }
  });

  return (
    <div className={`relative  ${className ?? ""}`} ref={listRef}>
      {/* Track - sticky to replicate features layout */}
      <div
        className="absolute left-0 top-0 w-10"
        style={
          { ["--sticky-top"]: `${stickyOffsetRem}rem` } as React.CSSProperties
        }
      >
        <div className="md:sticky md:top-[var(--sticky-top)]  ">
          <div className="relative min-h-[calc(100vh-var(--sticky-top))]">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] md:w-[4px] bg-border rounded-full" />
            <motion.div
              className={`absolute left-1/2 -translate-x-1/2 top-0 origin-top ${fillClassName} rounded-full shadow-[0_0_20px_rgba(163,230,53,0.35)]`}
              style={{
                height: "100%",
                scaleY: smoothProgress,
                width: fillWidth,
                backgroundColor: themeColor,
              }}
            />
            {centers.map((c, idx) => {
              const isActive = idx === activeIndex;
              const lit = idx < activeIndex;
              return (
                <span
                  key={idx}
                  className="absolute left-1/2 -translate-x-1/2 h-3.5 w-3.5 rounded-full transition-colors"
                  style={{
                    top: `calc(${c * 100}% - 7px)`,
                    backgroundColor: isActive
                      ? themeColor
                      : lit
                      ? toRgba(themeColor, 0.7)
                      : "rgba(120,120,120,0.6)",
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Items (scrollable) */}
      <div
        ref={contentRef}
        className="flex flex-col pl-12 md:pl-16 "
        style={
          {
            minHeight: "calc(100vh - var(--sticky-top))",
            ["--sticky-top"]: `${stickyOffsetRem}rem`,
          } as React.CSSProperties
        }
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => {
              itemRefs.current[idx] = el;
            }}
            className="relative py-10 md:py-16 scroll-mt-32"
          >
            {renderItem(item, idx, idx === activeIndex)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScrollStepper;
