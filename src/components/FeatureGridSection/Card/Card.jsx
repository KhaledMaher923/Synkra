import CardBody from "./CardBody";
import { useTheme } from "../../../context/ThemeContext.jsx";

export default function Card({ info }) {
  const { theme } = useTheme();
  const classes =
    info.id == "recovery"
      ? "bg-primary-blue text-semi-white "
      : info.id == "visual-builder"
        ? "bg-[#F4A016]"
        : theme == "dark"
          ? "bg-dark-theme"
          : "bg-[#FCFCFD]";
  let gridDesktopView =
    info.id == "analytics"
      ? "lg:col-span-2 sm:col-span-2"
      : info.id == "ops-intelligence"
        ? "lg:col-span-3 sm:col-span-2"
        : info.id == "integrations"
          ? "lg:col-span-1 lg:order-1"
          : `lg:col-span-1 lg:${info.id == "access-control" ? "order-2" : "order-0"}`;

  return (
    <div
      className={`border ${theme == "dark" ? "border-[#333230]" : "border-[#E4E3DF]"} rounded-xl p-4  ${classes}  ${gridDesktopView}`}
    >
      <CardBody
        id={info.id}
        badge={info.badge}
        title={info.title}
        content={info.content}
        img={info.img}
        imgTop={info.imgTop}
        footer={info.footer}

      />
    </div>
  );
}
