
import FAQItem from "./FAQItem.jsx";
import FAQHeader from "./FAQHeader.jsx";
import {useTheme} from "../../context/ThemeContext.jsx";

export function FAQSection({title,subtitle,QAList}){
    const {theme} = useTheme();
    return (
        <section className={`py-16 px-35 flex flex-col items-center gap-12 ${theme==='dark'? 'bg-dark-theme text-semi-white':'bg-light-theme text-dark-theme'} max-lg:py-6 max-lg:px-6`}>
            <FAQHeader title={title} subtitle={subtitle}/>
            <ul className='flex flex-col gap-5 w-full max-w-250'>
                {QAList.map((AQObj)=>{
                    return (
                        <li key={AQObj.id}>
                            <FAQItem {...AQObj}/>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}