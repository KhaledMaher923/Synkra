import { useTheme } from "../../context/ThemeContext";

export function Switch({ checked, onChange }) {
  const {theme} = useTheme();
  return (
    <label className="inline-flex items-center gap-2.5 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="hidden"
      />
      <div 
      className={`w-12 h-6.5 ${theme === 'dark'?checked?'bg-[#081D5B]':'bg-white' :checked?'bg-blue-200':'bg-[#ccc]'} flex items-center border ${theme === 'dark'?'border-[#4783EB]':`border-[#10399B]`} rounded-full relative transition-colors ease-in-out p-1 shadow-xl`}>
        <div className={`w-4 h-4 rounded-full shadow transition-transform duration-200 ease-in-out ${checked?`${theme==='dark'?'bg-[#75A2F0]':'bg-[#2563eb]'} translate-x-5.5`:`${theme==='dark'?'bg-[#ccc]':'bg-white'}`}`}></div>
      </div>
    </label>
  );
}
