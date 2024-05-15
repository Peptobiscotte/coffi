import dotImg from '@/public/images/dot.png'
import Image from 'next/image'
import {Avatar, AvatarGroup} from "@nextui-org/react";

export default function EventCard(props:any) {

    const { event, members } = props
    const participatingMembers = event.members
    
    const membresComplets = participatingMembers.map((memberName:any) => {
        const membreCorrespondant = members.find((member:any) => member.firstName === memberName);
       
        return membreCorrespondant || null;
    });


    const dateExact = new Date(event.date)
    const formattedDate = dateExact.toLocaleString('en-US', {    
        year: 'numeric',
        month: "long",
        day: "numeric",
    })

    return (
        <div className="flex justify-between py-4 border-b dark:border-slate-800">
            <div className='flex flex-col gap-1'>
                <h1 className='text-sm dark:text-slate-200'>{event.title}</h1>
                <div className='flex gap-1 items-center'>
                    <Image src={dotImg} alt='dot' width={20} height={20} className='h-3 w-3'/>
                    <p className='text-sm text-slate-400'>{formattedDate} - {event.to}</p>
                </div>
            </div>
            <div className='flex'>
                <AvatarGroup isBordered max={3} size='sm'>
                   {membresComplets.map((member:any, i:any) => (
                        <Avatar key={member._id} src={`https://mycoffibucket.s3.eu-west-3.amazonaws.com/userImg/${member.imageKey}`}/>
                   ))}
                </AvatarGroup>
            </div>
        </div>
    )
}