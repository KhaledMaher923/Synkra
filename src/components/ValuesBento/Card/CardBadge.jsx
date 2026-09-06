import { useTheme } from "../../../context/ThemeContext.jsx";

export default function CardBadge({ badge }) {
  const { theme } = useTheme();
  const activeBg = theme == "dark" ? badge.bgColorDark : badge.bgColor;
  return (
    <div
      className={`p-[12px] flex  rounded-[12px] self-start mb-[24px]`}
      style={{
        backgroundColor: activeBg,
      }}
    >
      <img src={badge.icon} />
    </div>
  );
}
