import {
    TestimonialsBadge,
    TestimonialsTitle,
    TestimonialsSubtitle,
    TestimonialsList,
    FeaturedTestimonial as FeaturedTestimonialData,
} from '../../data/testimonialsData.js'

import TestimonialsHeader from './TestimonialsHeader.jsx';
import TestimonialCard from './TestimonialCard.jsx';
import FeaturedTestimonial from './FeaturedTestimonial.jsx';
import { useTheme } from '../../context/ThemeContext.jsx';

export default function TestimonialsSection() {
    const { theme } = useTheme();
    const topRow = TestimonialsList.slice(0, 3);
    const bottomRow = TestimonialsList.slice(3, 6);
    const allMobileCards = [...topRow, { ...FeaturedTestimonialData, id: 'featured-mobile' }, ...bottomRow];
    return (
        <section
            className={`py-16 px-16 flex flex-col items-center gap-14 ${theme === 'dark' ? 'bg-dark-theme text-semi-white' : 'bg-light-theme text-dark-theme'
                } max-lg:py-10 max-lg:px-6 max-lg:gap-8`}
        >
            <TestimonialsHeader
                theme={theme}
                badge={TestimonialsBadge}
                title={TestimonialsTitle}
                subtitle={TestimonialsSubtitle}
            />
            <ul className='grid grid-cols-3 gap-6 w-full max-lg:hidden'>
                {topRow.map((t) => (
                    <li key={t.id}>
                        <TestimonialCard theme={theme} {...t} />
                    </li>
                ))}
            </ul>

            <div className='max-lg:hidden'>
                <FeaturedTestimonial theme={theme} {...FeaturedTestimonialData} />
            </div>

            <ul className='grid grid-cols-3 gap-6 w-full max-lg:hidden'>
                {bottomRow.map((t) => (
                    <li key={t.id}>
                        <TestimonialCard theme={theme} {...t} />
                    </li>
                ))}
            </ul>

            <ul className='hidden max-lg:flex max-lg:w-full max-lg:overflow-x-auto max-lg:snap-x max-lg:snap-mandatory max-lg:no-scrollbar max-lg:-mx-6 max-lg:px-6 max-lg:pb-2 max-lg:gap-6'>
                {allMobileCards.map((t) => (
                    <li key={t.id} className='max-lg:w-[82%] max-lg:shrink-0 max-lg:snap-center'>
                        <TestimonialCard theme={theme} {...t} />
                    </li>
                ))}
            </ul>
        </section>
    
    );
}