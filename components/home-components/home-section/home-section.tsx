import BestMembers from "./best-members";
import PieContainer from "./pie-container";
import Turnover from "./turnover";
import UpcomingEvents from "./upcoming-events";

export default function HomeSection(props: any) {
    const { allMembers, events } = props

    return (
        <div className="flex flex-col gap-6">
            <PieContainer allMembers={allMembers}/>
            <div className="flex px-8 gap-6">
                <div className="flex flex-col gap-6">
                    <Turnover />
                    <UpcomingEvents events={events} members={allMembers}/>
                </div>
                <BestMembers allMembers={allMembers}/>
            </div>
        </div>
    )
}