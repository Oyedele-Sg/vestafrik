"use client";

import * as React from "react";
import Image from "next/image";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  image: string; // path in public/
};

const DEFAULT_TESTIMONIALS: ReadonlyArray<Testimonial> = [
  {
    quote:
      "Raiz has transformed our cross-border payments. What used to take days now happens in minutes, and the fees are incredibly competitive. Our international clients love the transparency and speed.",
    author: "Sarah Chen",
    role: "Finance Director, Global Tech Solutions",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&auto=format&fit=crop&w=900&h=1125&crop=faces",
  },
  {
    quote:
      "The security features on Raiz give me complete peace of mind. Multi-signature authentication and real-time monitoring mean I can manage large transactions safely from anywhere in the world.",
    author: "Marcus Rodriguez",
    role: "CEO, Rodriguez & Associates",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&auto=format&fit=crop&w=900&h=1125&crop=faces",
  },
  {
    quote:
      "As a freelancer working with international clients, Raiz has been a game-changer. I can receive payments instantly and convert currencies at the best rates. It's saved me thousands in fees this year alone.",
    author: "Aisha Patel",
    role: "Digital Marketing Consultant",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&auto=format&fit=crop&w=900&h=1125&crop=faces",
  },
  {
    quote:
      "The team at Raiz understands the complexities of international business. Their platform handles compliance automatically, so we can focus on growing our business instead of worrying about regulatory requirements.",
    author: "David Kim",
    role: "Founder, Kim Ventures",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&auto=format&fit=crop&w=900&h=1125&crop=faces",
  },
  {
    quote:
      "Raiz's API integration was seamless. We were up and running in just a few days, and our customers love the instant payment confirmations. It's transformed our checkout experience.",
    author: "Elena Volkov",
    role: "CTO, E-Commerce Plus",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&auto=format&fit=crop&w=900&h=1125&crop=faces",
  },
  {
    quote:
      "The customer support at Raiz is exceptional. They helped us navigate complex regulatory requirements across multiple countries. Their expertise saved us months of research and potential compliance issues.",
    author: "James Thompson",
    role: "Head of Operations, Thompson Logistics",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&auto=format&fit=crop&w=900&h=1125&crop=faces",
  },
  {
    quote:
      "We've tried many payment platforms, but Raiz stands out for its reliability and transparency. The real-time tracking and detailed reporting help us manage our cash flow much more effectively.",
    author: "Maria Santos",
    role: "CFO, Santos Manufacturing",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&auto=format&fit=crop&w=900&h=1125&crop=faces",
  },
  {
    quote:
      "Raiz has made it possible for our small business to compete globally. The low fees and fast processing mean we can offer competitive prices to international customers while maintaining healthy margins.",
    author: "Ahmed Hassan",
    role: "Owner, Hassan Textiles",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&auto=format&fit=crop&w=900&h=1125&crop=faces",
  },
];

export function Testimonials({
  testimonials = DEFAULT_TESTIMONIALS,
}: {
  testimonials?: ReadonlyArray<Testimonial>;
}) {
  const [index, setIndex] = React.useState(0);
  const t = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 md:py-28 ">
      <div className="mx-auto max-w-7xl px-4 md:px-6 flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-40 ">
        {/* Label */}
        <div className="self-center md:self-start flex items-center gap-2 text-sm text-muted-foreground">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-900 dark:bg-emerald-400" />
          <span>Testimonials</span>
        </div>

        <div className=" flex flex-col gap-10 items-center md:items-start w-full ">
          {/* Portrait */}
          <div className="self-center md:self-start md:justify-self-start">
            <div className="w-48 h-48 md:w-80 md:h-80 rounded-2xl overflow-hidden border bg-background/80 shadow-lg transition-all duration-500 hover:shadow-xl">
              <Image
                key={t.image}
                src={t.image}
                alt={t.author}
                width={640}
                height={640}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 192px, 320px"
                priority
              />
            </div>
          </div>

          {/* Quote */}
          <div className="grid gap-8 md:pt-6 w-full text-center md:text-left">
            <blockquote className="text-2xl md:text-[40px] leading-tight font-medium text-balance transition-all duration-500 ease-in-out">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="text-base md:text-lg text-center md:text-left transition-all duration-500 ease-in-out">
              <div className="font-semibold">{t.author}</div>
              <div className="text-muted-foreground">{t.role}</div>
            </div>

            {/* Controls aligned left under the copy */}
            <div className="flex items-center gap-4 pt-2 justify-center md:justify-start">
              <div className="flex gap-3">
                <button
                  onClick={prev}
                  className="h-10 w-10 rounded-full border bg-background/80 hover:bg-background text-xl transition-colors"
                  aria-label="Previous testimonial"
                >
                  ‹
                </button>
                <button
                  onClick={next}
                  className="h-10 w-10 rounded-full border bg-background/80 hover:bg-background text-xl transition-colors"
                  aria-label="Next testimonial"
                >
                  ›
                </button>
              </div>
              <div className="text-sm text-muted-foreground">
                {index + 1} of {testimonials.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

// bg-emerald-50 dark:bg-emerald-900/20
