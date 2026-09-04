import TestimonialsSection from './components/Testimonials/TestimonialsSection.jsx';
import FAQSection from './components/FAQ/FAQSection.jsx';
import {AboutFeatureGrid} from './components/about-feature-grid/AboutFeatureGrid.jsx';
import {featureGridTitle, featureGridSubtitle, featureGridHeaderButton, featureGridData} from './data/aboutFeatureGridData.js';
import {useTheme} from './context/ThemeContext.jsx';
import FeatureGridSection from './components/FeatureGridSection/FeatureGridSection.jsx';
import ValuesBento from './components/ValuesBento/ValuesBento.jsx';
function App() {
  const {toggleTheme}=useTheme();
  return (
    <>
      <button className='p-6 border bg-amber-50' onClick={()=>{
        toggleTheme();
      }}>changhTheme</button>
      <ValuesBento/>
      <FeatureGridSection/>
      <FAQSection/>
      <TestimonialsSection />
      <FAQSection />
      <AboutFeatureGrid 
        title={featureGridTitle}
        subtitle={featureGridSubtitle}
        headerButtonObj={featureGridHeaderButton}
        employees={featureGridData}
      />
    </>
  )
}

export default App
