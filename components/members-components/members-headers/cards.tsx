import Image from "next/image"
import userSvg from '@/public/users-02.svg'
import chartMini from '@/public/images/chartmini.png'
import dotsSvg from '../../../public/dots-vertical.svg'
import arrowUpSvg from '../../../public/arrow-up.svg'
import layerSvg from '@/public/layers-two-01.svg'
import pieChartImg from '@/public/images/pieChart.png'
import dynamic from "next/dynamic"

export default function MemberCards(props: any) {
    const { allMembers } = props
    const plan = allMembers.map((member:any) => member.plan)
    const BarChartWithoutSSR = dynamic(() => import('@/components/charts/barChartActive'), {ssr: false})
    let freePlanArr = []
    
    allMembers.map((member: any) => member.plan === 'free' ? freePlanArr.push(member) : '')
    const active = allMembers.length - freePlanArr.length

    return(
        <div className="flex flex-col md:flex-row px-8 gap-6">
        <div className="flex gap-6 bg-white rounded-3xl border p-6 flex-1 dark:bg-slate-900 dark:border-slate-900">
            <div className="flex flex-col gap-6 grow">
                <div className="flex">
                    <div  className="flex justify-center p-2 mr-2 bg-stone-100 rounded-lg dark:bg-slate-800">
                    <Image src={userSvg} alt="cursor Svg"/>
                    </div>
                    <div className="flex justify-between grow">
                        <h1 className="font-geo text-lg dark:text-slate-200">Current Members</h1>
                        <button>
                            <Image src={dotsSvg} alt="dots"/>
                        </button>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col gap-2">
                        <h1 className="font-brico text-3xl dark:text-slate-200">{allMembers.length}</h1>
                    <div className="flex items-center">
                        <div className="gap-1 my-2 px-1.5 flex bg-green-50 border border-green-200 rounded-full  items-center text-sm mr-1">
                            <Image src={arrowUpSvg} alt="arrowUp"/><p className="font-geo text-green-700">36%</p>
                        </div>
                            <h1 className="font-geo text-sm text-slate-400">vs last year</h1>
                    </div>
                    
                    </div>
                    <div>
                        <Image src={chartMini} alt="chart"/>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="flex gap-6 bg-white rounded-3xl border p-6 flex-1 dark:bg-slate-900 dark:border-slate-900">
            <div className="flex flex-col gap-6 grow">
                <div className="flex">
                    <div  className="flex justify-center p-2 mr-2 bg-stone-100 rounded-lg dark:bg-slate-800">
                    <Image src={layerSvg} alt="cursor Svg"/>
                    </div>
                    <div className="flex justify-between grow">
                        <h1 className="font-geo text-lg dark:text-slate-200">Active plans</h1>
                        <button>
                            <Image src={dotsSvg} alt="dots"/>
                        </button>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col gap-2">
                        <h1 className="font-brico text-3xl dark:text-slate-200">{active}</h1>
                    <div className="flex items-center">
                        <div className="gap-1 my-2 px-1.5 flex bg-green-50 border border-green-200 rounded-full  items-center text-sm mr-1">
                            <Image src={arrowUpSvg} alt="arrowUp"/><p className="font-geo text-green-700">41%</p>
                        </div>
                            <h1 className="font-geo text-sm text-slate-400">vs last year</h1>
                    </div>
                    
                    </div>
                    <div>
                        {/* <Image src={pieChartImg} alt="chart"/> */}
                        <BarChartWithoutSSR data={plan}/>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    )
}