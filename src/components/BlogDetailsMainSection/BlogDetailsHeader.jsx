import { useTheme } from "../../context/ThemeContext";
import { blogDetailsMeta } from "../../data/blogDetailsData.js";

export default function BlogDetailsHeader() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
        <header className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-col gap-4">
                <span
                    className={`font-sans text-[12px] font-semibold tracking-wider uppercase ${
                    isDark ? "text-blue-400" : "text-[#1A56DB]"
                    }`}
                >
                    {blogDetailsMeta.tag}
                </span>

                <h1
                className={`font-header italic text-[38px] sm:text-[48px] font-medium leading-tight max-w-140 ${
                    isDark ? "text-white" : "text-[#131210]"
                }`}
                >
                {blogDetailsMeta.title}
                </h1>
            </div>
                <div className="flex items-center gap-3 shrink-0">
                    <img
                        src={blogDetailsMeta.authorImage}
                        alt={blogDetailsMeta.author}
                        className="w-11 h-11 rounded-full object-cover"
                    />
                    <div>
                        <p className={`font-sans text-[14px] font-bold ${isDark ? "text-gray-200" : "text-[#131210]"}`}>
                            {blogDetailsMeta.author}
                        </p>
                        <p className={`font-sans text-[12px] ${isDark ? "text-gray-400" : "text-[#78766F]"}`}>
                        {blogDetailsMeta.readTime} • {blogDetailsMeta.date}
                        </p>
                    </div>
                </div>
            </div> 
        </header>
    );
}