import clientPromise from "@/lib/mongodb"

export async function GET() {
    try {
      const client = await clientPromise;
      const db1 = client.db('members')
      const allMembers = await db1.collection("members").find({}).toArray();

      const members = JSON.parse(JSON.stringify(allMembers))
      
      return Response.json({ members })
  } catch (e) {
      console.error(e)
      return  Response.json({ members: [] })
    }
}