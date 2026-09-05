import { useTheme } from "../../context/ThemeContext.jsx";
import buildingImg from "../../assets/images/glassy-towers.png";
import { visual } from "../../data/hero-sectionData";
import { HiCheck } from "react-icons/hi";
import { HiOutlineChartBar } from "react-icons/hi";

function HeroVisual() {
  const { theme } = useTheme();

  return (
    <div className="relative max-w-md mb-12">
      <img
        src={buildingImg}
        alt="Enterprise building"
        className="w-full rounded-2xl object-cover"
      />
 <div className="absolute top-6 right-6 w-[180px] bg-[#FAFAFB]/15 backdrop-blur-md rounded-xl p-4 flex flex-col gap-3 shadow-[0_2px_10px_1px_#02061719] border border-white/20">
  <div className="flex items-center gap-2">
    <span className="bg-straight-green/10 text-straight-green rounded-full p-1.5">
      <HiOutlineChartBar className="w-4 h-4" />
    </span>
    <span className="text-xs font-bold text-dark-theme">
      {visual.efficiency.label}
    </span>
  </div>
  <p className="text-3xl font-header font-extrabold text-straight-green leading-[120%] ">{visual.efficiency.value}</p>
  <p className="text-xs text-black">{visual.efficiency.caption}</p>
</div>

        <div className="absolute -bottom-6 left-4 w-[508px] max-w-[calc(100%-2rem)] bg-black/40 backdrop-blur-md rounded-xl p-4 flex flex-col gap-3 border border-white/10">
            <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-straight-green rounded-full p-1">
              <HiCheck className="w-3 h-3 text-white" />
            </span>
            <span className="text-semi-white text-sm font-sans-serif">{visual.sync.label}</span>
          </div>
          <span className="text-semi-white font-bold text-sm">{visual.sync.percent}</span>
        </div>

        <div className="w-full bg-medium-gray/30 rounded-full h-1.5 mb-2">
          <div
            className="bg-semi-white h-1.5 rounded-full"
            style={{ width: visual.sync.percent }}
          ></div>
        </div>


        <p className="text-single-orange text-xs italic font-sans-serif">{visual.footer}</p>
      </div>
    </div>
  );
}

export default HeroVisual;