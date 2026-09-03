import CardBody from "./CardBody";

export default function Card({theme,info} )
{
    const classes = info.id=='recovery'?'bg-[#1A56DB] text-[#FCFCFD] ' :  (info.id=='visual-builder' ? 'bg-[#F4A016]' : (theme=='dark'?'bg-[#131210]':'bg-[#FCFCFD]'))
    let grid = info.id=='analytics'? 'md:col-span-2':(info.id=='ops-intelligence'? 'md:col-span-3 ' : (info.id=='integrations'?'md:col-span-1 md:order-1' : `md:col-span-1 md:${info.id=='access-control'?'order-2':'order-0'}`))

    return (
        <div className={`border-1 ${theme=='dark'?'border-[#333230]':'border-[#E4E3DF]'} rounded-[12px] p-[16px]  ${classes}  ${grid}`}>
<CardBody id={info.id} badge={info.badge} icon={info.icon} title={info.title} content={info.content} img={info.img} imgTop={info.imgTop} footer={info.footer} theme={theme}/>

        </div>
    )
}