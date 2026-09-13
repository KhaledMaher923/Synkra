import { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiOutlineMenu, HiOutlineChevronDown } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useTheme } from "../../context/ThemeContext.jsx";
import { navigationLinks } from "../../data/navigationData.js";
import ThemeToggle from "../UI/ThemeToggle.jsx";
import Logo from "../UI/Logo.jsx";

export default function TopNavigation({ onOpenMobileMenu, isMobileMenuOpen }) {
  const { theme } = useTheme();
  const location = useLocation();
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsResourcesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full relative z-40">
      <nav
        aria-label="Main Navigation"
        className={`w-full h-20 px-4 min-[921px]:px-16 flex items-center justify-between transition-colors duration-200 ${theme === "dark" ? "bg-dark-theme" : "bg-light-theme"}`}
      >
        {/* LEFT GROUP: Hamburger + Logo */}
        <div className="flex items-center gap-3 min-[921px]:gap-12">

          {/* Mobile Hamburger / Close Button - Visible up to 920px */}
          <button
            type="button"
            className="min-[921px]:hidden p-1.5 rounded-lg text-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue"
            onClick={onOpenMobileMenu}
            aria-controls="side-navigation"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close mobile navigation menu" : "Open mobile navigation menu"}
          >
            {isMobileMenuOpen ? (
              <IoClose className={theme === "dark" ? "text-semi-white" : "text-dark-theme"} />
            ) : (
              <HiOutlineMenu className={theme === "dark" ? "text-semi-white" : "text-dark-theme"} />
            )}
          </button>

          {/* Logo Component - Never shrinks, always full size */}
          <Logo isIconOnly={false} />

          {/* Desktop Nav Links - Hidden up to 920px */}
          <ul className="max-[920px]:hidden flex items-center gap-4 min-[1200px]:gap-8 list-none p-0 m-0">
            {navigationLinks.map((link) => {
              const isActive = link.hasDropdown
                ? link.dropdownItems.some((item) => location.pathname + location.hash === item.path)
                : location.pathname === link.path && !location.hash;

              if (link.hasDropdown) {
                return (
                  <li
                    key={link.id}
                    ref={dropdownRef}
                    className="relative flex items-center h-20"
                    onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setIsResourcesOpen(false); }}
                    onKeyDown={(event) => { if (event.key === "Escape") { setIsResourcesOpen(false); dropdownRef.current?.querySelector("button")?.focus(); } }}
                  >
                    <button
                      type="button"
                      onClick={() => setIsResourcesOpen((prev) => !prev)}
                      aria-controls="resources-navigation"
                      aria-expanded={isResourcesOpen}
                      className={`flex items-center gap-1 font-sans text-[14px] font-normal leading-[175%] uppercase transition-colors duration-200 cursor-pointer ${
                        isActive ? "text-primary-blue" : theme === "dark" ? "text-[#78766F] hover:text-semi-white" : "text-[#78766F] hover:text-dark-theme"
                      }`}
                    >
                      <span>{link.label}</span>
                      <HiOutlineChevronDown className={`w-4 h-4 transition-transform duration-200 ${isResourcesOpen ? "rotate-180" : ""}`} />
                    </button>

                    {isResourcesOpen && (
                      <div id="resources-navigation" className={`absolute top-17.5 left-0 w-48 py-2 rounded-lg shadow-xl border transition-colors ${theme === "dark" ? "bg-[#1A1917] border-zinc-800 text-semi-white" : "bg-semi-white border-gray-200 text-dark-theme"}`}>
                        <ul className="list-none p-0 m-0 flex flex-col">
                          {link.dropdownItems.map((item) => (
                            <li key={item.id}>
                              <NavLink
                                to={item.path} end
                                aria-current={location.pathname + location.hash === item.path ? "page" : "false"}
                                onClick={() => setIsResourcesOpen(false)}
                                className={`block aria-[current=page]:text-primary-blue px-4 py-2 text-[14px] font-sans transition-colors ${theme === "dark" ? "hover:bg-zinc-800 hover:text-[#2DD4BF]" : "hover:bg-gray-100 hover:text-primary-blue"}`}
                              >
                                {item.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              }

              return (
                <li key={link.id} className="relative flex flex-col justify-center h-20">
                  <NavLink
                    to={link.path} end
                    aria-current={isActive ? "page" : "false"}
                    className={`font-sans text-[14px] font-normal leading-[175%] uppercase transition-colors duration-200 ${
                      isActive ? "text-primary-blue" : theme === "dark" ? "text-[#78766F] hover:text-semi-white" : "text-[#78766F] hover:text-dark-theme"
                    }`}
                  >
                    {link.label}
                  </NavLink>
                  {isActive && (
                    <span className={`absolute bottom-6 left-0 right-0 h-0.5 w-full ${theme === "dark" ? "bg-semi-white" : "bg-dark-theme"}`} />
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* RIGHT GROUP: Theme Toggle + Auth Buttons */}
        <div className="flex items-center gap-2 min-[921px]:gap-6 shrink-0">
          <ThemeToggle />

          <NavLink
            to="/signin"
            className={`max-[920px]:hidden font-sans text-[14px] font-medium transition-colors ${theme === "dark" ? "text-[#2DD4BF] hover:text-[#5EEAD4]" : "text-single-orange hover:text-[#FFB84D]"}`}
          >
            Sign In
          </NavLink>

          <NavLink
            to="/signup"
            className="flex items-center justify-center w-24 min-[921px]:w-32 h-11 px-3 py-2 rounded-lg font-sans text-[14px] font-medium text-white bg-primary-blue hover:bg-blue-700 transition-colors"
          >
            Sign Up
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
