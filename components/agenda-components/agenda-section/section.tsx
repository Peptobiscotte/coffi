import EventCard from "./event-card";

export default  function Section(props:any) {
    const { events, members } = props
    

    function sortDate(a:any, b:any) {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
    }

    events.sort(sortDate)

    let todaysEvents: any = []
    let nextEvents: any = []

    events.map((event:any) => {
        if(event.date === '2024-04-28') {
            todaysEvents.push(event)
        } else {
            nextEvents.push(event)
        }
    }
    )

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <h1 className="font-geo dark:text-slate-200">Next events</h1>
                {todaysEvents.map((event:any) => 
                <EventCard key={event._id} data={event} members={members}/>
                )}
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="font-geo dark:text-slate-200">Nexter events</h1>
                {nextEvents.map((event:any) => 
                <EventCard key={event._id} data={event} members={members}/>
                )}
            </div>
        </div>
    )
}