import { localRails } from "@/lib/fees-data";

export function LocalRails() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
          Local rails pricing
        </h2>
        <div className="space-y-10">
          {localRails.map((section) => (
            <div key={section.heading}>
              <h3 className="text-lg font-semibold mb-3">{section.heading}</h3>
              <div className="divide-y border rounded-xl">
                {section.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start justify-between gap-6 p-4"
                  >
                    <div className="text-sm">
                      <div>{item.label}</div>
                      {item.help ? (
                        <div className="text-muted-foreground mt-1">
                          {item.help}
                        </div>
                      ) : null}
                    </div>
                    <div className="text-sm font-medium whitespace-nowrap">
                      {item.fee}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LocalRails;
