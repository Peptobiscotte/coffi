import {Avatar} from "@nextui-org/react"

export default function MemberCard(props: any) {
    const { member } = props

    return (
        <div className="flex justify-between p-4 font-geo border-b">
            <div className="flex gap-3 items-center">
                <Avatar showFallback name={member.firstName}/>
                <div className="text-sm">
                    <p>{member.firstName}{member.lastName}</p>
                    <p className="text-slate-400">{member.email}</p>
                </div>
            </div>            
            <div className="flex items-center">
                <p>{member.plan}</p>
            </div>
        </div>
    )
}