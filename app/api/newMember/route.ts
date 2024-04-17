import { MongoClient } from "mongodb"


export async function POST(req: any, res:any) {
    const host = process.env.DB_HOST
    const pass = process.env.DB_PASS

    try {
        const data = await req.json()

       const client = await MongoClient.connect(`mongodb+srv://${host}:${pass}@cluster0.bqzxlqw.mongodb.net/members?retryWrites=true&w=majority`)
       const db = client.db()

       const meetupsCollection = db.collection('members')

       await meetupsCollection.insertOne(data)

       client.close()

       return Response.json({ 'message' : 'POST data' })
    } catch (error) {
        console.error(error)
      return  Response.json({ 'message' : 'error' }) 
    }
}

