import {Avatar, user} from "@nextui-org/react";
import Image from "next/image";
import logoutSvg from '../../public/log-out-01.svg'
import sienna from '../../public/images/sienna.png'
import Link from "next/link";

export default function LogOutFooter(props:any) {
    const userGit = props
    const nameGit = (userGit.user.user.user.name)
    const urlImg = userGit.user.user.user.image

    return (
        <div className="flex gap-3 border-t-2 dark:border-slate-800 pt-6 items-center">
            <Avatar src={urlImg} size="md"  />
            <div className="font-geo dark:text-slate-400">
                <p>{nameGit}</p>
                {/* <p className="text-slate-400 text-sm">Sienna.hewitt@mail.com</p> */}
            </div>
            <Link href='/api/auth/signout' className="ml-auto">
                <Image src={logoutSvg} alt="logout svg"/>
            </Link >
        </div>
    )
}