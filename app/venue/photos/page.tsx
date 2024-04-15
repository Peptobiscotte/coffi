import HeaderLayout from "@/components/venue-components/header-layout";
import Image from "next/image";

import coworkImage1 from "@/public/images/cowork.png"
import coworkImage2 from "@/public/images/cowork2.png"
import coworkImage3 from "@/public/images/cowork3.png"
import coworkImage4 from "@/public/images/cowork4.png"
import coworkImage5 from "@/public/images/cowork5.png"
import plusSvg from '@/public/plusvenuephotos.svg'

export default function VenuePhoto() {
    return(
        <div className="flex flex-col gap-8">
            <HeaderLayout />
            <div className="flex px-8 gap-8">
                <div className="font-geo text-slate-400 basis-1/4">
                    <h1 className="text-black">Photos</h1>
                    <h2>Update your cowork photos</h2>
                </div>
                <div className="border bg-white rounded-xl p-6 flex flex-col gap-5">
                    <div className="flex gap-5">
                        <Image src={coworkImage1} alt="cowork image"/>
                        <Image src={coworkImage2} alt="cowork image 2"/>
                    </div>
                    <div className="flex gap-5">
                        <Image src={coworkImage3} alt="cowork image"/>
                        <Image src={coworkImage4} alt="cowork image 2"/>
                    </div>
                    <div className="flex gap-5">
                        <Image src={coworkImage5} alt="cowork image"/>
                        <div className="border-dashed border-2 grow rounded-2xl flex justify-center items-center">
                            <button className="flex gap-1 border rounded-2xl px-4 py-2.5">
                                <Image src={plusSvg} alt="plus"/>
                                <p className="font-geo text-slate-500">Add</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}