import { MongoClient } from "mongodb"
import type { NextApiRequest, NextApiResponse } from 'next'
import { ObjectId } from "mongodb"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const host = process.env.DB_HOST
    const pass = process.env.DB_PASS

    if(req.method === 'PUT') {
        const data = req.body
        const objectId = new ObjectId(data._id)

       const client = await MongoClient.connect(`mongodb+srv://${host}:${pass}@cluster0.bqzxlqw.mongodb.net/members?retryWrites=true&w=majority`)
       const db = client.db()

       const meetupsCollection = db.collection('members')

       const result = await meetupsCollection.updateOne( { _id : objectId },
        {
            $set: {
                firstName: data.firstName,
                lastName: data.lastName,
                birthdate: data.birthdate,
                email: data.email,
                phone: data.phone
            }
        })

       console.log(result)
       client.close()

       res.status(201).json({ message: 'Member updated!' })
    }
}
