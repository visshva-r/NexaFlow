import { EntryLoader } from "@/components/EntryLoader";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BentoFeatures } from "@/components/BentoFeatures";
import { PricingSection } from "@/components/PricingSection";
import { SocialProof } from "@/components/SocialProof";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <EntryLoader />
      <div className="page-content">
        <Header />
        <main>
          <Hero />
          <BentoFeatures />
          <PricingSection />
          <SocialProof />
        </main>
        <Footer />
      </div>
    </>
  );
}
