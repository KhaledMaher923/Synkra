export default function NewsletterCard({ data }) {
  const newsletterData = data || {};

  return (
    <div className="rounded-2xl p-6 lg:p-8 text-[#FCFCFD] flex flex-col justify-between space-y-6 shadow-md bg-[#1A56DB]">
      <div className="space-y-3">
        <span className="font-sans text-[12px] font-semibold tracking-wider uppercase opacity-90 text-[#FCFCFD]">
          {newsletterData.tag}
        </span>
        <h3 className="font-header text-[24px] lg:text-[26px] font-semibold leading-snug text-[#FCFCFD]">
          {newsletterData.title}
        </h3>
        <p className="font-sans text-[13px] font-normal leading-relaxed opacity-95 text-[#FCFCFD]">
          {newsletterData.description}
        </p>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-3 pt-4">
        <input 
          type="email" 
          placeholder={newsletterData.placeholder} 
          className="w-full px-4 py-3 rounded-lg bg-[#FCFCFD] border border-[#F2F1EF] text-[#131210] placeholder-[#A09E97] text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button 
          type="submit" 
          className="w-full py-3 bg-[#003FB1] border border-[#E4E3DF] text-[#FCFCFD] font-sans font-medium text-[14px] rounded-lg hover:bg-[#003594] transition-colors cursor-pointer"
        >
          {newsletterData.buttonText}
        </button>
      </form>
    </div>
  );
}