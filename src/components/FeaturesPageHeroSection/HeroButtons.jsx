import { useTheme } from "../../context/ThemeContext.jsx";
import { buttons } from "../../data/featuresPageHeroSection.js";
import { Megaphone } from "@phosphor-icons/react";

function HeroButtons() {
    const { theme } = useTheme();

    return (
        <div className="flex justify-center gap-4 max-md:flex-col max-md:items-stretch" >
            <button className="flex justify-center items-center gap-2 bg-primary-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition" >
                <span>{buttons.primary}</span>
                <Megaphone size={16} weight="duotone" className="text-white shrink-0" />
            </button>

            <button
                className={`px-6 py-3 rounded-lg font-medium border transition ${
                    theme === "dark"
                        ? "border-gray-600 text-semi-white hover:bg-gray-800"
                        : "border-gray-300 text-dark-theme hover:bg-gray-50"
                    }`}
            >
                {buttons.secondary}
            </button>


        </div>
    );
}

export default HeroButtons;

