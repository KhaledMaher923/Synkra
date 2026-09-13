export default function AboutHeroSectionVisual({ visual }) {
  return (
    <div className={"relative "}>
  <div className="w-full h-[560px] overflow-hidden rounded-lg  md:w-full md:h-[560px] md:order-2">
          <img
            src={visual.img}
            className="w-full h-full object-cover object-center md:object-center"
          />
        </div>
      <div className={"absolute bg-[#0206171A]  rounded-[12px] bottom-[30px] left-[30px]  p-[16px] backdrop-blur-sm p-[16px] flex flex-col gap-[8px] inset-ring-1 inset-ring-[#737373] shadow-xl inset-shadow-sm border-[0.25px] border-[#0206171A]"}>
        <h1 className="text-[#FCFCFD] font-bold text-[14px]">{visual.title}</h1>
        <p className="text-[#FCFCFD] font-bold text-[20px]">{visual.subtitle}</p>
      </div>
    </div>
  );
}
