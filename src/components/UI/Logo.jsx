// src/components/UI/Logo.jsx
import { useTheme } from "../../context/ThemeContext.jsx";

export default function Logo({ className = "" }) {
  const { theme } = useTheme();

  return (
    <a href="/" className={`inline-flex items-center gap-2 select-none ${className}`} aria-label="Synkra Home">
      {/* Synkra S-Lightning Icon with Gradient */}
      <svg width="22" height="24" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        <path
          d="M13.43 1.005C13.614 0.8435 13.403 0.5565 13.194 0.6843L0.755 8.3017C0.696 8.338 0.659 8.4026 0.659 8.4722V9.7487C0.659 9.8324 0.712 9.9072 0.79 9.9363L2.505 10.57C2.527 10.5782 2.551 10.5824 2.574 10.5824H8.753C8.938 10.5824 9.024 10.8108 8.885 10.9326L0.919 17.9376C0.735 18.0991 0.947 18.3861 1.155 18.2583L13.593 10.6416C13.653 10.6049 13.689 10.5394 13.689 10.4691V9.1921C13.688 9.1093 13.636 9.0355 13.559 9.0066L11.857 8.3728C11.835 8.3644 11.811 8.3602 11.788 8.3602H5.609C5.425 8.3602 5.338 8.1318 5.477 8.01L13.43 1.005Z"
          fill="url(#synkra_bolt_gradient)"
        />
        <defs>
          <linearGradient id="synkra_bolt_gradient" x1="0.659" y1="9.5" x2="13.689" y2="9.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1A56DB" />
            <stop offset="0.45" stopColor="#0D9488" />
            <stop offset="1" stopColor="#FFA924" />
          </linearGradient>
        </defs>
      </svg>

      {/* Brand Typography */}
      <span
        className={theme === "dark" ? "font-header text-[22px] font-bold tracking-tight leading-none text-semi-white" : "font-header text-[22px] font-bold tracking-tight leading-none text-dark-theme"}
      >
        synkra
      </span>
    </a>
  );
}