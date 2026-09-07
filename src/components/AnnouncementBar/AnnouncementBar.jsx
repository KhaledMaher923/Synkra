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
      className={`w-full transition-colors duration-200 z-50
        px-4 py-3
        min-h-26.5 md:min-h-17
        flex items-start justify-between md:items-center md:justify-center relative
        ${theme === "dark" ? "bg-[#1F1E1C]" : "bg-dark-theme"}
      `}
    >
      {/* Centered Content Container */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3 text-left md:text-center pr-8 md:pr-0">
        {/* Main Announcement Message */}
        <p className="font-sans text-[13px] md:text-[14px] leading-snug md:leading-normal text-semi-white font-normal tracking-tight">
          {message}
        </p>

        {/* Action Link with Animated Arrow */}
        <a
          href={linkHref}
          onClick={onLinkClick}
          className={`group inline-flex items-center gap-1.5 font-sans text-[13px] md:text-[14px] font-medium transition-colors shrink-0
            ${theme === "dark" 
              ? "text-[#2DD4BF] hover:text-[#5EEAD4]" 
              : "text-single-orange hover:text-[#FFB84D]"}
          `}
        >
          <span>{linkLabel}</span>
          <HiArrowRight 
            className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" 
            aria-hidden="true" 
          />
        </a>
      </div>

      {/* Dismiss / Close Button */}
      <button
        type="button"
        onClick={() => setIsVisible(false)}
        aria-label="Dismiss announcement"
        className="text-semi-white/70 hover:text-semi-white transition-colors p-1 rounded-md cursor-pointer 
          self-start md:self-auto md:absolute md:right-4 top-3 md:top-1/2 md:-translate-y-1/2"
      >
        <IoClose className="w-5 h-5" />
      </button>
    </aside>
  );
}