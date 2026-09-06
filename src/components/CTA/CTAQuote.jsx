import { quote } from "../../data/CTAData.js";

function CTAQuote() {
  return (
    <blockquote className="w-full flex md:pr-6 md:pt-22 flex-col md:flex-row md:justify-between md:items-end gap-4 text-left text-semi-white">
      <p className=" md:text-[15px] text-[18px] font-sans-serif leading-[180%]">
        "{quote.text}"
      </p>
      <footer className="md:text-center shrink-0">
        <cite className=" md:text-[15px] font-bold not-italic block">{quote.author}</cite>
        <p>{quote.position}</p>
      </footer>
    </blockquote>
  );
}

export default CTAQuote;