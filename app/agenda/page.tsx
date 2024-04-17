import Header from "@/components/agenda-components/agenda-header/header"
import Section from "@/components/agenda-components/agenda-section/section"
import clientPromise from "@/lib/mongodb";

async function getData() {
    const res = await fetch('/api/getData')
    return res.json()
  }

export default async function AgendaPage() {
    const { members, events } = await getData()
    
    return (
        <div className="flex flex-col pt-10 px-8 gap-8">
            <Header members={members}/>
            <Section events={events} members={members}/>
        </div>
    )
}

