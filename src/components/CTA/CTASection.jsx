import CTAButtons from "./CTAButtons";
import CTAHeader from "./CTAHeader";
import CTAQuote from "./CTAQuote";
import overlayBlur from "../../assets/images/Overlay+Blur.png";

function CTASection() {
  return (
    <section className="px-6 py-16 flex justify-center">
      <div className="relative bg-gradient-to-br from-[#0E0F11] to-[#23252A] rounded-xl max-w-[1000px] w-full md:h-[600px] pt-12 pb-12 pl-6 pr-6 flex flex-col items-center gap-4 border border-white/10">
        <img
          src={overlayBlur}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none -z-10"
        />

        <CTAHeader />
        <CTAButtons />
        <CTAQuote />
      </div>
    </section>
  );
}

export default CTASection;