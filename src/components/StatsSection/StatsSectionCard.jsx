import { useTheme } from "../../context/ThemeContext.jsx";

export default function StatsSectionCard({ info }) {
  const { theme } = useTheme();
  const classes = theme == "dark"
        ? "bg-[#131210]"
        : "bg-[#FCFCFD]";

  return (
    <div
      className={`text-center border-1 ${theme == "dark" ? "border-[#333230] bg-[#131210]" : "border-[#E4E3DF]"} rounded-[12px] p-[18px]  ${classes}  md:p-[32px]`}
    >
      <h1 className={`text-[28px] font-bold  font-header md:text-[40px] ${theme == "dark" ? "text-[#75A2F0]" : "text-[#1A56DB]"}`}>{info.number}</h1>
      <p className='font-normal text-[12px] md:text-[16px]'>{info.text}</p>
    </div>
  );
}
