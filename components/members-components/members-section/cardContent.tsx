import {Avatar} from "@nextui-org/react";
import TableMember from "./tableMember";

export default function CardContent(props: any) {
    const { allMembers } = props

    return(
        <table className="font-geo">
            <thead className="text-xs text-slate-400 text-left border-b">
                <tr>
                <th className="text-black">Name</th>
                <th className="py-3">Email</th>
                <th className="py-3">Plan</th>
                <th className="py-3">Last visit</th>
                <th className="py-3"></th>
                </tr>
            </thead>
            <tbody className="text-xs text-slate-300 border-b">
                {allMembers.map((member: any) => <TableMember key={member._id} member={member}/>)}
            </tbody>
        </table>
    )
}