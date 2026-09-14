import { HeadsetIcon } from "@phosphor-icons/react";
import { blogDetailsCTA } from "../../data/blogDetailsData.js";

export default function BlogDetailsCTA() {
    return (
        <div className="rounded-2xl px-8 py-12 flex flex-col items-center text-center gap-5 bg-[#0B0A09] border border-[#2A2825]">
            <div>
                <h3 className="font-header text-[26px] text-[#FCFCFD]">
                    {blogDetailsCTA.title}
                </h3>
                <p className="font-sans italic text-[15px] text-gray-400 mt-2">
                    {blogDetailsCTA.subtitle}
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button className="bg-primary-blue text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
                    {blogDetailsCTA.buttons.primary}
                </button>
                <button className="flex items-center justify-center gap-2 border border-white/70 text-[#FCFCFD] px-6 py-3 rounded-lg font-medium hover:bg-white/5 transition">
                    {blogDetailsCTA.buttons.secondary}
                    <HeadsetIcon className="w-5 h-5" />
                </button>
            </div>

            <p className="font-sans italic text-[12px] text-gray-500">
                <span className="text-red-500">
                    {blogDetailsCTA.disclaimer.symbol}
                </span>
                {blogDetailsCTA.disclaimer.text}
            </p>

        </div>
    );
}
