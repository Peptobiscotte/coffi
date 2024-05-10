'use client'

import { Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

export default function BarChart(props:any) {  
    const { data } = props
    
    let active: string[] = []
    let free: string[] = []
    
    data.map((plan:any) => {
        if(plan === 'premium' || plan === 'desk'){
            active.push(plan)
        } else if(plan === 'free'){
            free.push(plan)
        }
    })
    
    const planArray = [
        {id: 1, value: active.length, name: 'active'},
        {id: 2, value: free.length, name: free[0]},
    ]

    const colors: any[] = ['#FB923C', '#FED7AA']
    
    return (
            <ResponsiveContainer width={85} height={85}>
            <PieChart id='test' data={planArray} className="font-geo">
                <Tooltip />
                <Pie 
                    cx="50%" cy="50%" innerRadius={30} outerRadius={42}
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