import { landingCtaSectionData } from '../../data/landingCtaSectionData';
import ctaBg from '../../assets/icons/cta-bg.svg';

const LandingCtaSection = () => {
  return (
    <section className="w-full py-8 md:py-12 px-4 bg-white [.dark_&]:bg-[#121110] flex justify-center overflow-hidden">
      {/* تمت إضافة 'isolate' لمنع تسريب الطبقات خارج الـ border-radius وتقليل الحشوة الرأسية */}
      <div className="w-full max-w-[1060px] relative overflow-hidden isolate rounded-2xl md:rounded-[2rem] bg-[#0B0A09] border border-[#2A2825] px-5 py-10 md:py-14 flex flex-col items-center text-center text-white shadow-2xl">

        {/* === طبقات الخلفية والإضاءة === */}

        {/* 1. الإضاءة الخضراء */}
        {/* 1. الإضاءة الخضراء (Teal Glow) - فوق على الشمال */}
        <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#1E3A34] rounded-full filter blur-[100px] md:blur-[120px] opacity-70 -translate-x-1/4 -translate-y-1/4 pointer-events-none -z-10"></div>

        {/* 2. الإضاءة الدافئة (Warm Glow) - تحت في النص */}
        <div className="absolute bottom-0 left-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[500px] bg-[#3D2817] rounded-full filter blur-[100px] md:blur-[120px] opacity-70 -translate-x-1/2 translate-y-1/4 pointer-events-none -z-10"></div>
        {/* 3. طبقة الدوائر (SVG) - استخدام object-cover للحفاظ على التناسق */}
        {/* 3. طبقة الدوائر (SVG) */}
        {/* 3. طبقة الدوائر (SVG) */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-60">
          <img
            src={ctaBg}
            alt="Background Pattern"
            className="w-full h-full object-fill md:object-cover md:object-center mix-blend-screen"
          />
        </div>
        {/* === المحتوى الأساسي === */}
        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
          <span className="text-[10px] md:text-xs font-sans font-semibold tracking-[0.2em] text-[#9C9A92] uppercase mb-4 md:mb-5">
            {landingCtaSectionData.tagline}
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-[2.75rem] font-serif font-normal tracking-tight mb-4 md:mb-5 leading-tight md:leading-snug w-full">
            {landingCtaSectionData.title}
          </h2>

          <p className="text-sm md:text-[15px] text-[#A09E97] font-sans mb-8 md:mb-10 leading-relaxed max-w-xl px-2">
            {landingCtaSectionData.description}
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full max-w-md md:max-w-none flex flex-col sm:flex-row justify-center items-center gap-3"
          >
            <input
              type="email"
              placeholder={landingCtaSectionData.placeholderText}
              className="w-full sm:w-[340px] px-4 md:px-5 py-3 bg-white text-black placeholder-gray-400 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 md:px-8 py-3 bg-[#1C1B19] text-white border border-white/20 font-medium text-sm rounded-lg hover:bg-white hover:text-black hover:border-white transition-all cursor-pointer"
            >
              {landingCtaSectionData.buttonText}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default LandingCtaSection;




