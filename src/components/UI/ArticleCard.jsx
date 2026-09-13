import { useTheme } from "../../context/ThemeContext";

export default function ArticleCard({
  article,
  isDark: propIsDark,
  className = "",
}) {
  const { theme } = useTheme();
  const isDark = propIsDark !== undefined ? propIsDark : theme === "dark";

  const imageSrc = article?.image || article?.coverImage;
  const authorName =
    typeof article?.author === "object"
      ? article.author?.name
      : article?.author;
  const authorImage =
    typeof article?.author === "object" ? article.author?.image : null;
  const authorInitials = authorName
    ? authorName
        .split(" ")
        .map((n) => n[0])
        .join("")
    : "";

  return (
    <article
      className={`p-8 flex flex-col gap-8 border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${
        isDark
          ? "bg-[#1C1B18] border-neutral-800"
          : "bg-[#FCFCFD] border-[#E4E3DF]"
      } ${className}`}
    >
      <div className="w-full aspect-[16/10] rounded-xl overflow-hidden shrink-0">
        <img
          src={imageSrc}
          alt={article?.title || ""}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="flex flex-col flex-1 justify-between space-y-4">
        <div className="space-y-2">
          {article?.tag && (
            <span
              className={`font-sans text-[12px] font-normal tracking-wider uppercase ${
                isDark ? "text-blue-400" : "text-[#1A56DB]"
              }`}
            >
              {article.tag}
            </span>
          )}
          <h3
            className={`font-header text-[20px] font-bold leading-snug ${
              isDark ? "text-white" : "text-[#131210]"
            }`}
          >
            {article?.title}
          </h3>
          {article?.description && (
            <p
              className={`font-sans text-[14px] font-normal leading-relaxed line-clamp-3 ${
                isDark ? "text-gray-300" : "text-[#514F4A]"
              }`}
            >
              {article.description}
            </p>
          )}
        </div>

        <div className="flex items-center space-x-3 pt-2">
          {authorImage ? (
            <img
              src={authorImage}
              alt={authorName || ""}
              className="w-8 h-8 rounded-full object-cover shrink-0"
            />
          ) : (
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-sans text-[12px] font-bold shrink-0 ${
                isDark
                  ? "bg-blue-900/50 text-blue-300"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {authorInitials}
            </div>
          )}
          <div>
            {authorName && (
              <p
                className={`font-sans text-[14px] font-bold ${
                  isDark ? "text-gray-200" : "text-[#131210]"
                }`}
              >
                {authorName}
              </p>
            )}
            {(article?.readTime || article?.date) && (
              <p
                className={`font-sans text-[12px] ${
                  isDark ? "text-gray-400" : "text-[#78766F]"
                }`}
              >
                {article?.readTime}
                {article?.readTime && article?.date ? " • " : ""}
                {article?.date}
              </p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
