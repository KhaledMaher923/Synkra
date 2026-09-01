import TestimonialsSection from './components/Testimonials/TestimonialsSection.jsx';
import FAQSection from './components/FAQ/FAQSection.jsx';
import {useTheme} from './context/ThemeContext.jsx';
function App() {
  const {toggleTheme}=useTheme();
  return (
    <>
      <button className='p-6 border bg-amber-50' onClick={()=>{
        toggleTheme();
      }}>changhTheme</button>
      <TestimonialsSection />
      <FAQSection />
    </>
  )
}

export default App
