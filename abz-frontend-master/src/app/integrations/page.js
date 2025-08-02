import Security from "@/components/HomeComponents/Security";
import IntegrationBanner from "@/components/Integration/IntegrationBanner";
import IntegrationCardsSection from "@/components/Integration/IntegrationCardsSection";
import IntegrationsSection from "@/components/Integration/IntegrationsSection";

export default function Home() {
  return (
    <main>
      <IntegrationBanner />
      <IntegrationsSection />
      <IntegrationCardsSection />
      <Security />
    </main>
  );
}
