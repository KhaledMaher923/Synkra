import {useTheme} from'../../../context/ThemeContext'
import CardBadge from './CardBadge';

export default function CardBody({id,badge,title,content})
{
  
const { theme } = useTheme();
  
  return (
    <div
      className={`flex flex-col justify-between gap-[16px] md:gap-[24px]`}
    >
      <div
        className={`flex flex-col justify-between gap-[16px] `}
      >
        <CardBadge badge={badge}/>
        <h1 className="text-[16px] md:text-[20px] whitespace-pre-line font-sans font-bold">
          {title}
        </h1>
        <p className={` md:text-[14px] ${ id!="2"? (theme=='dark'?'text-[#CBC9C2]':'text-[#514F4A]' ):' text-[#FCFCFD] '} font-normal`}>{content}</p>
      </div>
    </div>
  );
}