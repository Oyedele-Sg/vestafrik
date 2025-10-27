import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Cta = {
  label: string;
  href: string;
};

export type PersonalHeroProps = {
  headline: string;
  subheadline?: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
  imageSrc?: string;
  imageAlt?: string;
};

export function PersonalHero({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  imageSrc = "https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=1600&auto=format&fit=crop", // phone + banking vibes
  imageAlt = "Phone showing personal banking app interface",
}: PersonalHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight">
            {headline}
          </h1>
          {subheadline ? (
            <p className="mx-auto max-w-2xl text-base md:text-lg text-muted-foreground">
              {subheadline}
            </p>
          ) : null}
          <div className="pt-2 flex items-center justify-center gap-4 flex-wrap">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 py-6 text-base"
            >
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            {secondaryCta ? (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-base"
              >
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            ) : null}
          </div>
        </div>

        <div className="mt-10 md:mt-16">
          <div className="relative mx-auto overflow-hidden rounded-2xl shadow-xl ring-1 ring-foreground/5 max-w-5xl h-[260px] sm:h-[320px] md:h-[420px] lg:h-[520px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              priority
              fill
              sizes="(max-width: 768px) 92vw, (max-width: 1200px) 80vw, 1200px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PersonalHero;
