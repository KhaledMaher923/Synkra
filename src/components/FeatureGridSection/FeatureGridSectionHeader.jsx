import { useTheme } from "../../context/ThemeContext.jsx";
import CardBadge from "./Card/CardBadge.jsx";

export default function FeatureGridSectionHeader({ info }) {
  const { theme } = useTheme();
  return (
    <header className="flex flex-col w-full gap-[40px] lg:flex-row  ">
      <h2 className="font-header text-[24px] font-medium lg:text-[36px] lg:w-[512px] ">
        {info.title}
        <div className="bg-[#1A56DB] w-[128px] h-[4px]"></div>
      </h2>
      <div className="lg:w-[600px] gap-[12px] flex flex-col items-start">
        <CardBadge badge={info.badge} />
        <p
          className={`font-sans text-[14px] ${theme === "dark" ? "text-[#CBC9C2]" : "text-medium-gray"}`}
        >
          {info.subtitle}
        </p>
      </div>
    </header>
  );
}
