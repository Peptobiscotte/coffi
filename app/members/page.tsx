import MembersHeader from "@/components/members-components/members-headers/headers";
import MembersMain from "@/components/members-components/members-section/MembersMain";
import clientPromise from "@/lib/mongodb";
import { MongoClient } from "mongodb"
import { revalidatePath } from 'next/cache'

// async function getData() {
//   const res = await fetch(process.env.URL + '/api/getData')
//   return res.json()
// }

export default async function MembersPage() {
  // const { members } = await getData()

      const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_HOST}:${process.env.DB_PASS}@cluster0.bqzxlqw.mongodb.net/?retryWrites=true&w=majority`)
      const db1 = client.db('members')
      const db2 = client.db('events')
      const allMembers = await db1.collection("members").find({}).toArray();
      const allEvents = await db2.collection("events").find({}).toArray();

      const members = JSON.parse(JSON.stringify(allMembers))
      const events = JSON.parse(JSON.stringify(allEvents))

      revalidatePath('/members')
    return (
      <div>
        <MembersHeader allMembers={members}/>
        <MembersMain allMembers={members}/>
      </div>
    )
  }

  