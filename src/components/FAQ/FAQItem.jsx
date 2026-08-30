import { MdArrowBackIos } from "react-icons/md";
export default function FAQItem({theme,title,description}){

    return(
        <details className={`group border ${theme==='dark'?'border-gray-700':'border-gray-300'} rounded-xl open:shadow-md`}>
            <summary className={`flex justify-between items-center text-[18px] p-5 font-bold  list-none [::-webkit-details-marker]:hidden select-none rounded-t-xl ${theme==='dark'?'group-open:bg-[#1F1E1C]':'group-open:bg-neutral-stone'} max-lg:text-[16px]`}>
                <span>{title}</span>
                <MdArrowBackIos  className='w-6 -rotate-90 group-open:rotate-90'/>
                </summary>
            <div className='p-5 bg-semi-white rounded-b-xl'>
                <p className='text-medium-gray font-sans text-[16px] max-lg:text-[14px]'>{description}</p>
            </div>
        </details>
    );
}