import { useTheme } from "../../context/ThemeContext.jsx";
import { badge, headline, subheadline } from "../../data/hero-sectionData";

function HeroHeader() {
  const { theme } = useTheme();

  return (
    <div
      className={`max-w-xl ${
        theme === "dark" ? "text-semi-white" : "text-dark-theme"
      }`}
    >
      <span className="inline-block text-sm font-medium px-3 py-1 rounded-full mb-4 bg-primary-blue/10 text-primary-blue">
        {badge.description}
      </span>

      <h1 className="text-7xl font-header leading-tight max-lg:text-4xl max-md:text-3xl mb-4">
        {headline.normal}{" "}
        <span className="italic text-primary-blue">{headline.highlight}</span>{" "}
        {headline.description}
      </h1>

      <p className="mt-6 text-xl max-xl:text-base pb-10 font-sans">
        {subheadline.text}
      </p>
    </div>
  );
}

export default HeroHeader;