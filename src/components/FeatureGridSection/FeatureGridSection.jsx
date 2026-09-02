import{ FGSTitle, FGSBadge, FGSSubtitle, FGSCardList } from '../../data/FeatureGridSectionData.js'
import Card from './Card/Card.jsx';
import FeatureGridSectionHeader from './FeatureGridSectionHeader.jsx'
import {useTheme} from "../../context/ThemeContext.jsx";
function FeatureGridSection()
{
    const {theme} = useTheme();
    
    return (
<section className={`py-16 px-35 flex flex-col items-center gap-12 ${theme==='dark'? 'bg-dark-theme text-semi-white':'bg-light-theme text-dark-theme'} max-lg:py-6 max-lg:px-6`}>
            <FeatureGridSectionHeader theme={theme} badge={FGSBadge} title={FGSTitle} subtitle={FGSSubtitle}/>
            <div className='grid grid-cols-1  gap-[16px] w-full max-w-250 md:grid-cols-3'>
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