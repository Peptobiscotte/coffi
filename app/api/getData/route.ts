import clientPromise from "@/lib/mongodb"
import { error } from "console";
import { MongoClient } from "mongodb"

export async function GET() {
  const host = process.env.DB_HOST
  const pass = process.env.DB_PASS

    try {
      // const client = await clientPromise;
      const client = await MongoClient.connect(`mongodb+srv://${host}:${pass}@cluster0.bqzxlqw.mongodb.net/members?retryWrites=true&w=majority`)
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