import FQAList from '../../data/faqData.js';
import { MdArrowBackIos } from "react-icons/md";
export default function FAQSection(){
    return (
        <section className={`py-16 px-35 flex flex-col items-center gap-12 bg-light-theme text-dark-theme`}>
            <header className='flex flex-col items-center max-w-140 '>
                <h2 className='font-header text-[36px] text-center font-medium '>Questions Teams Ask Before Trusting Synkra.</h2>
                <p className={`font-sans text-[16px] text-medium-gray`}>Your technical architecture questions, answered.</p>
            </header>
            <ul className='flex flex-col gap-5 w-full'>
                {FQAList.map((QAObj)=>{
                    return (
                        <li key={QAObj.id}>
                            <details className={`group border border-gray-300 rounded-xl`}>
                                <summary className={`flex justify-between items-center text-[18px] p-5 font-bold  list-none [::-webkit-details-marker]:hidden select-none rounded-t-xl group-open:bg-neutral-stone`}>
                                    <span>{QAObj.question}</span>
                                    <MdArrowBackIos  className='w-6 -rotate-90 group-open:rotate-90'/>
                                    </summary>
                                <div className='p-5 bg-semi-white rounded-b-xl'>
                                    <p className='text-medium-gray font-sans text-[16px]'>{QAObj.answer}</p>
                                </div>
                            </details>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}