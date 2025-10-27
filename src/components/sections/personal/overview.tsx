import * as React from "react";

export function PersonalOverview() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Main Headline */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-4xl mx-auto">
            When you bank with Raiz, the sky&apos;s the limit. See all you can
            do to set your business up for financial success at every turn.
          </h2>
        </div>

        {/* Three Feature Blocks */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Feature 1 */}
          <div className="text-center">
            <h3 className="text-lg md:text-xl font-semibold text-foreground leading-relaxed">
              Manage all your money in one place
            </h3>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <h3 className="text-lg md:text-xl font-semibold text-foreground leading-relaxed">
              Instantly access and spend your sales revenue
            </h3>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <h3 className="text-lg md:text-xl font-semibold text-foreground leading-relaxed">
              Automate everyday financial chores
            </h3>
          </div>

          {/* Vertical Dividers */}
          <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px bg-border"></div>
          <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-px bg-border"></div>
        </div>
      </div>
    </section>
  );
}

export default PersonalOverview;
