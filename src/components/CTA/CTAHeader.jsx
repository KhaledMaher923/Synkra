import { useTheme } from "../../context/ThemeContext.jsx";
import {title, quote} from "../../data/CTAData.js";

function CTAHeader() {
  const { theme } = useTheme();
  return (
    <div className={`cta-header ${theme}`}>
     <h2 className="text-semi-white text-3xl md:text-4xl font-serif font-bold leading-snug max-w-lg">
      {title}
    </h2>
      <blockquote>
        <p>{quote.text}</p>
        <footer>
          <cite>{quote.author}</cite>
          <p>{quote.position}</p>
        </footer>
      </blockquote>
    </div>
  );
}
export default CTAHeader;