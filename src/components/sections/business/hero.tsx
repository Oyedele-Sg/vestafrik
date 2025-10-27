import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Cta = {
  label: string;
  href: string;
};

type Media =
  | { type: "image"; src: string; alt?: string }
  | { type: "video"; src: string; poster?: string };

export type BusinessHeroProps = {
  headline: string;
  subheadline?: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
  variant?: "dark" | "light";
  media?: Media;
  showTrustRow?: boolean;
};

export function BusinessHero({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  variant = "dark",
  media = {
    type: "image",
    src: "/images/hero/hero_image-2.avif",
    alt: "Business banking dashboard",
  },
  showTrustRow = true,
}: BusinessHeroProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={
        isDark
          ? "relative overflow-hidden bg-primary text-primary-foreground"
          : "relative overflow-hidden"
      }
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight uppercase">
            {headline}
          </h1>
          {subheadline ? (
            <p className="mx-auto max-w-3xl text-base md:text-lg text-muted-foreground/90 dark:text-primary-foreground/80">
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
                variant={isDark ? "ghost" : "outline"}
                className="rounded-full px-8 py-6 text-base"
              >
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            ) : null}
          </div>
        </div>

        <div className="mt-10 md:mt-16">
          <div className="relative mx-auto overflow-hidden rounded-2xl shadow-xl ring-1 ring-foreground/5 max-w-5xl h-[260px] sm:h-[320px] md:h-[420px] lg:h-[520px]">
            {media.type === "image" ? (
              <Image
                src={media.src}
                alt={media.alt ?? "Business hero"}
                priority
                fill
                sizes="(max-width: 768px) 92vw, (max-width: 1200px) 80vw, 1200px"
                className="object-cover"
              />
            ) : (
              <video
                className="h-full w-full object-cover"
                src={media.src}
                poster={media.poster}
                autoPlay
                loop
                muted
                playsInline
              />
            )}
          </div>
        </div>

        {showTrustRow ? (
          <div className="mx-auto mt-12 md:mt-16 max-w-5xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left sm:text-center">
              <TrustItem
                icon="/features/invoices.svg"
                title="Trusted by 700,000+ businesses"
                description="Moving and spending over £12bn per month"
              />
              <TrustItem
                icon="/features/online.svg"
                title="Regulated"
                description={
                  "Wise is regulated by the Financial Conduct Authority (FCA) in the UK"
                }
              />
              <TrustItem
                icon="/features/in-person.svg"
                title="24/7 customer support"
                description="Email, phone or chat whenever you need help"
              />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function TrustItem({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-0.5 size-8 shrink-0">
        <Image src={icon} alt="" width={32} height={32} />
      </div>
      <div className="space-y-1">
        <div className="font-medium">{title}</div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export default BusinessHero;
