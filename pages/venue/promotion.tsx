import HeaderLayout from "@/components/venue-components/header-layout";
import iconwrap from '@/public/images/Iconwrap.png'
import Image from "next/image";
import {Switch} from "@nextui-org/react";

export default function VenuePromo() {
    return(
        <div className="flex flex-col gap-8">
            <HeaderLayout />
            <div className="flex px-8 gap-8">
                <div className="font-geo text-slate-400 basis-1/4">
                    <h1 className="text-black">Promotion</h1>
                    <h2>Choose on which platform you want to appear</h2>
                </div>
                <div className="flex flex-col border rounded-2xl basis-3/4 bg-white px-6 py-2">
                    <div className="flex justify-between py-6 border-b">
                        <div className="flex gap-3">
                            <Image src={iconwrap} alt="icon wrap"/>
                            <div className="font-geo">
                                <h1>Coworker</h1>
                                <h2 className="text-sm text-slate-500">The world&apos;s largest coworking space marketplace</h2>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <h1 className="font-geo text-indigo-500">View page</h1>
                            <Switch defaultSelected aria-label="Automatic updates" className="text-indigo-500"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}