'use client'

import HeaderLayout from "@/components/venue-components/header-layout";
import iconwrap from '@/public/images/Iconwrap.png'
import iconwrap1 from '@/public/images/Icon wrap(1).png'
import iconwrap2 from '@/public/images/Icon wrap(2).png'
import iconwrap3 from '@/public/images/Icon wrap(3).png'
import iconwrap4 from '@/public/images/Icon wrap(4).png'
import iconwrap5 from '@/public/images/Icon wrap(5).png'
import Image from "next/image";
import {Switch} from "@nextui-org/react";
import { useState } from "react";
import Link from "next/link";

export default function VenuePromo() {
    const [ switchValue, setSwitchValue ] = useState(true)
    const [ switchValue1, setSwitchValue1 ] = useState(true)
    const [ switchValue2, setSwitchValue2 ] = useState(true)
    const [ switchValue3, setSwitchValue3 ] = useState(true)
    const [ switchValue4, setSwitchValue4 ] = useState(true)
    const [ switchValue5, setSwitchValue5 ] = useState(true)

    function switchHandler() {
        setSwitchValue(!switchValue)
    }
    function switchHandler1() {
        setSwitchValue1(!switchValue1)
    }
    function switchHandler2() {
        setSwitchValue2(!switchValue2)
    }
    function switchHandler3() {
        setSwitchValue3(!switchValue3)
    }
    function switchHandler4() {
        setSwitchValue4(!switchValue4)
    }
    function switchHandler5() {
        setSwitchValue5(!switchValue5)
    }


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
                                <h2 className="text-sm text-slate-500">Office space, flexible memberships & meeting rooms</h2>
                            </div>
                        </div>
                        {switchValue ?
                            <div className="flex items-center gap-4">
                                <Link target="_blank" href='https://www.coworker.com/' className="font-geo text-indigo-500">View page</Link>
                                <Switch defaultSelected aria-label="Automatic updates" className="text-indigo-500" onChange={switchHandler}/>
                            </div> :
                            <div className="flex items-center gap-4">
                                <h1 className="font-geo text-gray-200">View page</h1>
                                <Switch defaultSelected aria-label="Automatic updates" className="text-indigo-500" onChange={switchHandler}/>
                            </div>
                        }                       
                    </div>
                    <div className="flex justify-between py-6 border-b">
                        <div className="flex gap-3">
                            <Image src={iconwrap1} alt="icon wrap"/>
                            <div className="font-geo">
                                <h1>Spaces</h1>
                                <h2 className="text-sm text-slate-500">Office space, flexible memberships & meeting rooms</h2>
                            </div>
                        </div>
                        {switchValue1 ?
                            <div className="flex items-center gap-4">
                                <Link target="_blank"  href='https://support.wix.com/fr/appli-spaces-by-wix' className="font-geo text-indigo-500">View page</Link>
                                <Switch defaultSelected aria-label="Automatic updates" className="text-indigo-500" onChange={switchHandler1}/>
                            </div> :
                            <div className="flex items-center gap-4">
                                <h1 className="font-geo text-gray-200">View page</h1>
                                <Switch defaultSelected aria-label="Automatic updates" className="text-indigo-500" onChange={switchHandler1}/>
                            </div>
                        } 
                    </div>
                    <div className="flex justify-between py-6 border-b">
                        <div className="flex gap-3">
                            <Image src={iconwrap2} alt="icon wrap"/>
                            <div className="font-geo">
                                <h1>Regus</h1>
                                <h2 className="text-sm text-slate-500">Offices, Coworking and meeting rooms</h2>
                            </div>
                        </div>
                        {switchValue2 ?
                            <div className="flex items-center gap-4">
                                <Link target="_blank"  href='https://www.regus.com/fr-fr' className="font-geo text-indigo-500">View page</Link>
                                <Switch defaultSelected aria-label="Automatic updates" className="text-indigo-500" onChange={switchHandler2}/>
                            </div> :
                            <div className="flex items-center gap-4">
                                <h1 className="font-geo text-gray-200">View page</h1>
                                <Switch defaultSelected aria-label="Automatic updates" className="text-indigo-500" onChange={switchHandler2}/>
                            </div>
                        } 
                    </div>
                    <div className="flex justify-between py-6 border-b">
                        <div className="flex gap-3">
                            <Image src={iconwrap3} alt="icon wrap"/>
                            <div className="font-geo">
                                <h1>Croissant</h1>
                                <h2 className="text-sm text-slate-500">Unlock the best coworking spaces daily with one membership</h2>
                            </div>
                        </div>
                        {switchValue3 ?
                            <div className="flex items-center gap-4">
                                <Link target="_blank"  href='https://www.getcroissant.com/' className="font-geo text-indigo-500">View page</Link>
                                <Switch defaultSelected aria-label="Automatic updates" className="text-indigo-500" onChange={switchHandler3}/>
                            </div> :
                            <div className="flex items-center gap-4">
                                <h1 className="font-geo text-gray-200">View page</h1>
                                <Switch defaultSelected aria-label="Automatic updates" className="text-indigo-500" onChange={switchHandler3}/>
                            </div>
                        } 
                    </div>
                    <div className="flex justify-between py-6 border-b">
                        <div className="flex gap-3">
                            <Image src={iconwrap4} alt="icon wrap"/>
                            <div className="font-geo">
                                <h1>Coworkmo</h1>
                                <h2 className="text-sm text-slate-500">Occasional and affordable coworking spaces</h2>
                            </div>
                        </div>
                        {switchValue4 ?
                            <div className="flex items-center gap-4">
                                <Link target="_blank"  href='https://www.coworkmo.com/' className="font-geo text-indigo-500">View page</Link>
                                <Switch defaultSelected aria-label="Automatic updates" className="text-indigo-500" onChange={switchHandler4}/>
                            </div> :
                            <div className="flex items-center gap-4">
                                <h1 className="font-geo text-gray-200">View page</h1>
                                <Switch defaultSelected aria-label="Automatic updates" className="text-indigo-500" onChange={switchHandler4}/>
                            </div>
                        } 
                    </div>
                    <div className="flex justify-between py-6 border-b">
                        <div className="flex gap-3">
                            <Image src={iconwrap5} alt="icon wrap"/>
                            <div className="font-geo">
                                <h1>Ubiq</h1>
                                <h2 className="text-sm text-slate-500">Find the perfect coworking space</h2>
                            </div>
                        </div>
                        {switchValue5 ?
                            <div className="flex items-center gap-4">
                                <Link target="_blank"  href='https://www.ubiq.fr/' className="font-geo text-indigo-500">View page</Link>
                                <Switch defaultSelected aria-label="Automatic updates" className="text-indigo-500" onChange={switchHandler5}/>
                            </div> :
                            <div className="flex items-center gap-4">
                                <h1 className="font-geo text-gray-200">View page</h1>
                                <Switch defaultSelected aria-label="Automatic updates" className="text-indigo-500" onChange={switchHandler5}/>
                            </div>
                        } 
                    </div>
                </div>
            </div>
        </div>
    )
}