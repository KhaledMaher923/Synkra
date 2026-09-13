import {useState,useMemo} from 'react';
import {Switch} from './Switch';
import { useTheme } from '../../context/ThemeContext';
function splitTitle(title){
    if(!title) return ['',''];
    const sentences = title.split('.');
    const words = sentences[0].split(' ');
    const firstWord = words.shift();
    const restOfFirstSentence = words.join(' ');
    sentences.shift();
    return[firstWord, restOfFirstSentence, ...sentences];
}

export function PricingHeroSection({title='',subtitle='',pageLabel='',paymentOptions=[], icons={}}){
    const [isAnnual, setIsAnnual] = useState(false);
    const [firstWord, restOfFirstSentence, secondSentence] = useMemo(() => splitTitle(title),[title]);
    const {theme} = useTheme();
    const PriceIcon = icons?.PriceIcon;
    const CircleCheckIcon = icons?.CircleCheckIcon;
    const ArrowIcon = icons?.ArrowIcon;


    return (
        <section className={`lg:p-16 p-8 ${theme==='dark'?'bg-dark-theme':'bg-light-theme'}`}>
            <header className='flex flex-col items-center gap-3'>
                <div className={`uppercase flex items-center gap-1 py-1 px-3  rounded-full text-[12px] ${theme === 'dark'?'bg-[#081D5B] text-[#75A2F0]':'bg-[#EBF2FD] text-primary-blue'}`}>
                    {PriceIcon && <PriceIcon className='scale-x-[-1]'/>}
                    {pageLabel}
                </div>
                <h2 className={`font-normal lg:text-[80px] text-[56px] flex flex-col items-center font-header ${theme === 'dark'?' text-white':'text-dark-theme'}`}><span><span className={`italic ${theme === 'dark'?' text-[#75A2F0]':'text-primary-blue'}`}>{firstWord}</span> {restOfFirstSentence}.</span><span>{secondSentence}.</span></h2>
                <p className={`lg:text-[20px] text-[16px] ${theme ==='dark'?'text-[#CBC9C2]':'text-medium-gray'} font-bold text-center`}>{subtitle}</p>
            </header>
            <div>
                <div className='flex gap-4 justify-center pt-6 text-[14px]'>
                    <span className={`${theme ==='dark'?'text-white':'text-dark-theme'}`}>Monthly</span>
                    <Switch
                    checked={isAnnual}
                    onChange={(checked)=>{setIsAnnual(checked)}}
                    />
                    <span className={`${theme ==='dark'?'text-white':'text-dark-theme'}`}>Annually</span>
                    <div className={`uppercase text-straight-green ${theme === 'dark'? 'bg-[#052E1F] text-white': 'text-straight-green bg-[#EDFAF3]'} font-normal text-[12px] px-3 py-1 rounded-full`}>
                        save 30%
                    </div>
                </div>
                <ul className='py-[61.5px] flex justify-center items-center flex-wrap gap-8'>
                    {paymentOptions.map((paymentOption) => {
                        const rawPrice = isAnnual
                        ? (paymentOption.monthPayment * 12 * (1 - (paymentOption.annualDiscount || 0)))/12
                        : paymentOption.monthPayment;

                        const formattedPrice = typeof paymentOption.monthPayment === 'number' 
                        ? `${rawPrice.toFixed(0)}`
                        : paymentOption.monthPayment;
                        return(
                            <li key={paymentOption.id}>
                                <article className={`relative p-8 rounded-xl flex flex-col gap-2 ${theme === 'dark'?'bg-linear-to-br from-[#000000] to-[#331103] text-[#CBC9C2]':'bg-white text-medium-gray'} shadow-xl ${paymentOption.badge && 'border-[3px] border-primary-blue'}`}>
                                    {paymentOption.badge && <div className='bg-[#F4A016] py-2 px-3 rounded-full text-[14px] uppercase text-dark-theme absolute left-1/2 -top-5 transform -translate-x-1/2'>{paymentOption.badge}</div>}
                                    <h3 className='uppercase text-[12px]'>{paymentOption.title}</h3>
                                    {typeof paymentOption.monthPayment == 'number'? <p className='text-[16px] '><span className={`${theme==='dark'?'text-white':'text-dark-theme'} font-bold text-[28px] font-header`}>${formattedPrice}</span>/month</p>:<p className={`${theme==='dark'?'text-white':'text-dark-theme'} font-bold text-[28px] font-header capitalize`}>{formattedPrice}</p>}

                                    <p className='text-[12px]'>{paymentOption.subtitle}</p>
                                    <ul className='flex flex-col gap-4 pb-6'>
                                        {paymentOption.privileges?.map((privilege,index)=>{
                                            return(<li key={privilege}><p className={`flex items-center gap-3.5 text-[12px] pb-2 border-b ${theme === 'dark'?'border-b-gray-600':'border-b-gray-300'}`}>{CircleCheckIcon && <CircleCheckIcon className='text-straight-green bg-green-200 rounded-full'/>} {privilege}</p></li>);
                                        })}
                                    </ul>
                                    <button className={`flex items-center justify-center gap-2 text-[12px] font-medium min-w-10 w-full h-10 capitalize border border-gray-200 rounded-lg cursor-pointer transition-transform duration-100 ease-in-out ${paymentOption.badge && 'text-white bg-primary-blue'} hover:scale-110 hover:bg-gray-800 hover:text-white active:scale-95`}>{paymentOption.nextAction}<ArrowIcon className='text-sm'/></button>
                                </article>
                            </li>
                        );
                    })}
                </ul>

            </div>
        </section>
    );
}