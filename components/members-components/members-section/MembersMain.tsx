import CardContent from "./cardContent";
import CardHeader from "./cardHeader";

export default function MembersMain(props: any) {
    const { allMembers } = props

    return(
        <div className="flex flex-col bg-white rounded-3xl border p-6 m-8">
            <CardHeader allMembers={allMembers}/>
            <CardContent allMembers={allMembers}/>
        </div>
    )
}