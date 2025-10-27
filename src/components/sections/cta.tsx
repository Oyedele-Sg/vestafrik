"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

type CTAProps = {
  headingLine1?: string;
  headingLine2?: string;
  subtitle?: string;
  appStoreHref?: string;
  playStoreHref?: string;
  appStoreLabel?: string;
  playStoreLabel?: string;
  appIconSrc?: string;
  playIconSrc?: string;
};

export function CTA({
  headingLine1 = "Move your money",
  headingLine2 = "the modern way.",
  subtitle = "Raiz makes global payments fast, simple, and secure — whether you’re sending, receiving, or managing funds across borders. Start using Raiz today!",
  appStoreHref = "#",
  playStoreHref = "#",
  appStoreLabel = "Download on App Store",
  playStoreLabel = "Get it on Google Play",
  appIconSrc = "/icons/apple.svg",
  playIconSrc = "/icons/android.svg",
}: CTAProps) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <div className="flex flex-col gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-bold  tracking-tight leading-[0.85] text-6xl md:text-8xl "
            >
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  duration: 0.9,
                  delay: 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block"
              >
                {headingLine1}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  duration: 1.1,
                  delay: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block"
              >
                {headingLine2}
              </motion.span>
            </motion.h2>
            {subtitle ? (
              <h4 className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</h4>
            ) : null}
          </div>

          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 ">
            <Link
              href={appStoreHref}
              className="inline-flex items-center gap-3 rounded-full border px-5 py-3 text-sm md:text-base font-semibold hover:bg-black/5"
            >
              <Image src={appIconSrc} alt="Apple" width={24} height={24} />
              <span>{appStoreLabel}</span>
            </Link>
            <Link
              href={playStoreHref}
              className="inline-flex items-center gap-3 rounded-full border px-5 py-3 text-sm md:text-base font-semibold hover:bg-black/5"
            >
              <Image src={playIconSrc} alt="Android" width={24} height={24} />
              <span>{playStoreLabel}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
