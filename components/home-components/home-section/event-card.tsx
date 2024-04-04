import dotImg from '@/public/images/dot.png'
import Image from 'next/image'
import {Avatar, AvatarGroup} from "@nextui-org/react";

export default function EventCard(props:any) {
    const { event } = props

    const dateExact = new Date(event.date)
    const formattedDate = dateExact.toLocaleString('en-US', {    
        year: 'numeric',
        month: "long",
        day: "numeric",
    })

    return (
        <div className="flex justify-between py-4 border-b">
            <div className='flex flex-col gap-1'>
                <h1 className='text-sm'>{event.title}</h1>
                <div className='flex gap-1 items-center'>
                    <Image src={dotImg} alt='dot' width={20} height={20} className='h-3 w-3'/>
                    <p className='text-sm text-slate-400'>{formattedDate} - {event.to}</p>
                </div>
            </div>
            <div className='flex'>
                <AvatarGroup isBordered max={3} size='sm'>
                    {event.members.map((member:any, i:number) =>
                        <Avatar key={member+i} showFallback name={member}/>
                    )}
                </AvatarGroup>
            </div>
        </div>
    )
}