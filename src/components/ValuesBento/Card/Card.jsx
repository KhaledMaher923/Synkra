import CardBody from "./CardBody";
import { useTheme } from "../../../context/ThemeContext.jsx";

export default function Card({ info }) {
  const { theme } = useTheme();
  const classes =
    info.id == "2"
      ? "bg-primary-blue text-semi-white "
      : theme == "dark"
        ? "bg-dark-theme"
        : "bg-semi-white";

  return (
    <div
      className={`border ${theme == "dark" ? "border-[#333230]" : "border-[#E4E3DF]"} rounded-xl p-8  ${classes}  `}
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
