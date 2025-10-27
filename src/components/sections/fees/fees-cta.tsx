import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FeesCta() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Save on processing fees with Raiz
          </h2>
          <div className="flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="rounded-full px-8 py-6 text-base"
            >
              <Link href="#get-started">Get started</Link>
            </Button>
            <Button asChild className="rounded-full px-8 py-6 text-base">
              <Link href="/contact">Contact sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeesCta;
