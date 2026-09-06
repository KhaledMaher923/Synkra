import CTAButtons from "./CTAButtons";
import CTAHeader from "./CTAHeader";
import overlayBlur from "../../assets/images/Overlay+Blur.png";

function CTASection() {
  return (
    <section className="px-6 py-16 flex justify-center">
      <div className="relative overflow-hidden bg-dark-theme rounded-3xl max-w-2xl w-full px-8 py-12 flex flex-col items-center gap-6 border border-white/10">
        <img
          src={overlayBlur}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none -z-10"
        />

        <CTAHeader />
        <CTAButtons />
      </div>
    </section>
  );
}

export default CTASection;