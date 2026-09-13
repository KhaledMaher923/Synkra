import AboutHeroSection from "../../components/AboutHeroSection/AboutHeroSection";
import StatsSection from "../../components/StatsSection/StatsSection";
import ValuesBento from "../../components/ValuesBento/ValuesBento";
import {AboutFeatureGrid} from "../../components/AboutFeatureGrid/AboutFeatureGrid"
import {
  featureGridData,
  featureGridHeaderButton,
  featureGridSubtitle,
  featureGridTitle,
} from "../../data/aboutFeatureGridData";
import CTASection from "../../components/CTA/CTASection";
export function About() {
  return (
    <>
      <AboutHeroSection />
      <StatsSection page="About" />
      <ValuesBento />
      <AboutFeatureGrid title={featureGridTitle} subtitle={featureGridSubtitle} headerButtonObj={featureGridHeaderButton} employees={featureGridData} />
      <CTASection/>
    </>
  );
}
