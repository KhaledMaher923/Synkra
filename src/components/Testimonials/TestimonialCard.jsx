export default function TestimonialCard({ theme, quote, name, role, company, image }) {
  return (
    <article
      className={`flex flex-col justify-between gap-8 p-8 rounded-2xl border h-full ${
        theme === 'dark'
          ? 'bg-[#1A1917] border-gray-700'
          : 'bg-semi-white border-gray-200'
      }`}
    >
      <p
        className={`DM-sans  text-[16px] leading-relaxed ${
          theme === 'dark' ? 'text-[#E4E2DC]' : 'text-dark-theme'
        }`}
      >
        {quote}
      </p>
      <div className='flex items-center gap-3'>
        <img
          src={image}
          alt={name}
          className='w-11 h-11 rounded-full object-cover'
          loading='lazy'
        />
        <div className='flex flex-col'>
          <span className='font-sans text-[15px] font-semibold'>{name}</span>
          <span
            className={`font-sans text-[12px] tracking-wide uppercase ${
              theme === 'dark' ? 'text-[#9C9A94]' : 'text-medium-gray'
            }`}
          >
            {role}, {company}
          </span>
        </div>
      </div>
    </article>
  );
}
