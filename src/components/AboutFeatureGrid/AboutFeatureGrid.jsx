import { useTheme } from "../../context/ThemeContext";
import { EmployeeCard } from "./EmployeeCard";


export function AboutFeatureGrid({title,subtitle,headerButtonObj,employees}){
    const Icon = headerButtonObj?.icon;
    const {theme} = useTheme();
    return(
        <section className={`p-16 flex flex-col gap-12 ${theme==='dark'?'bg-dark-theme':'bg-light-theme'} max-lg:p-6`}>
            <header className="flex justify-between items-center max-sm:flex-col max-sm:gap-10">
                <div className="flex flex-col gap-2">
                    <h2 className={`text-[36px] font-header ${theme==='dark'?'text-semi-white':'text-dark-theme'}`}>{title}</h2>
                    <p className={`text-[16px] font-sans ${theme==='dark'?'text-[#CBC9C2]':'text-medium-gray'}`}>{subtitle}</p>
                </div>
                {headerButtonObj && <button className={`rounded-lg p-2 text-semi-white flex justify-center gap-2 font-medium cursor-pointer hover:scale-110 active:scale-95 max-sm:w-full ${theme==='dark'?'bg-[#0C2B7B]':'bg-primary-blue'}`}>
                   <span className="text-[12px] font-sans">{headerButtonObj.name}</span>
                    {Icon && <Icon className="w-6"/>}
                </button>}
            </header>
            <ul className="p-0 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 list-none max-xl:gap-4">
                {employees.map((employee=>{
                    return (
                        <li key={employee.id}>
                            <EmployeeCard name={employee.name} domain={employee.domain} role={employee.role} image={employee.image}/>
                        </li>
                    );
                }))}
            </ul>
        </section>
    );
}