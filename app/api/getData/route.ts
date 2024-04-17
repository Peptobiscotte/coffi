import clientPromise from "@/lib/mongodb"
import { error } from "console";

export async function GET() {
    try {
      const client = await clientPromise;
      const db1 = client.db('members')
      const db2 = client.db('events')
      const allMembers = await db1.collection("members").find({}).toArray();
      const allEvents = await db2.collection("events").find({}).toArray();

      const members = JSON.parse(JSON.stringify(allMembers))
      const events = JSON.parse(JSON.stringify(allEvents))
      
      return Response.json({ members, events })
  } catch (e) {
      console.error(e)
      return Response.json({ e })
    }
}