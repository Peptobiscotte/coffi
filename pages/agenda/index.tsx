import Header from "@/components/agenda-components/agenda-header/header"
import Section from "@/components/agenda-components/agenda-section/section"
import clientPromise from "@/lib/mongodb";

export default function AgendaPage(props: any) {
    const { members, events } = props

    return (
        <div className="flex flex-col pt-10 px-8 gap-8">
            <Header members={members}/>
            <Section events={events}/>
        </div>
    )
}

export async function getServerSideProps() {
    try {
      const client = await clientPromise;

      const db1 = client.db('members')
      const db2 = client.db('events')

      const allMembers = await db1.collection("members").find({}).toArray();
      const allEvents = await db2.collection("events").find({}).toArray();
      
      

      return {
          props: { 
            members : JSON.parse(JSON.stringify(allMembers)),
            events: JSON.parse(JSON.stringify(allEvents))
        }
      }
  } catch (e) {
      console.error(e)
      return { props : { members : [], events : [] } }
    }
  }