import {Routes, Route} from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";

import { Signin } from "../pages/auth/Signin";
import { Signup } from "../pages/auth/Signup";
import { Solutions } from "../pages/Solutions";
import { Platform } from "../pages/platform";
import { Changelog } from "../pages/Changelog";
import { Pricing } from "../pages/Pricing";
import { About } from "../pages/resources/about";
import { Blog } from "../pages/resources/blog";
import { BlogDetails } from "../pages/resources/BlogDetails";
import { NotFound } from "../pages/NotFound";


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
            </Route>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}