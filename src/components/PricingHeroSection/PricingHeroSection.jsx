import {useState,useMemo} from 'react';
import {Switch} from './Switch';

function splitTitle(title){
    if(!title) return ['',''];
    const words = title.split(' ');
    const firstWord = words.shift();
    const restWords = words.join(' ');
    return[firstWord, restWords];
}

export function PricingHeroSection({title='',subtitle='',pageLabel='',paymentOptions=[], icons={}}){
    const [isAnnual, setIsAnnual] = useState(false);
    const [firstWord, restWords] = useMemo(() => splitTitle(title),[title]);
    const PriceIcon = icons?.PriceIcon;
    const CircleCheckIcon = icons?.CircleCheckIcon;


    return (
        <section>
            <header>
                <div>
                    {PriceIcon && <PriceIcon />}
                    {pageLabel}
                </div>
                <h2><span>{firstWord}</span> {restWords}</h2>
                <p>{subtitle}</p>
            </header>
            <div>
                <div>
                    <span>Monthly</span>
                    <Switch
                    checked={isAnnual}
                    onChange={(checked)=>{setIsAnnual(checked)}}
                    />
                    <span>Annually</span>
                    <div>
                        save 30%
                    </div>
                </div>
                <ul>
                    {paymentOptions.map((paymentOption) => {
                        const rawPrice = isAnnual
                        ? paymentOption.monthPayment * 12 * (1 - (paymentOption.annualDiscount || 0))
                        : paymentOption.monthPayment;

                        const formattedPrice = typeof paymentOption.monthPayment === 'number' 
                        ? `$${rawPrice.toFixed(0)}/${isAnnual ? 'year' : 'month'}`
                        : paymentOption.monthPayment;
                        return(
                            <li key={paymentOption.id}>
                                <article>
                                    {paymentOption.badge && <div>{paymentOption.badge}</div>}
                                    <h3>{paymentOption.title}</h3>
                                    <p>{formattedPrice}</p>
                                    <p>{paymentOption.subtitle}</p>
                                    <ul>
                                        {paymentOption.privileges?.map((privilege,index)=>{
                                            return(<li key={privilege}><p>{CircleCheckIcon && <CircleCheckIcon/>} {privilege}</p></li>);
                                        })}
                                    </ul>
                                </article>
                            </li>
                        );
                    })}
                </ul>

            </div>
        </section>
    );
}