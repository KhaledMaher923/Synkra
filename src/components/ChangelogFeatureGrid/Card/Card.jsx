import CardContent from "./CardContent";
import CardHeader from "./CardHeader";
import { useTheme } from "../../../context/ThemeContext";
export default function Card({info,index}) {
    const {theme}= useTheme()
     const dotColor = index=="0"? "bg-[#1A56DB]":(theme=='dark'?'bg-[#333230]':"bg-[#E4E3DF]")
     return (
    <>
        
        <div className=" flex flex-col md:flex-row md:odd:flex-row-reverse justify-between w-full items-start gap-4 relative group  md:pl-0">
          <div
            className={`hidden md:flex ${dotColor} md:order-2  items-start justify-start w-6 h-6 rounded-full `}
          />
          <div className=" md:w-[calc(50%-2.5rem)] md:order-3 ">
          <CardHeader
            badge={info.badge}
            title={info.title}
            released={info.released}
            index={index}
          />
          </div>
          <div className="md:w-[calc(50%-2.5rem)] md:order-1 pl-[40px]  md:pl-[0]">
          <CardContent content={info.content} id={info.id} />
        </div>
        </div>

    
    </>
  );
}