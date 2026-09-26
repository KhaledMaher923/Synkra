// src/components/Auth/AuthSection.jsx
import { useTheme } from "../../context/ThemeContext.jsx";
import SignUpFormApi from "../ApiAuthPages/SignUpFormApi.jsx";
import SignInFormApi from "../ApiAuthPages/SigninFormApi.jsx";
import SignInForm from "./SignInForm.jsx";
import SignUpForm from "./SignUpForm.jsx";


export default function AuthSection({ mode = "signIn" }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`min-h-screen flex items-center justify-center px-4 py-12 ${
        isDark ? "bg-[#0A0A0A]" : "bg-slate-50"
      }`}
      style={
        isDark
          ? {
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }
          : undefined
      }
    >
      {/* {mode === "signIn" ? <SignInForm /> : <SignUpForm />} */}
      {mode === "signIn" ? <SignInFormApi /> : <SignUpFormApi />}
    </section>
  );
}