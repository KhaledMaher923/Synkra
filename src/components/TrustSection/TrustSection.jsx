import { trustSectionData } from '../../data/trustSectionData';

const TrustSection = () => {
  return (
    <section className="w-full py-16 bg-[#F2F1EF] [.dark_&]:bg-[#1F1E1C] border-y border-[#E3E2E4] [.dark_&]:border-[#514F4A]/30">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <h2 className="text-sm font-sans font-semibold tracking-[0.2em] text-[#78766F] [.dark_&]:text-[#A09E97] uppercase mb-10 text-center px-4">
          {trustSectionData.title}
        </h2>
        
        {/* حاوية الشركات مع التدرج اللوني */}
        <div className="relative w-full max-w-full">
          
          {/* تدرج لوني (Fade) لإيحاء السحب - يختفي في الديسكتوب */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#F2F1EF] [.dark_&]:from-[#1F1E1C] to-transparent z-10 md:hidden pointer-events-none"></div>
          
          {/* الحاوية القابلة للسحب */}
        <div className="relative w-full max-w-full">
          
     
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#F2F1EF] [.dark_&]:from-[#1F1E1C] to-transparent z-10 md:hidden pointer-events-none"></div>
          
        
          <div className="flex items-center justify-start md:justify-between w-full gap-12 md:gap-4 px-6 md:px-12 overflow-x-auto flex-nowrap md:flex-wrap no-scrollbar snap-x snap-mandatory">
            {trustSectionData.companies.map((company, index) => (
              <span 
                key={company} 
                className="shrink-0 snap-start text-2xl md:text-3xl font-header font-bold text-[#514F4A] [.dark_&]:text-[#CBC9C2]"
              >
                {company}
              </span>
            ))}
          </div>
          
        </div>

   
      </div>
      </div>
    </section>
  );
};

export default TrustSection;
