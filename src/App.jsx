import FAQSection from './components/FAQ/FAQSection.jsx';
import HeroSection from "./components/hero-section/heroSection";
import {useTheme} from './context/ThemeContext.jsx';
function App() {
  const {toggleTheme}=useTheme();
  return (
    <>
      <button className='p-6 border bg-amber-50' onClick={()=>{
        toggleTheme();
      }}>changhTheme</button>
      <HeroSection/>
      <FAQSection/>
    </>
  )
}

export default App
