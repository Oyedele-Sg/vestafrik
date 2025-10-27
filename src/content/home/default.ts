import type { HomeContent } from "./types";

export const defaultContent: HomeContent = {
  hero: {
    eyebrow: "Raiz Digital Services",
    title: "Built for however you do business",
    ctas: [
      { label: "Get started", href: "#get-started", variant: "solid" },
      { label: "Contact sales", href: "#contact-sales", variant: "outline" },
    ],
  },
  partners: [
    { src: "/partners/1.png", alt: "Partner 1" },
    { src: "/partners/2.png", alt: "Partner 2" },
    { src: "/partners/3.png", alt: "Partner 3" },
    { src: "/partners/4.png", alt: "Partner 4" },
  ],
  gallery: [
    { src: "/images/hero/hero_image-1.avif" },
    { src: "/images/hero/hero_image-2.avif" },
    { src: "/images/hero/hero_image-3.avif" },
    { src: "/images/hero/hero_image-4.avif" },
    { src: "/images/hero/hero_image-5.avif" },
  ],
  aboutStats: [
    { label: "Faster settlement times", value: "95%" },
    { label: "Global currency corridors supported", value: "10+" },
    { label: "Transferred daily via stablecoins", value: "$10M+" },
    { label: "Potential global reach via blockchain", value: "50M" },
  ],
  features: [
    {
      id: "in-person",
      title: "In person",
      description:
        "Take payments at your counter or on the go with hardware built for your business, supported by reliable payment processing software.",
      image:
        "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "online",
      title: "Online",
      description:
        "Set up an online store or send payment links with secure processing. Connect your existing site or app to our trusted APIs.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "invoices",
      title: "Invoices",
      description:
        "Send professional invoices and get paid faster with automated reminders, partial payments, and flexible terms.",
      image:
        "https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "developer",
      title: "Developer APIs",
      description:
        "Build custom payment experiences with secure, well-documented APIs and webhooks for end-to-end control.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
  ],
  currenciesHero: {
    heading: "Move money globally in seconds",
    subtitle:
      "Transfer funds faster to and from your digital accounts via bank transfers or mobile wallets in 80+ countries. Enjoy real-time payments at a fraction of the cost of bank wires.",
    videoSrc: "/video/transfers-desktop-new.mp4",
  },
  security: {
    heading: "Security is everything",
    points: [
      "Our dedicated fraud and security teams work to keep your money safe",
      "We use 2-factor authentication to protect your account",
      "We hold your money with established financial institutions",
    ],
  },
  testimonials: [
    {
      name: "Sarah Chen",
      role: "Finance Director, Global Tech Solutions",
      quote:
        "Raiz has transformed our cross-border payments. What used to take days now happens in minutes, and the fees are incredibly competitive. Our international clients love the transparency and speed.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&auto=format&fit=crop&w=900&h=1125&crop=faces",
    },
  ],
  blog: [
    {
      title: "How to Start a Business",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&auto=format&fit=crop&w=1200&h=900",
    },
    {
      title: "A Comprehensive Guide to Business Loans",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&auto=format&fit=crop&w=1200&h=900",
    },
  ],
  faq: [
    {
      question: "How do I start taking payments with Raiz?",
      answer:
        "Create an account, complete verification, and connect your preferred payout method. You can then accept transfers immediately via stablecoins or bank rails where supported.",
    },
    {
      question: "Does Raiz have processing fees?",
      answer:
        "Fees vary by currency corridor and payment method. We keep pricing transparent and show exact fees before you confirm a transfer.",
    },
  ],
  cta: {
    headingLine1: "Move your money",
    headingLine2: "the modern way.",
    subtitle:
      "Raiz makes global payments fast, simple, and secure — whether you’re sending, receiving, or managing funds across borders. Start using Raiz today!",
    appStoreHref: "#",
    playStoreHref: "#",
    appStoreLabel: "Download on App Store",
    playStoreLabel: "Get it on Google Play",
    appIconSrc: "/icons/apple.svg",
    playIconSrc: "/icons/android.svg",
  },
  services: [
    {
      title: "All payments. One platform.",
      description:
        "Receive payments and send payouts in minutes at a fraction of the cost. Local fiat and stablecoin rails via dashboard or API.",
      image:
        "https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Direct debit: reimagined",
      description:
        "Set up bank debits for recurring payments with real‑time confirmation and fewer failures.",
      image:
        "https://images.unsplash.com/photo-1556742526-795a8eac09ab?q=80&w=1600&auto=format&fit=crop",
    },
  ],
};

export default defaultContent;

