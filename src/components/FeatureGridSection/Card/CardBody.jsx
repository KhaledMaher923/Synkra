
//? badge title content 
import noCodeLogicIcon from '../../../assets/icons/No-Code-Logic.svg'
export default function CardBody({id,badge,icon,title,content,img,imgTop,footer,theme})
{
    const COLOR_MAP = {
        analytics: (theme=='dark'?'bg-[#081D5B] text-[#75A2F0]':'bg-[#EBF2FD] text-[#1A56DB]'),
        recovery: (theme=='dark'?'bg-[#052E1F] text-[#EDFAF3]':'bg-[#EDFAF3] text-[#1B6F4A]'),
      integrations:(theme=='dark'?'bg-[#052E1F] text-[#EDFAF3]':'bg-[#EDFAF3] text-[#1B6F4A]'),
      'ops-intelligence': (theme=='dark'?'bg-[#134E4A] text-[#5EEAD4]':'bg-[#0F766E] text-[#CCFBF1]'),
      'visual-builder': (theme=='dark'?'bg-[#4D3308] text-[#FEF6E7]':'bg-[#FEF6E7] text-[#92510A]'),
      'access-control': (theme=='dark'?'bg-[#4D1212] text-[#FEF0F0]':'bg-[#FEF0F0] text-[#BE1C1C]'),
    };
    return (
        <div className={`flex flex-col justify-between gap-[16px] md:p-[18px] md:gap-[24px] ${imgTop==true? 'md:flex-row':''}`}>
                    {imgTop==true?<div className="w-full h-[250px] overflow-hidden rounded-lg  md:w-full md:h-[308px] md:order-2">
      <img
        src={img}
        className="w-full h-full object-cover object-center md:object-center"
      />
    </div> : null}
    <div className={`flex flex-col justify-between gap-[16px] ${id=='visual-builder' && theme=='dark'? 'text-[#131210]':null}`}>
            <div className={`text-[12px] flex gap-[5px] pt-[4px] pb-[4px] pr-[12px] pl-[12px] md:pt-[8px] md:pb-[8px] md:pr-[12px] md:pl-[12px] rounded-[999px] self-start `+COLOR_MAP[id]}>
                <img src={icon} />
                <span>{badge}</span></div>
            <h1 className='text-[20px] md:text-[28px] whitespace-pre-line font-header font-medium'>{title}</h1>
            <p className='md:text-[16px] '>{content}</p>
    {footer ?<div className='flex gap-[14px]'>
        <div className='flex items-center justify-center gap-[5px]'>
        <img  src={noCodeLogicIcon} /><span> {footer[0]}</span>
        </div>
        <div className='flex items-center justify-center gap-[5px]'>
        <img src={noCodeLogicIcon} /><span> {footer[1]}</span>
    </div>
    </div> : null}
      </div>
            {imgTop==false?<div className="w-full h-[88px] overflow-hidden rounded-lg  md:h-[194px]">
      <img
        src={img}
        className="w-full h-full object-cover object-center"
      />
    </div> : null}
 
        </div>
    )
}