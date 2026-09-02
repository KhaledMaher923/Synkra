export default function FeatureGridSectionHeader({
  theme,
  badge,
  title,
  subtitle,
}) {
  return (
    <header className="flex flex-col max-w-140 gap-2">
      <h2 className="font-header text-[24px] font-medium max-lg:text-[28px]">
        {title}
      </h2>
      <div className='bg-[#1A56DB] w-[128px] h-[4px]'></div>
      <div>
        <span className={`font-sans text-[12px] ${theme === "dark" ? "text-[#CBC9C2]" : "text-primary-blue"}`}> {badge}</span>
        <p
          className={`font-sans text-[14px] ${theme === "dark" ? "text-[#CBC9C2]" : "text-medium-gray"}`}
        >
          {subtitle}
        </p>
      </div>
    </header>
  );
}
