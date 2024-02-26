import BestMembers from "./best-members";
import PieContainer from "./pie-container";
import Turnover from "./turnover";
import UpcomingEvents from "./upcoming-events";

export default function HomeSection() {
    return (
        <div className="flex flex-col gap-6">
            <PieContainer />
            <div className="flex px-8">
                <div>
                    <Turnover />
                    <UpcomingEvents />
                </div>
                <BestMembers />
            </div>
        </div>
    )
}