
import CardBadge from "../FeatureGridSection/Card/CardBadge"
import { useTheme } from "../../context/ThemeContext";
export default function AboutHeroSectionContent({ badge, content }) {
  const {theme} = useTheme()
    return (
    <div className={'flex flex-col justify-between items-center gap-[40px] pb-[24px] md:flex-row'}>
      <div className={'flex flex-col gap-[12px] md:w-[712px] items-start'}>
        <CardBadge badge={badge} />
        <h1 className={"text-[56px] font-header leading-[1] md:text-[80px]"}>
          {content.headline.normal}{" "}
          <span className={"italic text-[#1A56DB]"}>
            {content.headline.highlight}{" "}
          </span>{" "}
          .
        </h1>
        <div className="bg-[#1A56DB] w-[128px] h-[4px]"></div>
      </div>
      <div className="md:w-[400px]">
        <p className={`leading-[1.75] ${theme=='dark'?'text-[#CBC9C2]' :'text-[#514F4A]'} md:text-[16px]`}>{content.subheadline}</p>
      </div>
      </div>
    
  );
}
