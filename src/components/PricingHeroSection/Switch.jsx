
export function Switch({ checked, onChange }) {
  return (
    <label className="inline-flex items-center gap-2.5 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="hidden"
      />
      <div 
      className={`w-12 h-[6.5] ${checked?'bg-blue-200':'bg-[#ccc]'} flex items-center border border-[#10399B] rounded-3xl relative transition-colors ease-in-out p-1 shadow-xl`}>
        <div className={`w-4 h-4 rounded-full shadow transition-transform duration-200 ease-in-out ${checked?'bg-[#2563eb] translate-x-5.5':'bg-white'}`}></div>
      </div>
    </label>
  );
}