import { MongoClient } from "mongodb"
import HomeHeader from "@/components/home-components/home-header/home-header"
import HomeSection from "@/components/home-components/home-section/home-section"
import { revalidatePath } from 'next/cache'
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next"

// async function getData() {
//   const res = await fetch(`${process.env.URL}/api/getData`)
  
//   return res.json()
// }

export default async function HomePage() {
  // const { members, events } = await getData()
  const session = await getServerSession(options)
  
  
  const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_HOST}:${process.env.DB_PASS}@cluster0.bqzxlqw.mongodb.net/?retryWrites=true&w=majority`)
  const db1 = client.db('members')
  const db2 = client.db('events')
  const allMembers = await db1.collection("members").find({}).toArray();
  const allEvents = await db2.collection("events").find({}).toArray();
  

      const members = JSON.parse(JSON.stringify(allMembers))
      const events = JSON.parse(JSON.stringify(allEvents))

      revalidatePath('/')
      
  return (
    <div className="overflow-x-scroll flex flex-col gap-8">
      <HomeHeader user={session?.user}/>
      <HomeSection allMembers={members} events={events}/>
    </div>
  )
}

