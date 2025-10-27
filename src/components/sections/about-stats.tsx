import * as React from "react";

const DEFAULT_STATS: ReadonlyArray<{ label: string; value: string }> = [
  { label: "Faster settlement times", value: "95%" },
  { label: "Global currency corridors supported", value: "10+" },
  { label: "Transferred daily via stablecoins", value: "$10M+" },
  { label: "Potential global reach via blockchain", value: "50M" },
];

export function AboutStats({
  stats = DEFAULT_STATS,
}: {
  stats?: ReadonlyArray<{ label: string; value: string }>;
}) {
  return (
    <section id="about" className="py-20 md:py-28 ">
      <div className="mx-auto max-w-7xl px-4 md:px-6 grid gap-14">
        <div className="flex flex-col items-center text-center gap-6 md:gap-10 md:flex-row md:items-start md:text-left">
          <div className="shrink-0 flex items-center gap-2 text-sm text-muted-foreground pt-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-900 dark:bg-emerald-400" />
            <span>About Raiz</span>
          </div>
          <div className="max-w-5xl flex flex-col gap-8 md:gap-10">
            <h2 className="text-2xl md:text-5xl tracking-tight leading-tight text-balance md:mx-0 mx-auto">
              Moving money across borders is slow, expensive, and riddled with
              hidden fees and outdated banking processes. Stablecoin transfers
              are shaping the future of money movement and we&apos;re ahead of
              the rest.
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x divide-y md:divide-y-0 divide-border">
              {stats.map((s) => (
                <div key={s.label} className="p-6 md:p-10">
                  <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                    {s.value}
                  </div>
                  <div className="mt-2 text-base text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutStats;

// bg-emerald-50 dark:bg-emerald-900/20
