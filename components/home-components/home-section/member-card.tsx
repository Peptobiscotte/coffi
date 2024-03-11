import {Avatar} from "@nextui-org/react"
import Link from "next/link"

export default function MemberCard(props: any) {
    const { member } = props
    const initials = member.firstName[0] + member.lastName[0]

    return (
        <div className="flex justify-between p-4 font-geo border-b">
            <div className="flex gap-3 items-center">
                    <Link href={`/members/${member._id}`}>
                        <Avatar showFallback name={initials}/>
                    </Link>
                <div className="text-sm">
                    <Link href={`/members/${member._id}`}>
                        <p>{member.firstName} {member.lastName}</p>
                    </Link>
                    <p className="text-slate-400">{member.email}</p>
                </div>
            </div>            
            <div className="flex items-center">
                <p>{member.plan}</p>
            </div>
        </div>
    )
}