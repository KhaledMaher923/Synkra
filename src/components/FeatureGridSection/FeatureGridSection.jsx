import {FGSTitle,FGSBadge,FGSSubtitle,StarIcon,FGSCardList} from "../../data/FeatureGridSectionData.jsx";
import Card from "./Card/Card.jsx";
import FeatureGridSectionHeader from "./FeatureGridSectionHeader.jsx";
import { useTheme } from "../../context/ThemeContext.jsx";

export default function FeatureGridSection() {
  const { theme } = useTheme();

  return (
    <section
    className={`p-[24px] lg:p-[64px] flex flex-col items-center gap-[48px] lg:max-w-[100%] 2xl:px-50
    ${theme === "dark" ? "bg-dark-theme text-semi-white" : "bg-[#F5F7F9] text-dark-theme"} 
     `}
    >
      <FeatureGridSectionHeader
        badge={FGSBadge}
        title={FGSTitle}
        subtitle={FGSSubtitle}
        icon={StarIcon}
      />
      <div className="grid grid-cols-1  gap-[16px] w-full max-w-250 lg:grid-cols-3 lg:grid-rows-[repeat(3,minmax(400px,fit-content))]  lg:max-w-[100%] sm:grid-cols-2">
        {FGSCardList.map((card) => {
          return <Card key={card.id} info={card}></Card>;
        })}
      </div>
    </section>
  );
}
