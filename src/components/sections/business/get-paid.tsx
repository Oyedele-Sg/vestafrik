import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function GetPaidSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="order-2 md:order-2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Get paid in
            <br className="hidden sm:block" />
            different currencies
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Meet investors and clients in their currency.
          </p>

          <div className="flex items-center gap-2 text-sm font-medium">
            <span className="size-5 inline-flex items-center justify-center rounded-full bg-emerald-600/10 text-emerald-700">
              ✔
            </span>
            <Link href="#" className="underline underline-offset-4">
              22 currencies
            </Link>
          </div>

          <div className="divide-y">
            <div className="flex gap-4 py-6">
              <div className="size-10 rounded-full border flex items-center justify-center">
                🏛
              </div>
              <div>
                <div className="font-medium text-lg">
                  Create foreign account details
                </div>
                <p className="text-muted-foreground">
                  Get a US routing number, EU IBAN, and many more, so you can
                  get paid the way you need.
                </p>
              </div>
            </div>
            <div className="flex gap-4 py-6">
              <div className="size-10 rounded-full border flex items-center justify-center">
                ⬇️
              </div>
              <div>
                <div className="font-medium text-lg">
                  Flexible payments for your business
                </div>
                <p className="text-muted-foreground">
                  Create invoices, send fast payment links, or get paid by card.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button className="rounded-full px-8 py-6 text-base" size="lg">
              Open an account
            </Button>
            <Button asChild variant="link" size="lg" className="px-0">
              <Link href="#">See all the ways to get paid</Link>
            </Button>
          </div>
        </div>

        <div className="order-1 md:order-1">
          <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-foreground/5 aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
              alt="Team collaborating in office with laptop"
              fill
              sizes="(max-width: 768px) 92vw, (max-width: 1200px) 50vw, 800px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetPaidSection;
