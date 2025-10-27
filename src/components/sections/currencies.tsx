import * as React from "react";

type Currency = {
  code: string;
  name: string;
  symbol?: string;
};

const CURRENCIES: ReadonlyArray<Currency> = [
  { code: "USD", name: "US Dollar", symbol: "$" },
  { code: "EUR", name: "Euro", symbol: "€" },
  { code: "GBP", name: "British Pound", symbol: "£" },
  { code: "NGN", name: "Nigerian Naira", symbol: "₦" },
  { code: "KES", name: "Kenyan Shilling", symbol: "KSh" },
  { code: "GHS", name: "Ghanaian Cedi", symbol: "₵" },
  { code: "ZAR", name: "South African Rand", symbol: "R" },
  { code: "AED", name: "UAE Dirham", symbol: "د.إ" },
  { code: "SAR", name: "Saudi Riyal", symbol: "﷼" },
  { code: "CAD", name: "Canadian Dollar", symbol: "$" },
  { code: "AUD", name: "Australian Dollar", symbol: "$" },
  { code: "BRL", name: "Brazilian Real", symbol: "R$" },
  { code: "MXN", name: "Mexican Peso", symbol: "$" },
  { code: "INR", name: "Indian Rupee", symbol: "₹" },
  { code: "JPY", name: "Japanese Yen", symbol: "¥" },
  { code: "CNY", name: "Chinese Yuan", symbol: "¥" },
];

export function CurrenciesSection({
  currencies = CURRENCIES,
}: {
  currencies?: ReadonlyArray<Currency>;
}) {
  return (
    <section id="currencies" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
            Supported currencies
          </h2>
          <p className="mt-3 text-muted-foreground">
            Operate globally with multi-currency support for collections,
            transfers and payouts. Below is a sample of what we support today.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {currencies.map((c) => (
            <div
              key={c.code}
              className="rounded-lg border p-4 md:p-5 bg-card hover:bg-muted/50 transition-colors"
            >
              <div className="text-lg md:text-xl font-semibold tracking-tight">
                {c.symbol ? `${c.symbol} ` : ""}
                {c.code}
              </div>
              <div className="mt-1 text-xs md:text-sm text-muted-foreground">
                {c.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CurrenciesSection;

