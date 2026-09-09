import { useState } from "react";
import { Outlet} from "react-router-dom";
import TopNavigation from "../components/Navigation/TopNavigation";
import AnnouncementBar from "../components/AnnouncementBar/AnnouncementBar";
export function RootLayout(){
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <div className="flex flex-col min-h-screen">
            <AnnouncementBar/>
            <TopNavigation onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />
            <main>
                <Outlet />
            </main>
            
        </div>
    );
}