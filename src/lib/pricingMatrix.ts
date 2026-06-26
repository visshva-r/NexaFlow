export type Currency = "INR" | "USD" | "EUR";
export type BillingCycle = "monthly" | "annual";

export type PricingTier = {
  id: string;
  name: string;
  baseRate: number;
  description: string;
  features: string[];
  highlighted?: boolean;
};

/** Multi-dimensional pricing matrix: base rate x regional tariff x annual discount */
export const PRICING_CONFIG = {
  annualDiscountMultiplier: 0.8,
  regionalTariffs: {
    USD: 1,
    EUR: 0.92,
    INR: 83.5,
  } satisfies Record<Currency, number>,
  tiers: [
    {
      id: "starter",
      name: "Starter",
      baseRate: 29,
      description: "For individuals automating their first workflows.",
      features: [
        "5 active pipelines",
        "10K records / month",
        "Email support",
        "Basic analytics",
      ],
    },
    {
      id: "professional",
      name: "Professional",
      baseRate: 79,
      description: "For growing teams scaling data operations.",
      features: [
        "Unlimited pipelines",
        "500K records / month",
        "Priority support",
        "Advanced analytics",
        "API access",
      ],
      highlighted: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      baseRate: 199,
      description: "For organizations with custom compliance needs.",
      features: [
        "Dedicated infrastructure",
        "Unlimited records",
        "24/7 support",
        "Custom integrations",
        "SLA guarantee",
      ],
    },
  ] satisfies PricingTier[],
};

const CURRENCY_SYMBOLS: Record<Currency, string> = {
  INR: "₹",
  USD: "$",
  EUR: "€",
};

export function calculatePrice(
  baseRate: number,
  currency: Currency,
  billing: BillingCycle
): number {
  const tariff = PRICING_CONFIG.regionalTariffs[currency];
  let price = baseRate * tariff;
  if (billing === "annual") {
    price *= PRICING_CONFIG.annualDiscountMultiplier;
  }
  return price;
}

export function formatPrice(
  baseRate: number,
  currency: Currency,
  billing: BillingCycle
): string {
  const value = calculatePrice(baseRate, currency, billing);
  const symbol = CURRENCY_SYMBOLS[currency];
  const formatted =
    currency === "INR"
      ? Math.round(value).toLocaleString("en-IN")
      : value.toFixed(currency === "USD" ? 0 : 2);
  return `${symbol}${formatted}`;
}
