
import { PiCheckCircleDuotone } from "react-icons/pi";
import { useTheme } from "../../../context/ThemeContext";
export default function CardFooter({ footer }) {
  const {theme} = useTheme()
  return (
    <div className="flex gap-[14px]">
      <div className="flex items-center justify-center gap-[5px]">
        < PiCheckCircleDuotone className={`text-[20px] ${theme=='dark'? 'text-[#75A2F0]':'text-[#1A56DB]' }`}/>
        <span> {footer[0]}</span>
      </div>
      <div className="flex items-center justify-center gap-[5px]">
        < PiCheckCircleDuotone className={`text-[20px] ${theme=='dark'? 'text-[#75A2F0]':'text-[#1A56DB]' }`} />
        <span> {footer[1]}</span>
      </div>
    </div>
  );
}
