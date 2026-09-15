import { FGSHeaderContent, FGSCardList }from "../../data/FeatureGridSectionData";
import Card from "./Card/Card";
import FeatureGridSectionHeader from "./FeatureGridSectionHeader";
import { useTheme } from "../../context/ThemeContext";

export default function FeatureGridSection() {
  const { theme } = useTheme();

  return (
    <section
      className={`p-[24px] lg:p-[64px] flex flex-col items-center gap-[48px] 2xl:px-50
    ${theme === "dark" ? "bg-dark-theme text-semi-white" : "bg-[#F5F7F9] text-dark-theme"} 
     `}
    >
      <FeatureGridSectionHeader
        info={FGSHeaderContent}
      />
      <div className="grid grid-cols-1  gap-[16px] w-full lg:grid-cols-3 sm:grid-cols-2">
        {FGSCardList.map((card) => {
          return <Card key={card.id} info={card}></Card>;
        })}
      </div>
    </section>
  );
}
