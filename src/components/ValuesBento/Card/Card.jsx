import CardBody from "./CardBody";
import { useTheme } from "../../../context/ThemeContext.jsx";

export default function Card({ info }) {
  const { theme } = useTheme();
  const classes =
    info.id == "2"
      ? "bg-[#1A56DB] text-[#FCFCFD] "
      : theme == "dark"
        ? "bg-[#131210]"
        : "bg-[#FCFCFD]";

  return (
    <div
      className={`border-1 ${theme == "dark" ? "border-[#333230]" : "border-[#E4E3DF]"} rounded-[12px] p-[32px]  ${classes}  `}
    >
      <CardBody
        id={info.id}
        badge={info.badge}
        title={info.title}
        content={info.content}
      />
    </div>
  );
}
