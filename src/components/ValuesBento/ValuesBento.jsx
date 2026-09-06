
import { VBTitle, VBSubtitle ,VBCardList} from "../../data/ValuesBentoData.js"
import { useTheme } from "../../context/ThemeContext.jsx";
import Card from "../ValuesBento/Card/Card.jsx"
import ValuesBentoHeader from'./ValuesBentoHeader.jsx'
export default function ValuesBento()
{
  const { theme } = useTheme();

  return (
    <section
    className={`p-[24px] md:p-[64px] flex flex-col items-center gap-[48px] md:max-w-[100%]
    ${theme === "dark" ? "bg-dark-theme text-semi-white" : "bg-light-theme text-dark-theme"} 
    `}
    >
     <ValuesBentoHeader title={VBTitle}
  subtitle={VBSubtitle} />
      <div className="grid grid-cols-1  gap-[16px] w-full max-w-250 md:grid-cols-3 md:grid-rows-[repeat(3,minmax(400px,fit-content))] md: md:max-w-[100%]">
        {VBCardList.map((card) => {
          return <Card key={card.id} info={card}></Card>;
        })}
      </div>
    </section>
  );
}