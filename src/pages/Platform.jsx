import CTASection from "../components/CTA/CTASection.jsx";
import DeveloperSdkSection from "../components/DeveloperSdk/DeveloperSdkSection.jsx";
import FeatureGridSection from "../components/FeatureGridSection/FeatureGridSection.jsx";
import FeaturesHeroSection from "../components/FeaturesPageHeroSection/FeaturesHeroSection.jsx";
import OpsIntelligenceSection from "../components/OpsIntelligenceSection/OpsIntelligenceSection.jsx";

export function Platform() {
  return (
    <>
      <FeaturesHeroSection />
      <DeveloperSdkSection />
      <FeatureGridSection />
      <OpsIntelligenceSection />
      <CTASection />
    </>
  );
}
