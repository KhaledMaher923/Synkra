import { useTheme } from "../../context/ThemeContext.jsx";
import { Headset } from "@phosphor-icons/react";
import { buttons } from "../../data/CTAData.js";

function CTAButtons() {
  const { theme } = useTheme();

  return (
    <div className={`cta-buttons flex flex-col gap-3 w-full max-w-sm ${theme}`}>
      <button className="bg-primary-blue text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-colors duration-300 w-full">
        {buttons.primary}
      </button>

      <button className="border border-white/20 text-semi-white px-6 py-3 rounded-lg font-medium hover:bg-white/5 transition-colors duration-300 w-full flex items-center justify-center gap-2">
        {buttons.secondary}
        <Headset className="w-4 h-4" />
      </button>
    </div>
  );
}
export default CTAButtons;