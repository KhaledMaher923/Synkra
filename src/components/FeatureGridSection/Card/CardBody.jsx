
//? badge title content 
const COLOR_MAP = {
    analytics: 'bg-[#EBF2FD] text-[#1A56DB]',
    recovery: 'bg-[#EDFAF3] text-[#1B6F4A]',
  integrations: 'bg-[#EDFAF3] text-[#1B6F4A]',
  'ops-intelligence': 'bg-[#0F766E] text-[#CCFBF1]',
  'visual-builder': 'bg-[#FEF6E7] text-[#92510A]',
  'access-control': 'bg-[#FEF0F0] text-[#BE1C1C]',
};
export default function CardBody({id,badge,title,content,img,imgTop,footer})
{
    return (
        <div className='flex flex-col justify-between gap-[16px] '>
                    {imgTop==true?<div className="w-full h-[250px] overflow-hidden rounded-lg border border-slate-200">
      <img
        src={img}
        className="w-full h-full object-cover object-center"
      />
    </div> : null}
            <span className={`pt-[4px] pb-[4px] pr-[12px] pl-[12px] rounded-[999px] self-start `+COLOR_MAP[id]}>{badge}</span>
            <h1 className='text-[20px]'>{title}</h1>
            <p>{content}</p>
            {imgTop==false?<div className="w-full h-[88px] overflow-hidden rounded-lg border border-slate-200">
      <img
        src={img}
        className="w-full h-full object-cover object-center"
      />
    </div> : null}
    {footer ?<div>
        <span>{footer[0]}</span>
        <span>{footer[1]}</span>
    </div> : null}
        </div>
    )
}