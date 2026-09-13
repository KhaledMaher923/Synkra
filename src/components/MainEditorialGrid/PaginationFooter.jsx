export default function PaginationFooter({ data, isDark }) {
  const paginationData = data || {};

  return (
    <div className="flex justify-center sm:justify-end pt-4 text-xs">
      <div className="flex items-center space-x-3">
        <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>Page</span>
        
        <button 
          disabled={paginationData.currentPage === 1}
          className={`p-1.5 px-2.5 rounded border transition-colors ${
            paginationData.currentPage === 1 
              ? 'opacity-50 cursor-not-allowed' 
              : 'cursor-pointer'
          } ${
            isDark ? 'bg-neutral-800 border-neutral-700 text-gray-400 hover:bg-neutral-700' : 'bg-gray-100 border-gray-200 text-gray-400 hover:bg-gray-200'
          }`}
        >
          &lt;
        </button>

        <span className={`px-3 py-1.5 rounded font-semibold border ${
          isDark ? 'bg-neutral-800 border-neutral-700 text-gray-100' : 'bg-gray-100 border-gray-200 text-gray-900'
        }`}>
          {paginationData.currentPage}
        </span>

        <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>
          of {paginationData.totalPages} pages
        </span>

        <button className="p-1.5 px-2.5 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors cursor-pointer">
          &gt;
        </button>
      </div>
    </div>
  );
}