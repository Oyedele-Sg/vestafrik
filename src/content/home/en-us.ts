import type { HomeContent } from "./types";

export const content: Partial<HomeContent> = {
  hero: {
    eyebrow: "Raiz US",
    title: "Modern payments for US businesses",
    ctas: [
      { label: "Open US account", href: "#get-started", variant: "solid" },
      { label: "Talk to sales", href: "#contact-sales", variant: "outline" },
    ],
  },
  currenciesHero: {
    heading: "Instant US and global transfers",
    subtitle:
      "Move USD domestically and internationally with low fees and real‑time settlement where supported.",
    videoSrc: "/video/transfers-desktop-new.mp4",
  },
  security: {
    heading: "US‑grade security",
    points: [
      "Fraud monitoring and account protections",
      "Two‑factor authentication and device checks",
      "Partners with established US financial institutions",
    ],
  },
  cta: {
    headingLine1: "Get started in the US",
    headingLine2: "Scale globally.",
    subtitle:
      "From local payouts to cross‑border collections, Raiz helps US teams move faster.",
  },
};

export default content;
