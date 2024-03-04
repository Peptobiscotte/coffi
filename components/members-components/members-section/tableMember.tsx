import {Avatar} from "@nextui-org/react";
import trashSvg from '@/public/trash-01.svg'
import bubbleSvg from '@/public/message-circle-01.svg'
import editSvg from '@/public/edit-01.svg'
import Image from "next/image";

export default function TableMember(props: any) {
    const { member } = props

    return(
        <tr className="border-b">
            <td className="text-sm text-black flex items-center gap-2 py-4"><Avatar showFallback name='Sienna' />
                {member.firstName} {member.lastName}
            </td>
            <td>{member.email}</td>
            <td>{member.plan}</td>
            <td>November 16, 2023</td>
            <td>
                <div className="flex justify-around">
                    <button><Image src={editSvg} alt="edit"/></button>
                    <button><Image src={bubbleSvg} alt="comment"/></button>
                    <button><Image src={trashSvg} alt="delete"/></button>                    
                </div>
            </td>
        </tr>
    )
}