import { PiCheckCircleDuotone } from "react-icons/pi";
import { PiChartLineUp } from "react-icons/pi";
import { PiBug } from "react-icons/pi";
import { PiRocketLaunchDuotone } from "react-icons/pi";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { useTheme } from "../../../context/ThemeContext";
const catColor = {
  "NEW FEATURES": {
    textColor: "#1A56DB",
    textColorDark: "#75A2F0",
    icon: <span><PiCheckCircleDuotone className=" text-[#1A56DB] text-[20px]" /></span>,
    iconDark: <span><PiCheckCircleDuotone className=" text-[#75A2F0] text-[20px]" /></span>,
  },
  IMPROVEMENTS: {
    textColor: "#1B6F4A",
    textColorDark: "#EDFAF3",
    icon:  <span><PiChartLineUp className=" text-[#1B6F4A] text-[20px]" /></span>,
    iconDark:  <span><PiChartLineUp className=" text-[#EDFAF3] text-[20px]" /></span>,
  },
  "BUG FIXES": {
    textColor: "#BE1C1C",
    textColorDark: "#FEF0F0",
    icon:  <span><PiBug className=" text-[#BE1C1C] text-[20px]" /></span>,
    iconDark:  <span><PiBug className=" text-[#EDFAF3] text-[20px]" /></span>,
  },
  "CORE INFRASTRUCTURE": {
     textColor: "#1A56DB",
     textColorDark: "#75A2F0",
    icon:[null, <span><PiRocketLaunchDuotone className=" text-[#1A56DB] text-[20px]" /></span>, <span><AiTwotoneThunderbolt className=" text-[#1A56DB] text-[20px]" /></span>],
    iconDark:[null, <span><PiRocketLaunchDuotone className=" text-[#75A2F0] text-[20px]" /></span>, <span><AiTwotoneThunderbolt className=" text-[#75A2F0] text-[20px]" /></span>]
 },
};
export default function CardContent({ content,id}) {
    const {theme} =useTheme()
    const bgColor = id == "the-intelligence-update" ? (theme=="dark"?"bg-linear-to-r from-[#091328] via-[#000000] to-[#091328]":"bg-[#FFFFFF]") : (theme=='dark'?'bg-[#1F1E1C]':"bg-[#E4E3DF]");
const txtColor=theme=="dark"?"#CBC9C2":"#514F4A"
  return (
    <div
      className={`flex flex-col gap-[24px] ${bgColor} p-[32px] border-[1px] border-[${theme=="dark"?"#333230":"#E4E3DF"}] rounded-[12px]  `}
    >
      {content.map((item) => {
        return (
          <div className="flex flex-col gap-[16px] ">
            <h1 className={`text-[${theme=="dark"?catColor[item.category].textColorDark:catColor[item.category].textColor}]`}>
              {item.category}
            </h1>
            <div className="flex flex-col gap-[12px]">
                {item.category!="CORE INFRASTRUCTURE"?
              item.points.map((point) => {
                return <div className={`flex gap-[12px] items-start text-[${txtColor}]`}>{theme=='dark'?catColor[item.category].iconDark:catColor[item.category].icon}{point}</div>;
              }):item.points.map((point,index) => {
                return <div className={`flex gap-[12px] items-start text-[${txtColor}] `}>{theme=='dark'? catColor[item.category].iconDark[index]:catColor[item.category].icon[index]}{point}</div>;
              })
            }
            </div>
          </div>
        );
      })}
    </div>
  );
}

//  < PiCheckCircleDuotone className={`text-[20px] ${theme=='dark'? 'text-[#75A2F0]':'text-[#1A56DB]' }`} />
