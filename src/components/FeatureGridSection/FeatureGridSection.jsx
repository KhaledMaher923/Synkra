import{ FGSTitle, FGSBadge, FGSSubtitle,StarIcon ,FGSCardList } from '../../data/FeatureGridSectionData.js'
import Card from './Card/Card.jsx';
import FeatureGridSectionHeader from './FeatureGridSectionHeader.jsx'
import {useTheme} from "../../context/ThemeContext.jsx";
function FeatureGridSection()
{
    const {theme} = useTheme();
    
    return (
<section className={`p-[24px] md:p-[64px] flex flex-col items-center gap-[48px] ${theme==='dark'? 'bg-dark-theme text-semi-white':'bg-light-theme text-dark-theme'}  md:max-w-[100%]`}>
            <FeatureGridSectionHeader theme={theme} badge={FGSBadge} title={FGSTitle} subtitle={FGSSubtitle} icons={[StarIcon]}/>
            <div className='grid grid-cols-1  gap-[16px] w-full max-w-250 md:grid-cols-3 md:grid-rows-[repeat(3,minmax(400px,fit-content))] md: md:max-w-[100%]'>
                {FGSCardList.map((card)=>{
                    return (
                        <Card key={card.id} theme={theme} info={card}>
                        </Card>
                    );
                })}
            </div>
        </section>
    )
}
export default FeatureGridSection;