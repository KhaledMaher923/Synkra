import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { 
  HiOutlineSearch, 
  HiOutlineHome, 
  HiOutlineTrendingUp, 
  HiOutlineDocumentText, 
  HiOutlineClipboardList, 
  HiOutlineChatAlt2, 
  HiOutlineTag, 
  HiOutlineViewList, 
  HiOutlineShieldCheck, 
  HiOutlineOfficeBuilding 
} from "react-icons/hi";
import { FaHeadset } from "react-icons/fa6";
import { useTheme } from "../../context/ThemeContext.jsx";
import Logo from "../UI/Logo.jsx";

// Exact links matching the CMS Dashboard screenshots
const cmsMenuGroups = [
  {
    title: "MAIN MENU",
    items: [
      { id: "dashboard", label: "Dashboard", icon: HiOutlineHome, isActive: true },
      { id: "activity", label: "Activity Log", icon: HiOutlineTrendingUp, isActive: false },
    ]
  },
  {
    title: "CONTENT",
    items: [
      { id: "blog", label: "Blog Posts", icon: HiOutlineDocumentText, isActive: false, badge: "8" },
      { id: "changelog", label: "Changelog", icon: HiOutlineClipboardList, isActive: false },
      { id: "testimonials", label: "Testimonials", icon: HiOutlineChatAlt2, isActive: false, badge: "3" },
      { id: "pricing", label: "Pricing", icon: HiOutlineTag, isActive: false },
      { id: "faq", label: "FAQ", icon: HiOutlineViewList, isActive: false },
    ]
  },
  {
    title: "WORKSPACE",
    items: [
      { id: "roles", label: "User Roles", icon: HiOutlineShieldCheck, isActive: false },
      { id: "about", label: "About Synkra", icon: HiOutlineOfficeBuilding, isActive: false },
    ]
  }
];

