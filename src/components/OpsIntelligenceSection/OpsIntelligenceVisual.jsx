import intelligenceImg from "../../assets/images/desktop-screen-green-background.png";
import { OISQuote } from "../../data/opsIntelligenceSectionData.jsx";

export default function OpsIntelligenceVisual() {
    return (
        <div className="relative w-full lg:w-1/2" >
            <img
                src={intelligenceImg}
                alt="Synkra logic engine running on a developer's workstation"
                className="w-full h-full max-h-125 object-cover rounded-2xl"
            />

            <div className="absolute -bottom-6 left-4 right-8 sm:left-8 sm:right-auto sm:w-90 p-6 rounded-2xl bg-dark-theme/80 backdrop-blur-md border border-white/10" >
                <p className="font-mono text-xs font-bold italic text-semi-white/70 mb-3" >
                    {OISQuote.tag}
                </p>
                <p className="font-sans text-base text-semi-white leading-relaxed">
                    &quot;{OISQuote.text}&quot;
                </p>
            </div>
        </div>
    );
}

