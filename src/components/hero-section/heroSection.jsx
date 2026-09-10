import HeroHeader from "../hero-section/heroHeader.jsx";
import HeroButtons from "../hero-section/heroButtons.jsx";
import HeroVisual from "../hero-section/heroVisual.jsx";

function HeroSection() {
  return (
    <section className="relative md:flex justify-between items-center gap- px-8 py-16 overflow-hidden md:pl-18">
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