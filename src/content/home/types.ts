export type CTAContent = {
  headingLine1: string;
  headingLine2: string;
  subtitle?: string;
  appStoreHref?: string;
  playStoreHref?: string;
  appStoreLabel?: string;
  playStoreLabel?: string;
  appIconSrc?: string;
  playIconSrc?: string;
};

export type Feature = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type Service = { title: string; description: string; image: string };

export type Partner = { src: string; alt: string; href?: string };

export type Stat = { label: string; value: string };

export type GalleryImage = { src: string; alt?: string };

export type Testimonial = {
  name: string;
  role?: string;
  quote: string;
  avatar?: string;
};

export type FAQItem = { question: string; answer: string };

export type BlogPost = {
  title: string;
  href: string;
  image?: string;
  excerpt?: string;
};

export type HomeContent = {
  hero: {
    eyebrow?: string;
    title: string;
    ctas?: { label: string; href: string; variant?: "solid" | "outline" }[];
  };
  partners: Partner[];
  gallery: GalleryImage[];
  aboutStats: Stat[];
  features: Feature[];
  currenciesHero: { heading: string; subtitle?: string; videoSrc?: string };
  security: { heading?: string; points: string[] };
  testimonials: Testimonial[];
  blog: BlogPost[];
  faq: FAQItem[];
  cta: CTAContent;
  services?: Service[];
};

