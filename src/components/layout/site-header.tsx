"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SheetClose } from "@/components/ui/sheet";

type NavItem = {
  href: string;
  label: string;
};

const DEFAULT_NAV_ITEMS: ReadonlyArray<NavItem> = [
  { href: "/personal-banking", label: "Personal Banking" },
  { href: "/business-banking", label: "Business Banking" },
  { href: "/about", label: "About raiz" },
  { href: "/services", label: "Services" },
];

type MenuSection = { title: string; links: ReadonlyArray<NavItem> };

const PERSONAL_SECTIONS: ReadonlyArray<MenuSection> = [
  {
    title: "Request",
    links: [
      { href: "/personal/invoices", label: "Generate invoices" },
      { href: "/personal/quotes", label: "Create quotes" },
    ],
  },
  {
    title: "Collect",
    links: [
      { href: "/personal/payments", label: "Accept payments" },
      { href: "/personal/direct-debit", label: "Next‑gen direct debit" },
      { href: "/personal/autopilot", label: "Chasing with Autopilot" },
    ],
  },
  {
    title: "Manage",
    links: [{ href: "/personal/credit-control", label: "Credit control" }],
  },
];

const BUSINESS_SECTIONS: ReadonlyArray<MenuSection> = [
  {
    title: "Overview",
    links: [
      { href: "/business/accounts", label: "Global Accounts" },
      { href: "/business/payouts", label: "Mass payouts" },
    ],
  },
  {
    title: "Developer",
    links: [
      { href: "/business/api", label: "API reference" },
      { href: "/business/webhooks", label: "Webhooks" },
    ],
  },
];

function getRandomHeaderImage(): string {
  const choices = [
    "https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
  ];
  return choices[Math.floor(Math.random() * choices.length)];
}

export function SiteHeader({
  navItems = DEFAULT_NAV_ITEMS,
}: {
  navItems?: ReadonlyArray<NavItem>;
}) {
  return (
    <header className="w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 md:px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Raiz home"
        >
          <Image
            src="/logo/logo.svg"
            alt="Raiz"
            width={138}
            height={60}
            className="h-8 w-auto"
          />
        </Link>

        <div className="hidden md:flex">
          {/* mega menu to be added back later */}
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => {
                // const isPersonal = item.label
                //   .toLowerCase()
                //   .includes("personal");
                // const isBusiness = item.label
                //   .toLowerCase()
                //   .includes("business");
                // const isBlog = item.label.toLowerCase().includes("blog");
                // if (isBlog || (!isPersonal && !isBusiness)) {
                  return (
                    <NavigationMenuItem key={item.href}>
                      <Link
                        href={item.href}
                        className="px-3 py-2 text-sm font-medium hover:opacity-90"
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuItem>
                  );
                })

                // const sections = isPersonal
                //   ? PERSONAL_SECTIONS
                //   : BUSINESS_SECTIONS;
                // return (
                //   <NavigationMenuItem key={item.href}>
                //     <NavigationMenuTrigger className="bg-transparent px-3 py-2 text-sm font-medium">
                //       {item.label}
                //     </NavigationMenuTrigger>
                //     <NavigationMenuContent>
                //       <div className="grid md:w-[760px] lg:w-[900px] grid-cols-1 md:grid-cols-3 gap-6 p-3 md:p-4">
                //         <div className="md:col-span-1">
                //           <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                //             <Image
                //               src={getRandomHeaderImage()}
                //               alt="Preview"
                //               fill
                //               className="object-cover"
                //               sizes="(min-width: 768px) 33vw, 100vw"
                //             />
                //           </div>
                //           <div className="mt-2">
                //             <div className="text-sm font-medium">Overview</div>
                //             <div className="text-xs text-muted-foreground">
                //               All things accounts in one place
                //             </div>
                //           </div>
                //         </div>
                //         <div className="md:col-span-2 grid grid-cols-2 gap-6">
                //           {sections.map((sec) => (
                //             <div key={sec.title} className="min-w-0">
                //               <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                //                 {sec.title}
                //               </div>
                //               <ul className="space-y-2">
                //                 {sec.links.map((l) => (
                //                   <li key={l.href}>
                //                     <Link
                //                       href={l.href}
                //                       className="text-sm hover:underline"
                //                     >
                //                       {l.label}
                //                     </Link>
                //                   </li>
                //                 ))}
                //               </ul>
                //             </div>
                //           ))}
                //         </div>
                //       </div>
                //     </NavigationMenuContent>
                //   </NavigationMenuItem>
                // );
              }
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button asChild size="sm">
            <Link href="#get-app">Get App</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="inset-0 w-full max-w-none p-0"
            >
              <div className="flex h-full flex-col">
                <div className="flex h-16 items-center justify-between px-4 border-b">
                  <Link
                    href="/"
                    className="flex items-center gap-2"
                    aria-label="Raiz home"
                  >
                    <Image
                      src="/logo/logo.svg"
                      alt="Raiz"
                      width={138}
                      height={60}
                      className="h-8 w-auto"
                    />
                  </Link>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                  {/* <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="personal">
                      <AccordionTrigger className="text-base">
                        Personal
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4">
                          {PERSONAL_SECTIONS.map((sec) => (
                            <div key={sec.title}>
                              <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                                {sec.title}
                              </div>
                              <ul className="space-y-3">
                                {sec.links.map((l) => (
                                  <li key={l.href}>
                                    <SheetClose asChild>
                                      <Link href={l.href} className="text-sm">
                                        {l.label}
                                      </Link>
                                    </SheetClose>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="business">
                      <AccordionTrigger className="text-base">
                        Business
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4">
                          {BUSINESS_SECTIONS.map((sec) => (
                            <div key={sec.title}>
                              <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                                {sec.title}
                              </div>
                              <ul className="space-y-3">
                                {sec.links.map((l) => (
                                  <li key={l.href}>
                                    <SheetClose asChild>
                                      <Link href={l.href} className="text-sm">
                                        {l.label}
                                      </Link>
                                    </SheetClose>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion> */}

                  <div className="mt-4 grid gap-3">
                    <SheetClose asChild>
                      <Link href="/about" className="text-sm font-medium">
                        About raiz
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/services" className="text-sm font-medium">
                        Services
                      </Link>
                    </SheetClose>
                  </div>

                  <div className="pt-6">
                    <SheetClose asChild>
                      <Button
                        asChild
                        size="sm"
                        className="w-full h-12 text-base"
                      >
                        <Link href="#get-app">Get App</Link>
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
