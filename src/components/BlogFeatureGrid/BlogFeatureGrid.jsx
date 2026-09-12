import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import BlogHeader from "./BlogHeader";
import CategoryFilter from "./CategoryFilter";
import FeaturedArticle from "./FeaturedArticle";
import { categoriesData, heroArticleData } from "../../data/blogFeatureGridData";

export default function BlogFeatureGrid({ isDark: propIsDark }) {
  const { theme } = useTheme();
  const isDark = propIsDark !== undefined ? propIsDark : theme === "dark";
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className={`w-full py-10 md:py-16 px-6 md:px-16 transition-colors duration-300 ${isDark ? 'bg-dark-theme text-semi-white' : 'bg-light-theme text-dark-theme'}`}>
      <div className="w-full flex flex-col gap-6 md:gap-10">
        <BlogHeader isDark={isDark} />
        <CategoryFilter categories={categoriesData} activeCategory={activeCategory} onCategoryChange={setActiveCategory} isDark={isDark} />
        <FeaturedArticle article={heroArticleData} isDark={isDark} />
      </div>
    </section>
  );
}

