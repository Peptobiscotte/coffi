import { MongoClient } from "mongodb"
import { ObjectId } from "mongodb"

export async function PATCH(req: any, res:any) {
    const host = process.env.DB_HOST
    const pass = process.env.DB_PASS

    try {
        const data = await req.json()
        const objectId = new ObjectId(data._id)

       const client = await MongoClient.connect(`mongodb+srv://${host}:${pass}@cluster0.bqzxlqw.mongodb.net/members?retryWrites=true&w=majority`)
       const db = client.db()

       const meetupsCollection = db.collection('members')

        await meetupsCollection.updateOne( { _id : objectId },
        {
            $set: {
                firstName: data.firstName,
                lastName: data.lastName,
                birthdate: data.birthdate,
                email: data.email,
                phone: data.phone
            }
        })

       
       client.close()

       return Response.json({ 'message' : objectId }) 
    } catch(error) {
        console.error(error)
        return Response.json({ 'message' : 'FAILURE' }) 
    }
}
