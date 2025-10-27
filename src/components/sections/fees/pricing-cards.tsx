import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function PricingCards() {
  return (
    <section className="py-12 md:py-16 bg-secondary/50">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-4xl font-semibold tracking-tight mb-8">
          Get one plan to run your entire business
        </h2>
        {/* <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Square Free</CardTitle>
              <CardDescription>
                Game-changing access to business essentials.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold">$0/mo.</div>
              <div className="text-xs text-muted-foreground">per location</div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="rounded-full w-full">
                <Link href="#get-started">Get started</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl">Square Plus</CardTitle>
              <CardDescription>
                Fully loaded for every aspect of business.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold">$49/mo.</div>
              <div className="text-xs text-muted-foreground">per location</div>
            </CardContent>
            <CardFooter>
              <Button asChild className="rounded-full w-full">
                <Link href="#get-started">Try free for 30 days</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Square Premium</CardTitle>
              <CardDescription>
                The best of the best with 24/7 support.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-semibold">$149/mo.</div>
              <div className="text-xs text-muted-foreground">per location</div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="rounded-full w-full">
                <Link href="#get-started">Try free for 30 days</Link>
              </Button>
            </CardFooter>
          </Card>
        </div> */}
        <div className="mt-6 rounded-xl border p-6">
          <div className="grid gap-4 md:grid-cols-[1fr_2fr] items-start">
            <div>
              <div className="text-sm text-muted-foreground">Square Pro</div>
              <div className="text-2xl font-semibold">Get custom pricing</div>
            </div>
            <div className="text-sm text-muted-foreground">
              If you process over $250,000 per year, talk to our team to see if
              you’re eligible for custom pricing and processing fees. You can
              also ask about hardware discounts, onboarding and implementation
              support, technical specialists, and account management.
            </div>
          </div>
          <div className="mt-4">
            <Button asChild className="rounded-full">
              <Link href="/contact">Talk to our team</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingCards;
