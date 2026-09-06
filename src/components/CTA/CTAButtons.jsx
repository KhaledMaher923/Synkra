import { useTheme } from "../../context/ThemeContext.jsx";
import { Headset } from "@phosphor-icons/react";
import { buttons } from "../../data/CTAData.js";
import { disclaimer } from "../../data/CTAData.js";

function CTAButtons() {
  const { theme } = useTheme();

  return (
    <div className={`cta-buttons flex flex-col items-center gap-3 w-full ${theme}`}>
      <div className="flex flex-col md:flex-row justify-center gap-3 w-full max-w-sm md:max-w-none">
        <button className="bg-primary-blue text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-colors duration-300 w-full md:w-auto">
          {buttons.primary}
        </button>

        <button className="border-1 border-white text-semi-white px-6 py-3 rounded-lg font-medium hover:bg-white/5 transition-colors duration-300 w-full md:w-auto flex items-center justify-center gap-2">
          {buttons.secondary}
          <Headset className="w-5 h-5" />
        </button>
      </div>

      <p className="text-[15px] font-sans-serif text-center pb-4 text-white">
        <span className="text-red-600">{disclaimer.symbol}</span>
        {disclaimer.text}
      </p>
    </div>
  );
}
export default CTAButtons;