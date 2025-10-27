import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ServicesHero() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-balance">
            Merchant services that answer your business needs
          </h1>
          <p className="mt-4 text-muted-foreground max-w-prose">
            Decide on a provider that impacts your finances, operations, and how
            you serve customers. Our integrated hardware, software, and services
            help manage payments and risk.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Button asChild className="rounded-full px-6">
              <Link href="#contact">Get started</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-6">
              <Link href="/contact">Contact sales →</Link>
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border bg-muted">
            <Image
              src="https://images.unsplash.com/photo-1605901309584-818e25960a8b?q=80&auto=format&fit=crop&w=1600&h=1200"
              alt="In-person checkout"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesHero;
