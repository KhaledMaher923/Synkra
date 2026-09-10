import { useTheme } from "../../context/ThemeContext.jsx";
import { PiCheckCircleDuotone } from "react-icons/pi";
import {
    OISBadge,
    OISHeading,
    OISDescription,
    OISFeatureList,
    OISCta,
} from "../../data/opsIntelligenceSectionData.jsx";

export default function OpsIntelligenceContent() {
    const { theme } = useTheme();

    return (
        <div className="flex flex-col items-start gap-6 w-full lg:w-1/2 mt-12 lg:mt-0">
            <span
                className={`inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full ${
                theme === "dark" ? "bg-white/10 text-semi-white" : "bg-neutral-stone text-dark-theme"
                }`}
            >
                {OISBadge.icon}
                {OISBadge.text}
            </span>

            <h2 className="font-header text-3xl lg:text-[42px] font-bold leading-tight whitespace-pre-line">
                {OISHeading}
            </h2>

            <p className="font-sans text-lg max-lg:text-base leading-relaxed">
            <span className="font-bold italic">{OISDescription.bold}</span>
            {OISDescription.text}
            </p>

            <ul className="flex flex-col gap-4 w-full" >
                {OISFeatureList.map((feature) => (
                <li key={feature.id} className="flex items-start gap-3">
                    <PiCheckCircleDuotone className="text-primary-blue text-xl shrink-0 mt-0.5" />
                    <span className="font-sans text-base">{feature.text}</span>
                </li>
        ))}
            </ul>

            <a
                href={OISCta.url}
                className={`inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 py-4 rounded-lg font-medium border transition ${
                theme === "dark"
                    ? "border-gray-700 text-semi-white hover:bg-gray-800"
                    : "border-gray-300 text-dark-theme hover:bg-gray-50"
                }`}
            >
                {OISCta.label}
                {OISCta.icon}
            </a>
            

        </div>
    );
}



