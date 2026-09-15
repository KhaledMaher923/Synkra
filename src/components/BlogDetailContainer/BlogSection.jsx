import { useRef } from "react";
import ArticleCard from "../UI/ArticleCard.jsx";
import NewsletterCard from "../MainEditorialGrid/NewsletterCard.jsx";
import BlogSectionHeader from "./BlogSectionHeader.jsx";
import { mainEditorialGridData, newsletterData } from "../../data/mainEditorialGridData.js";
import { useTheme } from "../../context/ThemeContext.jsx";

function BlogSection() {
  const scrollRef = useRef(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const scroll = (direction) => {
    scrollRef.current.scrollBy({
      left: direction === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  return (
    <section
      className={`px-6 md:px-12 py-16 ${
        isDark ? "bg-[#131210]" : "bg-[#F5F7F9]"
      }`}
    >
      <BlogSectionHeader
        onScrollLeft={() => scroll("left")}
        onScrollRight={() => scroll("right")}
      />

      <div
        ref={scrollRef}
        className="flex flex-col md:flex-row gap-6 md:overflow-x-auto scroll-smooth mt-8 pb-4 md:pl-8 no-scrollbar"
      >
        {mainEditorialGridData.map((item) => (
          <div
            key={item.id}
            className="w-full md:w-[368px] h-auto md:h-[522px] flex-shrink-0"
          >
            <ArticleCard article={item} />
          </div>
        ))}

        <div className="w-full md:w-[368px] h-auto md:h-[522px] flex-shrink-0">
          <NewsletterCard data={newsletterData} />
        </div>
      </div>
    </section>
  );
}

export default BlogSection;