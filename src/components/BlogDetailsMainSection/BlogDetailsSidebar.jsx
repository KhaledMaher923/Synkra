import { useTheme } from "../../context/ThemeContext";
import { blogDetailsTOC } from "../../data/blogDetailsData.js";
import { newsletterData } from "../../data/mainEditorialGridData.js";
import NewsletterCard from "../MainEditorialGrid/NewsletterCard.jsx";

export default function BlogDetailsSidebar() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
        <aside className="flex sticky flex-col gap-6 w-full lg:w-80 shrink-0">
            <nav
                className={`rounded-2xl p-6 border ${
                    isDark ? "bg-[#1C1B18] border-neutral-800" : "bg-[#FCFCFD] border-[#E4E3DF]"
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
                    {blogDetailsTOC.map((item, index) => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                className={`font-sans text-[14px] leading-snug flex items-start gap-2 ${
                                index === 0
                                    ? "text-[#1A56DB] font-semibold"
                                    : isDark
                                    ? "text-gray-300 hover:text-white"
                                    : "text-[#514F4A] hover:text-[#131210]"
                                }`}
                            >
                                {index === 0 && <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1A56DB] shrink-0" />}
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <NewsletterCard data={newsletterData} />
        </aside>
    );
}