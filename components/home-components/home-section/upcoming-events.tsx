import calendarSvg from '@/public/calendar2.svg'
import Image from 'next/image'
import Link from 'next/link'
import EventCard from './event-card'

export default function UpcomingEvents(props:any) {
    const { events, members } = props

    function sortDate(a:any, b:any) {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
    }

    events.sort(sortDate)

    return(
        <div className="flex flex-col gap-5 font-geo bg-white border rounded-3xl p-6 dark:bg-slate-900 dark:border-slate-900">
            <div className="flex justify-between">
                <div className='flex gap-2'>
                    <Image src={calendarSvg} alt='calendar'/>
                    <h1 className='dark:text-slate-200'>Upcoming events</h1>
                </div>
                <div className='text-indigo-600 text-sm'>
                <Link href={'/agenda'}>See all</Link>
                </div>
            </div>
            <div>
                {events.map((event:any) =>
                    <EventCard key={event._id} event={event} members={members}/>
                )}
            </div>
        </div>
    )
}