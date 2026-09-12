export default function FeaturedArticle({ article, isDark }) {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center w-full">
      <div className={`w-full lg:col-span-7 overflow-hidden rounded-2xl shadow-xs aspect-[16/10] max-h-[440px] md:max-h-[400px] lg:max-h-[460px] ${isDark ? 'bg-[#1C1B18]' : 'bg-gray-100'}`}>
        <img
          src={article.coverImage}
          alt={article.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="w-full lg:col-span-5 flex flex-col justify-center gap-3 sm:gap-4">
        <span className={`text-xs sm:text-sm font-sans font-bold tracking-[0.18em] uppercase ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
          {article.tag}
        </span>
        <h2 className={`font-header italic text-2xl sm:text-3xl lg:text-[2.5rem] xl:text-[2.75rem] font-semibold leading-snug tracking-tight ${isDark ? 'text-[#FCFCFD]' : 'text-[#131210]'}`}>
          {article.title}
        </h2>
        <p className={`font-sans text-sm sm:text-base font-medium leading-relaxed ${isDark ? 'text-[#E3E2E4]' : 'text-[#3F3E3A]'}`}>
          {article.description}
        </p>
        <div className="flex items-center gap-3 pt-1">
          <img
            src={article.author.image}
            alt={article.author.name}
            loading="lazy"
            className={`w-10 h-10 rounded-full object-cover border shadow-xs ${isDark ? 'border-neutral-700' : 'border-neutral-200'}`}
          />
          <div className="flex flex-col text-sm font-sans">
            <span className={`font-semibold ${isDark ? 'text-[#FCFCFD]' : 'text-[#131210]'}`}>
              {article.author.name}
            </span>
            <span className={`text-xs ${isDark ? 'text-[#78766F]' : 'text-[#78766F]'}`}>
              {article.readTime} • {article.date}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}