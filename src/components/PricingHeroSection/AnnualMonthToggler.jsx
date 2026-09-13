import { Switch } from "./Switch";
import { useTheme } from "../../context/ThemeContext";

export function AnnualMonthToggler({isAnnual,setIsAnnual}){
    const {theme} = useTheme();
    
    return(
        <div className='flex gap-4 justify-center pt-6 text-[14px]'>
            <span className={`${theme ==='dark'?'text-white':'text-dark-theme'}`}>Monthly</span>
            <Switch
            checked={isAnnual}
            onChange={(checked)=>{setIsAnnual(checked)}}
            />
            <span className={`${theme ==='dark'?'text-white':'text-dark-theme'}`}>Annually</span>
            <div className={`uppercase text-straight-green ${theme === 'dark'? 'bg-[#052E1F] text-white': 'text-straight-green bg-[#EDFAF3]'} font-normal text-[12px] px-3 py-1 rounded-full`}>
                save 30%
            </div>
        </div>
    );
}