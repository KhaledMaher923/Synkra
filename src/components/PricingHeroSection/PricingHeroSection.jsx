import {useState,useMemo} from 'react';
import {Switch} from './Switch';

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
    const PriceIcon = icons?.PriceIcon;
    const CircleCheckIcon = icons?.CircleCheckIcon;
    const ArrowIcon = icons?.ArrowIcon;


    return (
        <section className='p-16 bg-light-theme'>
            <header className='flex flex-col items-center gap-3'>
                <div className='uppercase flex items-center gap-1 py-1 px-3 text-primary-blue bg-[#EBF2FD] rounded-full text-[12px]'>
                    {PriceIcon && <PriceIcon className='scale-x-[-1]'/>}
                    {pageLabel}
                </div>
                <h2 className='font-normal text-[80px] flex flex-col items-center font-header'><span><span className='text-primary-blue italic'>{firstWord}</span> {restOfFirstSentence}.</span><span>{secondSentence}.</span></h2>
                <p className='text-[20px] text-medium-gray font-bold text-center'>{subtitle}</p>
            </header>
            <div>
                <div className='flex gap-4 justify-center pt-6 text-[14px]'>
                    <span>Monthly</span>
                    <Switch
                    checked={isAnnual}
                    onChange={(checked)=>{setIsAnnual(checked)}}
                    />
                    <span>Annually</span>
                    <div className='uppercase text-straight-green bg-[#EDFAF3] font-normal text-[12px] px-3 py-1 rounded-full'>
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
                                <article className={`relative p-8 rounded-xl flex flex-col gap-2 bg-white shadow-xl ${paymentOption.badge && 'border-[3px] border-primary-blue'}`}>
                                    {paymentOption.badge && <div className='bg-[#F4A016] py-2 px-3 rounded-full uppercase absolute left-1/2 -top-5 transform -translate-x-1/2'>{paymentOption.badge}</div>}
                                    <h3 className='text-medium-gray uppercase text-[12px]'>{paymentOption.title}</h3>
                                    {typeof paymentOption.monthPayment == 'number'? <p className='text-[16px] text-medium-gray'><span className='text-dark-theme font-bold text-[28px] font-header'>${formattedPrice}</span>/month</p>:<p className='text-dark-theme font-bold text-[28px] font-header capitalize'>{formattedPrice}</p>}

                                    <p className='text-medium-gray text-[12px]'>{paymentOption.subtitle}</p>
                                    <ul className='flex flex-col gap-4 pb-6'>
                                        {paymentOption.privileges?.map((privilege,index)=>{
                                            return(<li key={privilege}><p className='flex items-center gap-3.5 text-medium-gray text-[12px] pb-2 border-b border-b-gray-300'>{CircleCheckIcon && <CircleCheckIcon className='text-straight-green bg-green-200 rounded-full'/>} {privilege}</p></li>);
                                        })}
                                    </ul>
                                    <button className={`flex items-center justify-center gap-2 text-[12px] font-medium min-w-10 w-72 h-10 capitalize border border-gray-200 rounded-lg cursor-pointer transition-transform duration-100 ease-in-out ${paymentOption.badge && 'text-white bg-primary-blue'} hover:scale-110 hover:bg-gray-800 hover:text-white active:scale-95`}>{paymentOption.nextAction}<ArrowIcon className='text-sm'/></button>
                                </article>
                            </li>
                        );
                    })}
                </ul>

            </div>
        </section>
    );
}