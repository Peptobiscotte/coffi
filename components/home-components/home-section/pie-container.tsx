import Image from "next/image"
import pieChartOrange from '../../../public/piechat-orange.svg'
import pieChartBlue from '../../../public/piechart-blue.svg'
import cursorSvg from '../../../public/cursor-02.svg'
import dotsSvg from '../../../public/dots-vertical.svg'
import arrowUpSvg from '../../../public/arrow-up.svg'
import arrowDownSvg from '../../../public/arrow-down.svg'
import ticketSvg from '../../../public/ticket-01.svg'
import dynamic from "next/dynamic"

export default function PieContainer(props: any) {
    const { allMembers } = props
    const plan = allMembers.map((member:any) => member.plan)
    const divider = (15 - plan.length)
    const percentageOccupied = Math.floor((1 - divider/15) * 100)
    console.log(percentageOccupied)

    const BarChartWithoutSSR = dynamic(() => import('@/components/charts/barChartPlan'), {ssr: false})
    const BarChartOccupancyWithoutSSR = dynamic(() => import('@/components/charts/barChartOccupancy'), {ssr: false})

    return (
        <div className="flex flex-col md:flex-row px-8 gap-6">
            <div className="flex gap-6 bg-white dark:bg-slate-900 dark:border-slate-900 rounded-3xl border p-6 flex-1">
                <div>
                    {/* <Image src={pieChartOrange} alt="Occupancy chart"/> */}
                    <BarChartOccupancyWithoutSSR data={plan}/>
                </div>
                <div className="flex flex-col gap-6 grow">
                    <div className="flex">
                        <div  className="flex justify-center p-2 mr-2 bg-stone-100 dark:bg-slate-800 rounded-lg">
                        <Image src={cursorSvg} alt="cursor Svg"/>
                        </div>
                        <div className="flex justify-between grow">
                            <h1 className="font-geo text-lg dark:text-slate-200">Occupancy</h1>
                            <button>
                                <Image src={dotsSvg} alt="dots"/>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-sm font-geo text-slate-400">Last 12 months</h2>
                        <div className="flex justify-between">
                            <h1 className="font-brico text-3xl dark:text-slate-200">{percentageOccupied}%</h1>
                            <div className="gap-1 my-2 px-1.5 flex bg-green-50 border border-green-200 rounded-full  items-center text-sm">
                            <Image src={arrowUpSvg} alt="arrowUp"/><p className="font-geo text-green-700">3.1%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-6 bg-white dark:bg-slate-900 dark:border-slate-900 rounded-3xl border p-6 flex-1">
                <div>
                    {/* <Image src={pieChartBlue} alt="Plan chart"/> */}
                    <BarChartWithoutSSR data={plan}/>
                </div>
                <div className="flex flex-col gap-6 grow">
                    <div className="flex">
                        <div  className="flex justify-center p-2 mr-2 bg-stone-100 rounded-lg dark:bg-slate-800">
                        <Image src={ticketSvg} alt="ticket Svg"/>
                        </div>
                        <div className="flex justify-between grow">
                            <h1 className="font-geo text-lg dark:text-slate-200">Plans repartition</h1>
                            <button>
                                <Image src={dotsSvg} alt="dots"/>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-sm font-geo text-slate-400">Total members</h2>
                        <div className="flex justify-between">
                            <h1 className="font-brico text-3xl dark:text-slate-200">{allMembers.length}</h1>
                            <div className="gap-1 my-2 px-1.5 flex bg-red-50 border border-red-200 rounded-full  items-center text-sm">
                            <Image src={arrowDownSvg} alt="arrowDown"/><p className="font-geo text-red-600">0.8%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}