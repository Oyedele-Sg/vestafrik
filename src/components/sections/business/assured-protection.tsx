import * as React from "react";

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl bg-muted p-6 md:p-8">
      <div className="size-10 rounded-full border flex items-center justify-center text-emerald-700 bg-emerald-600/10">
        {icon}
      </div>
      <div className="mt-5 space-y-2">
        <h3 className="text-xl md:text-2xl font-medium">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export function AssuredProtectionSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6 text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight uppercase">
          Assured financial
          <br className="hidden sm:block" />
          protection
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-muted-foreground text-base md:text-lg">
          In 2024, Wise customers moved over £144 billion around the world. Our
          security systems are built to keep funds safe and available at all
          times.
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-4 md:px-6 mt-10 md:mt-14 grid gap-6 md:gap-8 md:grid-cols-3">
        <FeatureCard
          icon={<span>🎧</span>}
          title="24/7 customer support"
          description="Our support teams are available by phone or online, wherever you are in the world."
        />
        <FeatureCard
          icon={<span>🔒</span>}
          title="Anti-fraud detection"
          description="We run over 7 million daily checks to spot and prevent fraud. That’s 80 checks a second on every single transaction."
        />
        <FeatureCard
          icon={<span>🏛</span>}
          title="Safeguarded"
          description="Your money is diversified and held with a secure group of financial institutions."
        />
      </div>
    </section>
  );
}

export default AssuredProtectionSection;
