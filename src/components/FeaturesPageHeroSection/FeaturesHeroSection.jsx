import HeroHeader from "./HeroHeader.jsx";
import HeroButtons from "./HeroButtons.jsx";
import { useTheme } from "../../context/ThemeContext.jsx";

function FeaturesHeroSection() {
    const { theme } = useTheme();

    return (
        <section className={`flex flex-col items-center gap-8 px-8 py-16 max-lg:py-10 ${
        theme === "dark" ? "bg-dark-theme" : "bg-light-theme"
            }`}
        >
            <HeroHeader />
            <HeroButtons />
        </section>


    );
}
export default FeaturesHeroSection;