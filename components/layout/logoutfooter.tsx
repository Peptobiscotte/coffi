import {Avatar} from "@nextui-org/react";
import Image from "next/image";
import logoutSvg from '../../public/log-out-01.svg'
import sienna from '../../public/images/sienna.png'

export default function LogOutFooter() {
    return (
        <div className="flex gap-3 border-t-2 dark:border-slate-800 pt-6">
            <Avatar src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className="w-10 h-10 text-tiny"  />
            <div className="font-geo mr-auto">
                <p>Sienna Hewitt</p>
                <p className="text-slate-400 text-sm">Sienna.hewitt@mail.com</p>
            </div>
            <Image src={logoutSvg} alt="logout svg"/>
        </div>
    )
}