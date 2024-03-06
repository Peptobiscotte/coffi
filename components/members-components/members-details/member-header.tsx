import {Avatar} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import bubbleSvg from '@/public/message-circle-02.svg'
import Image from "next/image";

export default function MemberDetailHeader({member}: any) {

    return (
        <div>
            <div className="h-40 bg-gradient-to-r from-amber-500/20 to-indigo-500/20"></div>
            <div className="flex justify-between p-8 -mt-16">
                <div className="flex gap-6">
                    <Avatar showFallback className="w-40 h-40"/>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-3xl font-brico">{member.firstName} {member.lastName}</h1>
                        <h2 className="text-base font-geo text-slate-400">{member.email}</h2>
                    </div>
                </div>
                <div className="flex gap-3 font-geo items-center">
                    <Button variant="bordered" className="border-1 rounded-2xl">Delete</Button>
                    <Button className="bg-indigo-500 text-white rounded-2xl flex">
                        <Image src={bubbleSvg} alt="text bubble"/>
                        Send Message
                        </Button>
                </div>
            </div>
        </div>
        
    )
}