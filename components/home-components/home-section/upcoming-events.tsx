import calendarSvg from '@/public/calendar2.svg'
import Image from 'next/image'
import Link from 'next/link'
import EventCard from './event-card'

export default function UpcomingEvents(props:any) {
    const { events } = props

    function sortDate(a:any, b:any) {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
    }

    events.sort(sortDate)

    return(
        <div className="flex flex-col gap-5 font-geo bg-white border rounded-3xl p-6">
            <div className="flex justify-between">
                <div className='flex gap-2'>
                    <Image src={calendarSvg} alt='calendar'/>
                    <h1>Upcoming events</h1>
                </div>
                <div className='text-indigo-600 text-sm'>
                <Link href={'/agenda'}>See all</Link>
                </div>
            </div>
            <div>
                {events.map((event:any) =>
                    <EventCard key={event._id} event={event}/>
                )}
            </div>
        </div>
    )
}