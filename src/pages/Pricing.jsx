import { PricingHeroSection } from "../components/PricingHeroSection/PricingHeroSection";
import {FAQSection} from "../components/FAQ/FAQSection";
import CTASection from "../components/CTA/CTASection";

import { pricingHeroData } from "../data/pricingHeroSectionData";
import {FAQData} from "../data/faqData";

export function Pricing(){
    return (
    <>
        <PricingHeroSection {...pricingHeroData}/>
        <FAQSection {...FAQData}/>
        <CTASection/>
    </>
    );
}