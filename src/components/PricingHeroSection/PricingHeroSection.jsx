import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useTheme } from '../../context/ThemeContext';
import { PricingHeroSectionHeader } from './PricingHeroSectionHeader';
import { PricingOptionCard } from './PricingOptionCard';
import { AnnualMonthToggler } from './AnnualMonthToggler';
import { useAuthApi } from '../../context/AuthApiContext';
import { useCookies } from "react-cookie";


export function PricingHeroSection({title='',subtitle='',pageLabel='',paymentOptions=[], icons={}}){
    const [isAnnual, setIsAnnual] = useState(false);
    const [requestState, setRequestState] = useState({ status: 'idle', planId: null, message: '' });
    const {theme} = useTheme();
    const {upgradeSubscription} = useAuthApi();
    const navigate = useNavigate();
    const PriceIcon = icons?.PriceIcon;
    const CircleCheckIcon = icons?.CircleCheckIcon;
    const ArrowIcon = icons?.ArrowIcon;
    const [cookies] = useCookies(['email', 'access', 'refresh']);
    const handlePlanSelect = async (paymentOption) => {
        if (paymentOption.title.toLowerCase() === 'enterprise') {
            toast.info('Opening the contact form.');
            navigate('/ContactUs');
            return;
        }

        if (!cookies.access) {
            toast.error('Sign in to connect your subscription account.', {
                action: {
                    label: 'Sign in',
                    onClick: () => navigate('/signin'),
                },
            });
            return;
        }

        const billingPeriod = isAnnual ? 'Annual' : 'Monthly';
        const planTitle = paymentOption.title.charAt(0).toUpperCase() + paymentOption.title.slice(1);
        const planName = `${planTitle} ${billingPeriod}`;

        if (planName.toLowerCase().includes('starter')) {
            navigate('/profile');
            return;
        }

        const toastId = `subscription-${paymentOption.id}`;
        setRequestState({ status: 'loading', planId: paymentOption.id });
        toast.loading(`Submitting your ${planName} request...`, { id: toastId });

        try {
            await upgradeSubscription(planName);
            toast.success(`Your ${planName} subscription request was submitted.`, { id: toastId });
            navigate('/profile');
        } catch (error) {
            const errorMsg = error.response?.data?.detail || error.response?.data?.plan_name?.[0] || 'Unable to submit your subscription request. Please try again.';
            toast.error(errorMsg, { id: toastId });
        } finally {
            setRequestState({ status: 'idle', planId: null });
        }
    };

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
                                onSelect={() => handlePlanSelect(paymentOption)}
                                isLoading={requestState.status === 'loading' && requestState.planId === paymentOption.id}
                                disabled={requestState.status === 'loading'}
                                {...paymentOption}/>
                            </li>
                        );
                    })}
                </ul>

            </div>
        </section>
    );
}