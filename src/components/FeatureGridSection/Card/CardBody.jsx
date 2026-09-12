//? badge title content
import CardFooter from "./CardFooter";
import CardImage from "./CardImage";
import { useTheme } from "../../../context/ThemeContext.jsx";
import CardBadge from "./CardBadge.jsx";

export default function CardBody({id,badge,title,content,img,imgTop,footer}) {
  
const { theme } = useTheme();
  
  return (
    <div
      className={`flex flex-col justify-between gap-4 md:p-4.5 md:gap-6 ${imgTop == true ? "md:flex-row" : ""}`}
    >
      {imgTop == true ? <CardImage img={img} imgTop={imgTop} /> : null}
      <div
        className={`flex flex-col justify-between items-start gap-4 ${id == "visual-builder" && theme == "dark" ? "text-dark-theme" : null}`}
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
