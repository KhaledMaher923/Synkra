import { useTheme } from "../../context/ThemeContext.jsx";
import {title} from "../../data/CTAData.js";

function CTAHeader() {
  const { theme } = useTheme();
  return (
    <div className={`cta-header ${theme}`}>
     <h2 className="text-semi-white text-2xl text-center md:text-3xl pt-6 pb-6 font-serif font-semi-bold leading-snug max-w-lg leading-[130%]">{title.text}{" "}
            <span className="italic font-bold">{title.italic}</span>{" "}
      {title.normal}
    </h2>
    </div>
  );
}
export default CTAHeader;