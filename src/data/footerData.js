/**
 * Footer + Cookie Banner copy and routing.
 *
 * Keeping this here (instead of inline in the components) matches the rest of
 * the project: every section reads its text from a matching file in src/data.
 */

// Top row of the footer. Labels are rendered uppercase by the component, so
// the casing here is only what shows up in screen-reader output / diffs.
export const footerLinks = [
  { id: "privacy", label: "Privacy Policy", href: "/privacy" },
  { id: "terms", label: "Terms of Service", href: "/terms" },
  { id: "cookies", label: "Cookie Policy", href: "/cookie-policy" },
  { id: "help", label: "Help", href: "/help" },
  { id: "jobs", label: "Jobs", href: "/jobs" },
  { id: "integrations", label: "App Integrations", href: "/integrations" },
  { id: "partners", label: "Partner Program", href: "/partners" },
  // Not a route: Footer.jsx intercepts this one to reopen the cookie banner.
  // It also makes the count even, so the mobile grid is 4 clean rows of 2.
  { id: "cookie-settings", label: "Cookie Settings", href: "#" },
];

// Social icons are resolved to react-icons components inside Footer.jsx so this
// file stays free of JSX (it is a .js module, like the other data files).
export const socialLinks = [
  { id: "x", label: "X (Twitter)", href: "https://x.com/synkra", icon: "x" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/synkra", icon: "linkedin" },
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/synkra", icon: "facebook" },
  { id: "rss", label: "RSS Feed", href: "/rss.xml", icon: "rss" },
];

export const footerCopyright = "\u00A9 2026 Synkra Inc.";

export const cookieBannerData = {
  // Split around the inline link so "Cookie policy" can be a NavLink.
  message:
    "We use cookies to improve your experience and understand how you use Synkra. We do not sell your data.",
  linkLabel: "Cookie policy",
  linkHref: "/cookie-policy",

  manageLabel: "Manage preferences",
  acceptLabel: "Accept All",

  // Persists the dismissal so the banner does not reappear on every route change.
  storageKey: "synkra_cookie_consent",

  // Footer's "Cookie Settings" link dispatches this on window; CookieBanner
  // listens for it and un-dismisses itself without a page reload.
  resetEventName: "reset_cookie_consent",
};
