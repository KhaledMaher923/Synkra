import intelligenceImg from "../../assets/images/desktop-screen-green-background.png";
import { OISQuote } from "../../data/opsIntelligenceSectionData.jsx";

export default function OpsIntelligenceVisual() {
    return (
        <div className="relative w-full h-[388px] lg:w-1/2  lg:pb-14 lg:pl-10" >
            <img
                src={intelligenceImg}
                alt="Synkra logic engine running on a developer's workstation"
                className="w-[508px] h-[388px] max-h-125 object-cover object-[0px_-20px] overflow-hidden rounded-2xl"
            />

            <div className="absolute bottom-[-28px] left-[10px] w-[calc(100%-2.5rem)] lg:w-90 p-6 rounded-2xl bg-black/55 backdrop-blur-[2px] backdrop-saturate-150 border border-white/15 " >
                <p className="font-mono text-xs font-bold italic text-semi-white mb-3" >
                    {OISQuote.tag}
                </p>
                <p className="font-sans text-[14] text-base text-semi-white leading-relaxed">
                    &quot;{OISQuote.text}&quot;
                </p>
            </div>
        </div>
    );
}

