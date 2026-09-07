import { useTheme } from "../../context/ThemeContext.jsx";
import { badge, headline, subheadline } from "../../data/hero-sectionData";
import { Sparkle } from "@phosphor-icons/react"; 

function HeroHeader() {
  const { theme } = useTheme();

return (
  <div
    className={`w-full ${
      theme === "dark" ? "text-semi-white" : "text-dark-theme"
    }`}
  >

    <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full mb-4 bg-primary-blue/10 text-primary-blue">
  
    <Sparkle 
    size={16} 
    weight="duotone" 
    className="text-primary-blue shrink-0" 
  />
  
  <span className="tracking-wide uppercase">{badge.description}</span>
</span>


    <h1 className="text-6xl lg:text-8xl font-header leading-tight mb-4">
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