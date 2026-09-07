import { useTheme } from "../../context/ThemeContext";
import { PiHeadsetLight } from "react-icons/pi";

export default function StatsSectionFooter({
  primaryTxt,
  secondaryTxt,
  footerTxt,
}) {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center gap-[8px] md:max-w-[600px] md:pt-[12px]">
      <div className={"flex justify-center gap-[16px]"}>
        <button
          className={`md:w-auto text-[12px] items-center  text-[#FCFCFD] p-[8px] rounded-lg font-normal hover:bg-blue-700 transition md:pt-[16px] md:pb-[16px] md:pr-[20px] md:pl-[20px] md:text-[16px] ${theme == "dark" ? "bg-[#0C2B7B]" : "bg-[#1A56DB]"}`}
        >
          {primaryTxt}
        </button>
        <button
          className={`text-[12px] p-[8px] rounded-lg font-medium border transition md:pt-[16px] md:pb-[16px] md:pr-[20px] md:pl-[20px] md:text-[16px] ${
            theme === "dark"
              ? "border-[#FCFCFD] text-semi-white hover:bg-gray-800"
              : "border-[#E4E3DF] text-dark-theme hover:bg-gray-50"
          }`}
        >
          {" "}
          {secondaryTxt}{" "}
          <PiHeadsetLight className="inline text-[16px] md:text-[20px]" />
        </button>
      </div>
      <span className="italic text-[12px] text-center md:text-[14px]">
        <span className="text-[#BE1C1C]">*</span>
        {footerTxt}
      </span>
    </div>
  );
}
