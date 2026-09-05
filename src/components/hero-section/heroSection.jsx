import HeroHeader from "../hero-section/heroHeader.jsx";
import HeroButtons from "../hero-section/heroButtons.jsx";
import HeroVisual from "../hero-section/heroVisual.jsx";

function HeroSection() {
  return (
    <section className="flex justify-between items-center gap-12 px-8 py-16">
      <div className="flex-1">
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