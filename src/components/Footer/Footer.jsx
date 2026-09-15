import { NavLink } from "react-router-dom";
import { FaXTwitter, FaLinkedinIn, FaFacebookF, FaRss } from "react-icons/fa6";
import { useTheme } from "../../context/ThemeContext.jsx";
import Logo from "../UI/Logo.jsx";
import {
  footerLinks,
  socialLinks,
  footerCopyright,
  cookieBannerData,
} from "../../data/footerData.js";

// Maps the plain `icon` keys in footerData to their react-icons components.
const SOCIAL_ICONS = {
  x: FaXTwitter,
  linkedin: FaLinkedinIn,
  facebook: FaFacebookF,
  rss: FaRss,
};

/**
 * Footer Component
 *
 * Figma Specs:
 * - Light Background: #FCFCFD
 * - Dark Background: #131210
 * - Link Color: #78766F, hover #1A56DB
 * - Desktop (min-[921px]): links spread across one row, logo left / socials right
 * - Mobile (max-[920px]): links in a 2-column grid, everything else centered
 */
export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // "Cookie Settings" is not a route: clear the stored choice and tell the
  // banner to show itself again. preventDefault also stops NavLink from
  // navigating, since react-router skips links whose click was defaulted.
  function handleCookieSettings(event) {
    event.preventDefault();
    try {
      localStorage.removeItem(cookieBannerData.storageKey);
    } catch {
      // Storage unavailable: the event below still reopens the banner.
    }
    window.dispatchEvent(new Event(cookieBannerData.resetEventName));
  }

  return (
    <footer
      className={`w-full px-4 min-[921px]:px-16 py-12 min-[921px]:py-16 transition-colors duration-200 ${
        isDark ? "bg-dark-theme" : "bg-semi-white"
      }`}
    >
      {/* Top section: policy / company links */}
      <nav
        aria-label="Footer"
        className="grid grid-cols-2 gap-y-6 gap-x-2 min-[921px]:flex min-[921px]:flex-row min-[921px]:justify-between min-[921px]:gap-x-4"
      >
        {/* On mobile the two grid columns are justified to the outer edges:
            odd items hug the left margin, even items hug the right. */}
        {footerLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.href}
            onClick={link.id === "cookie-settings" ? handleCookieSettings : undefined}
            className="font-sans text-[13px] font-medium uppercase tracking-wide text-[#78766F] hover:text-primary-blue transition-colors max-[920px]:odd:text-left max-[920px]:even:text-right"
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      {/* Bottom section: logo, socials, copyright.
          Mobile: one centered column. Desktop: logo far left, the rest far right. */}
      <div className="mt-16 flex flex-col items-center text-center gap-8 min-[921px]:mt-20 min-[921px]:flex-row min-[921px]:items-center min-[921px]:justify-between min-[921px]:text-left min-[921px]:gap-4">
        {/* Logo.jsx hardcodes h-6 for the navbar; the footer mark is larger, so
            the height is overridden here rather than in the shared component. */}
        <Logo className="[&_img]:h-10" />

        <div className="flex flex-col items-center gap-6 min-[921px]:flex-row min-[921px]:gap-6">
          <ul className="flex items-center justify-center gap-4">
            {socialLinks.map((social) => {
              const Icon = SOCIAL_ICONS[social.icon];
              return (
                <li key={social.id}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      isDark
                        ? "bg-[#333230] text-semi-white hover:bg-[#44423F]"
                        : "bg-gray-200 text-medium-gray hover:bg-gray-300"
                    }`}
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>

          <p className="font-sans text-[13px] text-[#78766F]">{footerCopyright}</p>
        </div>
      </div>
    </footer>
  );
}
