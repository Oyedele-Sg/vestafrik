import * as React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">Page not found</h1>
        <p className="text-muted-foreground">
          The page you’re looking for doesn’t exist.
        </p>
        <Link className="text-primary underline" href="/">
          Go back home
        </Link>
      </div>
    </section>
  );
}
