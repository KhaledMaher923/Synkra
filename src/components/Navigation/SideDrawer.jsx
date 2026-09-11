import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import {
   HiOutlineSearch,
   HiOutlineHome,
   HiOutlineTrendingUp,
   HiOutlineDocumentText,
   HiOutlineLightningBolt,
   HiOutlineTag,
   HiOutlineShieldCheck,
   HiOutlineOfficeBuilding,
   HiOutlineViewList
} from "react-icons/hi";
import { FaHeadset } from "react-icons/fa6";
import { useTheme } from "../../context/ThemeContext.jsx";
import Logo from "../UI/Logo.jsx";

// Same icon set as the original Figma CMS mock — only the label + route were
// swapped so this drawer links straight into the public site's real routing.
const cmsMenuGroups = [
  {
    title: "MAIN MENU",
    items: [
      { id: "platform", path: "/platform", label: "Platform", icon: HiOutlineHome },
      { id: "solutions", path: "/", label: "Solutions", icon: HiOutlineTrendingUp },
      { id: "resources", path: "/about", label: "Resources", icon:   HiOutlineLightningBolt },
    ]
  },
  {
    title: "CONTENT",
    items: [
      { id: "changelog", path: "/changelog", label: "Changelog", icon: HiOutlineDocumentText },
      { id: "pricing", path: "/pricing", label: "Pricing", icon: HiOutlineTag },
      {id:"faq", path: "/faq", label: "FAQ", icon: HiOutlineViewList,isActive: false },
    ]
  },
  {
    title: "WORKSPACE",
    items: [
      { id: "roles", label: "User Roles", icon: HiOutlineShieldCheck },
      { id: "about", path: "/about", label: "About Synkra", icon: HiOutlineOfficeBuilding },
    ]
  }
];

