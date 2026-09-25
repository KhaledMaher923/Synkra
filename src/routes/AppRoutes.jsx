import {Routes, Route} from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";

import { Signin } from "../pages/auth/Signin";
import { Signup } from "../pages/auth/Signup";
import { Solutions } from "../pages/Solutions";
import { Platform } from "../pages/Platform";
import { Changelog } from "../pages/Changelog";
import { Pricing } from "../pages/Pricing";
import { About } from "../pages/resources/About";
import { Blog } from "../pages/resources/Blog";
import { BlogDetails } from "../pages/resources/BlogDetails";
import { PrivacyPolicy } from "../pages/PrivacyPolicy";
import { TermsOfService } from "../pages/TermsOfService";
import { CookiePolicy } from "../pages/CookiePolicy";
import { HelpCenter } from "../pages/HelpCenter";
import { Careers } from "../pages/Careers";
import { AppIntegrations } from "../pages/AppIntegrations";
import { PartnerProgram } from "../pages/PartnerProgram";
import { NotFound } from "../pages/NotFound";
import { ContactUs } from "../pages/ContactUs";


export function AppRoutes(){
    return (
        <Routes>
            <Route element={<RootLayout />}>
                <Route path="/" element={<Solutions/>} />
                <Route path="/platform" element={<Platform/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/blog" element={<Blog/>} />
                <Route path="/blog-detail" element={<BlogDetails/>} />
                <Route path="/changelog" element={<Changelog/>} />
                <Route path="/pricing" element={<Pricing/>} />

                {/* Footer links */}
                <Route path="/privacy" element={<PrivacyPolicy/>} />
                <Route path="/terms" element={<TermsOfService/>} />
                <Route path="/cookie-policy" element={<CookiePolicy/>} />
                <Route path="/help" element={<HelpCenter/>} />
                <Route path="/jobs" element={<Careers/>} />
                <Route path="/integrations" element={<AppIntegrations/>} />
                <Route path="/partners" element={<PartnerProgram/>} />
                <Route path="/ContactUs" element={<ContactUs/>} />
                {/* Inside the layout so a 404 still renders the navbar + footer. */}
                <Route path="*" element={<NotFound/>}/>
            </Route>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
    );
}
