export type UseCase = {
  title: string;
  description: string;
  imageUrl: string; // remote image allowed by next.config
  icon?: string; // optional emoji for minimalist overlay
};

export const USE_CASES: UseCase[] = [
  {
    title: "Real Estate Developers",
    description:
      "Accept secure deposits and property payments, reduce time-to-close, and improve cash flow certainty.",
    imageUrl:
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&auto=format&fit=crop&w=1400&h=900",
    icon: "🏠",
  },
  {
    title: "International Trade & Shipping",
    description:
      "Collect from customers and pay global vendors instantly while enforcing delivery milestones.",
    imageUrl:
      "https://images.unsplash.com/photo-1546079901-ba9599a7e63c?q=80&auto=format&fit=crop&w=1400&h=900",
    icon: "🤝",
  },
  {
    title: "Marketplace Payouts",
    description:
      "Pay sellers and suppliers globally in fiat or stablecoins, lower payout costs, and build platform trust.",
    imageUrl:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&auto=format&fit=crop&w=1400&h=900",
    icon: "🛒",
  },
  {
    title: "Freelance & Gig Economy",
    description:
      "Disburse to partners worldwide and enable convenient spend through virtual cards.",
    imageUrl:
      "https://images.unsplash.com/photo-1512922281446-df23b6bcf0bf?q=80&auto=format&fit=crop&w=1400&h=900",
    icon: "👤",
  },
];
