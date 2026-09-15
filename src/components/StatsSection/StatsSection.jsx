import {
  SSHeaderContent,
  SSFooterContent,
  SSCardList,
} from "../../data/StatsSectionData";
import StatsSectionCard from "./StatsSectionCard";
import StatsSectionFooter from "./StatsSectionFooter";
import StatsSectionHeader from "./StatsSectionHeader";
import { useTheme } from "../../context/ThemeContext";
import BlurBG from "./BlurBG";

export default function StatsSection({ page = "default" }) {
  const { theme } = useTheme();
  return (
    <section
      className={` p-[24px] relative lg:pt-[40px] lg:pb-[40px] lg:pr-[64px] lg:pl-[64px] 2xl:px-50
    ${theme === "dark" ? "bg-dark-theme text-semi-white" : "bg-[#EBF2FD] text-dark-theme"} 
    `}
    >
      {theme == "dark" ? <BlurBG /> : null}

      <div className="pt-[24px] pb-[24px]  flex flex-col items-center gap-[24px]">
        <StatsSectionHeader info={SSHeaderContent} />
        <div className="grid grid-cols-2  gap-[16px] w-full lg:grid-cols-4  ">
          {SSCardList.map((card) => {
            return (
              <StatsSectionCard key={card.id} info={card}></StatsSectionCard>
            );
          })}
        </div>
        {page == "default" ? (
          <StatsSectionFooter info={SSFooterContent} />
        ) : null}
      </div>
    </section>
  );
}
