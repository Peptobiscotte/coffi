import MemberCards from "./cards";
import HeaderTitle from "./title";

export default function MembersHeader() {
    return(
        <div className="flex flex-col gap-8">
            <HeaderTitle />
            <MemberCards />
        </div>
    )
}