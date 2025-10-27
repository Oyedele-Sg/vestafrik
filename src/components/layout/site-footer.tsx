import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Globe, Linkedin, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16">
        {/* Top grid */}
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand + socials */}
          <div className="md:col-span-3 flex flex-col items-start gap-6">
            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="Raiz home"
            >
              <Image
                src="/logo/logo.svg"
                alt="Raiz"
                width={138}
                height={60}
                className="h-10 w-auto"
              />
            </Link>

            {/* Language (static) */}
            <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-sm text-white/90 hover:bg-white/5">
              <Globe className="h-4 w-4" /> EN
            </button>
          </div>

          {/* Link columns */}
          <div className="grid md:col-span-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-white/90">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wide text-white/60">
                Products
              </div>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="#" className="hover:underline">
                    Global Accounts
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Payments
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Transfers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-wide text-white/60">
                Company
              </div>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="#" className="hover:underline">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-wide text-white/60">
                Resources
              </div>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="#" className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    API Docs
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:underline">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:underline">
                    Privacy Notice
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2 hidden lg:block" />
          </div>

          {/* Store badges */}
          <div className="md:col-span-3 flex flex-col sm:flex-row md:flex-col items-start gap-3 md:items-end">
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 w-64 h-12 px-4 font-medium text-white hover:bg-white/10"
            >
              <Image
                src="/icons/apple-white.svg"
                alt="Apple"
                width={24}
                height={24}
              />
              <span>Download on App Store</span>
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 w-64 h-12 px-4 font-medium text-white hover:bg-white/10"
            >
              <Image
                src="/icons/android-white.svg"
                alt="Android"
                width={24}
                height={24}
              />
              <span>Get it on Google Play</span>
            </Link>
          </div>
        </div>

        <div className="mt-10">
          <Separator className="bg-white/10" />
        </div>

        {/* Legal text */}
        <div className="flex justify-between "> 
          <div className="mt-8 space-y-4 text-xs leading-relaxed text-white/70">
            <p>
              © {new Date().getFullYear()} Raiz Ltd. Raiz is a technology
              services provider, not a bank. Some services may be provided by
              our licensed partners in supported regions.
            </p>
            <p>
              Cryptocurrency-related services, where available, are offered in
              partnership with regulated entities and comply with local
              requirements.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <a
              href="#"
              aria-label="Twitter"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/15"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/15"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Bottom links */}
        <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/60">
          <Link href="#" className="hover:underline">
            International Money Transfers
          </Link>
          <span>·</span>
          <Link href="#" className="hover:underline">
            Currency Converter
          </Link>
          <span>·</span>
          <Link href="#" className="hover:underline">
            Global Accounts
          </Link>
          <span>·</span>
          <Link href="#" className="hover:underline">
            Swift/BIC codes
          </Link>
          <span>·</span>
          <Link href="#" className="hover:underline">
            IBAN codes
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
