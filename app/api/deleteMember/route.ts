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

            const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_HOST}:${process.env.DB_PASS}@cluster0.bqzxlqw.mongodb.net/?retryWrites=true&w=majority`)
            const db = client.db('members')
        
            const meetupsCollection = db.collection('members')
        
               await meetupsCollection.deleteOne( { _id: objectId } )
           
               client.close()

            return Response.json({ 'message' : objectId }) 
        }



    } catch(error) {
        console.error(error)
        return Response.json({ 'message' : 'FAILURE' }) 
    }
     
}