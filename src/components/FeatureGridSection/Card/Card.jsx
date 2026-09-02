import CardBody from "./CardBody";

export default function Card({theme,info} )
{
    const classes = info.id=='recovery'?'bg-[#1A56DB] text-[#FCFCFD] ' :  (info.id=='visual-builder' ? 'bg-[#F4A016]' : 'bg-[#FCFCFD]')
    return (
        <div className={`border-1 border-[#E4E3DF] rounded-[12px] p-[16px] + ${classes}`}>
<CardBody id={info.id} badge={info.badge} title={info.title} content={info.content} img={info.img} imgTop={info.imgTop} footer={info.footer}/>

        </div>
    )
}