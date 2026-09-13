import { useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import TopNavigation from "../components/Navigation/TopNavigation";
import SideDrawer from "../components/Navigation/SideDrawer";
import AnnouncementBar from "../components/AnnouncementBar/AnnouncementBar";

// Keep in sync with the max-[920px] / min-[921px] breakpoints used in
// TopNavigation and SideDrawer.
const MOBILE_QUERY = "(max-width: 920px)";

export function RootLayout(){
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCompact, setIsCompact] = useState(false);
    const [isMobile, setIsMobile] = useState(
        () => typeof window !== "undefined" && window.matchMedia(MOBILE_QUERY).matches
    );

    // Track the 920px breakpoint so TopNavigation/SideDrawer know when the
    // mobile hamburger + drawer are the active navigation mode.
    useEffect(() => {
        const mediaQuery = window.matchMedia(MOBILE_QUERY);
        const handleChange = (event) => {
            setIsMobile(event.matches);
            if (!event.matches) setIsMobileMenuOpen(false);
        };
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    // Stable handler identities: SideDrawer re-runs an effect whenever
    // `onClose` changes reference, so an inline arrow here would create a
    // new function on every render and close the drawer the instant it opened.
    const handleToggleMobileMenu = useCallback(() => {
        setIsMobileMenuOpen((open) => !open);
    }, []);

    const handleCloseMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(false);
    }, []);

    const handleToggleCompact = useCallback(() => {
        setIsCompact((compact) => !compact);
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <AnnouncementBar/>
            <TopNavigation
                isMobileMenuOpen={isMobileMenuOpen}
                onOpenMobileMenu={handleToggleMobileMenu}
                isMobile={isMobile}
            />
            <SideDrawer
                isOpen={isMobileMenuOpen}
                onClose={handleCloseMobileMenu}
                isMobile={isMobile}
                isCompact={isCompact}
                onToggleCompact={handleToggleCompact}
            />
            <main>
                <Outlet />
            </main>

        </div>
    );
}
