import { useState } from 'react';
import AnnouncementBar from './components/AnnouncementBar/AnnouncementBar.jsx';
import TopNavigation from './components/Navigation/TopNavigation.jsx';
import SideDrawer from './components/Navigation/SideDrawer.jsx';
import TestimonialsSection from './components/Testimonials/TestimonialsSection.jsx';
import FAQSection from './components/FAQ/FAQSection.jsx';
import { AboutFeatureGrid } from './components/AboutFeatureGrid/AboutFeatureGrid.jsx';
import { featureGridTitle, featureGridSubtitle, featureGridHeaderButton, featureGridData } from './data/aboutFeatureGridData.js';
import FeatureGridSection from './components/FeatureGridSection/FeatureGridSection.jsx';
import ValuesBento from './components/ValuesBento/ValuesBento.jsx';

function App() {
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <AnnouncementBar />
      
      {/* Top Navigation stays at the top. The hamburger icon only shows on mobile (md:hidden) */}
      <TopNavigation onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />
      
      {/* Side Drawer only slides in when the state is true */}
      <SideDrawer isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      
      <ValuesBento />
      <FeatureGridSection />
      <FAQSection />
      <TestimonialsSection />
      <FAQSection />
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