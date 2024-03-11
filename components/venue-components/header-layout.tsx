import Image from "next/image"
import trashSvg from '@/public/trash-02.svg'
import { useRouter } from "next/router"
import Link from "next/link"

export default function HeaderLayout() {
    const router = useRouter()

    return (
        <div className="flex flex-col px-8 pt-10 gap-8">
            <div className="flex justify-between">
                <div>
                    <h1 className="font-brico text-3xl">Venue</h1>
                    <h2 className="font-geo text-slate-400">Manage your cowork informations, photos & promotional chans</h2>
                </div>
                <div>
                    <button className="flex font-geo text-slate-500 gap-1 border rounded-xl py-3 px-4">
                        <Image src={trashSvg} alt="trash svg"/>
                        <p>Delete venue</p>
                    </button>
                </div>
                
            </div>
            <div className="flex gap-1 border rounded-xl bg-white p-1 font-geo text-slate-500 text-sm">
                <div className={router.pathname === '/venue' ? 'bg-indigo-500 px-3 py-2 text-white rounded-xl' : 'px-3 py-2'}><Link href='/venue'>General</Link></div>
                <div className={router.pathname === '/venue/infos' ? 'bg-indigo-500 px-3 py-2 text-white rounded-xl' : 'px-3 py-2'}><Link href='/venue/infos'>Practical infos</Link></div>
                <div className={router.pathname === '/venue/photos' ? 'bg-indigo-500 px-3 py-2 text-white rounded-xl' : 'px-3 py-2'}><Link href='/venue/photos'>Photos</Link></div>
                <div className={router.pathname === '/venue/promotion' ? 'bg-indigo-500 px-3 py-2 text-white rounded-xl' : 'px-3 py-2'}><Link href='/venue/promotion'>Promotion</Link></div>
            </div>
        </div>
    )
}