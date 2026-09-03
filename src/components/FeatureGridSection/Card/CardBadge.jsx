import { useTheme } from "../../../context/ThemeContext.jsx";

export default function CardBadge({ badge }) {
  const { theme } = useTheme();
  return (
    <div
      className={`text-[12px] flex gap-[5px] pt-[4px] pb-[4px] pr-[12px] pl-[12px] md:pt-[8px] md:pb-[8px] md:pr-[12px] md:pl-[12px] rounded-[999px] self-start ${theme == "dark" ? `bg-[${badge.bgColorDark}] text-[${badge.textColorDark}]` : `bg-[${badge.bgColor}] text-[${badge.textColor}]`}`}
    >
      <img src={badge.icon} />
      <span>{badge.text}</span>
    </div>
  );
}
