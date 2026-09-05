import { useTheme } from "../../context/ThemeContext.jsx";
import { buttons, disclaimer } from "../../data/hero-sectionData";

function HeroButtons() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-4 max-md:flex-col">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
          {buttons.primary}
        </button>

        <button
          className={`px-6 py-3 rounded-lg font-medium border transition ${
            theme === "dark"
              ? "border-gray-600 text-semi-white hover:bg-gray-800"
              : "border-gray-300 text-dark-theme hover:bg-gray-50"
          }`}
        
        >
          {buttons.secondary}{" "}
            <span className="font-bold">{buttons.bold}</span> {" "}
            {buttons.normal}
        </button>
      </div>

      <p
        className={`text-sm ${
          theme === "dark" ? "text-gray-400" : "text-gray-500"
        }`}
      >
        <span className="text-red-600">{disclaimer.symbol}</span>
        {disclaimer.text}
      </p>
    </div>
  );
}

export default HeroButtons;