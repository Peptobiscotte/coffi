import dlSvg from '@/public/download-02.svg'
import Image from 'next/image'
import filterSvg from '@/public/filter-lines.svg'
import {Input} from "@nextui-org/react";

export default function CardHeader(props: any) {
    const { allMembers } = props

    return(
        <div>
            <div className='flex justify-between'>
                <div className="flex gap-1 items-center">
                    <h1 className="font-geo text-lg">Members</h1>
                    <p className="font-geo text-sm bg-stone-100 rounded-full py-0.5 px-2 text-center">{allMembers.length}</p>
                </div>
                <button className='flex gap-1 items-center border rounded-3xl py-2.5 px-3.5'>
                    <Image src={dlSvg} alt='dlButton'/>
                    <p className='font-geo text-sm text-slate-500'>Download all</p>
                </button>
            </div>
            <div className='max-sm:hidden py-3 flex justify-between'>
                 <button className='flex gap-1 items-center border rounded-3xl py-2.5 px-3.5'>
                    <Image src={filterSvg} alt='filter Button'/>
                    <p className='font-geo text-sm text-slate-500'>Filters</p>
                </button>
                <Input type="search" variant='bordered' radius='lg' label="Search" className='w-72 h-10'/>
            </div>
        </div>
    )
}