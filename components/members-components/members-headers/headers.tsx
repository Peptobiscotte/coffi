import MemberCards from "./cards";
import HeaderTitle from "./title";

export default function MembersHeader(props: any) {
    const { allMembers } = props

    return(
        <div className="flex flex-col gap-8">
            <HeaderTitle />
            <MemberCards allMembers={allMembers}/>
        </div>
    )
}