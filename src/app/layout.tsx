import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { PRICING_CONFIG } from "@/lib/pricingMatrix";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const starterPrice = String(PRICING_CONFIG.tiers[0].baseRate);

export const metadata: Metadata = {
  metadataBase: new URL("https://nexaflow.app"),
  title: "NexaFlow - Next-Gen AI Data Automation Platform",
  description:
    "NexaFlow is an advanced AI-driven data automation platform. Orchestrate pipelines, sync endpoints, and scale operations with intelligent automation.",
  keywords: [
    "AI automation",
    "data pipelines",
    "ETL",
    "SaaS",
    "data orchestration",
    "NexaFlow",
  ],
  authors: [{ name: "NexaFlow" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexaflow.app",
    siteName: "NexaFlow",
    title: "NexaFlow - Next-Gen AI Data Automation Platform",
    description:
      "Orchestrate intelligent data pipelines, automate workflows, and scale with confidence.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexaFlow - Next-Gen AI Data Automation Platform",
    description: "Advanced AI-driven data automation for modern teams.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://nexaflow.app" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "NexaFlow",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description: "AI-driven data automation platform.",
              offers: {
                "@type": "Offer",
                price: starterPrice,
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
