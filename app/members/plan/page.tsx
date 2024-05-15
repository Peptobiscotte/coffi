import MembersHeader from "@/components/members-components/members-headers/headers";
import MembersMain from "@/components/members-components/members-section/MembersMain";
import clientPromise from "@/lib/mongodb";
import { MongoClient } from "mongodb"
import { revalidatePath } from 'next/cache'


export default async function MembersPage() {

      const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_HOST}:${process.env.DB_PASS}@cluster0.bqzxlqw.mongodb.net/?retryWrites=true&w=majority`)
      const db1 = client.db('members')
      const db2 = client.db('events')
      const allMembers = await db1.collection("members").find({}).toArray();
      const allEvents = await db2.collection("events").find({}).toArray();

      const members = JSON.parse(JSON.stringify(allMembers))
      const events = JSON.parse(JSON.stringify(allEvents))

      const order:any = { "premium": 1, "desk": 2, "free": 3 };


    const membersPlan = members.sort((a:any, b:any) => {
    
    let rankA = order[a.plan];
    let rankB = order[b.plan];

    return rankA - rankB;
});

    revalidatePath('/members/plan')
    return (
      <div>
        <MembersHeader allMembers={membersPlan}/>
        <MembersMain allMembers={membersPlan}/>
      </div>
    )
  }

  