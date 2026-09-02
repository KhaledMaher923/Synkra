import FAQSection from './components/FAQ/FAQSection.jsx';
import {useTheme} from './context/ThemeContext.jsx';
import FeatureGridSection from './components/FeatureGridSection/FeatureGridSection.jsx';
function App() {
  const {toggleTheme}=useTheme();
  return (
    <>
      <button className='p-6 border bg-amber-50' onClick={()=>{
        toggleTheme();
      }}>changhTheme</button>
      <FeatureGridSection/>
      <FAQSection/>
    </>
  )
}

export default App
