// import { MongoClient } from "mongodb"
// import type { NextApiRequest, NextApiResponse } from 'next'

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     const host = process.env.DB_HOST
//     const pass = process.env.DB_PASS

//     if(req.method === "GET") {
//         const client = await MongoClient.connect(`mongodb+srv://${host}:${pass}@cluster0.bqzxlqw.mongodb.net/members?retryWrites=true&w=majority`)
//         const db = client.db()

//         const membersCollection = db.collection("members")
//         const allMembers = await membersCollection.find({}).toArray();

//         console.log(allMembers)
        
//         client.close()
//         res.setHeader('Content-Type', 'application/json')
//         res.status(200).json(allMembers)
//     }
// }