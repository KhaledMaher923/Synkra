import { NavLink } from "react-router-dom";
import { useState } from "react";
import { HiArrowRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { useTheme } from "../../context/ThemeContext.jsx";
import { announcementData } from "../../data/announcementData.js";

/**
 * AnnouncementBar Component
 *
 * Figma Specs:
 * - Desktop Height: 68px
 * - Mobile Height: 106px
 * - Padding: 12px 16px
 * - Light Background: #131210
 * - Dark Background: #1F1E1C
 * - Link Color (Light): #FFA924 (Single Orange)
 * - Link Color (Dark): #2DD4BF / #00C4B4 (Teal)
 */
export default function AnnouncementBar({
  message = announcementData.message,
  linkLabel = announcementData.linkLabel,
  linkHref = announcementData.linkHref,
  onLinkClick,
}) {
  // Access current theme ('light' or 'dark') from Synkra's ThemeContext
  const { theme } = useTheme();

  // State to control visibility when the user clicks the close (X) button
  const [isVisible, setIsVisible] = useState(true);

  // If dismissed, remove from DOM
  if (!isVisible) return null;
  
  return (
    <aside
      aria-label="Announcement"
      className={`w-full transition-colors duration-200 z-50 px-4 py-3 min-h-17 flex items-start justify-between min-[921px]:items-center min-[921px]:justify-center relative ${theme === "dark" ? "bg-[#1F1E1C]" : "bg-dark-theme"}`}
    >
      <div className="flex flex-col min-[921px]:flex-row items-start min-[921px]:items-center gap-2 min-[921px]:gap-3 text-left min-[921px]:text-center pr-8">
        <p className="font-sans text-[13px] min-[921px]:text-[14px] leading-snug min-[921px]:leading-normal text-semi-white font-normal tracking-tight">
          {message}
        </p>
        <NavLink
          to={linkHref}
          onClick={onLinkClick}
          className={`group inline-flex items-center gap-1.5 font-sans text-[13px] min-[921px]:text-[14px] font-medium transition-colors shrink-0 ${theme === "dark" ? "text-[#2DD4BF] hover:text-[#5EEAD4]" : "text-single-orange hover:text-[#FFB84D]"}`}
        >
          <span>{linkLabel}</span>
          <HiArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true" />
        </NavLink>
      </div>
      <button
        type="button"
        onClick={() => setIsVisible(false)}
        aria-label="Dismiss announcement"
        className="text-semi-white/70 hover:text-semi-white transition-colors p-1 rounded-md cursor-pointer self-start min-[921px]:self-auto min-[921px]:absolute min-[921px]:right-4 top-3 min-[921px]:top-1/2 min-[921px]:-translate-y-1/2"
      >
        <IoClose className="w-5 h-5" />
      </button>
    </aside>
  );
}
