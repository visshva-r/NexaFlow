export type FeatureItem = {
  id: string;
  title: string;
  description: string;
  icon:
    | "cube"
    | "chart"
    | "cog"
    | "link"
    | "trending"
    | "refresh"
    | "search";
  span?: "wide" | "tall" | "normal";
};

export const platformFeatures: FeatureItem[] = [
  {
    id: "pipelines",
    title: "AI Pipeline Orchestration",
    description:
      "Design, deploy, and monitor intelligent data pipelines with zero manual intervention.",
    icon: "cube",
    span: "wide",
  },
  {
    id: "analytics",
    title: "Real-Time Analytics",
    description:
      "Visualize throughput, latency, and conversion with live dashboards.",
    icon: "chart",
    span: "normal",
  },
  {
    id: "automation",
    title: "Smart Automation Rules",
    description:
      "Configure triggers, transforms, and routing with a visual rule engine.",
    icon: "cog",
    span: "tall",
  },
  {
    id: "integrations",
    title: "Native Integrations",
    description:
      "Connect 200+ sources via secure webhooks and pre-built connectors.",
    icon: "link",
    span: "normal",
  },
  {
    id: "growth",
    title: "Growth Intelligence",
    description:
      "Predict bottlenecks and surface optimization opportunities automatically.",
    icon: "trending",
    span: "normal",
  },
  {
    id: "sync",
    title: "Bi-Directional Sync",
    description:
      "Keep every endpoint in perfect sync with conflict-free replication.",
    icon: "refresh",
    span: "wide",
  },
  {
    id: "discovery",
    title: "Intelligent Discovery",
    description:
      "Full-text semantic search across pipeline logs, events, and metadata.",
    icon: "search",
    span: "normal",
  },
];

export const testimonials = [
  {
    id: "1",
    name: "Priya Sharma",
    role: "CTO, DataForge",
    quote:
      "NexaFlow cut our ETL deployment time by 70%. The automation engine is genuinely next-gen.",
    avatar: "PS",
  },
  {
    id: "2",
    name: "Marcus Chen",
    role: "Head of Engineering, ScaleAI",
    quote:
      "We migrated 40 pipelines in a weekend. The pricing transparency alone won our team over.",
    avatar: "MC",
  },
  {
    id: "3",
    name: "Elena Rossi",
    role: "Data Lead, EuroTech",
    quote:
      "Finally a platform that respects multi-currency billing without hidden conversion fees.",
    avatar: "ER",
  },
];

export const trustedBy = [
  "DataForge",
  "ScaleAI",
  "EuroTech",
  "CloudSync",
  "AutoML Co",
  "PipelineX",
];
