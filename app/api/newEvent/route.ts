import { MongoClient } from "mongodb"


export async function POST(req: any, res:any) {
    const host = process.env.DB_HOST
    const pass = process.env.DB_PASS

    try {
        const data = await req.json()

        const client = await MongoClient.connect(`mongodb+srv://${host}:${pass}@cluster0.bqzxlqw.mongodb.net/events?retryWrites=true&w=majority`)
       const db = client.db()

       const meetupsCollection = db.collection('events')

       await meetupsCollection.insertOne(data)

       client.close()

       return Response.json({ 'message' : 'POST data' })
    } catch (error) {
        console.error(error)
      return  Response.json({ 'message' : 'error' })
    }
}






// import { MongoClient } from "mongodb"
// import type { NextApiRequest, NextApiResponse } from 'next'

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     const host = process.env.DB_HOST
//     const pass = process.env.DB_PASS

//     if(req.method === 'POST') {
//         const data = req.body

//        const client = await MongoClient.connect(`mongodb+srv://${host}:${pass}@cluster0.bqzxlqw.mongodb.net/events?retryWrites=true&w=majority`)
//        const db = client.db()

//        const meetupsCollection = db.collection('events')

//        const result = await meetupsCollection.insertOne(data)

//        console.log(result)
//        client.close()

//        res.status(201).json({ message: 'Event inserted!' })
//     }
// }
