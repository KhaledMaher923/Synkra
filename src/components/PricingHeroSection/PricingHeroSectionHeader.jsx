import {useMemo} from 'react';
import { useTheme } from "../../context/ThemeContext";


function splitTitle(title){
    if(!title) return ['',''];
    const sentences = title.split('.');
    const words = sentences[0].split(' ');
    const firstWord = words.shift();
    const restOfFirstSentence = words.join(' ');
    sentences.shift();
    return[firstWord, restOfFirstSentence, ...sentences];
}
export function PricingHeroSectionHeader({PriceIcon,title,subtitle,pageLabel}){
    const [firstWord, restOfFirstSentence, secondSentence] = useMemo(() => splitTitle(title),[title]);
    const {theme} = useTheme();
    
    return (
        <header className='flex flex-col items-center gap-3'>
            <div className={`uppercase flex items-center gap-1 py-1 px-3  rounded-full text-[12px] ${theme === 'dark'?'bg-[#081D5B] text-[#75A2F0]':'bg-[#EBF2FD] text-primary-blue'}`}>
                {PriceIcon && <PriceIcon className='scale-x-[-1]'/>}
                {pageLabel}
            </div>
            <h2 className={`font-normal lg:text-[80px] text-[56px] flex flex-col items-center font-header ${theme === 'dark'?' text-white':'text-dark-theme'}`}><span><span className={`italic ${theme === 'dark'?' text-[#75A2F0]':'text-primary-blue'}`}>{firstWord}</span> {restOfFirstSentence}.</span><span>{secondSentence}.</span></h2>
            <p className={`lg:text-[20px] text-[16px] ${theme ==='dark'?'text-[#CBC9C2]':'text-medium-gray'} font-bold text-center`}>{subtitle}</p>
        </header>
    );
}