'use client'

import { Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

export default function BarChart(props:any) {  
    const { data } = props
    
    let freeSeat

    if(data.length >= 15) {
        freeSeat = 0
    } else {
        freeSeat = 15 - data.length
    }
    
    const planArray = [
        {id: 1, value: data.length, name: 'occupied'},
        {id: 2, value: freeSeat, name: 'free'},
    ]

    const colors: any[] = ['#FB923C', '#FED7AA']
    
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