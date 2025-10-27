export type PlanId = "free" | "plus" | "premium";

export type Rate = {
  percent?: number;
  cents?: number; // flat cents added per tx
  note?: string; // e.g. "1% min $1"
};

export type FeeRow = {
  label: string;
  help?: string;
  rates: Record<PlanId, Rate>;
};

export type FeeTable = {
  heading: string;
  rows: FeeRow[];
};

export type LocalFeeItem = {
  label: string;
  fee: string;
  help?: string;
};

export type LocalSection = {
  heading: string;
  items: LocalFeeItem[];
};

export const feeTable: FeeTable = {
  heading: "Processing fees",
  // Rates mirror Square's structure; adapt copy later if pricing changes
  rows: [
    {
      label: "Tap, dip, or swipe",
      rates: {
        free: { percent: 2.6, cents: 15 },
        plus: { percent: 2.5, cents: 15 },
        premium: { percent: 2.4, cents: 15 },
      },
    },
    {
      label: "Online",
      rates: {
        free: { percent: 3.3, cents: 30 },
        plus: { percent: 2.9, cents: 30 },
        premium: { percent: 2.9, cents: 30 },
      },
      help: "Square Payment Links is 3.3% + 30¢",
    },
    {
      label: "Online API",
      rates: {
        free: { percent: 2.9, cents: 30 },
        plus: { percent: 2.9, cents: 30 },
        premium: { percent: 2.9, cents: 30 },
      },
    },
    {
      label: "ACH bank transfer (via invoice)",
      rates: {
        free: { note: "1% min $1" },
        plus: { note: "1% min $1, $10 fee cap" },
        premium: { note: "1% min $1, $10 fee cap" },
      },
    },
    {
      label: "ACH bank transfer (via API)",
      rates: {
        free: { note: "1% min $1, $5 fee cap" },
        plus: { note: "1% min $1, $5 fee cap" },
        premium: { note: "1% min $1, $5 fee cap" },
      },
    },
    {
      label: "Manual entry or card on file",
      rates: {
        free: { percent: 3.5, cents: 15 },
        plus: { percent: 3.5, cents: 15 },
        premium: { percent: 3.5, cents: 15 },
      },
    },
    {
      label: "Cash App Afterpay",
      rates: {
        free: { percent: 6, cents: 30 },
        plus: { percent: 6, cents: 30 },
        premium: { percent: 6, cents: 30 },
      },
    },
    {
      label: "Cash or check",
      rates: {
        free: { note: "Free" },
        plus: { note: "Free" },
        premium: { note: "Free" },
      },
    },
  ],
};

export const localRails: LocalSection[] = [
  {
    heading: "Transfers",
    items: [
      { label: "Transfers of NGN 5,000 and below", fee: "NGN 10 per transfer" },
      {
        label: "Transfers between NGN 5,001 and NGN 50,000",
        fee: "NGN 25 per transfer",
      },
      { label: "Transfers above NGN 50,000", fee: "NGN 50 per transfer" },
    ],
  },
  {
    heading: "Virtual Accounts",
    items: [
      {
        label: "Dedicated Virtual Accounts (DVA)",
        fee: "1% per transaction (capped at NGN 300)",
      },
    ],
  },
  {
    heading: "Virtual Terminal",
    items: [
      { label: "Transfers", fee: "1% capped at NGN 300" },
      {
        label: "USSD Transactions",
        fee: "1.5% + NGN 100 capped at NGN 2,000",
        help: "NGN 100 waived for transactions under NGN 2,500",
      },
      {
        label: "Local Card Transactions",
        fee: "1.5% + NGN 100 capped at NGN 2,000",
        help: "NGN 100 waived for transactions under NGN 2,500",
      },
      { label: "International Card Transactions", fee: "3.9% + NGN 100" },
    ],
  },
  {
    heading: "Physical Terminal",
    items: [
      { label: "Live SmartPeak P1000", fee: "NGN 100,000 per device" },
      { label: "Test SmartPeak P1000", fee: "NGN 85,000 per device" },
      {
        label: "Card Transactions on Terminal",
        fee: "0.5% capped at NGN 1,000",
      },
      {
        label: "USSD Transactions on Terminal",
        fee: "1.5% + NGN 100 capped at NGN 2,000",
        help: "NGN 100 waived for transactions under NGN 2,500",
      },
    ],
  },
];

export const planLabels: Record<PlanId, string> = {
  free: "Square Free",
  plus: "Square Plus",
  premium: "Square Premium",
};

export function formatRate(rate: Rate): string {
  if (rate.note) return rate.note;
  const percent = rate.percent != null ? `${rate.percent}%` : undefined;
  const cents = rate.cents != null ? `${rate.cents}¢` : undefined;
  if (percent && cents) return `${percent} + ${cents}`;
  return percent ?? cents ?? "—";
}
