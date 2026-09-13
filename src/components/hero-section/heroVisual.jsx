import { useTheme } from "../../context/ThemeContext.jsx";
import buildingImg from "../../assets/images/glassy-towers.png";
import overlayBlur from "../../assets/images/Overlay+Blur.png";
import overlayBlur2 from "../../assets/images/Overlay+Blur (1).png";
import { visual } from "../../data/hero-sectionData";
import { HiCheck } from "react-icons/hi";
import { HiOutlineChartBar } from "react-icons/hi";

function HeroVisual() {
  const { theme } = useTheme();

  return (
    <div className="relative ml-12">
      <img
        src={overlayBlur}
        alt=""
        className="md:hidden absolute top-0 right-0 w-2/3 pointer-events-none -z-10"
      />
      <img
        src={overlayBlur2}
        alt=""
        className="md:hidden absolute top-0 left-0 w-2/3 pointer-events-none -z-10"
      />

      <div className="relative md:w-[540px] md:h-[590px] mb-12 hidden md:block overflow-visible">
        <img
          src={buildingImg}
          alt="Enterprise building"
          className="w-full h-full rounded-2xl object-cover"
        />

        <div className="absolute top-4 right-4 w-[178px] h-[113px] bg-[#FAFAFB]/15 backdrop-blur-md rounded-xl p-3 flex flex-col gap-2 shadow-[0_2px_10px_1px_#02061719] border border-white/20">
          <div className="flex items-center gap-2">
            <span className="bg-straight-green/10 text-straight-green rounded-full p-1.5">
              <HiOutlineChartBar className="w-4 h-4" />
            </span>
            <span className="text-xs font-bold text-dark-theme">
              {visual.efficiency.label}
            </span>
          </div>
          <p className="text-2xl font-header font-extrabold text-straight-green leading-[120%]">
            {visual.efficiency.value}
          </p>
          <p className="text-xs text-black">{visual.efficiency.caption}</p>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[110%] bg-black/40 backdrop-blur-md rounded-xl p-3 flex flex-col gap-3 border border-white/10 z-20 shadow-2xl">          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="bg-straight-green rounded-full p-1">
                <HiCheck className="w-3 h-3 text-white" />
              </span>
              <span className="text-semi-white text-sm font-sans-serif">
                {visual.sync.label}
              </span>
            </div>
            <span className="text-semi-white font-bold text-sm">
              {visual.sync.percent}
            </span>
          </div>

          <div className="w-full bg-medium-gray/30 rounded-full h-1.5 mb-2">
            <div
              className="bg-semi-white h-1.5 rounded-full"
              style={{ width: visual.sync.percent }}
            ></div>
          </div>

          <p className="text-single-orange text-xs italic font-sans-serif">
            {visual.footer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroVisual;