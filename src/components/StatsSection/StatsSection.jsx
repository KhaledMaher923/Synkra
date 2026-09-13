import {
  SSTitle,
  SSSubtitle,
  PrimaryTxt,
  SecondaryTxt,
  FooterTxt,
  SSCardList,
} from "../../data/StatsSectionData";
import StatsSectionCard from "./StatsSectionCard";
import StatsSectionFooter from "./StatsSectionFooter";
import StatsSectionHeader from "./StatsSectionHeader";
import { useTheme } from "../../context/ThemeContext.jsx";
import BlurBG from "./BlurBG.jsx";

export default function StatsSection({page='default'}) {
  const { theme } = useTheme();
  return (
    <section
      className={` p-[24px] relative lg:pt-[40px] lg:pb-[40px] lg:pr-[64px] lg:pl-[64px] lg:max-w-[100%] 2xl:px-50
    ${theme === "dark" ? "bg-dark-theme text-semi-white" : "bg-[#EBF2FD] text-dark-theme"} 
    `}
    >
      {theme == "dark" ? <BlurBG /> : null}

      <div className="pt-[24px] pb-[24px]  flex flex-col items-center gap-[24px]">
        <StatsSectionHeader title={SSTitle} subtitle={SSSubtitle} />
        <div className="grid grid-cols-2  gap-[16px] w-full max-w-250 lg:grid-cols-4 lg:grid-rows-[repeat(3,minmax(400px,fit-content))] lg: lg:max-w-[100%]">
          {SSCardList.map((card) => {
            return (
              <StatsSectionCard key={card.id} info={card}></StatsSectionCard>
            );
          })}
        </div>
        {page=='default'?
        <StatsSectionFooter
          primaryTxt={PrimaryTxt}
          secondaryTxt={SecondaryTxt}
          footerTxt={FooterTxt}
        />: null
        }
      </div>
    </section>
  );
}
