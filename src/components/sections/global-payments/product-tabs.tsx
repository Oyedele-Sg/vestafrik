"use client";

import * as React from "react";

const tabs = [
  {
    id: "virtual-accounts",
    label: "Virtual accounts",
    title:
      "Create stablecoin linked accounts with access to the major payment schemes.",
    features: [
      "Send and receive payments via Swift, ACH, Fedwire, SEPA, CHAPS, Faster Payments",
      "Access named virtual accounts for businesses and individuals in USD, EUR and GBP",
      "On and off-ramp from fiat to cryptocurrencies and back",
    ],
  },
  {
    id: "send-payments",
    label: "Send payments",
    title:
      "Pay partners, customers, employees and creators in their preferred currency.",
    features: [
      "Pay out stablecoins, USD, GBP and EUR - choose the optimal rail based on cost, speed and customer experience",
      "Reduce costs by eliminating intermediaries and optimising FX fees on regular global payouts",
      "Send mass payouts via CSV upload or API",
    ],
    currencies: [
      "USDC",
      "ADA",
      "algo",
      "BCH",
      "DAI",
      "doge",
      "LTC",
      "trx",
      "XRP",
      "btc",
      "ETH",
      "sol",
    ],
    fiatCurrencies: ["GBP", "EUR", "USD"],
  },
  {
    id: "accept-payments",
    label: "Accept payments",
    title:
      "Add digital currencies to your checkout and auto-convert to EUR, GBP or USD to mitigate exposure.",
    features: [
      "Connect with your existing systems including Payment IQ, Praxis Checkout, Bridgerpay, Premier cashier and Stratified",
      "Accept crypto at checkout using our pre-built hosted payment page - optimised for conversion, available in multiple languages",
      "Get paid through any channel - generate invoices and request payment via email, SMS, WhatsApp and other platforms",
    ],
    currencies: [
      "USDC",
      "ADA",
      "algo",
      "BCH",
      "DAI",
      "doge",
      "LTC",
      "trx",
      "XRP",
      "btc",
      "ETH",
      "sol",
    ],
  },
  {
    id: "instant-transfers",
    label: "Make instant transfers",
    title: "Transfer funds 24/7 within the BVNK ecosystem.",
    features: [
      "Reduce FX costs using payment networks that allow free, real-time international USD transactions between closed-loop network participants",
      "Instant settlement - USD settlement between participants happens instantly. No middleman, no delays",
      "Available 24/7/365 - no cut-off times, or banking holiday limitations. The network operates 24/7 all year round",
    ],
  },
];

const CurrencyBadge = ({ currency }: { currency: string }) => (
  <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 whitespace-nowrap">
    {currency}
  </div>
);

const CurrencyCarousel = ({ currencies }: { currencies: string[] }) => (
  <div className="flex flex-wrap gap-2 py-2">
    {currencies.map((currency, index) => (
      <CurrencyBadge key={index} currency={currency} />
    ))}
  </div>
);

export function ProductTabs() {
  const [activeTab, setActiveTab] = React.useState("virtual-accounts");

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="py-20 md:py-32 bg-[#F7F9FC]">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-6 py-3 text-base font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-[#0066FF] text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-12">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {activeTabData?.title}
            </h2>
          </div>

          {/* Features List */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {activeTabData?.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.split(" - ")[0]}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>

          {/* Currency Badges */}
          {activeTabData?.currencies && (
            <div className="max-w-5xl mx-auto space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Digital currencies
                </h3>
                <CurrencyCarousel currencies={activeTabData.currencies} />
              </div>
              {activeTabData.fiatCurrencies && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Fiat currencies
                  </h3>
                  <CurrencyCarousel currencies={activeTabData.fiatCurrencies} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
