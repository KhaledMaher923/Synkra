import { newsletterData } from "../../data/mainEditorialGridData.js";

export default function BlogDetailsNewsletterCard({ isDark }) {
    return (
        <div
            className={`relative overflow-hidden rounded-2xl p-6 lg:p-8 border ${
                isDark ? "bg-[#0B0A09] border-[#2A2825]" : "bg-[#FCFCFD] border-[#E4E3DF]"
            }`}
        >
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-single-orange/25 blur-3xl pointer-events-none" />

            <div className="relative flex flex-col gap-4">
                <span
                    className={`font-sans text-[12px] font-semibold tracking-wider uppercase ${
                        isDark ? "text-gray-400" : "text-[#78766F]"
                    }`}
                    >
                        {newsletterData.tag}
                </span>
                <h3
                    className={`font-header text-[24px] lg:text-[26px] font-bold leading-snug ${
                        isDark ? "text-white" : "text-[#131210]"
                    }`}
                    >
                    {newsletterData.title}
                </h3>
                <p className={`font-sans text-[13px] leading-relaxed ${isDark ? "text-gray-400" : "text-[#514F4A]"}`}>
                    {newsletterData.description}
                </p>
                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3 pt-2">
                    <input
                        type="email"
                        placeholder={newsletterData.placeholder}
                        className={`w-full px-4 py-3 rounded-lg border text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                        isDark
                            ? "bg-[#1C1B18] border-[#2A2825] text-white placeholder-gray-500"
                            : "bg-white border-[#E4E3DF] text-[#131210] placeholder-[#A09E97]"
                        }`}
                    />
                    <button
                        type="submit"
                        className="w-full py-3 bg-primary-blue text-white font-sans font-medium text-[14px] rounded-lg hover:opacity-90 transition-colors cursor-pointer"
                    >
                        {newsletterData.buttonText}
                    </button>
                </form>
            </div>
        </div>
    );
}