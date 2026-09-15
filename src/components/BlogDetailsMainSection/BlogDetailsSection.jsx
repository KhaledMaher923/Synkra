import { useTheme } from "../../context/ThemeContext";
import { blogDetailsMeta } from "../../data/blogDetailsData.js";
import BlogDetailsHeader from "./BlogDetailsHeader.jsx";
import BlogDetailsContent from "./BlogDetailsContent.jsx";
import BlogDetailsCTA from "./BlogDetailsCTA.jsx";
import BlogDetailsSidebar from "./BlogDetailsSidebar.jsx";

export default function BlogDetailsSection() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
        <section className={`px-8 py-12 lg:px-8 ${isDark ? "bg-dark-theme" : "bg-light-theme"}`}>
            <div className="flex flex-col lg:flex-row gap-10 max-w-300 mx-auto">
                <article className="flex flex-col gap-8 flex-1 min-w-0">
                    <BlogDetailsHeader />

                    <img
                        src= {blogDetailsMeta.heroImage}
                        alt={blogDetailsMeta.title}
                        className="w-full aspect-[16/9] object-cover rounded-2xl"
                    />

                    <BlogDetailsContent />
                    <BlogDetailsCTA />
                </article>

                <BlogDetailsSidebar/>
            </div>

        </section>
    );
}

