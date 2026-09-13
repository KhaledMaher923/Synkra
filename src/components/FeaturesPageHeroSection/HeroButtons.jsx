import { useTheme } from "../../context/ThemeContext.jsx";
import { buttons } from "../../data/featuresPageHeroSection.js";
import StartBuilding from "../../assets/icons/StartBuilding.svg"

function HeroButtons() {
    const { theme } = useTheme();

    return (
        <div className="flex justify-center gap-4 w-full max-lg:flex-col max-lg:items-stretch" >
            <button className="flex justify-center items-center gap-2 bg-primary-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition" >
                <span>{buttons.primary}</span>
                <img src={StartBuilding} alt="" />
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

