import { Hero } from "@/components/sections/hero";
import PartnersCarousel from "@/components/sections/partners/partners-carousel";
import { InfiniteGallery } from "@/components/sections/InfiniteGallery";
import { AboutStats } from "@/components/sections/about-stats";
import { FeaturesSection } from "@/components/sections/features";
import { CurrenciesHero } from "@/components/sections/currencies-hero";
import { SecuritySection } from "@/components/sections/security";
import { Testimonials } from "@/components/sections/testimonials";
import { BlogSection } from "@/components/sections/blog";
import { FAQSection } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import type { HomeContent } from "@/content/home/types";

export default function Home({ content }: { content: HomeContent }) {
  return (
    <>
      <Hero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        ctas={content.hero.ctas}
      />
      <PartnersCarousel images={content.partners.map((p) => p.src)} />
      <InfiniteGallery
        images={content.gallery.map((g) => ({ src: g.src, alt: g.alt || "" }))}
      />
      <AboutStats stats={content.aboutStats} />
      <FeaturesSection features={content.features} />
      <CurrenciesHero
        heading={content.currenciesHero.heading}
        subtitle={content.currenciesHero.subtitle}
        videoSrc={content.currenciesHero.videoSrc}
      />
      <SecuritySection
        heading={content.security.heading || "SECURITY IS EVERYTHING"}
        points={content.security.points.map((text, idx) => ({
          id: `p-${idx}`,
          icon: undefined as unknown as React.ReactNode,
          text,
        }))}
      />
      <Testimonials
        testimonials={content.testimonials.map((t, idx) => ({
          quote: t.quote,
          author: t.name,
          role: t.role || "",
          image: t.avatar || "",
        }))}
      />
      <BlogSection
        posts={content.blog.map((b, idx) => ({
          id: `${idx}`,
          title: b.title,
          image: b.image || "",
        }))}
      />
      <FAQSection
        items={content.faq.map((f) => ({ q: f.question, a: f.answer }))}
      />
      <CTA
        headingLine1={content.cta.headingLine1}
        headingLine2={content.cta.headingLine2}
        subtitle={content.cta.subtitle}
        appStoreHref={content.cta.appStoreHref}
        playStoreHref={content.cta.playStoreHref}
        appStoreLabel={content.cta.appStoreLabel}
        playStoreLabel={content.cta.playStoreLabel}
        appIconSrc={content.cta.appIconSrc}
        playIconSrc={content.cta.playIconSrc}
      />
    </>
  );
}

