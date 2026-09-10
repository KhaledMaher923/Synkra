import { useTheme } from "../../context/ThemeContext";
import { badge, content, visual } from "../../data/AboutHeroSectionData";
import AboutHeroSectionContent from "./AboutHeroSectionContent";
import AboutHeroSectionVisual from "./AboutHeroSectionVisual";
export default function AboutHeroSection() {
  const { theme } = useTheme();
  return (
    <section
      className={`p-[24px] gap-[16px] flex flex-col  md:pt-[40px] md:pb-[40px] md:pr-[64px] md:pl-[64px] md:max-w-[100%]
    ${theme === "dark" ? " text-semi-white" : " text-dark-theme"} 
    `}
    >
      <AboutHeroSectionContent badge={badge} content={content} />
      <AboutHeroSectionVisual visual={visual} />
    </section>
  );
}
