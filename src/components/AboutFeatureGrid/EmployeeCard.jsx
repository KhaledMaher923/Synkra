import { useTheme } from "../../context/ThemeContext";


export function EmployeeCard({name,role,domain,image}){
    const {theme} = useTheme();
    return (
        <article className={`h-full rounded-xl overflow-hidden border flex flex-col gap-1
        ${theme==='dark'?'bg-dark-them border-gray-600':'bg-semi-white border-gray-200'}`}>
        <div className="relative">
            <img className='h-82.25 w-full object-cover object-top' src={image} alt={name} />
            <div className={`absolute bottom-3 left-3 px-3 py-1 rounded-full ${theme==='dark'?'bg-[#082046]':'bg-[#EBF2FD]'}`}>
                <p className={`text-[12px] ${theme==='dark'?'text-[#EBF2FD]':'text-[#1455A3]'}`}>{domain}</p>
            </div>
        </div>
        <div className="p-3">
            <h3 className={`text-[20px] font-header font-bold ${theme==='dark'?'text-semi-white':'text-dark-theme'}`}>{name}</h3>
            <p className={`text-[16px] font-sans ${theme==='dark'?'text-[#CBC9C2]':'text-medium-gray'}`}>{role}</p>
        </div>
    </article>
    );
}