"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Milestone = {
  id: string;
  year: string;
  title: string;
  description: string;

};

const MILESTONES: ReadonlyArray<Milestone> = [
  {
    id: "dec-24",
    year: "Dec 2024",
    title: "The Vision",
    description:
      "The idea was born with the vision for a B2B cross‑border payment platform leveraging stablecoins and smart escrow to streamline global transactions.",
  },
  {
    id: "jan-feb-25",
    year: "Jan 2025",
    title: "Foundation & Early Growth",
    description:
      "After a year of laying product groundwork, Raiz began 2025 with a small but stable base. Customer base: Under 8,000 cumulative users with $4.3K USD deposits in February.",
  },
  {
    id: "mar-apr-25",
    year: "Mar 2025",
    title: "Growth Resurgence",
    description:
      "March marked the start of clear growth resurgence. 313 new signups in March, with onboarding completion rates improving due to clearer verification prompts.",
    
  },
  {
    id: "may-jun-25",
    year: "May 2025",
    title: "Peak Performance",
    description:
      "Q2 brought strongest user and transaction growth since launch. June signups: 2,667 — an all-time high. Total customers surpassed 10,000 with USD deposits rising to $405.9K.",
   
  },
  {
    id: "jul-25",
    year: "Jul 2025",
    title: "Performance Apex",
    description:
      "July represented the performance apex — both USD deposits and swaps hit their highest points, reflecting strong engagement and confidence in the platform.",
   
  },
  {
    id: "aug-oct-25",
    year: "Aug 2025",
    title: "Stabilization",
    description:
      "Post-peak, Raiz entered a stabilization phase — balancing user engagement efforts with operational efficiency improvements. Focus shifted from growth to healthy activation and retention.",
  
  },
];

export function Journey() {
  const timelineRef = React.useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const prevSlide = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-24" aria-labelledby="journey-heading">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className=" mb-12">
          <div className="flex items-center  gap-2 text-sm text-muted-foreground mb-4">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-900 dark:bg-emerald-400" />
            <span>Story</span>
          </div>
          <h2
            id="journey-heading"
            className="text-3xl md:text-5xl font-semibold tracking-tight mb-4"
          >
            Our journey
          </h2>
          <p className="text-muted-foreground ">
            Each achievement reflects our commitment to excellence and growth.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-5 left-4 right-0 h-0.5 bg-gray-200 dark:bg-gray-700" />

          {/* Timeline Items */}
          <div
            ref={timelineRef}
            className="relative flex overflow-x-hidden pb-8 scrollbar-none"
          >
            {MILESTONES.map((milestone, index) => (
              <div key={milestone.id} className="flex-shrink-0 w-80 px-4">
                {/* Year Label */}
                <div className="relative">
                  <div className="  bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
                    {milestone.year}
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>

              
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex  gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-colors"
              aria-label="Previous milestone"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-colors"
              aria-label="Next milestone"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;
