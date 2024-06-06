import MemberCards from "./cards";
import HeaderTitle from "./title";

export default function MembersHeader(props: any) {
    const { allMembers, user } = props

    return(
        <div className="flex flex-col gap-8">
            <HeaderTitle user={user}/>
            <MemberCards allMembers={allMembers}/>
        </div>
    )
}