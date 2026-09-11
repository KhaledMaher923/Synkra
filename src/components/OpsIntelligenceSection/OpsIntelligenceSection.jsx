import { useTheme } from "../../context/ThemeContext.jsx";
import OpsIntelligenceVisual from "./OpsIntelligenceVisual.jsx";
import OpsIntelligenceContent from "./OpsIntelligenceContent.jsx"

export default function OpsIntelligenceSection() {
    const { theme } = useTheme();

    return (
        <section
            className={`px-8 py-16 max-lg:px-6 max-lg:py-10 ${
            theme === "dark" ? "bg-dark-theme text-semi-white" : "bg-light-theme text-dark-theme"
            }`}
        >
            <div className="flex flex-col lg:flex-row items-center gap-12 max-w-300 mx-auto">
            <OpsIntelligenceVisual />
            <OpsIntelligenceContent />
            </div>
        </section>
    );
}

