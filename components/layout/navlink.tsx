import Link from "next/link"
import Image from "next/image"
import homeSvg from '../../public/home-line.svg'
import membersSvg from '../../public/users-01.svg'
import venueSvg from '../../public/building-02.svg'
import agendaSvg from '../../public/calendar.svg'

export default function NavLink() {
    return (
            <nav>
                <ul  className="flex flex-col gap-1 font-geo text-slate-400">
                    <li className="flex gap-3 px-3 py-2 text-indigo-500">
                        <Image src={homeSvg} alt="home svg" />
                        <Link href='/'>Home</Link>
                    </li>
                    <li className="flex gap-3 px-3 py-2">
                        <Image src={membersSvg} alt="members svg" />
                        <Link href='/members'>Members</Link>
                    </li>
                    <li className="flex gap-3 px-3 py-2">
                        <Image src={venueSvg} alt="venue svg" />
                        <Link href='/venue'>Venue</Link>
                    </li>
                    <li className="flex gap-3 px-3 py-2">
                        <Image src={agendaSvg} alt="agenda svg" />
                        <Link href='/agenda'>Agenda</Link>
                    </li>
                </ul>
            </nav>
    )
}

