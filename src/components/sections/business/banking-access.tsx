import * as React from "react";

type Stat = {
  value: string;
  description: string;
  source: string;
};

const STATS: ReadonlyArray<Stat> = [
  {
    value: "1M+",
    description:
      "business owners trust Square Banking for their financial needs.",
    source: "Internal Square data, April 2025",
  },
  {
    value: "88%",
    description: "of businesses with Square Loans report growth.",
    source: "Square survey data, 2025",
  },
  {
    value: "57%",
    description:
      "of self-reported Square Loans recipients are women-owned businesses, far above the almost 20% share for small business lenders overall.",
    source: "Internal survey data, 2025",
  },
  {
    value: "$156",
    description:
      "average savings in monthly banking fees by sellers using Square Checking compared to traditional banks.",
    source: "Banking fee study, 2025",
  },
];

export function BankingAccessStats() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight text-balance">
          Banking access for every business
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {STATS.map((item) => (
            <div key={item.value} className="space-y-3">
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                {item.value}
              </div>
              <p className="text-muted-foreground max-w-sm">
                {item.description}
              </p>
              <div className="text-xs text-muted-foreground/80">
                {item.source}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BankingAccessStats;
