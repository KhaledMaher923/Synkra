import { useTheme } from "../../context/ThemeContext.jsx";

export default function FeatureGridSectionHeader({
  badge,
  title,
  subtitle,
  icon,
}) {
  const { theme } = useTheme();
  return (
    <header className="flex flex-col w-full gap-[40px] md:flex-row  ">
      <h2 className="font-header text-[24px] font-medium md:text-[36px] md:w-[512px] ">
        {title}
        <div className="bg-[#1A56DB] w-[128px] h-[4px]"></div>
      </h2>
      <div className="md:w-[600px] gap-[12px] flex flex-col">
        <div
          className={`flex items-center gap-[5px] font-sans text-[12px]
            
            ${theme === "dark" ? "text-[#75A2F0] bg-[#081D5B]" : "text-primary-blue bg-[#EBF2FD] "} pt-[4px] pb-[4px] pr-[12px] pl-[12px] self-start rounded-[999px]`}
        >
          {icon}
          <span>{badge}</span>
        </div>
        <p
          className={`font-sans text-[14px] ${theme === "dark" ? "text-[#CBC9C2]" : "text-medium-gray"}`}
        >
          {subtitle}
        </p>
      </div>
    </header>
  );
}
