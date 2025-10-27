import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type HeroProps = {
  eyebrow?: string;
  title?: string;
  ctas?: { label: string; href: string; variant?: "solid" | "outline" }[];
};

export function Hero({
  eyebrow = "Raiz Digital Services",
  title = "Built for however you do business",
  ctas = [
    { label: "Get started", href: "#get-started", variant: "solid" },
    { label: "Contact sales", href: "#contact-sales", variant: "outline" },
  ],
}: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
        <div className="text-center space-y-6">
          {eyebrow ? (
            <div className="text-sm font-medium text-muted-foreground">
              {eyebrow}
            </div>
          ) : null}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight">
            {title.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {i > 0 ? <br className="hidden sm:block" /> : null}
                {line}
              </React.Fragment>
            ))}
          </h1>
          {ctas?.length ? (
            <div className="pt-4 flex items-center justify-center gap-4">
              {ctas.map((c) => (
                <Button
                  key={c.label}
                  asChild
                  size="lg"
                  className="rounded-full px-8 py-6 text-base"
                  variant={c.variant === "outline" ? "outline" : undefined}
                >
                  <Link href={c.href}>{c.label}</Link>
                </Button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default Hero;
