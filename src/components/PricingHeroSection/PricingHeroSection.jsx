import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { PricingHeroSectionHeader } from './PricingHeroSectionHeader';
import { PricingOptionCard } from './PricingOptionCard';
import { AnnualMonthToggler } from './AnnualMonthToggler';
import { useAuthApi } from '../../context/AuthApiContext';
import { useCookies } from "react-cookie";


export function PricingHeroSection({title='',subtitle='',pageLabel='',paymentOptions=[], icons={}}){
    const [isAnnual, setIsAnnual] = useState(false);
    const [requestState, setRequestState] = useState({ status: 'idle', planId: null, message: '' });
    const {theme} = useTheme();
    const {refreshApiToken } = useAuthApi();
    const navigate = useNavigate();
    const PriceIcon = icons?.PriceIcon;
    const CircleCheckIcon = icons?.CircleCheckIcon;
    const ArrowIcon = icons?.ArrowIcon;
    const [cookies] = useCookies([
    "email",
    "access",
    "refresh",

  ]);
    const handlePlanSelect = async (paymentOption) => {
        if (paymentOption.title.toLowerCase() === 'enterprise') {
            toast.info('Opening the contact form.');
            navigate('/ContactUs');
            return;
        }

        // if (!session?.user || !apiAccessToken) {
        //     toast.error('Sign in to connect your subscription account.', {
        //         action: {
        //             label: 'Sign in',
        //             onClick: () => navigate('/signin'),
        //         },
        //     });
        //     return;
        // }
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

        const toastId = `subscription-${paymentOption.id}`;
        setRequestState({ status: 'loading', planId: paymentOption.id });
        toast.loading(`Submitting your ${planName} request...`, { id: toastId });

        try {
            const submitRequest = (accessToken) => fetch(
                `${import.meta.env.VITE_API_BASE_URL || 'https://gig-program-apis-production.up.railway.app'}/api/subscriptions/`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                    },
                    body: JSON.stringify({ plan_name: planName }),
                }
            );

            let response = await submitRequest(cookies.access);
            if (response.status === 401) {
                response = await submitRequest(await refreshApiToken());
            }

            const responseBody = await response.json().catch(() => null);
            if (!response.ok) {
                throw new Error(
                    responseBody?.detail ||
                    responseBody?.plan_name?.[0] ||
                    'Unable to submit your subscription request. Please try again.'
                );
            }

            toast.success(`Your ${planName} subscription request was submitted.`, { id: toastId });
        } catch (error) {
            toast.error(error.message || 'Unable to submit your subscription request. Please try again.', { id: toastId });
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