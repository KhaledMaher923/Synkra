import CardBadge from "../../FeatureGridSection/Card/CardBadge";
import { useTheme } from "../../../context/ThemeContext";
export default function CardHeader({badge,title,released,index})
{
    const {theme}= useTheme()
    const dotColor = index=="0"? "bg-[#1A56DB]":(theme=='dark'?'bg-[#333230]':"bg-[#E4E3DF]")
    return(
        <div className={`flex flex-col gap-[8px] ${Number(index)%2!=0?"md:items-start":"md:items-end"}`}>
            <div className="flex gap-[10px] md:gap-[0]">
            <div
            className={`md:hidden ml-[8px] md:flex ${dotColor} md:order-2  items-start justify-start w-6 h-6 rounded-full `}
          />
            <CardBadge badge={badge} />
          </div>
            <h2 className={`text-[24px] font-header italic ${index==0?"font-semibold":""} md:text-[36px] pl-[40px] md:pl-[0]`}>{title}</h2>
            <p className={`text-[14px] text-[#78766F] md:text-[16px] pl-[40px] md:pl-[0]`}>{released}</p>
        </div>
    )
}
