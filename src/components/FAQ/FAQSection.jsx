import {FAQList,FAQTitle,FAQSubtitle} from '../../data/faqData.js';

import FAQItem from "./FAQItem.jsx";
import FAQHeader from "./FAQHeader.jsx";
import {useTheme} from "../../context/ThemeContext.jsx";
export default function FAQSection(){
    const {theme} = useTheme();
    return (
        <section className={`py-16 px-35 flex flex-col items-center gap-12 ${theme==='dark'? 'bg-dark-theme text-semi-white':'bg-light-theme text-dark-theme'} max-lg:py-6 max-lg:px-6`}>
            <FAQHeader theme={theme} title={FAQTitle} subtitle={FAQSubtitle}/>
            <ul className='flex flex-col gap-5 w-full max-w-250'>
                {FAQList.map((AQObj)=>{
                    return (
                        <li key={AQObj.id}>
                            <FAQItem title={AQObj.question} description={AQObj.answer} theme={theme}/>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}