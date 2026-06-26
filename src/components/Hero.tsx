import { TrendingUpIcon, LinkSolidIcon, ChevronUpIcon } from "./icons";

export function Hero() {
  return (
    <section
      className="gradient-hero relative overflow-hidden px-4 pt-32 pb-20 sm:px-6 lg:pt-40"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-forsythia/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-saffron/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <p className="inline-flex items-center gap-2 rounded-full border border-nocturnal/20 bg-white/60 px-4 py-1.5 font-mono text-xs tracking-wide text-nocturnal uppercase backdrop-blur-sm">
          <TrendingUpIcon size={14} />
          Next-Gen AI Platform
        </p>

        <h1
          id="hero-heading"
          className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-oceanic sm:text-5xl lg:text-6xl"
        >
          Automate your data stack with{" "}
          <span className="text-nocturnal">intelligent pipelines</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-nocturnal/80">
          NexaFlow orchestrates ETL workflows, syncs endpoints in real time, and
          surfaces growth insights so your team ships faster with less overhead.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#pricing"
            className="motion-micro inline-flex items-center justify-center rounded-xl bg-nocturnal px-6 py-3.5 font-mono text-sm font-semibold text-forsythia hover:bg-oceanic"
          >
            View Pricing
          </a>
          <a
            href="#features"
            className="motion-micro inline-flex items-center justify-center gap-2 rounded-xl border border-nocturnal/30 bg-white/50 px-6 py-3.5 text-sm font-medium text-oceanic hover:bg-white"
          >
            <LinkSolidIcon size={18} />
            Explore Features
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { label: "Pipelines Deployed", value: "12K+" },
            { label: "Records Processed", value: "4.2B" },
            { label: "Uptime SLA", value: "99.9%" },
            { label: "Teams Worldwide", value: "3,400+" },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="text-xs text-nocturnal/60 uppercase tracking-wide">
                {stat.label}
              </dt>
              <dd className="mt-1 font-mono text-2xl font-bold text-oceanic">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <a
          href="#features"
          className="motion-micro mt-12 inline-flex items-center gap-2 text-sm font-medium text-nocturnal hover:text-oceanic"
          aria-label="Scroll to features"
        >
          <ChevronUpIcon size={16} className="rotate-180" />
          See capabilities
        </a>
      </div>
    </section>
  );
}
