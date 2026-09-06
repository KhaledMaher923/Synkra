import { useTheme } from "../../../context/ThemeContext.jsx";

export default function CardBadge({ badge }) {
  const { theme } = useTheme();
const activeBg = theme == "dark"  ? badge.bgColorDark : badge.bgColor;
  const activeText = theme == "dark"  ? badge.textColorDark : badge.textColor;
  return (
    <div
      className={`text-[12px] flex gap-[5px] pt-[4px] pb-[4px] pr-[12px] pl-[12px] md:pt-[8px] md:pb-[8px] md:pr-[12px] md:pl-[12px] rounded-[999px] self-start`}
    style={{
        backgroundColor: activeBg,
        color: activeText,
      }}
    >
      <img src={badge.icon} />
      <span>{badge.text}</span>
    </div>
  );
}
