"use client";

import * as React from "react";
import { Landmark, Lock, ShieldCheck } from "lucide-react";
import LockSolid from "@/components/icons/lock-solid";
import { AnimatedLock } from "@/components/media/animated-lock";
import { motion, useReducedMotion } from "framer-motion";

type SecurityPoint = {
  id: string;
  icon: React.ReactNode;
  text: string;
};

const DEFAULT_POINTS: ReadonlyArray<SecurityPoint> = [
  {
    id: "fraud-team",
    icon: <Lock className="h-6 w-6" />,
    text: "Our dedicated fraud and security teams work to keep your money safe",
  },
  {
    id: "two-factor",
    icon: <ShieldCheck className="h-6 w-6" />,
    text: "We use 2-factor authentication to protect your account",
  },
  {
    id: "institutions",
    icon: <Landmark className="h-6 w-6" />,
    text: "We hold your money with established financial institutions",
  },
];

export function SecuritySection({
  heading = "SECURITY IS EVERYTHING",
  points = DEFAULT_POINTS,
}: {
  heading?: string;
  points?: ReadonlyArray<SecurityPoint>;
}) {
  return (
    <section id="security" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center text-center gap-6 md:gap-10">
          <div className="grid place-items-center">
            <div className="hidden motion-reduce:block">
              <LockSolid className="h-24 w-24 text-foreground/90" />
            </div>
            <div className="block motion-reduce:hidden w-[120px] h-[120px]">
              <AnimatedLock className="w-full h-full" />
            </div>
          </div>
          <AnimatedSecurityHeading text={heading} />
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {points.map((p, idx) => (
            <div key={p.id} className="flex items-start gap-4">
              <div className="shrink-0 h-16 w-16 rounded-full bg-muted grid place-items-center text-foreground/80">
                {p.icon ??
                  [
                    <Lock key="l" className="h-6 w-6" />,
                    <ShieldCheck key="s" className="h-6 w-6" />,
                    <Landmark key="m" className="h-6 w-6" />,
                  ][idx % 3]}
              </div>
              <p className="text-base md:text-lg text-muted-foreground text-left">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SecuritySection;

function AnimatedSecurityHeading({ text }: { text: string }) {
  const reduce = useReducedMotion();
  const baseTransition = { duration: 2.4, ease: [0.22, 1, 0.36, 1] };

  return (
    <h2 className="font-extrabold uppercase tracking-tight leading-[0.9] text-5xl md:text-7xl lg:text-8xl">
      <motion.span
        initial={{ x: reduce ? 0 : -24, opacity: reduce ? 1 : 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={baseTransition}
        className="inline-block"
      >
        {text}
      </motion.span>
    </h2>
  );
}
