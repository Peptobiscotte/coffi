import EventCard from "./event-card";

export default function Section() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <h1 className="font-geo">Today</h1>
                <EventCard />
                <EventCard />
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="font-geo">Next week</h1>
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
        </div>
    )
}