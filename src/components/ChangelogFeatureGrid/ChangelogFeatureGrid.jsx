import AboutHeroSectionContent from "../AboutHeroSection/AboutHeroSectionContent";
import { badge, content } from "../../data/ChangelogFeatureGridData";
import { useTheme } from "../../context/ThemeContext";
import ChangelogFeatureGridTimeline from "./ChangelogFeatureGridTimeline";
export default function ChangelogFeatureGrid() {
  const { theme } = useTheme();
  return (
    <section
      className={`p-[30px] gap-[16px] flex flex-col  md:pt-[40px] md:pb-[80px] md:pr-[64px] md:pl-[64px] md:max-w-[100%]
    ${theme === "dark" ? " text-semi-white" : " text-dark-theme bg-light-theme"} 
    `}
    >
      <AboutHeroSectionContent badge={badge} content={content} />
      <ChangelogFeatureGridTimeline />
    </section>
  );
}
