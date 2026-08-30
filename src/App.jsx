import {useState} from 'react';
import { FaRocket } from 'react-icons/fa';
import FAQSection from './components/FAQ/FAQSection';
function App() {
  const [theme,setTheme] = useState('light');
  return (
    <>
      <button className='p-6 border' onClick={()=>{
        setTheme((prevTheme=>{
          return prevTheme === 'light'? 'dark': 'light';
        }));
      }}>changhTheme</button>
      <FAQSection theme={theme}/>
    </>
  )
}

export default App
