export default function FAQHeader({theme,title,subtitle}){
    return(
        <header className='flex flex-col items-center max-w-140 gap-2'>
            <h2 className='font-header text-[36px] text-center font-medium max-lg:text-[28px]'>{title}</h2>
            <p className={`font-sans text-[16px] ${theme ==='dark'?'text-[#CBC9C2]':'text-medium-gray'}`}>{subtitle}</p>
        </header>
    );
}