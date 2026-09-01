import { FaQuoteRight } from 'react-icons/fa';

export default function FeaturedTestimonial({ theme, quote, name, role, teamSize, avatar }) {
  return (
    <div className='relative flex items-start justify-between gap-8 w-full max-lg:flex-col max-lg:gap-6'>
      <p className='DM-sans font-medium text-[30px] leading-snug max-w-230 max-lg:text-[22px]'>
        {quote}
      </p>

      <div className='flex flex-col items-start gap-2 shrink-0 max-lg:flex-row max-lg:items-center'>
        <img
          src={avatar}
          alt={name}
          className='w-14 h-14 rounded-full object-cover border-2 border-primary-blue'
          loading='lazy'
        />
        <div className='flex flex-col'>
          <span className='font-sans text-[15px] font-bold'>{name}</span>
          <span
            className={`font-sans text-[12px] uppercase tracking-wide ${
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
        <span className='flex items-center justify-center w-9 h-9 rounded-full bg-primary-blue text-semi-white text-[13px] mt-1'>
          <FaQuoteRight />
        </span>
      </div>
    </div>
  );
}
