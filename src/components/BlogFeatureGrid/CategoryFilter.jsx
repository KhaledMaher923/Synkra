export default function CategoryFilter({ categories, activeCategory, onCategoryChange, isDark }) {
  return (
    <div className="w-full overflow-x-auto py-2 no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex items-center gap-2.5 min-w-max px-1 md:w-full md:justify-center">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              aria-label={`Filter by ${category}`}
              aria-pressed={isActive}
              onClick={() => onCategoryChange(category)}
              className={`px-3.5 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm rounded-lg font-sans transition-all duration-200 whitespace-nowrap cursor-pointer border ${
                isActive
                  ? 'bg-blue-600 text-white border-blue-600 font-medium shadow-xs'
                  : isDark
                  ? 'bg-[#1C1B18] text-neutral-stone border-neutral-800 hover:border-neutral-700 hover:text-white'
                  : 'bg-white text-medium-gray border-neutral-200 hover:border-neutral-300 hover:text-dark-theme'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}