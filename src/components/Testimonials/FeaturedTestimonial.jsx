import { FaQuoteRight } from 'react-icons/fa';

export default function FeaturedTestimonial({ theme, quote, name, role, teamSize, image }) {
  return (
    <article
        className={`relative flex items-start justify-between gap-8 w-full max-lg:flex-col max-lg:justify-start max-lg:gap-7 max-lg:p-9 max-lg:rounded-2xl max-lg:border-2 max-lg:border-primary-blue ${
          theme === 'dark' ? 'max-lg:bg-[#1A1917]' : 'max-lg:bg-semi-white'
        }`}
      >
        <span className='hidden max-lg:flex absolute top-6 right-6 items-center justify-center w-9 h-9 rounded-full bg-primary-blue text-semi-white text-[13px]'>
        <FaQuoteRight />
      </span>
        
          <p className='DM-sans font-medium text-[30px] leading-snug max-w-230 max-lg:text-[19px] max-lg:pr-10 max-lg:leading-relaxed'>
            {quote}
          </p>

        <div className='flex flex-col items-start gap-2 shrink-0 max-lg:w-full'>
          <div className='flex items-center gap-3'>
            <img
              src={image}
              alt={name}
              className='w-14 h-14 rounded-full object-cover border-2 border-primary-blue max-lg:w-12 max-lg:h-12'
              loading='lazy'
            />

            <div className='flex flex-col'>
            <span className='font-sans text-[15px] font-bold max-lg:text-[16px] max-lg:font-semibold'>
              {name}
            </span>
              
              <span
                className={`font-sans text-[12px] uppercase tracking-wide max-lg:normal-case max-lg:tracking-normal ${
                  theme === 'dark' ? 'text-[#9C9A94]' : 'text-medium-gray'
                }`}
              >
                {role}
              </span>
              <span
                className={`font-sans text-[12px] uppercase tracking-wide ${
                  theme === 'dark' ? 'text-[#9C9A94]' : 'text-medium-gray'
                }`}
              >
                {teamSize}
              </span>
            </div>
          </div>
          <span className='flex items-center justify-center w-9 h-9 rounded-full bg-primary-blue text-semi-white text-[13px] mt-1 max-lg:hidden'>
            <FaQuoteRight />
          </span>
        </div>
    </article >
      
  );
}

