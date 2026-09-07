import HeroHeader from "../hero-section/heroHeader.jsx";
import HeroButtons from "../hero-section/heroButtons.jsx";
import HeroVisual from "../hero-section/heroVisual.jsx";
import overlayBlur from "../../assets/images/Overlay+Blur.png";
import overlayBlur2 from "../../assets/images/Overlay+Blur (1).png";


function HeroSection() {
  return (
    <section className="relative md:flex justify-between items-center gap-12 px-8 py-16 overflow-hidden">
      {/* RIGHT SIDE BLUR IMAGE */}
      <img
        src={overlayBlur}
        alt=""
        className="md:hidden absolute top-0 right-0 w-2/3 pointer-events-none -z-10"
      />

      {/* LEFT SIDE BLUR IMAGE (NEW) */}
      <img
        src={overlayBlur2}
        alt=""
        className="md:hidden absolute top-0 left-0 w-2/3 pointer-events-none -z-10"
      />

      <div className="relative flex-1 z-10">
        <HeroHeader />
        <HeroButtons />
      </div>

      <div className="flex-1">
        <HeroVisual />
      </div>
    </section>
  );
}

export default HeroSection;
