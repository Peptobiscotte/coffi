import MembersHeader from "@/components/members-components/members-headers/headers";
import MembersMain from "@/components/members-components/members-section/MembersMain";
import clientPromise from "@/lib/mongodb";

export default function MembersPage(props: any) {
  const { members } = props

    return (
      <div>
        <MembersHeader allMembers={members}/>
        <MembersMain allMembers={members}/>
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