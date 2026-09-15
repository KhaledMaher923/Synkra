export default function BlogHeader({ isDark }) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 sm:gap-6 pb-2 sm:pb-4">
      <div className="flex flex-col gap-3 sm:gap-4">
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-sans text-xs font-semibold tracking-wider uppercase border w-fit transition-colors duration-200 ${isDark ? 'bg-[#081D5B] text-[#75A2F0] border-[#1D4ED8]/40' : 'bg-[#EBF2FD] text-[#1A56DB] border-[#D0E2FB]'}`}>
          <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
            <path d="M6 6h10" />
            <path d="M6 10h10" />
          </svg>
          <span>FROM THE SYNKRA BLOG</span>
        </div>
        <div>
          <h1 className={`font-header text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight ${isDark ? 'text-[#FCFCFD]' : 'text-[#131210]'}`}>
            The Synkra Blog
          </h1>
          <div className="w-12 sm:w-16 h-1 bg-blue-600 mt-2 sm:mt-3 rounded-full" />
        </div>
      </div>
      <p className={`max-w-md font-sans text-sm sm:text-base font-medium leading-relaxed pb-1 ${isDark ? 'text-[#F4F4F5]' : 'text-[#3F3E3A]'}`}>
        Ops strategy, product thinking, and honest stories about how SaaS teams actually run.
      </p>
    </div>
  );
}