import HeaderLayout from "@/components/venue-components/header-layout";
import {Checkbox} from "@nextui-org/react";
import pageSvg from '@/public/Page.svg'
import Image from "next/image";
import plus from '@/public/plusguide.svg'

export default function VenuePage() {
    return (
        <div className="flex flex-col gap-8">
            <HeaderLayout />
            <div className="flex flex-col md:flex-row px-8 gap-8">
                <div className="font-geo text-slate-400 basis-1/4">
                    <h1 className="text-black">Practical informations</h1>
                    <h2>Update opening hours, services and guides</h2>
                </div>
                <div className="basis-3/4">
                    <form spellCheck="false" className="flex flex-col gap-6 font-geo text-sm border bg-white rounded-xl p-6">
                        <h1>Opening Hours</h1>
                        <div className="flex flex-col gap-4 md:gap-1">
                            <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center">
                                <h1 className="w-20">Monday</h1>
                                <div className="flex gap-2">
                                    <input type="text" defaultValue='08 : 00' required className="border rounded-xl py-2.5 px-3.5 w-24"/>
                                    <input type="text" defaultValue='20 : 00' required className="border rounded-xl py-2.5 px-3.5 w-24"/>
                                </div>
                                <Checkbox>Closed</Checkbox>
                            </div>
                            <div className="flex flex-col md:flex-row gap-6 items-center">
                                <h1 className="w-20">Tuesday</h1>
                                <div className="flex gap-2">
                                    <input type="text" defaultValue='08 : 00' required className="border rounded-xl py-2.5 px-3.5 w-24"/>
                                    <input type="text" defaultValue='20 : 00' required className="border rounded-xl py-2.5 px-3.5 w-24"/>
                                </div>
                                <Checkbox>Closed</Checkbox>
                            </div>
                            <div className="flex flex-col md:flex-row gap-6 items-center">
                                <h1 className="w-20">Wednesday</h1>
                                <div className="flex gap-2">
                                    <input type="text" defaultValue='08 : 00' required className="border rounded-xl py-2.5 px-3.5 w-24"/>
                                    <input type="text" defaultValue='20 : 00' required className="border rounded-xl py-2.5 px-3.5 w-24"/>
                                </div>
                                <Checkbox>Closed</Checkbox>
                            </div>
                            <div className="flex flex-col md:flex-row gap-6 items-center">
                                <h1 className="w-20">Thursday</h1>
                                <div className="flex gap-2">
                                    <input type="text" defaultValue='08 : 00' required className="border rounded-xl py-2.5 px-3.5 w-24"/>
                                    <input type="text" defaultValue='20 : 00' required className="border rounded-xl py-2.5 px-3.5 w-24"/>
                                </div>
                                <Checkbox>Closed</Checkbox>
                            </div>
                            <div className="flex flex-col md:flex-row gap-6 items-center">
                                <h1 className="w-20">Friday</h1>
                                <div className="flex gap-2">
                                    <input type="text" defaultValue='08 : 00' required className="border rounded-xl py-2.5 px-3.5 w-24"/>
                                    <input type="text" defaultValue='20 : 00' required className="border rounded-xl py-2.5 px-3.5 w-24"/>
                                </div>
                                <Checkbox>Closed</Checkbox>
                            </div>
                            <div className="flex flex-col md:flex-row gap-6 items-center">
                                <h1 className="w-20">Saturday</h1>
                                <div className="flex gap-2">
                                    <input type="text" defaultValue='08 : 00' required className="border rounded-xl py-2.5 px-3.5 w-24"/>
                                    <input type="text" defaultValue='20 : 00' required className="border rounded-xl py-2.5 px-3.5 w-24"/>
                                </div>
                                <Checkbox defaultSelected>Closed</Checkbox>
                            </div>
                            <div className="flex flex-col md:flex-row gap-6 items-center">
                                <h1 className="w-20">Sunday</h1>
                                <div className="flex gap-2">
                                    <input type="text" defaultValue='08 : 00' required className="border rounded-xl py-2.5 px-3.5 w-24"/>
                                    <input type="text" defaultValue='20 : 00' required className="border rounded-xl py-2.5 px-3.5 w-24"/>
                                </div>
                                <Checkbox defaultSelected>Closed</Checkbox>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h1>Guides</h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between border rounded-2xl p-4">
                                    <div className="flex gap-3">
                                        <Image src={pageSvg} alt="page svg"/>
                                        <div>
                                            <h1>How to connect to wifi.pdf</h1>
                                            <h2 className="text-xs text-slate-500">219 KB - 100% uploaded</h2>
                                        </div>
                                    </div>
                                    <Checkbox defaultSelected></Checkbox>
                                </div>
                                <div className="flex justify-between border rounded-2xl p-4">
                                    <div className="flex gap-3">
                                        <Image src={pageSvg} alt="page svg"/>
                                        <div>
                                            <h1>How to connect to wifi.pdf</h1>
                                            <h2 className="text-xs text-slate-500">219 KB - 100% uploaded</h2>
                                        </div>
                                    </div>
                                    <Checkbox defaultSelected></Checkbox>
                                </div>
                            </div>
                            <div>
                                <button type='button' className="flex border rounded-2xl py-2.5 px-4">
                                    <Image src={plus} alt="plus svg"/>
                                    <p className="text-slate-500">New guide</p>
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-end border-t pt-4">
                            <button className="bg-indigo-500 rounded-xl text-white text-sm p-2">Save changes</button>
                        </div>
                    </form>                    
                </div>
            </div>
        </div>
    )
}