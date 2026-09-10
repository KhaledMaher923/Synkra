import { useTheme } from "../../context/ThemeContext.jsx"
import { badge, headline, subheadline } from "../../data/featuresPageHeroSection.js"
import PrecisionEngineering from "../../assets/icons/PrecisionEngineering.svg"

function HeroHeader() {
    const { theme } = useTheme();

    return (
        <div
            className={
                `flex flex-col items-start text-left lg:items-center lg:text-center max-w-220 mx-auto ${
                theme === "dark" ? "text-semi-white" : "text-dark-theme"
                }`}
        >
            <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full mb-6 bg-primary-blue/10 text-primary-blue">
                <img src={PrecisionEngineering} alt="" />
                <span className="tracking-wide uppercase text-[12px]"> {badge.description} </span>
            </span>

            <h1 className="text-[80px] lg:text-7xl font-header leading-tight mb-6 max-lg:text-[56px]" >
                {headline.normal}{" "}
                <span className="italic text-primary-blue" > {headline.highlight} </span>{" "}
                {headline.description}
            </h1>

            <p className="lg:max-w-165 text-[20px] leading-[150%] max-lg:text-base DMsans max-w-205 " >
                <span className="font-bold italic" > {subheadline.bold} </span>
                {subheadline.text}
            </p>
        </div>
    );
}

export default HeroHeader;