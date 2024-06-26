import bankSvg from '../../../public/bank-note-02.svg'
import Image from 'next/image'
import dotsSvg from '../../../public/dots-vertical.svg'
import chartBar from '../../../public/images/chartbar.png'
 
export default function Turnover() {
    return (
        <div className="flex flex-col gap-5 bg-white dark:bg-slate-900 dark:border-slate-900 border rounded-3xl p-6">
            <div className='flex'>
                <div  className="flex justify-center p-2 mr-2 bg-stone-100 rounded-lg dark:bg-slate-800">
                    <Image src={bankSvg} alt="bank Svg"/>
                </div>
                <div className='flex justify-between grow'>
                    <h1 className='font-geo text-lg dark:text-slate-200'>Turnover</h1>
                    <button>
                        <Image src={dotsSvg} alt="dots"/>
                    </button>
                </div>
            </div>
            <div>
                <Image src={chartBar} alt='chart'/>
            </div>
        </div>
    )
}