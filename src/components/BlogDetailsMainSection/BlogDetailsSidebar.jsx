import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { blogDetailsTOC } from "../../data/blogDetailsData.js";
import BlogDetailsNewsletterCard from "./BlogDetailsNewsletterCard.jsx";

export default function BlogDetailsSidebar() {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    const [activeId, setActiveId] = useState(blogDetailsTOC[0]?.id);

    useEffect(() => {
        const headingEls = blogDetailsTOC
            .map((item) => document.getElementById(item.id))
            .filter(Boolean);
    
        if (headingEls.length === 0) return undefined;
    
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-96px 0px -70% 0px", threshold: 0 }
        );
    
        headingEls.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const activeColor = isDark ? "text-single-orange" : "text-[#1A56DB]";
    const bulletColor = isDark ? "bg-single-orange" : "bg-[#1A56DB]";


    return (
        <aside className="hidden lg:flex lg:sticky lg:top-28 lg:self-start flex-col gap-6 w-80 shrink-0">
            <nav
                className={`rounded-2xl p-6 border ${
                    isDark ? "bg-[#1C1B18] border-[#2A2825]" : "bg-[#FCFCFD] border-[#E4E3DF]"
                }`}
            >
                <span
                    className={`font-sans text-[12px] font-semibold tracking-wider uppercase ${
                        isDark ? "text-gray-500" : "text-[#78766F]"
                    }`}
                >
                    In this article
                </span>

                <ul className="flex flex-col gap-3 mt-4">
                    {blogDetailsTOC.map((item) => {
                        const isActive = item.id === activeId;
                        return (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                className={`font-sans text-[14px] leading-snug flex items-start gap-2 transition-colors ${
                                    isActive
                                    ? `${activeColor} font-semibold italic`
                                    : isDark
                                    ? "text-gray-400 hover:text-white"
                                    : "text-[#514F4A] hover:text-[#131210]"
                                }`}
                                >
                                {isActive && (
                                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${bulletColor}`} />
                                )}
                                {item.label}
                            </a>
                        </li>
                        );
                    })}
                </ul>
            </nav>

            <BlogDetailsNewsletterCard isDark={isDark} />
        </aside>
    );
}