import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function SendFastPaymentsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6 grid md:grid-cols-2 gap-10 md:gap-14 items-start">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Send fast, simple,
            <br className="hidden sm:block" />
            global payments
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Save with our stand out exchange rates.
          </p>

          <div className="divide-y">
            <div className="flex gap-4 py-6">
              <div className="size-10 rounded-full border flex items-center justify-center">
                ⚡
              </div>
              <div>
                <div className="font-medium text-lg">
                  Instantly pay invoices, suppliers and teams
                </div>
                <p className="text-muted-foreground">
                  Over half of payments arrive in 20 seconds, and 95% take less
                  than 24 hours.*
                </p>
              </div>
            </div>
            <div className="flex gap-4 py-6">
              <div className="size-10 rounded-full border flex items-center justify-center">
                ↗️
              </div>
              <div>
                <div className="font-medium text-lg">
                  Time saving batch payments
                </div>
                <p className="text-muted-foreground">
                  Simplified bulk transfers that allow you to pay up to 1,000
                  contacts in one click.
                </p>
              </div>
            </div>
            <div className="flex gap-4 py-6">
              <div className="size-10 rounded-full border flex items-center justify-center">
                💳
              </div>
              <div>
                <div className="font-medium text-lg">
                  Volume discounts on large amounts
                </div>
                <p className="text-muted-foreground">
                  When you send, spend or convert over 20,000 GBP or equivalent
                  in a month, you’ll get a volume discount.
                </p>
              </div>
            </div>
          </div>

          <Button
            variant="outline"
            className="rounded-full px-8 py-6 text-base"
            size="lg"
          >
            Learn about business payments
          </Button>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-foreground/5 aspect-[4/3]">
          <Image
            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop"
            alt="Payment interface and analytics on desktop"
            fill
            sizes="(max-width: 768px) 92vw, (max-width: 1200px) 50vw, 800px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default SendFastPaymentsSection;
