"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const UNIFORM_SIZE =
  "w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36";

// Cluster-to-spread directions in rem (x, y) based on provided CSS
const directionsRem: Array<[number, number]> = [
  [-50, -20], // 1
  [-45, 20], // 2
  [-30, -10], // 3
  [2, -20], // 4
  [-5, 23], // 5
  [45, -25], // 6
  [30, 20], // 7
  [50, 10], // 8
  [0, 26], // extra 9
];

// Floating element data with multi-color palette
const floatingElements = [
  {
    id: "greetings",
    content: (
      <div className="text-white text-xs sm:text-sm font-medium leading-tight">
        <div>OLÁ</div>
        <div>BONJOUR</div>
        <div>KOYO</div>
      </div>
    ),
    bgColor: "bg-[#0F766E]", // teal
    size: UNIFORM_SIZE,
  },
  {
    id: "yen",
    content: (
      <div className="text-black text-3xl sm:text-4xl md:text-5xl font-bold">
        ¥
      </div>
    ),
    bgColor: "bg-[#A7F3D0]", // mint
    size: UNIFORM_SIZE,
  },
  {
    id: "bolt",
    content: (
      <div className="text-black text-3xl sm:text-4xl md:text-5xl">⚡</div>
    ),
    bgColor: "bg-[#FCA5A5]", // soft red
    size: UNIFORM_SIZE,
  },
  {
    id: "dollar",
    content: (
      <div className="text-black text-3xl sm:text-4xl md:text-5xl font-bold">
        $
      </div>
    ),
    bgColor: "bg-[#E9D5FF]", // lavender
    size: UNIFORM_SIZE,
  },
  {
    id: "send-button",
    content: (
      <div className="bg-black text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
        Send
      </div>
    ),
    bgColor: "bg-[#3B82F6]", // blue
    size: UNIFORM_SIZE,
  },
  {
    id: "naira",
    content: (
      <div className="text-black text-3xl sm:text-4xl md:text-5xl font-bold">
        ₦
      </div>
    ),
    bgColor: "bg-[#F59E0B]", // orange
    size: UNIFORM_SIZE,
  },
  {
    id: "interest",
    content: (
      <div className="text-black text-xs sm:text-sm md:text-base font-medium">
        <div>Earn interest</div>
        <div>up to 4% APY</div>
        <div className="text-green-600 text-base sm:text-lg">↗</div>
      </div>
    ),
    bgColor: "bg-[#F3F4F6]", // light gray
    size: UNIFORM_SIZE,
  },
  {
    id: "usdc",
    content: (
      <div className="text-white">
        <div className="text-xs mb-1">USDC</div>
        <div className="text-xl sm:text-2xl md:text-3xl font-bold">$2,180</div>
      </div>
    ),
    bgColor: "bg-black",
    size: UNIFORM_SIZE,
  },
  
  // Remove extra items to keep total at 7
];

export function BorderlessAccount() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  // Elements spread animation uses fixed directional vectors; no breakpoint state needed.

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Convert rem directions to pixel transform values using root font size
  const remToPx = (rem: number) => rem * 16; // assumes 16px root

  const elementVariants = {
    hidden: {
      opacity: 0,
      x: 0,
      y: 0,
      scale: 0.85,
    },
    visible: (custom: { idx: number }) => ({
      opacity: 1,
      x: remToPx(directionsRem[custom.idx][0]),
      y: remToPx(directionsRem[custom.idx][1]),
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 110,
        damping: 18,
        duration: 0.9,
      },
    }),
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="w-full max-w-none px-0">
        {/* Animated floating elements container (full-bleed) */}
        <div
          ref={ref}
          className="relative w-full h-[520px] sm:h-[560px] md:h-[640px] lg:h-[720px] flex items-center justify-center"
        >
          {/* Centered headline */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-10">
            <h2 className="text-center text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
              Your borderless
              <br />
              account awaits
            </h2>
          </div>

          <motion.div
            className="relative w-full h-full"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {floatingElements.map((element, index) => (
              <motion.div
                key={element.id}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${element.size} ${element.bgColor} rounded-2xl shadow-lg flex items-center justify-center p-2 sm:p-3`}
                variants={elementVariants}
                custom={{ idx: Math.min(index, directionsRem.length - 1) }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {element.content}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default BorderlessAccount;
