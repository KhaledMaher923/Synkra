export default function EditorialCard({ article, isFeatured = false, isDark = false }) {
  if (isFeatured) {
    return (
      <article className={`lg:col-span-2 flex flex-col lg:flex-row border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow ${
        isDark ? 'bg-[#1C1B18] border-neutral-800' : 'bg-[#FCFCFD] border-[#E4E3DF]'
      }`}>
        <div className="w-full lg:w-1/2 h-64 lg:h-auto min-h-[300px] max-h-[380px] overflow-hidden shrink-0">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-6 lg:p-8 lg:w-1/2 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <span className={`font-sans text-[12px] font-normal tracking-wider uppercase ${
              isDark ? 'text-blue-400' : 'text-[#1A56DB]'
            }`}>
              {article.tag}
            </span>
            <h3 className={`font-header text-[26px] lg:text-[28px] font-bold leading-tight ${
              isDark ? 'text-white' : 'text-[#131210]'
            }`}>
              {article.title}
            </h3>
            <p className={`font-sans text-[15px] font-normal leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-[#514F4A]'
            }`}>
              {article.description}
            </p>
          </div>

          <div className="flex items-center space-x-3 pt-4 border-t border-transparent">
            <div className={`w-9 h-9 rounded-full flex items-center justify-center font-sans text-[13px] font-bold shrink-0 ${
              isDark ? 'bg-emerald-900/50 text-emerald-300' : 'bg-emerald-100 text-emerald-700'
            }`}>
              {article.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className={`font-sans text-[14px] font-bold ${
                isDark ? 'text-gray-200' : 'text-[#131210]'
              }`}>
                {article.author}
              </p>
              <p className={`font-sans text-[12px] ${
                isDark ? 'text-gray-400' : 'text-[#78766F]'
              }`}>
                {article.readTime} • {article.date}
              </p>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className={`flex flex-col border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow ${
      isDark ? 'bg-[#1C1B18] border-neutral-800' : 'bg-[#FCFCFD] border-[#E4E3DF]'
    }`}>
      <div className="h-48 w-full overflow-hidden shrink-0">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
        <div className="space-y-2">
          <span className={`font-sans text-[12px] font-normal tracking-wider uppercase ${
            isDark ? 'text-blue-400' : 'text-[#1A56DB]'
          }`}>
            {article.tag}
          </span>
          <h3 className={`font-header text-[20px] font-bold leading-snug ${
            isDark ? 'text-white' : 'text-[#131210]'
          }`}>
            {article.title}
          </h3>
          <p className={`font-sans text-[14px] font-normal leading-relaxed line-clamp-3 ${
            isDark ? 'text-gray-300' : 'text-[#514F4A]'
          }`}>
            {article.description}
          </p>
        </div>

        <div className="flex items-center space-x-3 pt-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-sans text-[12px] font-bold shrink-0 ${
            isDark ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-700'
          }`}>
            {article.author.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <p className={`font-sans text-[14px] font-bold ${
              isDark ? 'text-gray-200' : 'text-[#131210]'
            }`}>
              {article.author}
            </p>
            <p className={`font-sans text-[12px] ${
              isDark ? 'text-gray-400' : 'text-[#78766F]'
            }`}>
              {article.readTime} • {article.date}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}