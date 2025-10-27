"use client";

import * as React from "react";

export type TocItem = {
  id: string;
  title: string;
};

export type TableOfContentsProps = {
  items: ReadonlyArray<TocItem>;
  title?: string;
  className?: string;
  /** Sticky offset from the top in rem units (e.g., 6 -> top-24). */
  stickyOffsetRem?: number;
};

export function TableOfContents(props: TableOfContentsProps) {
  const {
    items,
    title = "Table of Contents",
    className,
    stickyOffsetRem = 6,
  } = props;

  const [activeId, setActiveId] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!Array.isArray(items) || items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        } else {
          // Fallback: set to the top-most section currently above the fold
          const tops = entries
            .map((e) => ({ id: e.target.id, top: e.boundingClientRect.top }))
            .sort((a, b) => Math.abs(a.top) - Math.abs(b.top));
          if (tops[0]) setActiveId(tops[0].id);
        }
      },
      {
        // Adjust for sticky headers: start observing a bit lower than the top
        root: null,
        rootMargin: `-${stickyOffsetRem * 16 + 16}px 0px -60% 0px`,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    const elements = items
      .map((i) => document.getElementById(i.id))
      .filter(Boolean) as Element[];

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [items, stickyOffsetRem]);

  const handleClick = React.useCallback((evt: React.MouseEvent, id: string) => {
    evt.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  }, []);

  return (
    <nav
      aria-label="Table of contents"
      className={`hidden md:block ${className ?? ""}`}
      style={
        { ["--sticky-top"]: `${stickyOffsetRem}rem` } as React.CSSProperties
      }
    >
      <div className="md:sticky md:top-[var(--sticky-top)] max-h-[calc(100vh-var(--sticky-top))] overflow-auto pr-2">
        <p className="text-xs font-medium tracking-wide text-muted-foreground mb-3 uppercase">
          {title}
        </p>
        <ol className="space-y-1 text-sm">
          {items.map((item, idx) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                  className={
                    `group flex gap-2 items-start rounded-md px-2 py-1.5 transition-colors  ` +
                    (isActive
                      ? "text-foreground border-l-primary bg-muted"
                      : "text-muted-foreground hover:text-foreground border-l-transparent hover:border-l-border")
                  }
                >
                  <span className="shrink-0 tabular-nums w-5 text-right opacity-70">
                    {idx + 1}.
                  </span>
                  <span className="leading-snug">{item.title}</span>
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

export default TableOfContents;