export default function SideDrawer({ isOpen, onClose, isMobile, isCompact, onToggleCompact }) {
  const { theme } = useTheme();
  const drawerRef = useRef(null);
  const location = useLocation();

  useEffect(() => { onClose(); }, [location.pathname, location.hash, onClose]);

  useEffect(() => {
    if (!isOpen || !isMobile) return undefined;
    const previousFocus = document.activeElement;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement && previousFocus.getClientRects().length) previousFocus.focus();
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, isMobile, onClose]);

  return (
    <>
      {/* Background Dim Overlay - min-[921px]:hidden ensures it only shows on tablet/mobile */}
      {isOpen && (
        <div
          className="navigation-overlay fixed inset-x-0 bottom-0 bg-black/50 z-40 transition-opacity min-[921px]:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Main Sidebar Container - Sits exactly under the header via .navigation-drawer, so the Logo up top never overlaps */}
      <aside
        ref={drawerRef}
        id="side-navigation"
        inert={!isOpen ? "true" : undefined}
        aria-label="Mobile Navigation"
        className={`navigation-drawer fixed left-0 z-50 flex flex-col transition-all duration-300 ease-in-out border-r shadow-xl
          ${theme === "dark" ? "bg-dark-theme border-zinc-800 text-semi-white" : "bg-semi-white border-gray-200 text-dark-theme"}
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          ${isCompact ? "w-22" : "w-84"} max-w-[85vw] min-[921px]:hidden
        `}
      >
        {/* HEADER: compact toggle + Logo only — closing is already handled by the header hamburger (it becomes an X) and by clicking outside/Escape */}
        <div className={`flex items-center p-4 shrink-0 ${isCompact ? "flex-col gap-6" : "flex-row gap-4"}`}>
          <button
            type="button"
            onClick={onToggleCompact}
            className={`flex items-center justify-center w-9 h-9 rounded-lg border transition-colors shrink-0
              ${theme === "dark" ? "border-zinc-700 hover:bg-zinc-800 text-white" : "border-gray-300 hover:bg-gray-100 text-black"}
            `}
            aria-label="Toggle sidebar size"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="9" y1="3" x2="9" y2="21" />
            </svg>
          </button>

          <Logo isIconOnly={isCompact} showCms={true} />
        </div>

        {/* SCROLLABLE CONTENT */}
        <div id="side-navigation-content" className="min-h-0 flex-1 overflow-y-auto px-4 pb-6 flex flex-col gap-6 no-scrollbar">

          {/* Search Bar */}
          {!isCompact && (
            <div className={`flex items-center gap-2 px-3 py-2.5 mx-2 rounded-lg border transition-colors ${theme === "dark" ? "border-zinc-800 bg-[#1A1917]" : "border-gray-200 bg-white"}`}>
              <HiOutlineSearch className="w-5 h-5 text-[#78766F]" />
              <input type="text" placeholder="Search Menu" aria-label="Search Menu" className="w-full bg-transparent border-none focus:outline-none text-[14px] font-sans" />
            </div>
          )}

          {/* Figma Groups — every item with a route is a real NavLink, so the
              blue "active" state only ever reflects the page you're actually on. */}
          {cmsMenuGroups.map((group, groupIndex) => (
            <div key={groupIndex} className={`flex flex-col ${isCompact ? "items-center gap-4" : "gap-1"}`}>
              {!isCompact && <div className="text-[11px] font-bold text-dark-theme dark:text-semi-white uppercase tracking-wider mb-2 px-2">{group.title}</div>}
              {group.items.map((link) => {
                const Icon = link.icon;
                const isActive = Boolean(link.path) && link.path === location.pathname + location.hash;
                const Destination = link.path ? NavLink : "button";

                const activeClasses = isActive
                  ? theme === "dark" ? "bg-[#0C2B7B] text-semi-white" : "bg-[#EBF2FD] text-primary-blue"
                  : theme === "dark" ? "text-[#78766F] hover:bg-zinc-900 hover:text-white" : "text-[#78766F] hover:bg-gray-100 hover:text-dark-theme";

                return (
                  <Destination
                    key={link.id}
                    {...(link.path ? { to: link.path, end: true } : { type: "button", disabled: true })}
                    onClick={onClose}
                    className={`relative flex items-center rounded-lg font-sans transition-all duration-200 ${isCompact ? "mx-auto justify-center w-12 h-12 shrink-0" : "justify-between px-4 py-2.5 w-full"} ${activeClasses}`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={isCompact ? "w-6 h-6 shrink-0" : "w-5 h-5 shrink-0"} />
                      {!isCompact && <span className="text-[14px] font-medium">{link.label}</span>}
                    </div>
                  </Destination>
                );
              })}
            </div>
          ))}
        </div>

        {/* FOOTER: Need Help Widget — a sibling of the scrollable content, not inside it, so it stays pinned at the bottom instead of scrolling with the list */}
        {isCompact ? (
          <div className="shrink-0 mx-auto mb-6 w-12 h-12 rounded-xl bg-linear-to-b from-[#EBF2FD] to-white dark:from-[#081D5B] dark:to-[#040E2D] flex items-center justify-center border border-gray-200 dark:border-zinc-800 shadow-sm cursor-pointer">
             <FaHeadset className="w-5 h-5 text-primary-blue dark:text-single-orange" />
          </div>
        ) : (
          <div className="shrink-0 mx-4 mb-6 p-4 rounded-xl bg-linear-to-br from-[#EBF2FD] to-white dark:from-[#081D5B] dark:to-[#040E2D] border border-gray-200 dark:border-zinc-800 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
            <FaHeadset className="w-6 h-6 text-primary-blue dark:text-single-orange mb-3" />
            <h4 className="font-sans font-bold text-[14px] text-primary-blue dark:text-single-orange mb-1">Need Help?</h4>
            <p className="font-sans text-[12px] text-medium-gray dark:text-[#CBC9C2]">Contact Customer Service</p>
          </div>
        )}
      </aside>
    </>
  );
}
