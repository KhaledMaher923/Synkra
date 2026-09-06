import { LuShieldCheck } from "react-icons/lu";

export default function TestmonialsHeaders({ theme, badge, title, subtitle }) {
    return (
        <header className='flex justify-between items-start gap-12 w-full max-lg:flex-col max-lg:gap-6' >
            <div className="flex flex-col gap-4 max-w-512">
                <h2 className='font-header text-[36px] leading-tight font-medium max-lg:text-[30px]' >
                    {title}
                </h2>
                <span className='block w-32 h-1 bg-primary-blue ' />
            </div>
            <div className="flex flex-col gap-3 max-w-512 pt-1">
                <span
                    className={`flex items-center gap-2 w-fit text-[12px] font-semibold tracking-wide px-3 py-1 rounded-full ${theme === 'dark'
                            ? 'bg-primary-blue/15 text-[#8FB3F5]'
                            : 'bg-primary-blue/10 text-primary-blue'
                        }`}
                >
                    <LuShieldCheck className="w-4 h-4" />
                    {badge}
                </span>
                <p className={`font-sans text-[16px] leading-relaxed ${theme === 'dark' ? 'text-[#CBC9C2]' : 'text-medium-gray'
                    }`}
                >
                    {subtitle}
                </p>
            </div>
        </header>
    );
}
