import Header from "@/components/agenda-components/agenda-header/header"
import Section from "@/components/agenda-components/agenda-section/section"
import clientPromise from "@/lib/mongodb";
import { MongoClient } from "mongodb"

// async function getData() {
//     const res = await fetch(process.env.URL + '/api/getData')
//     return res.json()
//   }

export default async function AgendaPage() {
    // const { members, events } = await getData()
    const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_HOST}:${process.env.DB_PASS}@cluster0.bqzxlqw.mongodb.net/?retryWrites=true&w=majority`)
      const db1 = client.db('members')
      const db2 = client.db('events')
      const allMembers = await db1.collection("members").find({}).toArray();
      const allEvents = await db2.collection("events").find({}).toArray();

      const members = JSON.parse(JSON.stringify(allMembers))
      const events = JSON.parse(JSON.stringify(allEvents))

    
    return (
        <div className="flex flex-col pt-10 px-8 gap-8">
            <Header members={members}/>
            <Section events={events} members={members}/>
        </div>
    )
}

