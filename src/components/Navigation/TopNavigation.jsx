// src/components/Navigation/TopNavigation.jsx
import { useState, useRef, useEffect } from "react";
import { HiOutlineMenu, HiOutlineChevronDown } from "react-icons/hi";
import { useTheme } from "../../context/ThemeContext.jsx";
import { navigationLinks } from "../../data/navigationData.js";
import ThemeToggle from "../UI/ThemeToggle.jsx";
import Logo from "../UI/Logo.jsx";

export default function TopNavigation({ onOpenMobileMenu }) {
  const { theme } = useTheme();
  // State to track the currently active link interactively
  const [activeLink, setActiveLink] = useState("solutions");
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
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
        className={`w-full h-20 px-4 md:px-16 flex items-center justify-between transition-colors duration-200
          ${theme === "dark" ? "bg-dark-theme" : "bg-light-theme"}
        `}
      >
        {/* LEFT GROUP: Logo + Desktop Links aligned together */}
        <div className="flex items-center gap-8 lg:gap-12">
          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="md:hidden p-1.5 rounded-lg text-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue"
            onClick={onOpenMobileMenu}
            aria-label="Open mobile navigation menu"
          >
            <HiOutlineMenu className={theme === "dark" ? "text-semi-white" : "text-dark-theme"} />
          </button>

          {/* Logo */}
          <Logo />

          {/* Desktop Nav Links (Grouped next to Logo) */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 list-none p-0 m-0">
            {navigationLinks.map((link) => {
              const isActive = activeLink === link.id;

              // Dropdown Item (Resources)
              if (link.hasDropdown) {
                return (
                  <li
                    key={link.id}
                    ref={dropdownRef}
                    className="relative flex items-center h-20"
                    onMouseEnter={() => setIsResourcesOpen(true)}
                    onMouseLeave={() => setIsResourcesOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setIsResourcesOpen((prev) => !prev)}
                      aria-haspopup="true"
                      aria-expanded={isResourcesOpen}
                      className={`flex items-center gap-1 font-sans text-[14px] font-normal leading-[175%] uppercase transition-colors duration-200 cursor-pointer
                        ${isActive
                          ? "text-primary-blue"
                          : theme === "dark"
                          ? "text-[#78766F] hover:text-semi-white"
                          : "text-[#78766F] hover:text-dark-theme"
                        }
                      `}
                    >
                      <span>{link.label}</span>
                      <HiOutlineChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${isResourcesOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Desktop Dropdown Menu */}
                    {isResourcesOpen && (
                      <div
                        className={`absolute top-17.5 left-0 w-48 py-2 rounded-lg shadow-xl border transition-colors
                          ${theme === "dark"
                            ? "bg-[#1A1917] border-zinc-800 text-semi-white"
                            : "bg-semi-white border-gray-200 text-dark-theme"
                          }
                        `}
                      >
                        <ul className="list-none p-0 m-0 flex flex-col">
                          {link.dropdownItems.map((item) => (
                            <li key={item.id}>
                              <a
                                href={item.href}
                                onClick={() => {
                                  setActiveLink(link.id);
                                  setIsResourcesOpen(false);
                                }}
                                className={`block px-4 py-2 text-[14px] font-sans transition-colors
                                  ${theme === "dark"
                                    ? "hover:bg-zinc-800 hover:text-[#2DD4BF]"
                                    : "hover:bg-gray-100 hover:text-primary-blue"
                                  }
                                `}
                              >
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              }

              // Standard Link Item
              return (
                <li key={link.id} className="relative flex flex-col justify-center h-20">
                  <a
                    href={link.href}
                    onClick={() => setActiveLink(link.id)}
                    aria-current={isActive ? "page" : undefined}
                    className={`font-sans text-[14px] font-normal leading-[175%] uppercase transition-colors duration-200
                      ${isActive
                        ? "text-primary-blue"
                        : theme === "dark"
                        ? "text-[#78766F] hover:text-semi-white"
                        : "text-[#78766F] hover:text-dark-theme"
                      }
                    `}
                  >
                    {link.label}
                  </a>

                  {/* Underline Indicator */}
                  {isActive && (
                    <span
                      className={`absolute bottom-6 left-0 right-0 h-0.5 w-full
                        ${theme === "dark" ? "bg-semi-white" : "bg-dark-theme"}
                      `}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* RIGHT GROUP: Theme Toggle + Auth Buttons */}
        <div className="flex items-center gap-4 md:gap-6">
          <ThemeToggle />

          {/* Sign In Link (Desktop Only) */}
          <a
            href="#signin"
            className={`hidden md:block font-sans text-[14px] font-medium transition-colors
              ${theme === "dark" ? "text-[#2DD4BF] hover:text-[#5EEAD4]" : "text-single-orange hover:text-[#FFB84D]"}
            `}
          >
            Sign In
          </a>

          {/* Sign Up Button (Desktop + Mobile) */}
          <a
            href="#signup"
            className="flex items-center justify-center w-32 h-11 px-5 py-2 rounded-lg font-sans text-[14px] font-medium text-white bg-primary-blue hover:bg-blue-700 transition-colors"
          >
            Sign Up
          </a>
        </div>
      </nav>
    </header>
  );
}