import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FeesHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight">
            Know what processing
            <br className="hidden sm:block" />
            fees you’ll pay
          </h1>
          <p className="text-muted-foreground max-w-xl">
            Do business with lower fees and no surprises.
          </p>
          <div className="pt-2 flex items-center gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 py-6 text-base"
            >
              <Link href="#get-started">Get Started</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-base"
            >
              <Link href="/contact">Contact sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeesHero;
