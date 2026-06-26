"use client";

import { useEffect, useRef } from "react";
import {
  PRICING_CONFIG,
  formatPrice,
  type BillingCycle,
  type Currency,
} from "@/lib/pricingMatrix";

/**
 * Performance-isolated pricing engine.
 * Currency/billing changes update only [data-price] text nodes via direct DOM writes -
 * no React setState, so parent and sibling sections never re-render.
 */
export function PricingSection() {
  const rootRef = useRef<HTMLElement>(null);
  const stateRef = useRef<{ currency: Currency; billing: BillingCycle }>({
    currency: "USD",
    billing: "monthly",
  });

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const animatePrice = (el: HTMLElement) => {
      el.animate(
        [
          { opacity: 0, transform: "translateY(-6px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        { duration: 160, easing: "cubic-bezier(0, 0, 0.2, 1)", fill: "forwards" }
      );
    };

    const updatePrices = () => {
      const { currency, billing } = stateRef.current;
      root.querySelectorAll<HTMLElement>("[data-price]").forEach((el) => {
        const base = Number(el.dataset.base);
        el.textContent = formatPrice(base, currency, billing);
        animatePrice(el);
      });
      root.querySelectorAll<HTMLElement>("[data-billing-period]").forEach((el) => {
        el.textContent =
          billing === "monthly" ? "/month" : "/month, billed annually";
      });
      const savings = root.querySelector<HTMLElement>("[data-savings-label]");
      if (savings) {
        savings.hidden = billing !== "annual";
      }
    };

    const setBilling = (billing: BillingCycle) => {
      stateRef.current.billing = billing;
      root.querySelectorAll<HTMLButtonElement>("[data-billing-btn]").forEach((btn) => {
        btn.classList.toggle("is-active", btn.dataset.billingBtn === billing);
        btn.setAttribute("aria-pressed", String(btn.dataset.billingBtn === billing));
      });
      updatePrices();
    };

    const setCurrency = (currency: Currency) => {
      stateRef.current.currency = currency;
      root.querySelectorAll<HTMLButtonElement>("[data-currency-btn]").forEach((btn) => {
        btn.classList.toggle("is-active", btn.dataset.currencyBtn === currency);
        btn.setAttribute("aria-pressed", String(btn.dataset.currencyBtn === currency));
      });
      updatePrices();
    };

    const onClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const billingBtn = target.closest<HTMLButtonElement>("[data-billing-btn]");
      if (billingBtn?.dataset.billingBtn) {
        setBilling(billingBtn.dataset.billingBtn as BillingCycle);
        return;
      }
      const currencyBtn = target.closest<HTMLButtonElement>("[data-currency-btn]");
      if (currencyBtn?.dataset.currencyBtn) {
        setCurrency(currencyBtn.dataset.currencyBtn as Currency);
      }
    };

    root.addEventListener("click", onClick);
    updatePrices();

    return () => root.removeEventListener("click", onClick);
  }, []);

  return (
    <section
      ref={rootRef}
      id="pricing"
      className="bg-arctic px-4 py-20 sm:px-6"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-6xl">
        <header className="text-center">
          <h2 id="pricing-heading" className="text-3xl font-bold text-oceanic sm:text-4xl">
            Transparent Pricing
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-nocturnal/80">
            Matrix-driven rates across INR, USD, and EUR with a flat 20% annual discount.
          </p>
        </header>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <div
            className="flex rounded-xl border border-mystic bg-white p-1"
            role="group"
            aria-label="Billing cycle"
          >
            <button
              type="button"
              data-billing-btn="monthly"
              className="pricing-toggle-btn motion-micro is-active rounded-lg px-5 py-2 text-sm font-medium"
              aria-pressed="true"
            >
              Monthly
            </button>
            <button
              type="button"
              data-billing-btn="annual"
              className="pricing-toggle-btn motion-micro rounded-lg px-5 py-2 text-sm font-medium text-nocturnal"
              aria-pressed="false"
            >
              Annual
            </button>
          </div>

          <div
            className="flex rounded-xl border border-mystic bg-white p-1"
            role="group"
            aria-label="Currency"
          >
            {(["INR", "USD", "EUR"] as const).map((c) => (
              <button
                key={c}
                type="button"
                data-currency-btn={c}
                className={`pricing-currency-btn motion-micro rounded-lg px-4 py-2 text-sm font-medium ${
                  c === "USD" ? "is-active" : ""
                }`}
                aria-pressed={c === "USD"}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <p
          data-savings-label
          hidden
          className="mt-4 text-center text-sm font-medium text-saffron"
        >
          Save 20% with annual billing
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PRICING_CONFIG.tiers.map((tier) => (
            <article
              key={tier.id}
              className={`motion-micro flex flex-col rounded-2xl border p-6 ${
                tier.highlighted
                  ? "border-nocturnal bg-nocturnal text-arctic shadow-xl"
                  : "border-mystic bg-white"
              }`}
            >
              <h3 className="text-xl font-bold">{tier.name}</h3>
              <p className={`mt-2 text-sm ${tier.highlighted ? "text-mystic" : "text-nocturnal/70"}`}>
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-1">
                <span
                  data-price
                  data-base={tier.baseRate}
                  className="font-mono text-4xl font-bold"
                >
                  -
                </span>
                <span data-billing-period className="text-sm opacity-70">
                  /month
                </span>
              </p>
              <ul className="mt-6 flex-1 space-y-2 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className={tier.highlighted ? "text-forsythia" : "text-saffron"}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={`motion-micro mt-8 rounded-xl px-4 py-3 text-sm font-semibold ${
                  tier.highlighted
                    ? "bg-forsythia text-oceanic hover:bg-saffron"
                    : "bg-nocturnal text-arctic hover:bg-oceanic"
                }`}
              >
                Get Started
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
