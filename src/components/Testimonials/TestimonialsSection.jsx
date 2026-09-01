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
    return (
        <section
            className={`py-16 px-16 flex flex-col items-center gap-14 ${theme === 'dark' ? 'bg-dark-theme text-semi-white' : 'bg-light-theme text-dark-theme'
                } max-lg:py-6 max-lg:px-6`}
        >
            <TestimonialsHeader
                theme={theme}
                badge={TestimonialsBadge}
                title={TestimonialsTitle}
                subtitle={TestimonialsSubtitle}
            />
            <ul className='grid grid-cols-3 gap-6 w-full max-lg:grid-cols-1'>
                {topRow.map((t) => (
                    <li key={t.id}>
                        <TestimonialCard theme={theme} {...t} />
                    </li>
                ))}
            </ul>

            <FeaturedTestimonial theme={theme} {...FeaturedTestimonialData} />

            <ul className='grid grid-cols-3 gap-6 w-full max-lg:grid-cols-1'>
                {bottomRow.map((t) => (
                    <li key={t.id}>
                        <TestimonialCard theme={theme} {...t} />
                    </li>
                ))}
            </ul>


        </section>
    


    );
}