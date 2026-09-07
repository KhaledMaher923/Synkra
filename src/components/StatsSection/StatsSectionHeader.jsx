import { useTheme } from "../../context/ThemeContext.jsx";

export default function StatsSectionHeader({
  title,
  subtitle,
}) {
  const { theme } = useTheme();
  return (
    <header className="flex flex-col w-full gap-[8px] md:max-w-[640px]">
      <h2 className="font-header text-center text-[28px] font-medium md:text-[36px]  ">
        {title}
      </h2>
      <div className="gap-[12px] flex flex-col">
        <p
          className={`font-sans font-normal text-center  text-[16px] ${theme === "dark" ? "text-[#CBC9C2]" : "text-[#514F4A]"}`}
        >
          {subtitle}
        </p>
      </div>
    </header>
  );
}
