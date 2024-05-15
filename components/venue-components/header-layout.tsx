'use client'

import Image from "next/image"
import trashSvg from '@/public/trash-02.svg'
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"

export default function HeaderLayout() {
    const router = useRouter()
    const pathName = usePathname()
    

    return (
        <div className="flex flex-col px-8 pt-10 gap-8">
            <div className="flex justify-between">
                <div>
                    <h1 className="font-brico text-3xl dark:text-slate-200">Venue</h1>
                    <h2 className="font-geo text-slate-400">Manage your cowork informations, photos & promotional chans</h2>
                </div>
                <div>
                    <button className="flex font-geo text-slate-500 gap-1 border rounded-xl py-3 px-4 max-sm:hidden dark:border-slate-900">
                        <Image src={trashSvg} alt="trash svg"/>
                        <p>Delete venue</p>
                    </button>
                </div>
                
            </div>
            <div className="flex gap-1 border rounded-xl bg-white p-1 font-geo text-slate-500 text-sm dark:bg-slate-900 dark:border-slate-900">
                <div className={pathName === '/venue' ? 'bg-indigo-500 px-3 py-2 text-white rounded-xl' : 'px-3 py-2'}><Link href='/venue'>General</Link></div>
                <div className={pathName === '/venue/infos' ? 'bg-indigo-500 px-3 py-2 text-white rounded-xl' : 'px-3 py-2'}><Link href='/venue/infos'>Practical infos</Link></div>
                <div className={pathName === '/venue/photos' ? 'bg-indigo-500 px-3 py-2 text-white rounded-xl' : 'px-3 py-2'}><Link href='/venue/photos'>Photos</Link></div>
                <div className={pathName === '/venue/promotion' ? 'bg-indigo-500 px-3 py-2 text-white rounded-xl' : 'px-3 py-2'}><Link href='/venue/promotion'>Promotion</Link></div>
            </div>
        </div>
    )
}