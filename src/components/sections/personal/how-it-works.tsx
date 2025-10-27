import * as React from "react";
// Note: CTA button imports removed as they're not used currently

type Step = {
  number: string;
  title: string;
  description: string;
};

const STEPS: ReadonlyArray<Step> = [
  {
    number: "1",
    title: "Register for a free account",
    description: "in minutes",
  },
  {
    number: "2",
    title: "Get verified with your ID by",
    description: "our team",
  },
  {
    number: "3",
    title: "Add money in the",
    description: "currencies you want",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-muted/90">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center space-y-12">
          {/* Header */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground uppercase">
            It&apos;s simple to start using Raiz
          </h2>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {STEPS.map((step, index) => (
              <div
                key={step.number}
                className="bg-white rounded-2xl p-8  transition-shadow duration-200"
              >
                <div className="text-6xl md:text-7xl font-bold text-foreground mb-4">
                  {step.number}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-base text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          {/* <div className="pt-4">
            <Button
              asChild
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 text-lg font-medium rounded-xl"
            >
              <Link href="/signup">Open an account</Link>
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
