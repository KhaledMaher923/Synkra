import { useTheme } from "../../context/ThemeContext.jsx";

// Import your actual SVG assets from the icons folder
import LogoLight from "../../assets/icons/synkra-logo-light.svg";
import LogoDark from "../../assets/icons/synkra-logo-dark.svg";
import LogoIconLight from "../../assets/icons/synkra-logo-icon-lights.svg";
import LogoIconDark from "../../assets/icons/synkra-logo-icon-dark.svg";

export default function Logo({ className = "", isIconOnly = false, showCms = false }) {
  const { theme } = useTheme();

  // Determine exactly which SVG to show
  let currentLogo;
  if (isIconOnly) {
    currentLogo = theme === "dark" ? LogoIconDark : LogoIconLight;
  } else {
    currentLogo = theme === "dark" ? LogoDark : LogoLight;
  }

  return (
    <a 
      href="/" 
      className={`flex items-center gap-1 select-none ${className}`} 
      aria-label="Synkra Home"
    >
      <img 
        src={currentLogo} 
        alt="Synkra Logo" 
        className={`${isIconOnly ? "w-6 h-6" : "h-6"} object-contain`} 
      />
      
      {/* CMS badge for the sidebar */}
      {!isIconOnly && showCms && (
        <span className="text-[10px] uppercase font-sans text-[#78766F] font-bold mt-1.5 ml-1">
          CMS
        </span>
      )}
    </a>
  );
}