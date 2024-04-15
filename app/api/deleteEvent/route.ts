import { MongoClient } from "mongodb"
import { ObjectId } from "mongodb"
import { NextRequest } from "next/server";

export async function DELETE(req:NextRequest, res:any) {
    const host = process.env.DB_HOST
    const pass = process.env.DB_PASS

    try {
    
        const searchParams = req.nextUrl.searchParams
        const id = searchParams.get('id')

        if(id !== null) {
            const objectId = new ObjectId(id)

            const client = await MongoClient.connect(`mongodb+srv://${host}:${pass}@cluster0.bqzxlqw.mongodb.net/events?retryWrites=true&w=majority`)
            const db = client.db()
        
            const meetupsCollection = db.collection('events')
        
               await meetupsCollection.deleteOne( { _id: objectId } )
           
               client.close()

            return Response.json({ 'message' : objectId }) 
        }



    } catch(error) {
        console.error(error)
        return Response.json({ 'message' : 'FAILURE' }) 
    }
     
}