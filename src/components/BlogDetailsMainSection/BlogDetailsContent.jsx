import { useTheme } from "../../context/ThemeContext";
import { blogDetailsBody, blogDetailsTags } from "../../data/blogDetailsData.js";

function Paragraph({ text, isDark }) {
    return (
        <p className={`font-sans text-[16px] leading-relaxed ${isDark ? "text-gray-300" : "text-[#514F4A]"}`}>
            {text}
        </p>
    );
}

function Heading({ id, text, isDark }) {
    return (
        <h2
            id={id}
            className={`font-header text-[24px] font-bold scroll-mt-24 ${isDark ? "text-white" : "text-[#131210]"}`}
        >
            {text}
        </h2>
    );
}

function Pullquote({ text }) {
    return (
        <blockquote className="border-l-2 border-[#1A56DB] pl-5">
            <p className="font-sans italic text-[17px] leading-relaxed text-[#1A56DB]">
                {text}
            </p>
        </blockquote>
    );
}

function Callout({ text, attribution, isDark }) {
    return (
        <blockquote
            className={`rounded-xl p-6 ${isDark ? "bg-[#1C1B18]" : "bg-[#E4E3DF]"}`}
        >
            <p className={`font-header italic text-[19px] leading-relaxed ${isDark ? "text-gray-100" : "text-[#131210]"}`}>
                &quot;{text}&quot;
            </p>
            <cite className={`block mt-3 not-italic font-sans text-[13px] ${isDark ? "text-blue-400" : "text-[#1A56DB]"}`}>
                {attribution}
            </cite>
        </blockquote>
    );
}

function OrderedList({ items, isDark }) {
    return (
        <ol className="flex flex-col gap-5">
        {items.map((item) => (
            <li key={item.title} className="flex items-start gap-4">
            <span
                className={`flex items-center justify-center w-7 h-7 rounded-full shrink-0 font-sans text-[13px] font-bold ${
                isDark ? "bg-emerald-900/50 text-emerald-300" : "bg-emerald-100 text-emerald-700"
                }`}
            >
                {items.indexOf(item) + 1}
            </span>
            <div>
                <p className={`font-sans text-[15px] font-bold ${isDark ? "text-white" : "text-[#131210]"}`}>
                {item.title}
                </p>
                <p className={`font-sans text-[14px] ${isDark ? "text-gray-400" : "text-[#514F4A]"}`}>
                {item.text}
                </p>
            </div>
            </li>
        ))}
        </ol>
    );
}

export default function BlogDetailsContent() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
        <div className="flex flex-col gap-6">
        {blogDetailsBody.map((block, index) => {
            switch (block.type) {
            case "paragraph":
                return <Paragraph key={index} text={block.text} isDark={isDark} />;
            case "heading":
                return <Heading key={block.id} id={block.id} text={block.text} isDark={isDark} />;
            case "pullquote":
                return <Pullquote key={index} text={block.text} />;
            case "callout":
                return (
                <Callout key={index} text={block.text} attribution={block.attribution} isDark={isDark} />
                );
            case "orderedList":
                return <OrderedList key={index} items={block.items} isDark={isDark} />;
            default:
                return null;
            }
        })}
            <div className="flex flex-wrap gap-2 pt-2">
                {blogDetailsTags.map((tag) => (
                    <span
                        key={tag}
                        className="px-4 py-1.5 rounded-full font-sans text-[13px] font-medium bg-[#006E65] text-[#FCFCFD]"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );


}