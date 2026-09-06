//? badge title content
import CardFooter from "./CardFooter";
import CardImage from "./CardImage";
import { useTheme } from "../../../context/ThemeContext.jsx";
import CardBadge from "./CardBadge.jsx";

export default function CardBody({id,badge,title,content,img,imgTop,footer}) {
  
const { theme } = useTheme();
  
  return (
    <div
      className={`flex flex-col justify-between gap-[16px] md:p-[18px] md:gap-[24px] ${imgTop == true ? "md:flex-row" : ""}`}
    >
      {imgTop == true ? <CardImage img={img} imgTop={imgTop} /> : null}
      <div
        className={`flex flex-col justify-between gap-[16px] ${id == "visual-builder" && theme == "dark" ? "text-[#131210]" : null}`}
      >
        <CardBadge badge={badge}/>
        <h1 className="text-[20px] md:text-[28px] whitespace-pre-line font-header font-medium">
          {title}
        </h1>
        <p className="md:text-[16px] ">{content}</p>
        {footer ? <CardFooter footer={footer} /> : null}
      </div>
      {imgTop == false ? ( <CardImage img={img} imgTop={imgTop}/>
      ) : null}
    </div>
  );
}
