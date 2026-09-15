import {useState} from 'react';
import { useTheme } from '../../context/ThemeContext';
import { PricingHeroSectionHeader } from './PricingHeroSectionHeader';
import { PricingOptionCard } from './PricingOptionCard';
import { AnnualMonthToggler } from './AnnualMonthToggler';

export function PricingHeroSection({title='',subtitle='',pageLabel='',paymentOptions=[], icons={}}){
    const [isAnnual, setIsAnnual] = useState(false);
    const {theme} = useTheme();
    const PriceIcon = icons?.PriceIcon;
    const CircleCheckIcon = icons?.CircleCheckIcon;
    const ArrowIcon = icons?.ArrowIcon;


    return (
        <section className={`lg:p-16 p-8 ${theme==='dark'?'bg-dark-theme':'bg-light-theme'}`}>
            <PricingHeroSectionHeader title={title} subtitle={subtitle} pageLabel={pageLabel} PriceIcon={PriceIcon}/>

            <div>
                <AnnualMonthToggler isAnnual={isAnnual} setIsAnnual={setIsAnnual}/>
                <ul className='py-[61.5px] flex justify-center items-center flex-wrap gap-8'>
                    {paymentOptions.map((paymentOption) => {
                        return(
                            <li key={paymentOption.id}>
                                <PricingOptionCard 
                                isAnnual={isAnnual}
                                ArrowIcon={ArrowIcon} 
                                CircleCheckIcon={CircleCheckIcon} 
                                {...paymentOption}/>
                            </li>
                        );
                    })}
                </ul>

            </div>
        </section>
    );
}