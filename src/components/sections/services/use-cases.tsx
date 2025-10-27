import Image from "next/image";
import { USE_CASES } from "@/lib/services-data";

export function UseCases() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-900 dark:bg-emerald-400" />
          <span>Use Cases</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-balance mb-8">
          How modern services solve legacy limitations
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {USE_CASES.map((c) => (
            <article key={c.title} className="group">
              <div className="relative overflow-hidden rounded-2xl border">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={c.imageUrl}
                    alt={c.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {c.icon ? (
                    <div
                      aria-hidden
                      className="absolute inset-6 rounded-xl border border-dashed grid place-items-center text-6xl/none text-white/95 drop-shadow-sm"
                    >
                      {c.icon}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{c.title}</h3>
                <p className="text-muted-foreground text-sm mt-2 max-w-prose">
                  {c.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UseCases;
