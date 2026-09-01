import FAQSection from './components/FAQ/FAQSection.jsx';
import AboutFeatureGrid from './components/about-feature-grid/AboutFeatureGrid.jsx';
import {featureGridTitle, featureGridSubtitle, featureGridHeaderButton, featureGridData} from './data/aboutFeatureGridData.js';
import {useTheme} from './context/ThemeContext.jsx';
function App() {
  const {toggleTheme}=useTheme();
  return (
    <>
      <button className='p-6 border bg-amber-50' onClick={()=>{
        toggleTheme();
      }}>changhTheme</button>
      <FAQSection/>
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
