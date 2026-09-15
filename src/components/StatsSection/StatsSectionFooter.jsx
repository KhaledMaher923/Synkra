import { useTheme } from "../../context/ThemeContext";
import { PiHeadsetLight } from "react-icons/pi";

export default function StatsSectionFooter({ info }) {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center gap-[8px] lg:max-w-[600px] lg:pt-[12px]">
      <div className={"flex justify-center gap-[16px]"}>
        <button
          className={`lg:w-auto text-[12px] items-center  text-[#FCFCFD] p-[8px] rounded-lg font-normal hover:bg-blue-700 transition lg:pt-[16px] lg:pb-[16px] lg:pr-[20px] lg:pl-[20px] lg:text-[16px] ${theme == "dark" ? "bg-[#0C2B7B]" : "bg-[#1A56DB]"}`}
        >
          {info.primaryTxt}
        </button>
        <button
          className={`text-[12px] p-[8px] rounded-lg font-medium border transition lg:pt-[16px] lg:pb-[16px] lg:pr-[20px] lg:pl-[20px] lg:text-[16px] ${
            theme === "dark"
              ? "border-[#FCFCFD] text-semi-white hover:bg-gray-800"
              : "border-[#E4E3DF] text-dark-theme hover:bg-gray-50"
          }`}
        >
          {" "}
          {info.secondaryTxt}{" "}
          <PiHeadsetLight className="inline text-[16px] lg:text-[20px]" />
        </button>
      </div>
      <span className="italic text-[12px] text-center lg:text-[14px]">
        <span className="text-[#BE1C1C]">*</span>
        {info.footerTxt}
      </span>
    </div>
  );
}
