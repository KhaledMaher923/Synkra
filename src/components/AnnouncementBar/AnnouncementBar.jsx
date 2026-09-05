import { useState } from "react";
import { HiArrowRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { useTheme } from "../../context/ThemeContext.jsx";
import { announcementData } from "../../data/announcementData.js";

/**
 * AnnouncementBar Component
 * 
 * Figma Specs:
 * - Desktop Height: 68px (min-h-[68px])
 * - Mobile Height: 106px (min-h-[106px])
 * - Padding: 12px 16px (px-[16px] py-[12px])
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
        px-[16px] py-[12px]
        min-h-[106px] md:min-h-[68px]
        flex items-start justify-between md:items-center md:justify-center relative
        ${theme === "dark" ? "bg-[#1F1E1C]" : "bg-[#131210]"}
      `}
    >
      {/* Centered Content Container */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3 text-left md:text-center pr-8 md:pr-0">
        {/* Main Announcement Message */}
        <p className="font-sans text-[13px] md:text-[14px] leading-snug md:leading-normal text-[#FCFCFD] font-normal tracking-tight">
          {message}
        </p>

        {/* Action Link with Animated Arrow */}
        <a
          href={linkHref}
          onClick={onLinkClick}
          className={`group inline-flex items-center gap-1.5 font-sans text-[13px] md:text-[14px] font-medium transition-colors shrink-0
            ${theme === "dark" 
              ? "text-[#2DD4BF] hover:text-[#5EEAD4]" 
              : "text-[#FFA924] hover:text-[#FFB84D]"}
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
        className="text-[#FCFCFD]/70 hover:text-[#FCFCFD] transition-colors p-1 rounded-md cursor-pointer 
          self-start md:self-auto md:absolute md:right-[16px] top-[12px] md:top-1/2 md:-translate-y-1/2"
      >
        <IoClose className="w-5 h-5" />
      </button>
    </aside>
  );
}