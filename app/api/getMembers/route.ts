import clientPromise from "@/lib/mongodb"
import { MongoClient } from "mongodb"

export async function GET() {
  const host = process.env.DB_HOST
  const pass = process.env.DB_PASS

    try {
      // const client = await clientPromise;
      const client = await MongoClient.connect(`mongodb+srv://${host}:${pass}@cluster0.bqzxlqw.mongodb.net/members?retryWrites=true&w=majority`)
      const db1 = client.db('members')
      const allMembers = await db1.collection("members").find({}).toArray();

      const members = JSON.parse(JSON.stringify(allMembers))
      
      return Response.json({ members })
  } catch (e) {
      console.error(e)
      return  Response.json({ members: [] })
    }
}