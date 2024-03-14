import Image from "next/image"
import clockSvg from '@/public/clock.svg'
import {Avatar, AvatarGroup} from "@nextui-org/react";
import editSvg from '@/public/edit-01.svg'
import pinSvg from "@/public/marker-pin-01.svg"

export default function EventCard() {
    return (
        <div className="flex justify-between border rounded-3xl bg-white font-geo pl-7 pr-5 py-4 items-center">
            <div className="flex gap-6">
                <div className="flex flex-col border-r justify-center">
                    <p className="mr-6">MON</p>
                    <p className="font-brico text-3xl">26</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-lg">Hackaton</h1>
                    <p className="flex gap-1 text-slate-500">
                        <Image src={clockSvg} alt="clock"/>
                        09:00 - 12:00
                    </p>
                    <AvatarGroup isBordered max={3} size="sm">
                        <Avatar showFallback size="sm"/>
                        <Avatar showFallback size="sm"/>
                        <Avatar showFallback size="sm"/>
                        <Avatar showFallback size="sm"/>
                        <Avatar showFallback size="sm"/>
                        <Avatar showFallback size="sm"/>
                    </AvatarGroup>
                </div>
                <div className="flex gap-1 items-center">
                    <Image src={pinSvg} alt="pin"/>
                    <p className="text-slate-500">Conference/Presentation Room</p>
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