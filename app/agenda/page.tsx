import Header from "@/components/agenda-components/agenda-header/header"
import Section from "@/components/agenda-components/agenda-section/section"
import clientPromise from "@/lib/mongodb";
import { MongoClient } from "mongodb"
import { revalidatePath } from 'next/cache'
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next"

// async function getData() {
//     const res = await fetch(process.env.URL + '/api/getData')
//     return res.json()
//   }

export default async function AgendaPage() {
    const session = await getServerSession(options)
    // const { members, events } = await getData()
    const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_HOST}:${process.env.DB_PASS}@cluster0.bqzxlqw.mongodb.net/?retryWrites=true&w=majority`)
      const db1 = client.db('members')
      const db2 = client.db('events')
      const allMembers = await db1.collection("members").find({}).toArray();
      const allEvents = await db2.collection("events").find({}).toArray();

      const members = JSON.parse(JSON.stringify(allMembers))
      const events = JSON.parse(JSON.stringify(allEvents))

      revalidatePath('/agenda')
    return (
        <div className="flex flex-col pt-10 px-8 gap-8">
            <Header members={members} user={session?.user}/>
            <Section events={events} members={members}/>
        </div>
    )
}

