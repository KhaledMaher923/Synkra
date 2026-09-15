import CardBody from "./CardBody";
import { useTheme } from "../../../context/ThemeContext.jsx";

const GRID_LAYOUT_MAP = {
  analytics: "lg:col-span-2 sm:col-span-2",
  "ops-intelligence": "lg:col-span-3 sm:col-span-2",
  integrations: "lg:col-span-1 lg:order-1",
  "access-control": "lg:col-span-1 lg:order-2",
};


const VARIANT_BG_MAP = {
  recovery: "bg-blue-card text-semi-white",
  "visual-builder": "bg-[#F4A016]",
};

export default function Card({ info }) {
  const { theme } = useTheme();

  const gridClasses = GRID_LAYOUT_MAP[info.id] || "lg:col-span-1 lg:order-0";

  const defaultThemeBg = theme === "dark" ? "bg-dark-theme" : "bg-[#FCFCFD]";
  const bgClasses = VARIANT_BG_MAP[info.id] || defaultThemeBg;

  const borderClasses = theme === "dark" ? "border-[#333230]" : "border-[#E4E3DF]";

  return (
    <div
      className={`border rounded-xl p-4 ${borderClasses} ${bgClasses} ${gridClasses}`}
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
