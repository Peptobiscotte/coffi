import Link from "next/link"
import Image from "next/image"
import homeSvg from '../../public/home-line(1).svg'
import membersSvg from '../../public/users-01.svg'
import venueSvg from '../../public/building-02.svg'
import agendaSvg from '../../public/calendar.svg'
import { useRouter } from "next/router"

export default function NavLink() {
    const router = useRouter()

    return (
            <nav>
                <ul  className="flex flex-col gap-1 font-geo text-slate-400">
                    <li className={router.pathname === '/' ? 'flex gap-3 px-3 py-2 bg-stone-50 rounded-lg' : 'flex gap-3 px-3 py-2'}>
                        <Image src={homeSvg} alt="home svg" />
                        <Link href='/' className={router.pathname === '/' ? 'text-indigo-500' : ""}>Home</Link>
                    </li>
                    <li className={router.pathname.includes('/members') ? 'flex gap-3 px-3 py-2 bg-stone-50 rounded-lg' : 'flex gap-3 px-3 py-2'}>
                        <Image src={membersSvg} alt="members svg" />
                        <Link href='/members' className={router.pathname.includes('/members') ? 'text-indigo-500' : ""}>Members</Link>
                    </li>
                    <li className={router.pathname.includes('/venue') ? 'flex gap-3 px-3 py-2 bg-stone-50 rounded-lg' : 'flex gap-3 px-3 py-2'}>
                        <Image src={venueSvg} alt="venue svg" />
                        <Link href='/venue' className={router.pathname.includes('/venue') ? 'text-indigo-500' : ""}>Venue</Link>
                    </li>
                    <li className={router.pathname === '/agenda' ? 'flex gap-3 px-3 py-2 bg-stone-50 rounded-lg' : 'flex gap-3 px-3 py-2'}>
                        <Image src={agendaSvg} alt="agenda svg" />
                        <Link href='/agenda' className={router.pathname === '/agenda' ? 'text-indigo-500' : ""}>Agenda</Link>
                    </li>
                </ul>
            </nav>
    )
}

