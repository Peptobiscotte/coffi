import {Avatar} from "@nextui-org/react";
import trashSvg from '@/public/trash-01.svg'
import bubbleSvg from '@/public/message-circle-01.svg'
import editSvg from '@/public/edit-01.svg'
import Image from "next/image";
import Link from "next/link";

export default function TableMember(props: any) {
    const { member } = props
    const imgURL = `https://mycoffibucket.s3.eu-west-3.amazonaws.com/userImg/${member.imageKey}`

    return(
        <tr className="border-b dark:border-slate-800">
            <td className="text-sm text-black flex items-center gap-10 md:gap-2 py-4">
                <Link href={`/members/${member._id}`}>
                    <Avatar showFallback name={member.firstName} src={imgURL} />
                </Link>
                <Link href={`/members/${member._id}`} className="dark:text-slate-200">
                {member.firstName} {member.lastName}
                </Link>
            </td>
            <td className="max-sm:hidden">{member.email}</td>
            <td className="max-sm:hidden">{member.plan}</td>
            <td className="max-sm:hidden">November 16, 2023</td>
            <td className="max-sm:hidden">
                <div className="flex justify-around">
                    <button><Link href={`/members/${member._id}`}><Image src={editSvg} alt="edit"/></Link></button>
                    <button><Image src={bubbleSvg} alt="comment"/></button>
                    <button><Image src={trashSvg} alt="delete"/></button>                    
                </div>
            </td>
        </tr>
    )
}