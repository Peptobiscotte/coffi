import { MongoClient } from "mongodb"

export default async function handler(req: any, res: any) {
    const host = process.env.DB_HOST
    const pass = process.env.DB_PASS

    if(req.method === 'POST') {
        const data = req.body

       const client = await MongoClient.connect(`mongodb+srv://${host}:${pass}@cluster0.bqzxlqw.mongodb.net/members?retryWrites=true&w=majority`)
       const db = client.db()

       const meetupsCollection = db.collection('members')

       const result = await meetupsCollection.insertOne(data)

       console.log(result)
       client.close()

       res.status(201).json({ message: 'Member inserted!' })
    }
}

