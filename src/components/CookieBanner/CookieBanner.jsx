import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { cookieBannerData } from "../../data/footerData.js";

// Matches the duration-300 on the wrapper below; the banner stays mounted for
// this long so the slide-down/fade-out can actually play before it unmounts.
const DISMISS_ANIMATION_MS = 300;

/**
 * CookieBanner Component
 *
 * Figma Specs:
 * - Pinned to the bottom of the viewport (fixed bottom-0 left-0 w-full z-50)
 * - Background is ALWAYS dark (#1A1917) in both themes, so it needs its own
 *   top border to separate it from the dark footer in dark mode.
 * - Desktop (min-[921px]): text left, buttons right
 * - Mobile (max-[920px]): text on top, buttons side by side underneath
 *
 * Consent is stored under `synkra_cookie_consent` ("accepted" | "managed").
 * Any stored value keeps the banner hidden on later visits. The footer's
 * "Cookie Settings" link clears it and fires `reset_cookie_consent` on window,
 * which brings the banner straight back without a reload.
 */
export default function CookieBanner() {
  const [hasConsent, setHasConsent] = useState(() => {
    // localStorage throws in private-mode / blocked-storage browsers.
    try {
      return localStorage.getItem(cookieBannerData.storageKey) !== null;
    } catch {
      return false;
    }
  });

  // Drives the exit transition: set first, then the component unmounts.
  const [isDismissing, setIsDismissing] = useState(false);

  // Held so a pending dismissal cannot hide a banner that was reopened in the
  // meantime, and so it never fires after unmount.
  const dismissTimerRef = useRef(null);

  // Re-open when the footer's "Cookie Settings" link asks for it. Resetting
  // isDismissing too, so a banner reopened right after a dismissal animates in
  // rather than mounting mid-slide.
  useEffect(() => {
    function handleReset() {
      clearTimeout(dismissTimerRef.current);
      setIsDismissing(false);
      setHasConsent(false);
    }

    window.addEventListener(cookieBannerData.resetEventName, handleReset);
    return () => {
      window.removeEventListener(cookieBannerData.resetEventName, handleReset);
      clearTimeout(dismissTimerRef.current);
    };
  }, []);

  function dismiss(choice) {
    try {
      localStorage.setItem(cookieBannerData.storageKey, choice);
    } catch {
      // Storage unavailable: still hide it for this session.
    }
    setIsDismissing(true);
    dismissTimerRef.current = setTimeout(
      () => setHasConsent(true),
      DISMISS_ANIMATION_MS
    );
  }

  if (hasConsent) return null;

  return (
    <aside
      aria-label="Cookie notice"
      aria-hidden={isDismissing}
      className={`fixed bottom-0 left-0 w-full z-50 border-t border-[#3A3835] bg-[#1A1917] px-4 py-4 min-[921px]:px-16 min-[921px]:py-5 transition-all duration-300 ease-out ${
        isDismissing ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="flex flex-col gap-4 min-[921px]:flex-row min-[921px]:items-center min-[921px]:justify-between min-[921px]:gap-8">
        <p className="font-sans text-[13px] leading-relaxed text-[#CBC9C2]">
          {cookieBannerData.message}{" "}
          <NavLink
            to={cookieBannerData.linkHref}
            className="underline underline-offset-2 hover:text-semi-white transition-colors"
          >
            {cookieBannerData.linkLabel}
          </NavLink>
        </p>

        <div className="flex items-center gap-3 shrink-0">
          {/* The real preferences modal lands later; for now this records the
              choice as "managed" so the banner does not nag on every visit. */}
          <button
            type="button"
            onClick={() => dismiss("managed")}
            className="flex-1 min-[921px]:flex-none whitespace-nowrap rounded-lg border border-gray-400 bg-transparent px-4 py-2.5 font-sans text-[14px] font-medium text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            {cookieBannerData.manageLabel}
          </button>
          <button
            type="button"
            onClick={() => dismiss("accepted")}
            className="flex-1 min-[921px]:flex-none whitespace-nowrap rounded-lg bg-primary-blue px-4 py-2.5 font-sans text-[14px] font-medium text-white hover:bg-blue-700 transition-colors cursor-pointer"
          >
            {cookieBannerData.acceptLabel}
          </button>
        </div>
      </div>
    </aside>
  );
}
