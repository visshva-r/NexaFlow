"use client";

import { useEffect, useRef, useState } from "react";
import { platformFeatures } from "@/lib/featuresData";
import { featureIconMap } from "./icons";
import { ChevronDownIcon, ChevronUpSolidIcon } from "./icons";

const MOBILE_BP = 1024;

export function BentoFeatures() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const hoveredIndexRef = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${MOBILE_BP}px)`);
    const onBreakpointChange = (e: MediaQueryListEvent) => {
      if (!e.matches && hoveredIndexRef.current !== null) {
        setOpenIndex(hoveredIndexRef.current);
      }
    };
    mq.addEventListener("change", onBreakpointChange);
    return () => mq.removeEventListener("change", onBreakpointChange);
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="features"
      className="px-4 py-20 sm:px-6"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 text-center">
          <h2 id="features-heading" className="text-3xl font-bold text-oceanic sm:text-4xl">
            Platform Capabilities
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-nocturnal/80">
            Everything you need to automate, analyze, and scale your data stack.
          </p>
        </header>

        <div className="bento-grid hidden lg:grid">
          {platformFeatures.map((feature, index) => {
            const Icon = featureIconMap[feature.icon];
            const spanClass =
              feature.span === "wide"
                ? "bento-wide"
                : feature.span === "tall"
                  ? "bento-tall"
                  : "";

            return (
              <article
                key={feature.id}
                className={`bento-card ${spanClass}`}
                onMouseEnter={() => {
                  hoveredIndexRef.current = index;
                }}
                onMouseLeave={() => {
                  hoveredIndexRef.current = null;
                }}
                onFocus={() => {
                  hoveredIndexRef.current = index;
                }}
                onBlur={() => {
                  hoveredIndexRef.current = null;
                }}
                tabIndex={0}
              >
                <Icon size={28} className="text-nocturnal" />
                <h3 className="mt-4 text-lg font-bold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-nocturnal/75">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="space-y-2 lg:hidden">
          {platformFeatures.map((feature, index) => {
            const Icon = featureIconMap[feature.icon];
            const isOpen = openIndex === index;

            return (
              <article
                key={feature.id}
                className="overflow-hidden rounded-2xl border border-mystic bg-white"
              >
                <button
                  type="button"
                  className="motion-micro flex w-full items-center justify-between px-5 py-4 text-left"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${feature.id}`}
                >
                  <span className="flex items-center gap-3">
                    <Icon size={22} className="text-nocturnal" />
                    <span className="font-mono font-semibold">{feature.title}</span>
                  </span>
                  {isOpen ? (
                    <ChevronUpSolidIcon size={18} />
                  ) : (
                    <ChevronDownIcon size={18} />
                  )}
                </button>
                <div
                  id={`panel-${feature.id}`}
                  className={`accordion-panel motion-layout px-5 ${isOpen ? "is-open" : ""}`}
                  role="region"
                  aria-hidden={!isOpen}
                >
                  <p className="pb-4 text-sm leading-relaxed text-nocturnal/75">
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
