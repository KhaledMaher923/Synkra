import { timelineDataList } from "../../data/ChangelogFeatureGridData";
import { useTheme } from "../../context/ThemeContext";
import Card from "./Card/Card";
export default function ChangelogFeatureGridTimeline() {
    const {theme} = useTheme()
    const lineColor = theme=='dark'?'before:bg-[#0C2B7B]':'before:bg-[#D1E0FA]'
  return (
    <div className="flex flex-col pt-[24px]">
      <div className="flex flex-col gap-[20px]">
             <div className={`space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[50%] md:before:translate-x-0 before:h-full before:w-0.5 ${lineColor}`}>
                  {/* <!-- Item #1 --> */}
                
              {timelineDataList.map((info,index) => {

                return( 
                <Card key={info.id} info={info} index={index} />
            );
              })}
         

        </div>
        </div>
      </div>
  )
}
