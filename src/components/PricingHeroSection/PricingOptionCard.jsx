import { useTheme } from "../../context/ThemeContext";

export function PricingOptionCard({isAnnual,badge=null,title,subtitle,monthPayment,annualDiscount,privileges,nextAction,ArrowIcon,CircleCheckIcon,onSelect,isLoading=false,disabled=false}){
    const {theme} = useTheme();

    const rawPrice = isAnnual
    ? (monthPayment*(1 - (annualDiscount || 0)))
    : monthPayment;

    const formattedPrice = typeof monthPayment === 'number' 
    ? `${rawPrice.toFixed(0)}`
    : monthPayment;
    return(
        <article className={`relative p-8 rounded-xl flex flex-col gap-2 ${theme === 'dark'?'bg-linear-to-br from-[#000000] to-[#331103] text-[#CBC9C2]':'bg-white text-medium-gray'} shadow-xl ${badge && 'border-[3px] border-primary-blue'}`}>
            {badge && <div className='bg-[#F4A016] py-2 px-3 rounded-full text-[14px] uppercase text-dark-theme absolute left-1/2 -top-5 transform -translate-x-1/2'>{badge}</div>}
            <h3 className='uppercase text-[12px]'>{title}</h3>
            {typeof monthPayment == 'number'? <p className='text-[16px] '><span className={`${theme==='dark'?'text-white':'text-dark-theme'} font-bold text-[28px] font-header`}>${formattedPrice}</span>/month</p>:<p className={`${theme==='dark'?'text-white':'text-dark-theme'} font-bold text-[28px] font-header capitalize`}>{formattedPrice}</p>}

            <p className='text-[12px]'>{subtitle}</p>
            <ul className='flex flex-col gap-4 pb-6'>
                {privileges?.map((privilege)=>{
                    return(<li key={privilege}><p className={`flex items-center gap-3.5 text-[12px] pb-2 border-b ${theme === 'dark'?'border-b-gray-600':'border-b-gray-300'}`}>{CircleCheckIcon && <CircleCheckIcon className='text-straight-green bg-green-200 rounded-full'/>} {privilege}</p></li>);
                })}
            </ul>
            <button
                type="button"
                onClick={onSelect}
                disabled={disabled}
                className={`flex items-center justify-center gap-2 text-[12px] font-medium min-w-10 w-full h-10 capitalize border border-gray-200 rounded-lg cursor-pointer transition-transform duration-100 ease-in-out ${badge && 'text-white bg-primary-blue'} hover:scale-110 hover:bg-gray-800 hover:text-white active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100`}
            >
                {isLoading ? 'Submitting...' : nextAction}
                {!isLoading && ArrowIcon && <ArrowIcon className='text-sm'/>}
            </button>
        </article>
    );
}