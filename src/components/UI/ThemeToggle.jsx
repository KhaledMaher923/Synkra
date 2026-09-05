import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext.jsx";

export function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={`flex h-8 w-16 cursor-pointer rounded-full border p-1 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-blue ${
        isDark ? "border-zinc-800 bg-zinc-950" : "border-zinc-200 bg-white"
      } ${className}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      aria-pressed={isDark}
    >
      <span className="flex w-full items-center justify-between">
        <span
          className={`flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-300 ${
            isDark ? "translate-x-0 bg-zinc-800" : "translate-x-8 bg-gray-200"
          }`}
        >
          {isDark ? (
            <Moon className="h-4 w-4 text-white" strokeWidth={1.5} aria-hidden="true" />
          ) : (
            <Sun className="h-4 w-4 text-gray-700" strokeWidth={1.5} aria-hidden="true" />
          )}
        </span>
        <span
          className={`flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-300 ${
            isDark ? "bg-transparent" : "-translate-x-8"
          }`}
        >
          {isDark ? (
            <Sun className="h-4 w-4 text-gray-500" strokeWidth={1.5} aria-hidden="true" />
          ) : (
            <Moon className="h-4 w-4 text-black" strokeWidth={1.5} aria-hidden="true" />
          )}
        </span>
      </span>
    </button>
  );
}

export default ThemeToggle;