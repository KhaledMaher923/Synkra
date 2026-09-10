import CTAButtons from "../components/CTA/CTAButtons";
import CTASection from "../components/CTA/CTASection";
import CTAQuote from "..components/CTAQuote";
import ctaBg from "../../assets/icons/cta-bg.svg";

function CTASection() {
  return (
    <section className="w-full py-8 md:py-12 px-4 bg-white [.dark_&]:bg-[#121110] flex justify-center overflow-hidden">
      <div className="w-full max-w-[1060px] relative overflow-hidden isolate rounded-[16px] md:rounded-[16px] bg-[#0B0A09] border border-[#2A2825] px-5 py-10 md:py-14 flex flex-col items-center text-center text-white shadow-2xl">
                <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#1E3A34] rounded-[16px] filter blur-[100px] md:blur-[120px] opacity-70 -translate-x-1/4 -translate-y-1/4 pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[500px] bg-[#3D2817] rounded-[16px] filter blur-[100px] md:blur-[120px] opacity-70 -translate-x-1/2 translate-y-1/4 pointer-events-none -z-10" />

        <img
          src={ctaBg}
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