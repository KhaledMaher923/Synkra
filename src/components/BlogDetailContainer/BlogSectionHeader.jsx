import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext.jsx";

function BlogSectionHeader({ onScrollLeft, onScrollRight }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className={`flex items-center justify-between mb-2 md:pl-8 ${isDark ? "text-white" : "text-black"}`}>
      <div>
        <h2 className="text-4xl font-serif font-medium leading-[130%]">More from Synkra</h2>
        <p className={`mt-1 font-sans-serif md:text-sm text-[18px] leading-[180%] pt-2 md:pb-4 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
          Experts in automation, dedicated to helping your business thrive.
        </p>
      </div>
      <div className="hidden md:flex gap-3 pr-8">
        <button onClick={onScrollLeft} className={`p-2 rounded-full border ${isDark ? "bg-[#2A2A2A] hover:bg-[#3A3A3A]" : "bg-[#E0E0E0] hover:bg-[#D0D0D0]"}`}>
          <ChevronLeft size={18} />
        </button>
        <button onClick={onScrollRight} className={`p-2 rounded-full border ${isDark ? "bg-[#2A2A2A] hover:bg-[#3A3A3A]" : "bg-[#E0E0E0] hover:bg-[#D0D0D0]"}`}>
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

export default BlogSectionHeader;