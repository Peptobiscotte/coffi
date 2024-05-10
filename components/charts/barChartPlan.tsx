'use client'

import { Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

export default function BarChart(props:any) {  
    const { data } = props
    
    let premium: string[] = []
    let free: string[] = []
    let desk: string[] = []
    
    data.map((plan:any) => {
        if(plan === 'premium'){
            premium.push(plan)
        } else if(plan === 'free'){
            free.push(plan)
        } else {
            desk.push(plan)
        }
    })
    
    const planArray = [
        {id: 1, value: premium.length, name: premium[0]},
        {id: 2, value: free.length, name: free[0]},
        {id: 3, value: desk.length, name: desk[0]},
    ]

    const colors: any[] = ['#6366F1', '#A5B4FC', '#C7D2FE']
    
    return (
            <ResponsiveContainer width={120} height={120}>
            <PieChart id='test' data={planArray} className="font-geo">
                <Tooltip />
                <Pie 
                    cx="50%" cy="50%" innerRadius={43} outerRadius={60}
                    data={planArray}
                    dataKey='value'
                    nameKey="name"
                >
                    {
                        data.map((entry:any, index:any) => (
                            <Cell key={`cell-${index}`} fill={colors[index]}/>
                        ))
                    }
                </Pie>
            </PieChart>
            </ResponsiveContainer>      
    )
}