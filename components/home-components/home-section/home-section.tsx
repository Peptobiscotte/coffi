import BestMembers from "./best-members";
import PieContainer from "./pie-container";
import Turnover from "./turnover";
import UpcomingEvents from "./upcoming-events";

export default function HomeSection(props: any) {
    const { allMembers } = props

    return (
        <div className="flex flex-col gap-6">
            <PieContainer allMembers={allMembers}/>
            <div className="flex px-8 gap-6">
                <div>
                    <Turnover />
                    <UpcomingEvents />
                </div>
                <BestMembers allMembers={allMembers}/>
            </div>
        </div>
    )
}