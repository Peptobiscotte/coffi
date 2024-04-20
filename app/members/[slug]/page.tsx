import MemberDetailHeader from "@/components/members-components/members-details/member-header";
import MemberDetailSection from "@/components/members-components/members-details/member-section";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from 'mongodb';
import { MongoClient } from "mongodb"
import { revalidatePath } from 'next/cache'

// async function getMemberDetail(slug:any) {
//     const memberId = slug
//     try {
//         const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_HOST}:${process.env.DB_PASS}@cluster0.bqzxlqw.mongodb.net/?retryWrites=true&w=majority`)
//         const db = client.db()
//         const member = await db.collection("members").findOne({ _id: new ObjectId(memberId)});
  
//         const memberData = JSON.parse(JSON.stringify(member))
        
//         return memberData 
//     } catch (e) {
//         console.error(e)
//         return  { member : {} } 
//       }
// }

export default async function memberDetail({params}:any) {
    const slug = params.slug
        const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_HOST}:${process.env.DB_PASS}@cluster0.bqzxlqw.mongodb.net/?retryWrites=true&w=majority`)
        const db = client.db('members')
        const member = await db.collection("members").findOne({ _id: new ObjectId(slug)});
  
        const memberData = JSON.parse(JSON.stringify(member))

        revalidatePath('/members/[slug]')
    return(
        <div>
            <MemberDetailHeader member={memberData}/>
            <MemberDetailSection member={memberData}/>
        </div>
    )
}

