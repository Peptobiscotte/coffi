'use client'

import settingsSvg from '../../public/settings-01.svg'
import supportSvg from '../../public/life-buoy-01.svg'
import Image from 'next/image'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function NavLinkFooter() {
    return (
        <nav>
            <ul className="flex flex-col gap-1 font-geo text-slate-400">
                <li className="flex gap-3 px-3 py-2">
                    <Image src={supportSvg} alt='supp svg'/>
                    <p>Support</p>
                </li>
                <li className="flex gap-3 px-3 py-2">
                    <Image src={settingsSvg} alt='setting svg'/>
                    <p>Settings</p>
                </li>
            </ul>
        </nav>
    )
}