
export default function AboutFeatureGrid({title,subtitle,headerButtonObj,employees}){
    const Icon = headerButtonObj?.icon;
    return(
        <section className="p-16 flex flex-col gap-12 bg-light-them max-lg:p-6">
            <header className="flex justify-between items-center max-sm:flex-col max-sm:gap-10">
                <div className="flex flex-col gap-2">
                    <h2 className="text-[36px] font-header text-dark-theme">{title}</h2>
                    <p className="text-[16px] font-sans text-medium-gray">{subtitle}</p>
                </div>
                {headerButtonObj && <button className="bg-primary-blue rounded-lg p-2 text-semi-white flex justify-center gap-2 font-medium cursor-pointer hover:scale-110 active:scale-95 max-sm:w-full">
                   <span className="text-[12px] font-sans">{headerButtonObj.name}</span>
                    {Icon && <Icon className="w-6"/>}
                </button>}
            </header>
            <ul className="p-0 grid grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 gap-8 list-none max-xl:gap-4">
                {employees.map((employee=>{
                    return (
                        <li key={employee.id}>
                            <article className="h-full bg-semi-white rounded-xl overflow-hidden border border-gray-200 flex flex-col gap-1">
                                <div className="relative">
                                    <img src={employee.image} alt={employee.name} />
                                    <div className="absolute bg-[#EBF2FD] bottom-3 left-3 px-3 py-1 rounded-full">
                                        <p className="text-[#1455A3] text-[12px]">{employee.domain}</p>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <h3 className="text-[20px] font-header font-bold text-dark-theme">{employee.name}</h3>
                                    <p className="text-[16px] font-sans text-medium-gray">{employee.role}</p>
                                </div>
                            </article>
                        </li>
                    );
                }))}
            </ul>
        </section>
    );
}