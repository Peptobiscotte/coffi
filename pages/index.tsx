import HomeHeader from "@/components/home-components/home-header/home-header"
import HomeSection from "@/components/home-components/home-section/home-section"
import clientPromise from "@/lib/mongodb";

export default function HomePage(props: any) {
  const { members, events } = props

  return (
    <div className="flex flex-col gap-8">
      <HomeHeader />
      <HomeSection allMembers={members} events={events}/>
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
        props: { members : JSON.parse(JSON.stringify(allMembers)), events : JSON.parse(JSON.stringify(allEvents))}
    }
} catch (e) {
    console.error(e)
    return { props : { members : [] } }
  }
}
