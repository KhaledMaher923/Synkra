import { useState } from 'react';
import AnnouncementBar from './components/AnnouncementBar/AnnouncementBar.jsx';
import TopNavigation from './components/Navigation/TopNavigation.jsx';
import SideDrawer from './components/Navigation/SideDrawer.jsx';
import TestimonialsSection from './components/Testimonials/TestimonialsSection.jsx';
import FAQSection from './components/FAQ/FAQSection.jsx';

// YOUR IMPORTS
import HeroSection from "./components/hero-section/heroSection";
import { useTheme } from './context/ThemeContext.jsx';

// THEIR IMPORTS
import { AboutFeatureGrid } from './components/AboutFeatureGrid/AboutFeatureGrid.jsx';
import { featureGridTitle, featureGridSubtitle, featureGridHeaderButton, featureGridData } from './data/aboutFeatureGridData.js';
import FeatureGridSection from './components/FeatureGridSection/FeatureGridSection.jsx';
import ValuesBento from './components/ValuesBento/ValuesBento.jsx';
import TrustSection from './components/TrustSection/TrustSection.jsx';
import LandingCtaSection from './components/LandingCtaSection/LandingCtaSection';
import StatsSection from './components/StatsSection/StatsSection.jsx';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleTheme } = useTheme(); // Extracted toggleTheme function so your button works

  return (
    <>
      <AnnouncementBar />
      <TopNavigation onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />
      <SideDrawer isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      
      <button className='p-6 border bg-amber-50' onClick={() => {
        toggleTheme();
      }}>changeTheme</button>
      <HeroSection />
      <StatsSection />
      
      <ValuesBento />
      <TrustSection />
      <FeatureGridSection />
      <FAQSection />
      <TestimonialsSection />
  
      
      <AboutFeatureGrid 
        title={featureGridTitle}
        subtitle={featureGridSubtitle}
        headerButtonObj={featureGridHeaderButton}
        employees={featureGridData}
      />

      <LandingCtaSection/>
    </>
  );
}

export default App;
