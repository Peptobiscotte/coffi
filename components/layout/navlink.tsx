'use client'

import Link from "next/link"
import Image from "next/image"
import homeSvg from '../../public/home-line(1).svg'
import membersSvg from '../../public/users-01.svg'
import venueSvg from '../../public/building-02.svg'
import agendaSvg from '../../public/calendar.svg'
import { useRouter, usePathname } from "next/navigation"

export default function NavLink() {
    const router = useRouter()
    const pathName = usePathname()

    return (
            <nav>
                <ul  className="flex md:flex-col gap-1 font-geo text-slate-400">
                    <li className={pathName === '/' ? 'flex gap-3 px-3 py-2 bg-stone-50 dark:bg-slate-800 rounded-lg' : 'flex gap-3 px-3 py-2'}>
                        <Image src={homeSvg} alt="home svg" className="max-sm:hidden"/>
                        <Link href='/' className={pathName === '/' ? 'text-indigo-500' : ""}>Home</Link>
                    </li>
                    <li className={pathName.includes('/members') ? 'flex gap-3 px-3 py-2 bg-stone-50 dark:bg-slate-800 rounded-lg' : 'flex gap-3 px-3 py-2'}>
                        <Image src={membersSvg} alt="members svg" className="max-sm:hidden"/>
                        <Link href='/members' className={pathName.includes('/members') ? 'text-indigo-500' : ""}>Members</Link>
                    </li>
                    <li className={pathName.includes('/venue') ? 'flex gap-3 px-3 py-2 bg-stone-50 dark:bg-slate-800 rounded-lg' : 'flex gap-3 px-3 py-2'}>
                        <Image src={venueSvg} alt="venue svg" className="max-sm:hidden"/>
                        <Link href='/venue' className={pathName.includes('/venue') ? 'text-indigo-500' : ""}>Venue</Link>
                    </li>
                    <li className={pathName === '/agenda' ? 'flex gap-3 px-3 py-2 bg-stone-50 dark:bg-slate-800 rounded-lg' : 'flex gap-3 px-3 py-2'}>
                        <Image src={agendaSvg} alt="agenda svg" className="max-sm:hidden"/>
                        <Link href='/agenda' className={pathName === '/agenda' ? 'text-indigo-500' : ""}>Agenda</Link>
                    </li>
                </ul>
            </nav>
    )
}

