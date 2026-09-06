import { useState } from 'react';
import AnnouncementBar from './components/AnnouncementBar/AnnouncementBar.jsx';
import TopNavigation from './components/Navigation/TopNavigation.jsx';
import SideDrawer from './components/Navigation/SideDrawer.jsx';
import TestimonialsSection from './components/Testimonials/TestimonialsSection.jsx';
import FAQSection from './components/FAQ/FAQSection.jsx';
import CTASection from './components/CTA/CTASection';
import HeroSection from "./components/hero-section/heroSection";
import { useTheme } from './context/ThemeContext.jsx';
import { AboutFeatureGrid } from './components/AboutFeatureGrid/AboutFeatureGrid.jsx';
import { featureGridTitle, featureGridSubtitle, featureGridHeaderButton, featureGridData } from './data/aboutFeatureGridData.js';
import FeatureGridSection from './components/FeatureGridSection/FeatureGridSection.jsx';
import ValuesBento from './components/ValuesBento/ValuesBento.jsx';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleTheme } = useTheme(); // Extracted toggleTheme function so your button works

  return (
    <>
      <AnnouncementBar />
      <TopNavigation onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />
      <SideDrawer isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
  

      <HeroSection />
      <ValuesBento />
      <FeatureGridSection />
      <FAQSection />
      <TestimonialsSection />
      <CTASection />
      <AboutFeatureGrid 
        title={featureGridTitle}
        subtitle={featureGridSubtitle}
        headerButtonObj={featureGridHeaderButton}
        employees={featureGridData}
      />
    </>
  );
}

export default App;
