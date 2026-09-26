import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { CookiesProvider } from "react-cookie";
import { AuthApiProvider } from "./context/AuthApiContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CookiesProvider>
      <ThemeProvider>
        <BrowserRouter>
          {/* <AuthProvider>
          <App />
        </AuthProvider> */}
          <AuthApiProvider>
            <App />
          </AuthApiProvider>
        </BrowserRouter>
      </ThemeProvider>
    </CookiesProvider>
  </StrictMode>,
);
