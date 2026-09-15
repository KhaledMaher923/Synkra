import { HeadsetIcon } from "@phosphor-icons/react";
import { blogDetailsCTA } from "../../data/blogDetailsData.js";

export default function BlogDetailsCTA() {
    return (
        <div className="relative overflow-hidden isolate rounded-2xl px-8 py-12 flex flex-col items-center text-center gap-5 bg-[#0B0A09] border border-[#2A2825]">
            <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#1E3A34] rounded-[16px] filter blur-[100px] md:blur-[120px] opacity-70 -translate-x-1/4 -translate-y-1/4 pointer-events-none -z-10" />
            <div className="absolute bottom-0 left-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[500px] bg-[#3D2817] rounded-[16px] filter blur-[100px] md:blur-[120px] opacity-70 -translate-x-1/2 translate-y-1/4 pointer-events-none -z-10" />
        
            <div>
                <h3 className="font-header text-[36px] text-[#FCFCFD]">
                    {blogDetailsCTA.title}
                </h3>
                <p className="font-sans italic text-[20px] text-[#FCFCFD] mt-2">
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
        
            <p className="font-sans italic text-[14px] text-[#FCFCFD]">
                <span className="text-[#F4A016]">{blogDetailsCTA.disclaimer.symbol}</span>
                    {blogDetailsCTA.disclaimer.text}
            </p>
        </div>
    );
}