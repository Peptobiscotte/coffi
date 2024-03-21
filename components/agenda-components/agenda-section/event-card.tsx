import Image from "next/image"
import clockSvg from '@/public/clock.svg'
import {Avatar, AvatarGroup} from "@nextui-org/react";
import editSvg from '@/public/edit-01.svg'
import pinSvg from "@/public/marker-pin-01.svg"

export default function EventCard(props:any) {
    const { data } = props
    
    const datePrim = data.date 
    const dateFull = new Date(datePrim)
    const dayWeekNumber = dateFull.getDate()
    const dayWeekString = dateFull.toDateString()
    const justDay = dayWeekString.slice(0, dayWeekString.indexOf(' ')).toUpperCase()
    

    return (
        <div className="flex justify-between border rounded-3xl bg-white font-geo pl-7 pr-5 py-4 items-center">
            <div className="flex gap-6">
                <div className="flex flex-col border-r justify-center">
                    <p className="mr-6">{justDay}</p>
                    <p className="font-brico text-3xl">{dayWeekNumber}</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-lg">{data.title}</h1>
                    <p className="flex gap-1 text-slate-500">
                        <Image src={clockSvg} alt="clock"/>
                        {data.from} - {data.to}
                    </p>
                    <AvatarGroup isBordered max={3} size="sm" className="justify-start">
                        {data.members.map((member:any) =>
                            <Avatar showFallback size="sm" name={member} key={member}/>
                        )}
                    </AvatarGroup>
                </div>
                <div className="flex gap-1 items-center">
                    <Image src={pinSvg} alt="pin"/>
                    <p className="text-slate-500">{data.location}</p>
                </div>
            </div>
            <div>
                <button className="flex gap-2 border rounded-3xl py-2 px-3.5">
                    <Image src={editSvg} alt="edit"/>
                    <p className="text-slate-500">Edit</p>
                </button>
            </div>
        </div>
    )
}