export default function SideDrawer({ isOpen, onClose }) {
  const { theme } = useTheme();
  // State to handle the Stretched (false) vs Compacted (true) layout
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Background Dim Overlay (Only visible on mobile when drawer is open) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Main Sidebar Container */}
      <aside
        aria-label="CMS Navigation"
        className={`fixed top-0 left-0 h-full z-50 flex flex-col transition-all duration-300 ease-in-out
          rounded-r-[5px]
          ${theme === "dark" ? "bg-dark-theme text-semi-white" : "bg-semi-white text-dark-theme"}
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          ${isCompact ? "w-22" : "w-84"}
        `}
      >
{/* HEADER: Toggle Button & Logo */}
        <div className={`flex items-center p-6 ${isCompact ? "flex-col gap-6" : "flex-row gap-4"}`}>
          {/* Sidebar Toggle Icon */}
          <button
            type="button"
            onClick={() => setIsCompact(!isCompact)}
            className={`flex items-center justify-center w-9 h-9 rounded-lg border transition-colors shrink-0
              ${theme === "dark" ? "border-zinc-700 hover:bg-zinc-800 text-white" : "border-gray-300 hover:bg-gray-100 text-black"}
            `}
            aria-label="Toggle sidebar size"
            aria-expanded={!isCompact}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="9" y1="3" x2="9" y2="21" />
            </svg>
          </button>

          {/* ----- OUR NEW SMART LOGO COMPONENT ----- */}
          <Logo isIconOnly={isCompact} showCms={true} />

          {/* Close Menu Button (Mobile Only) */}
          <button
            type="button"
            onClick={onClose}
            className={`md:hidden p-1 ml-auto rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue
              ${theme === "dark" ? "hover:bg-zinc-800" : "hover:bg-gray-200"}
            `}
          >
            <IoClose className="w-6 h-6 text-[#78766F]" />
          </button>
        </div>

        {/* SCROLLABLE LIST */}
        <div className="flex-1 overflow-y-auto px-4 pb-6 flex flex-col gap-6 no-scrollbar">
          
          {/* Search Bar */}
          {!isCompact && (
            <div className={`flex items-center gap-2 px-3 py-2.5 mx-2 rounded-lg border transition-colors ${theme === "dark" ? "border-zinc-800 bg-[#1A1917]" : "border-gray-200 bg-white"}`}>
              <HiOutlineSearch className="w-5 h-5 text-[#78766F]" />
              <input 
                type="text" 
                placeholder="Search Menu" 
                className={`w-full bg-transparent border-none focus:outline-none text-[14px] font-sans ${theme === "dark" ? "text-white placeholder:text-zinc-500" : "text-black placeholder:text-gray-400"}`} 
              />
            </div>
          )}

          {/* Map through CMS Groups */}
          {cmsMenuGroups.map((group, groupIndex) => (
            <div key={groupIndex} className={`flex flex-col ${isCompact ? "items-center gap-4" : "gap-1"}`}>
              {/* Group Title (Hidden in compact) */}
              {!isCompact && (
                <div className="text-[11px] font-bold text-dark-theme dark:text-semi-white uppercase tracking-wider mb-2 px-2">
                  {group.title}
                </div>
              )}

              {/* Group Links */}
              {group.items.map((link) => {
                const Icon = link.icon;
                // Determine active classes based on theme and link state
                const activeClasses = link.isActive
                  ? theme === "dark"
                    ? "bg-[#0C2B7B] text-semi-white"
                    : "bg-[#EBF2FD] text-primary-blue"
                  : theme === "dark"
                    ? "text-[#78766F] hover:bg-zinc-900 hover:text-white"
                    : "text-[#78766F] hover:bg-gray-100 hover:text-dark-theme";

                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={onClose}
                    title={isCompact ? link.label : ""}
                    aria-current={link.isActive ? "page" : undefined}
                    className={`relative flex items-center rounded-lg font-sans transition-all duration-200
                      ${isCompact ? "mx-auto justify-center w-12 h-12 shrink-0" : "justify-between px-4 py-2.5 w-full"}
                      ${activeClasses}
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={isCompact ? "w-6 h-6 shrink-0" : "w-5 h-5 shrink-0"} />
                      {!isCompact && (
                        <span
                          className={`text-[14px] font-medium ${
                            link.isActive
                              ? theme === "dark"
                                ? "text-semi-white"
                                : "text-primary-blue"
                              : ""
                          }`}
                        >
                          {link.label}
                        </span>
                      )}
                    </div>

                    {/* Badge (Hidden in compact) */}
                    {!isCompact && link.badge && (
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold
                        ${theme === "dark" ? "bg-zinc-800 text-zinc-300" : "bg-gray-200 text-gray-600"}
                      `}>
                        {link.badge}
                      </span>
                    )}

                    {/* Active State Line Indicators */}
                    {link.isActive && (
                      <>
                        {/* Expanded: Left black line (Light mode only) */}
                        {!isCompact && theme !== "dark" && (
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-2/3 w-0.75 bg-primary-blue rounded-r-md" />
                        )}
                        {/* Compact: Bottom line (Blue in light mode, White in dark mode) */}
                        {isCompact && (
                          <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.75 w-6 rounded-t-md ${theme === "dark" ? "bg-white" : "bg-primary-blue"}`} />
                        )}
                      </>
                    )}
                  </a>
                );
              })}
            </div>
          ))}
        </div>

        {/* FOOTER: Need Help Widget */}
        {isCompact ? (
          <div className="mx-auto mb-6 w-12 h-12 rounded-xl bg-linear-to-b from-[#EBF2FD] to-white dark:from-[#081D5B] dark:to-[#040E2D] flex items-center justify-center border border-gray-200 dark:border-zinc-800 shrink-0 shadow-sm cursor-pointer">
             <FaHeadset className="w-5 h-5 text-primary-blue dark:text-single-orange" />
          </div>
        ) : (
          <div className="mx-4 mb-6 p-4 rounded-xl bg-linear-to-br from-[#EBF2FD] to-white dark:from-[#081D5B] dark:to-[#040E2D] border border-gray-200 dark:border-zinc-800 shrink-0 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
            <FaHeadset className="w-6 h-6 text-primary-blue dark:text-single-orange mb-3" />
            <h4 className="font-sans font-bold text-[14px] text-primary-blue dark:text-single-orange mb-1">Need Help?</h4>
            <p className="font-sans text-[12px] text-medium-gray dark:text-[#CBC9C2]">Contact Customer Service</p>
          </div>
        )}
      </aside>
    </>
  );
}