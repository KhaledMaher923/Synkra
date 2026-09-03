import { useTheme } from "../../context/ThemeContext";
export default function AboutFeatureGrid({title,subtitle,headerButtonObj,employees}){
    const Icon = headerButtonObj?.icon;
    const {theme} = useTheme();
    return(
        <section className={`p-16 flex flex-col gap-12 ${theme==='dark'?'bg-dark-them':'bg-light-them'} max-lg:p-6`}>
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
            <ul className="p-0 grid grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 gap-8 list-none max-xl:gap-4">
                {employees.map((employee=>{
                    return (
                        <li key={employee.id}>
                            <article className={`h-full rounded-xl overflow-hidden border flex flex-col gap-1
                             ${theme==='dark'?'bg-dark-them border-gray-600':'bg-semi-white border-gray-200'}`}>
                                <div className="relative">
                                    <img src={employee.image} alt={employee.name} />
                                    <div className={`absolute bottom-3 left-3 px-3 py-1 rounded-full ${theme==='dark'?'bg-[#082046]':'bg-[#EBF2FD]'}`}>
                                        <p className={`text-[#1455A3] text-[12px] ${theme==='dark'?'text-[#EBF2FD]':'text-[#1455A3]'}`}>{employee.domain}</p>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <h3 className={`text-[20px] font-header font-bold ${theme==='dark'?'text-semi-white':'text-dark-theme'}`}>{employee.name}</h3>
                                    <p className={`text-[16px] font-sans ${theme==='dark'?'text-[#CBC9C2]':'text-medium-gray'}`}>{employee.role}</p>
                                </div>
                            </article>
                        </li>
                    );
                }))}
            </ul>
        </section>
    );
}