import Header from "@/components/agenda-components/agenda-header/header"
import Section from "@/components/agenda-components/agenda-section/section"
import clientPromise from "@/lib/mongodb";

export default function AgendaPage(props: any) {
    const { members } = props

    return (
        <div className="flex flex-col pt-10 px-8 gap-8">
            <Header members={members}/>
            <Section />
        </div>
    )
}

export async function getServerSideProps() {
    try {
      const client = await clientPromise;
      const db = client.db()
      const allMembers = await db.collection("members").find({}).toArray();
  
      return {
          props: { members : JSON.parse(JSON.stringify(allMembers))}
      }
  } catch (e) {
      console.error(e)
      return { props : { members : [] } }
    }
  }